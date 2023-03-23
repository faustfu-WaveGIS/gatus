package handler

import (
	"github.com/TwiN/gatus/v5/config"
	static "github.com/TwiN/gatus/v5/web"
	"github.com/TwiN/health"
	"github.com/gorilla/mux"
	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promhttp"
	"io/fs"
	"net/http"
)

const RootPath = "/gatus"

func CreateRouter(cfg *config.Config) *mux.Router {
	router := mux.NewRouter()
	if cfg.Metrics {
		router.Handle(RootPath+"/metrics", promhttp.InstrumentMetricHandler(prometheus.DefaultRegisterer, promhttp.HandlerFor(prometheus.DefaultGatherer, promhttp.HandlerOpts{
			DisableCompression: true,
		}))).Methods("GET")
	}
	router.Use(GzipHandler)
	api := router.PathPrefix(RootPath + "/api").Subrouter()
	protected := api.PathPrefix("/").Subrouter()
	unprotected := api.PathPrefix("/").Subrouter()
	if cfg.Security != nil {
		if err := cfg.Security.RegisterHandlers(router); err != nil {
			panic(err)
		}
		if err := cfg.Security.ApplySecurityMiddleware(protected); err != nil {
			panic(err)
		}
	}

	// Endpoints
	unprotected.Handle("/v1/config", ConfigHandler{securityConfig: cfg.Security}).Methods("GET")
	protected.HandleFunc("/v1/endpoints/statuses", EndpointStatuses(cfg)).Methods("GET")
	protected.HandleFunc("/v1/endpoints/{key}/statuses", EndpointStatus).Methods("GET")
	unprotected.HandleFunc("/v1/endpoints/{key}/health/badge.svg", HealthBadge).Methods("GET")
	unprotected.HandleFunc("/v1/endpoints/{key}/uptimes/{duration}/badge.svg", UptimeBadge).Methods("GET")
	unprotected.HandleFunc("/v1/endpoints/{key}/response-times/{duration}/badge.svg", ResponseTimeBadge(cfg)).Methods("GET")
	unprotected.HandleFunc("/v1/endpoints/{key}/response-times/{duration}/chart.svg", ResponseTimeChart).Methods("GET")

	// Misc
	router.Handle(RootPath+"/health", health.Handler().WithJSON(true)).Methods("GET")

	// SPA
	router.HandleFunc(RootPath+"/endpoints/{name}", SinglePageApplication(cfg.UI)).Methods("GET")
	router.HandleFunc(RootPath, SinglePageApplication(cfg.UI)).Methods("GET")

	// Everything else falls back on static content
	staticFileSystem, err := fs.Sub(static.FileSystem, static.RootPath)
	if err != nil {
		panic(err)
	}
	router.PathPrefix(RootPath + "/").Handler(http.StripPrefix(RootPath+"/", http.FileServer(http.FS(staticFileSystem))))

	return router
}
