package ui

import (
	"bytes"
	"errors"
	"html/template"

	static "github.com/TwiN/gatus/v5/web"
)

var (
	ErrButtonValidationFailed = errors.New("invalid button configuration: missing required name or link")
)

// Config is the configuration for the UI of Gatus
type Config struct {
}

// GetDefaultConfig returns a Config struct with the default values
func GetDefaultConfig() *Config {
	return &Config{}
}

// ValidateAndSetDefaults validates the UI configuration and sets the default values if necessary.
func (cfg *Config) ValidateAndSetDefaults() error {
	// Validate that the template works
	t, err := template.ParseFS(static.FileSystem, static.IndexPath)
	if err != nil {
		return err
	}
	var buffer bytes.Buffer
	err = t.Execute(&buffer, cfg)
	if err != nil {
		return err
	}
	return nil
}
