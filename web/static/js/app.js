(function(){"use strict";var e={2967:function(e,t,s){s.d(t,{L:function(){return cs}});s(7727);var n=s(9963),o=s(6252),a=s(3577),r=s.p+"img/logo.svg";const i={class:"mb-2"},l={class:"flex flex-wrap"},d={class:"w-3/4 text-left my-auto"},g={class:"text-3xl xl:text-5xl lg:text-4xl font-light"},h={class:"w-1/4 flex justify-end"},u=["src"],c={key:1,src:r,alt:"Gatus",class:"object-scale-down",style:{"max-width":"100px","min-width":"50px","min-height":"50px"}},p={key:0,class:"flex flex-wrap"},m=["href"],v={key:2,class:"mx-auto max-w-md pt-12"},f=(0,o._)("img",{src:r,alt:"Gatus",class:"mx-auto",style:{"max-width":"160px","min-width":"50px","min-height":"50px"}},null,-1),w=(0,o._)("h2",{class:"mt-4 text-center text-4xl font-extrabold text-gray-800 dark:text-gray-200"}," Gatus ",-1),x={class:"py-7 px-4 rounded-sm sm:px-10"},y={key:0,class:"text-red-500 text-center mb-5"},k={class:"text-sm"},T={key:0,class:"text-red-500"},b={key:1,class:"text-red-500"},R=["href"];function _(e,t,s,n,r,_){const S=(0,o.up)("Loading"),I=(0,o.up)("router-view"),D=(0,o.up)("Tooltip"),A=(0,o.up)("Social");return(0,o.wg)(),(0,o.iD)(o.HY,null,[r.retrievedConfig?((0,o.wg)(),(0,o.iD)("div",{key:1,class:(0,a.C_)([r.config&&r.config.oidc&&!r.config.authenticated?"hidden":"","container container-xs relative mx-auto xl:rounded xl:border xl:shadow-xl xl:my-5 p-5 pb-12 xl:pb-5 text-left dark:bg-gray-800 dark:text-gray-200 dark:border-gray-500"]),id:"global"},[(0,o._)("div",i,[(0,o._)("div",l,[(0,o._)("div",d,[(0,o._)("div",g,(0,a.zw)(_.header),1)]),(0,o._)("div",h,[((0,o.wg)(),(0,o.j4)((0,o.LL)(_.link?"a":"div"),{href:_.link,target:"_blank",style:{width:"100px"}},{default:(0,o.w5)((()=>[_.logo?((0,o.wg)(),(0,o.iD)("img",{key:0,src:_.logo,alt:"Gatus",class:"object-scale-down",style:{"max-width":"100px","min-width":"50px","min-height":"50px"}},null,8,u)):((0,o.wg)(),(0,o.iD)("img",c))])),_:1},8,["href"]))])]),_.buttons?((0,o.wg)(),(0,o.iD)("div",p,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(_.buttons,(e=>((0,o.wg)(),(0,o.iD)("a",{key:e.name,href:e.link,target:"_blank",class:"px-2 py-0.5 font-medium select-none text-gray-600 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 hover:underline"},(0,a.zw)(e.name),9,m)))),128))])):(0,o.kq)("",!0)]),(0,o.Wm)(I,{onShowTooltip:_.showTooltip},null,8,["onShowTooltip"])],2)):((0,o.wg)(),(0,o.j4)(S,{key:0,class:"h-64 w-64 px-4"})),r.config&&r.config.oidc&&!r.config.authenticated?((0,o.wg)(),(0,o.iD)("div",v,[f,w,(0,o._)("div",x,[e.$route&&e.$route.query.error?((0,o.wg)(),(0,o.iD)("div",y,[(0,o._)("div",k,["access_denied"===e.$route.query.error?((0,o.wg)(),(0,o.iD)("span",T,"You do not have access to this status page")):((0,o.wg)(),(0,o.iD)("span",b,(0,a.zw)(e.$route.query.error),1))])])):(0,o.kq)("",!0),(0,o._)("div",null,[(0,o._)("a",{href:`${r.SERVER_URL}/oidc/login`,class:"max-w-lg mx-auto w-full flex justify-center py-3 px-4 border border-green-800 rounded-md shadow-lg text-sm text-white bg-green-700 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"}," Login with OIDC ",8,R)])])])):(0,o.kq)("",!0),(0,o.Wm)(D,{result:r.tooltip.result,event:r.tooltip.event},null,8,["result","event"]),(0,o.Wm)(A)],64)}const S=e=>((0,o.dD)("data-v-a4b3d200"),e=e(),(0,o.Cn)(),e),I={id:"social"},D=S((()=>(0,o._)("a",{href:"https://github.com/TwiN/gatus",target:"_blank",title:"Gatus on GitHub"},[(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 16 16",class:"hover:scale-110"},[(0,o._)("path",{fill:"gray",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})])],-1))),A=[D];function $(e,t,s,n,a,r){return(0,o.wg)(),(0,o.iD)("div",I,A)}var C={name:"Social"},P=s(3744);const E=(0,P.Z)(C,[["render",$],["__scopeId","data-v-a4b3d200"]]);var H=E;const L=(0,o._)("div",{class:"tooltip-title"},"Timestamp:",-1),U={id:"tooltip-timestamp"},W=(0,o._)("div",{class:"tooltip-title"},"Response time:",-1),M={id:"tooltip-response-time"},O=(0,o._)("div",{class:"tooltip-title"},"Conditions:",-1),j={id:"tooltip-conditions"},B=(0,o._)("br",null,null,-1),q={key:0,id:"tooltip-errors-container"},Y=(0,o._)("div",{class:"tooltip-title"},"Errors:",-1),z={id:"tooltip-errors"},N=(0,o._)("br",null,null,-1);function Z(e,t,s,n,r,i){return(0,o.wg)(),(0,o.iD)("div",{id:"tooltip",ref:"tooltip",class:(0,a.C_)(r.hidden?"invisible":""),style:(0,a.j5)("top:"+r.top+"px; left:"+r.left+"px")},[s.result?(0,o.WI)(e.$slots,"default",{key:0},(()=>[L,(0,o._)("code",U,(0,a.zw)(e.prettifyTimestamp(s.result.timestamp)),1),W,(0,o._)("code",M,(0,a.zw)((s.result.duration/1e6).toFixed(0))+"ms",1),O,(0,o._)("code",j,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.result.conditionResults,(t=>(0,o.WI)(e.$slots,"default",{key:t},(()=>[(0,o.Uk)((0,a.zw)(t.success?"✓":"X")+" ~ "+(0,a.zw)(t.condition),1),B])))),128))]),s.result.errors&&s.result.errors.length?((0,o.wg)(),(0,o.iD)("div",q,[Y,(0,o._)("code",z,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.result.errors,(t=>(0,o.WI)(e.$slots,"default",{key:t},(()=>[(0,o.Uk)(" - "+(0,a.zw)(t),1),N])))),128))])])):(0,o.kq)("",!0)])):(0,o.kq)("",!0)],6)}s(5306);const G={methods:{generatePrettyTimeAgo(e){let t=(new Date).getTime()-new Date(e).getTime();if(t<500)return"now";if(t>2592e5){let e=(t/864e5).toFixed(0);return e+" day"+("1"!==e?"s":"")+" ago"}if(t>36e5){let e=(t/36e5).toFixed(0);return e+" hour"+("1"!==e?"s":"")+" ago"}if(t>6e4){let e=(t/6e4).toFixed(0);return e+" minute"+("1"!==e?"s":"")+" ago"}let s=(t/1e3).toFixed(0);return s+" second"+("1"!==s?"s":"")+" ago"},generatePrettyTimeDifference(e,t){let s=Math.ceil((new Date(e)-new Date(t))/1e3/60);return s+(1===s?" minute":" minutes")},prettifyTimestamp(e){let t=new Date(e),s=t.getFullYear(),n=(t.getMonth()+1<10?"0":"")+(t.getMonth()+1),o=(t.getDate()<10?"0":"")+t.getDate(),a=(t.getHours()<10?"0":"")+t.getHours(),r=(t.getMinutes()<10?"0":"")+t.getMinutes(),i=(t.getSeconds()<10?"0":"")+t.getSeconds();return s+"-"+n+"-"+o+" "+a+":"+r+":"+i}}};var K={name:"Endpoints",props:{event:Event,result:Object},mixins:[G],methods:{htmlEntities(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},reposition(){if(this.event&&this.event.type)if("mouseenter"===this.event.type){let e=this.event.target.getBoundingClientRect().y+30,t=this.event.target.getBoundingClientRect().x,s=this.$refs.tooltip.getBoundingClientRect();t+window.scrollX+s.width+50>document.body.getBoundingClientRect().width&&(t=this.event.target.getBoundingClientRect().x-s.width+this.event.target.getBoundingClientRect().width,t<0&&(t+=-t)),e+window.scrollY+s.height+50>document.body.getBoundingClientRect().height&&e>=0&&(e=this.event.target.getBoundingClientRect().y-(s.height+10),e<0&&(e=this.event.target.getBoundingClientRect().y+30)),this.top=e,this.left=t}else"mouseleave"===this.event.type&&(this.hidden=!0)}},watch:{event:function(e){e&&e.type&&("mouseenter"===e.type?this.hidden=!1:"mouseleave"===e.type&&(this.hidden=!0))}},updated(){this.reposition()},created(){this.reposition()},data(){return{hidden:!0,top:0,left:0}}};const F=(0,P.Z)(K,[["render",Z]]);var V=F;const J={class:"flex justify-center items-center mx-auto"},X=(0,o._)("img",{class:(0,a.C_)("animate-spin opacity-60 rounded-full"),src:r,alt:"Gatus logo"},null,-1),Q=[X];function ee(e,t,s,n,a,r){return(0,o.wg)(),(0,o.iD)("div",J,Q)}var te={};const se=(0,P.Z)(te,[["render",ee]]);var ne=se,oe={name:"App",components:{Loading:ne,Social:H,Tooltip:V},methods:{fetchConfig(){fetch(`${cs}/api/v1/config`,{credentials:"include"}).then((e=>{this.retrievedConfig=!0,200===e.status&&e.json().then((e=>{this.config=e}))}))},showTooltip(e,t){this.tooltip={result:e,event:t}}},computed:{logo(){return window.config&&window.config.logo&&"{{ .Logo }}"!==window.config.logo?window.config.logo:""},header(){return window.config&&window.config.header&&"{{ .Header }}"!==window.config.header?window.config.header:"Health Status"},link(){return window.config&&window.config.link&&"{{ .Link }}"!==window.config.link?window.config.link:null},buttons(){return window.config&&window.config.buttons?window.config.buttons:[]}},data(){return{error:"",retrievedConfig:!1,config:{oidc:!1,authenticated:!0},tooltip:{},SERVER_URL:cs}},created(){this.fetchConfig()}};const ae=(0,P.Z)(oe,[["render",_]]);var re=ae,ie=s(2119);function le(e,t,s,n,a,r){const i=(0,o.up)("Loading"),l=(0,o.up)("Endpoints"),d=(0,o.up)("Pagination"),g=(0,o.up)("Settings");return(0,o.wg)(),(0,o.iD)(o.HY,null,[a.retrievedData?(0,o.WI)(e.$slots,"default",{key:1},(()=>[(0,o.Wm)(l,{endpointStatuses:a.endpointStatuses,showStatusOnHover:!0,onShowTooltip:r.showTooltip,onToggleShowAverageResponseTime:r.toggleShowAverageResponseTime,showAverageResponseTime:a.showAverageResponseTime},null,8,["endpointStatuses","onShowTooltip","onToggleShowAverageResponseTime","showAverageResponseTime"]),(0,o.Wm)(d,{onPage:r.changePage},null,8,["onPage"])])):((0,o.wg)(),(0,o.j4)(i,{key:0,class:"h-64 w-64 px-4 my-24"})),(0,o.Wm)(g,{onRefreshData:r.fetchData},null,8,["onRefreshData"])],64)}s(3948);const de={id:"settings",class:"flex bg-gray-200 border-gray-300 rounded border shadow dark:text-gray-200 dark:bg-gray-800 dark:border-gray-500"},ge={class:"text-xs text-gray-600 rounded-xl py-1.5 px-1.5 dark:text-gray-200"},he=["selected"],ue=["selected"],ce=["selected"],pe=["selected"],me=["selected"],ve=["selected"];function fe(e,t,s,n,a,r){const i=(0,o.up)("ArrowPathIcon"),l=(0,o.up)("SunIcon"),d=(0,o.up)("MoonIcon");return(0,o.wg)(),(0,o.iD)("div",de,[(0,o._)("div",ge,[(0,o.Wm)(i,{class:"w-3"})]),(0,o._)("select",{class:"text-center text-gray-500 text-xs dark:text-gray-200 dark:bg-gray-800 border-r border-l border-gray-300 dark:border-gray-500",id:"refresh-rate",ref:"refreshInterval",onChange:t[0]||(t[0]=(...e)=>r.handleChangeRefreshInterval&&r.handleChangeRefreshInterval(...e))},[(0,o._)("option",{value:"10",selected:10===a.refreshInterval},"10s",8,he),(0,o._)("option",{value:"30",selected:30===a.refreshInterval},"30s",8,ue),(0,o._)("option",{value:"60",selected:60===a.refreshInterval},"1m",8,ce),(0,o._)("option",{value:"120",selected:120===a.refreshInterval},"2m",8,pe),(0,o._)("option",{value:"300",selected:300===a.refreshInterval},"5m",8,me),(0,o._)("option",{value:"600",selected:600===a.refreshInterval},"10m",8,ve)],544),(0,o._)("button",{onClick:t[1]||(t[1]=(...e)=>r.toggleDarkMode&&r.toggleDarkMode(...e)),class:"text-xs p-1"},[a.darkMode?(0,o.WI)(e.$slots,"default",{key:0},(()=>[(0,o.Wm)(l,{class:"w-4"})])):(0,o.WI)(e.$slots,"default",{key:1},(()=>[(0,o.Wm)(d,{class:"w-4 text-gray-500"})]))])])}var we=s(6758),xe=s(4913),ye=s(7886),ke={name:"Settings",components:{ArrowPathIcon:ye.Z,MoonIcon:we.Z,SunIcon:xe.Z},props:{},methods:{setRefreshInterval(e){sessionStorage.setItem("gatus:refresh-interval",e);let t=this;this.refreshIntervalHandler=setInterval((function(){t.refreshData()}),1e3*e)},refreshData(){this.$emit("refreshData")},handleChangeRefreshInterval(){this.refreshData(),clearInterval(this.refreshIntervalHandler),this.setRefreshInterval(this.$refs.refreshInterval.value)},toggleDarkMode(){"dark"===localStorage.theme?localStorage.theme="light":localStorage.theme="dark",this.applyTheme()},applyTheme(){"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(this.darkMode=!0,document.documentElement.classList.add("dark")):(this.darkMode=!1,document.documentElement.classList.remove("dark"))}},created(){10!==this.refreshInterval&&30!==this.refreshInterval&&60!==this.refreshInterval&&120!==this.refreshInterval&&300!==this.refreshInterval&&600!==this.refreshInterval&&(this.refreshInterval=300),this.setRefreshInterval(this.refreshInterval),this.applyTheme()},unmounted(){clearInterval(this.refreshIntervalHandler)},data(){return{refreshInterval:sessionStorage.getItem("gatus:refresh-interval")<10?300:parseInt(sessionStorage.getItem("gatus:refresh-interval")),refreshIntervalHandler:0,darkMode:!0}}};const Te=(0,P.Z)(ke,[["render",fe]]);var be=Te;const Re={id:"results"};function _e(e,t,s,n,a,r){const i=(0,o.up)("EndpointGroup");return(0,o.wg)(),(0,o.iD)("div",Re,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.endpointGroups,(t=>(0,o.WI)(e.$slots,"default",{key:t},(()=>[(0,o.Wm)(i,{endpoints:t.endpoints,name:t.name,onShowTooltip:r.showTooltip,onToggleShowAverageResponseTime:r.toggleShowAverageResponseTime,showAverageResponseTime:s.showAverageResponseTime},null,8,["endpoints","name","onShowTooltip","onToggleShowAverageResponseTime","showAverageResponseTime"])])))),128))])}const Se={class:"font-mono text-gray-400 text-xl font-medium pb-2 px-3 dark:text-gray-200 dark:hover:text-gray-500 dark:border-gray-500"},Ie={class:"endpoint-group-arrow mr-2"},De={key:0,class:"float-right text-green-600 w-7 hover:scale-110",title:"Operational"},Ae={key:1,class:"float-right text-yellow-500 text-sm w-7 hover:scale-110",title:"Partial Outage"};function $e(e,t,s,n,r,i){const l=(0,o.up)("CheckCircleIcon"),d=(0,o.up)("ExclamationCircleIcon"),g=(0,o.up)("Endpoint");return(0,o.wg)(),(0,o.iD)("div",{class:(0,a.C_)(0===s.endpoints.length?"mt-3":"mt-4")},["undefined"!==s.name?(0,o.WI)(e.$slots,"default",{key:0},(()=>[(0,o._)("div",{class:"endpoint-group pt-2 border dark:bg-gray-800 dark:border-gray-500",onClick:t[0]||(t[0]=(...e)=>i.toggleGroup&&i.toggleGroup(...e))},[(0,o._)("h5",Se,[(0,o._)("span",Ie,(0,a.zw)(r.collapsed?"▼":"▲"),1),(0,o.Uk)(" "+(0,a.zw)(s.name)+" ",1),r.healthy?((0,o.wg)(),(0,o.iD)("span",De,[(0,o.Wm)(l)])):((0,o.wg)(),(0,o.iD)("span",Ae,[(0,o.Wm)(d)]))])])])):(0,o.kq)("",!0),r.collapsed?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",{key:1,class:(0,a.C_)("undefined"===s.name?"":"endpoint-group-content")},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.endpoints,((t,n)=>(0,o.WI)(e.$slots,"default",{key:n},(()=>[(0,o.Wm)(g,{data:t,maximumNumberOfResults:20,onShowTooltip:i.showTooltip,onToggleShowAverageResponseTime:i.toggleShowAverageResponseTime,showAverageResponseTime:s.showAverageResponseTime},null,8,["data","onShowTooltip","onToggleShowAverageResponseTime","showAverageResponseTime"])])))),128))],2))],2)}const Ce={key:0,class:"endpoint px-3 py-3 border-l border-r border-t rounded-none hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-500"},Pe={class:"flex flex-wrap mb-2"},Ee={class:"w-3/4"},He={key:0,class:"text-gray-500 font-light"},Le={class:"w-1/4 text-right"},Ue=["title"],We={class:"status-over-time flex flex-row"},Me=["onMouseenter"],Oe=["onMouseenter"],je={class:"flex flex-wrap status-time-ago"},Be={class:"w-1/2"},qe={class:"w-1/2 text-right"},Ye=(0,o._)("div",{class:"w-1/2"},"   ",-1);function ze(e,t,s,n,r,i){const l=(0,o.up)("router-link");return s.data?((0,o.wg)(),(0,o.iD)("div",Ce,[(0,o._)("div",Pe,[(0,o._)("div",Ee,[(0,o.Wm)(l,{to:i.generatePath(),class:"font-bold hover:text-blue-800 hover:underline dark:hover:text-blue-400",title:"View detailed endpoint health"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(s.data.name),1)])),_:1},8,["to"]),s.data.results&&s.data.results.length&&s.data.results[s.data.results.length-1].hostname?((0,o.wg)(),(0,o.iD)("span",He," | "+(0,a.zw)(s.data.results[s.data.results.length-1].hostname),1)):(0,o.kq)("",!0)]),(0,o._)("div",Le,[s.data.results&&s.data.results.length?((0,o.wg)(),(0,o.iD)("span",{key:0,class:"font-light overflow-x-hidden cursor-pointer select-none hover:text-gray-500",onClick:t[0]||(t[0]=(...e)=>i.toggleShowAverageResponseTime&&i.toggleShowAverageResponseTime(...e)),title:s.showAverageResponseTime?"Average response time":"Minimum and maximum response time"},[s.showAverageResponseTime?(0,o.WI)(e.$slots,"default",{key:0},(()=>[(0,o.Uk)(" ~"+(0,a.zw)(r.averageResponseTime)+"ms ",1)])):(0,o.WI)(e.$slots,"default",{key:1},(()=>[(0,o.Uk)((0,a.zw)(r.minResponseTime===r.maxResponseTime?r.minResponseTime:r.minResponseTime+"-"+r.maxResponseTime)+"ms ",1)]))],8,Ue)):(0,o.kq)("",!0)])]),(0,o._)("div",null,[(0,o._)("div",We,[s.data.results&&s.data.results.length?(0,o.WI)(e.$slots,"default",{key:0},(()=>[s.data.results.length<s.maximumNumberOfResults?(0,o.WI)(e.$slots,"default",{key:0},(()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.maximumNumberOfResults-s.data.results.length,(e=>((0,o.wg)(),(0,o.iD)("span",{key:e,class:"status rounded border border-dashed border-gray-400"}," ")))),128))])):(0,o.kq)("",!0),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.data.results,(s=>(0,o.WI)(e.$slots,"default",{key:s},(()=>[s.success?((0,o.wg)(),(0,o.iD)("span",{key:0,class:"status status-success rounded bg-success",onMouseenter:e=>i.showTooltip(s,e),onMouseleave:t[1]||(t[1]=e=>i.showTooltip(null,e))},null,40,Me)):((0,o.wg)(),(0,o.iD)("span",{key:1,class:"status status-failure rounded bg-red-600",onMouseenter:e=>i.showTooltip(s,e),onMouseleave:t[2]||(t[2]=e=>i.showTooltip(null,e))},null,40,Oe))])))),128))])):(0,o.WI)(e.$slots,"default",{key:1},(()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.maximumNumberOfResults,(e=>((0,o.wg)(),(0,o.iD)("span",{key:e,class:"status rounded border border-dashed border-gray-400"}," ")))),128))]))])]),(0,o._)("div",je,[s.data.results&&s.data.results.length?(0,o.WI)(e.$slots,"default",{key:0},(()=>[(0,o._)("div",Be,(0,a.zw)(e.generatePrettyTimeAgo(s.data.results[0].timestamp)),1),(0,o._)("div",qe,(0,a.zw)(e.generatePrettyTimeAgo(s.data.results[s.data.results.length-1].timestamp)),1)])):(0,o.WI)(e.$slots,"default",{key:1},(()=>[Ye]))])])):(0,o.kq)("",!0)}var Ne={name:"Endpoint",props:{maximumNumberOfResults:Number,data:Object,showAverageResponseTime:Boolean},emits:["showTooltip","toggleShowAverageResponseTime"],mixins:[G],methods:{updateMinAndMaxResponseTimes(){let e=null,t=null,s=0;for(let n in this.data.results){const o=parseInt((this.data.results[n].duration/1e6).toFixed(0));s+=o,(null==e||e>o)&&(e=o),(null==t||t<o)&&(t=o)}this.minResponseTime!==e&&(this.minResponseTime=e),this.maxResponseTime!==t&&(this.maxResponseTime=t),this.data.results&&this.data.results.length&&(this.averageResponseTime=(s/this.data.results.length).toFixed(0))},generatePath(){return this.data?`/endpoints/${this.data.key}`:"/"},showTooltip(e,t){this.$emit("showTooltip",e,t)},toggleShowAverageResponseTime(){this.$emit("toggleShowAverageResponseTime")}},watch:{data:function(){this.updateMinAndMaxResponseTimes()}},created(){this.updateMinAndMaxResponseTimes()},data(){return{minResponseTime:0,maxResponseTime:0,averageResponseTime:0}}};const Ze=(0,P.Z)(Ne,[["render",ze]]);var Ge=Ze,Ke=s(1818),Fe=s(2973),Ve={name:"EndpointGroup",components:{Endpoint:Ge,CheckCircleIcon:Ke.Z,ExclamationCircleIcon:Fe.Z},props:{name:String,endpoints:Array,showAverageResponseTime:Boolean},emits:["showTooltip","toggleShowAverageResponseTime"],methods:{healthCheck(){if(this.endpoints)for(let e in this.endpoints)if(this.endpoints[e].results&&this.endpoints[e].results.length>0&&!this.endpoints[e].results[this.endpoints[e].results.length-1].success)return void(this.healthy&&(this.healthy=!1));this.healthy||(this.healthy=!0)},toggleGroup(){this.collapsed=!this.collapsed,sessionStorage.setItem(`gatus:endpoint-group:${this.name}:collapsed`,this.collapsed)},showTooltip(e,t){this.$emit("showTooltip",e,t)},toggleShowAverageResponseTime(){this.$emit("toggleShowAverageResponseTime")}},watch:{endpoints:function(){this.healthCheck()}},created(){this.healthCheck()},data(){return{healthy:!0,collapsed:"true"===sessionStorage.getItem(`gatus:endpoint-group:${this.name}:collapsed`)}}};const Je=(0,P.Z)(Ve,[["render",$e]]);var Xe=Je,Qe={name:"Endpoints",components:{EndpointGroup:Xe},props:{showStatusOnHover:Boolean,endpointStatuses:Object,showAverageResponseTime:Boolean},emits:["showTooltip","toggleShowAverageResponseTime"],methods:{process(){let e={};for(let s in this.endpointStatuses){let t=this.endpointStatuses[s];e[t.group]&&0!==e[t.group].length||(e[t.group]=[]),e[t.group].push(t)}let t=[];for(let s in e)"undefined"!==s&&t.push({name:s,endpoints:e[s]});e["undefined"]&&t.push({name:"undefined",endpoints:e["undefined"]}),this.endpointGroups=t},showTooltip(e,t){this.$emit("showTooltip",e,t)},toggleShowAverageResponseTime(){this.$emit("toggleShowAverageResponseTime")}},watch:{endpointStatuses:function(){this.process()}},data(){return{userClickedStatus:!1,endpointGroups:[]}}};const et=(0,P.Z)(Qe,[["render",_e]]);var tt=et;const st={class:"mt-3 flex"},nt={class:"flex-1"},ot={class:"flex-1 text-right"};function at(e,t,s,n,a,r){return(0,o.wg)(),(0,o.iD)("div",st,[(0,o._)("div",nt,[a.currentPage<5?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:t[0]||(t[0]=(...e)=>r.nextPage&&r.nextPage(...e)),class:"bg-gray-100 hover:bg-gray-200 text-gray-500 border border-gray-200 px-2 rounded font-mono dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500 dark:hover:bg-gray-600"},"<")):(0,o.kq)("",!0)]),(0,o._)("div",ot,[a.currentPage>1?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:t[1]||(t[1]=(...e)=>r.previousPage&&r.previousPage(...e)),class:"bg-gray-100 hover:bg-gray-200 text-gray-500 border border-gray-200 px-2 rounded font-mono dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500 dark:hover:bg-gray-600"},">")):(0,o.kq)("",!0)])])}var rt={name:"Pagination",components:{},emits:["page"],methods:{nextPage(){this.currentPage++,this.$emit("page",this.currentPage)},previousPage(){this.currentPage--,this.$emit("page",this.currentPage)}},data(){return{currentPage:1}}};const it=(0,P.Z)(rt,[["render",at]]);var lt=it,dt={name:"Home",components:{Loading:ne,Pagination:lt,Endpoints:tt,Settings:be},emits:["showTooltip","toggleShowAverageResponseTime"],methods:{fetchData(){fetch(`${cs}/api/v1/endpoints/statuses?page=${this.currentPage}`,{credentials:"include"}).then((e=>{this.retrievedData=!0,200===e.status?e.json().then((e=>{JSON.stringify(this.endpointStatuses)!==JSON.stringify(e)&&(this.endpointStatuses=e)})):e.text().then((e=>{console.log(`[Home][fetchData] Error: ${e}`)}))}))},changePage(e){this.currentPage=e,this.fetchData()},showTooltip(e,t){this.$emit("showTooltip",e,t)},toggleShowAverageResponseTime(){this.showAverageResponseTime=!this.showAverageResponseTime}},data(){return{endpointStatuses:[],currentPage:1,showAverageResponseTime:!0,retrievedData:!1}},created(){this.fetchData()}};const gt=(0,P.Z)(dt,[["render",le]]);var ht=gt;const ut=e=>((0,o.dD)("data-v-dd19f9b4"),e=e(),(0,o.Cn)(),e),ct=(0,o.Uk)(" ← "),pt=ut((()=>(0,o._)("h1",{class:"text-xl xl:text-3xl font-mono text-gray-400"},"RECENT CHECKS",-1))),mt=ut((()=>(0,o._)("hr",{class:"mb-4"},null,-1))),vt={key:1,class:"mt-12"},ft=ut((()=>(0,o._)("h1",{class:"text-xl xl:text-3xl font-mono text-gray-400"},"UPTIME",-1))),wt=ut((()=>(0,o._)("hr",null,null,-1))),xt={class:"flex space-x-4 text-center text-2xl mt-6 relative bottom-2 mb-10"},yt={class:"flex-1"},kt=ut((()=>(0,o._)("h2",{class:"text-sm text-gray-400 mb-1"},"Last 7 days",-1))),Tt=["src"],bt={class:"flex-1"},Rt=ut((()=>(0,o._)("h2",{class:"text-sm text-gray-400 mb-1"},"Last 24 hours",-1))),_t=["src"],St={class:"flex-1"},It=ut((()=>(0,o._)("h2",{class:"text-sm text-gray-400 mb-1"},"Last hour",-1))),Dt=["src"],At={key:2,class:"mt-12"},$t=ut((()=>(0,o._)("h1",{class:"text-xl xl:text-3xl font-mono text-gray-400"},"RESPONSE TIME",-1))),Ct=ut((()=>(0,o._)("hr",null,null,-1))),Pt=["src"],Et={class:"flex space-x-4 text-center text-2xl mt-6 relative bottom-2 mb-10"},Ht={class:"flex-1"},Lt=ut((()=>(0,o._)("h2",{class:"text-sm text-gray-400 mb-1"},"Last 7 days",-1))),Ut=["src"],Wt={class:"flex-1"},Mt=ut((()=>(0,o._)("h2",{class:"text-sm text-gray-400 mb-1"},"Last 24 hours",-1))),Ot=["src"],jt={class:"flex-1"},Bt=ut((()=>(0,o._)("h2",{class:"text-sm text-gray-400 mb-1"},"Last hour",-1))),qt=["src"],Yt={key:3},zt=ut((()=>(0,o._)("h1",{class:"text-xl xl:text-3xl font-mono text-gray-400 mt-4"},"CURRENT HEALTH",-1))),Nt=ut((()=>(0,o._)("hr",null,null,-1))),Zt={class:"flex space-x-4 text-center text-2xl mt-6 relative bottom-2 mb-10"},Gt={class:"flex-1"},Kt=["src"],Ft={key:4},Vt=ut((()=>(0,o._)("h1",{class:"text-xl xl:text-3xl font-mono text-gray-400 mt-4"},"EVENTS",-1))),Jt=ut((()=>(0,o._)("hr",null,null,-1))),Xt={role:"list",class:"px-0 xl:px-24 divide-y divide-gray-200 dark:divide-gray-600"},Qt={class:"text-sm sm:text-lg"},es={class:"flex mt-1 text-xs sm:text-sm text-gray-400"},ts={class:"flex-2 text-left pl-12"},ss={class:"flex-1 text-right"};function ns(e,t,s,n,r,i){const l=(0,o.up)("router-link"),d=(0,o.up)("Endpoint"),g=(0,o.up)("Pagination"),h=(0,o.up)("ArrowUpCircleIcon"),u=(0,o.up)("ArrowDownCircleIcon"),c=(0,o.up)("PlayCircleIcon"),p=(0,o.up)("Settings");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l,{to:"../",class:"absolute top-2 left-2 inline-block px-2 pb-0.5 text-lg text-black bg-gray-100 rounded hover:bg-gray-200 focus:outline-none border border-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500 dark:hover:bg-gray-600"},{default:(0,o.w5)((()=>[ct])),_:1}),(0,o._)("div",null,[r.endpointStatus?(0,o.WI)(e.$slots,"default",{key:0},(()=>[pt,mt,(0,o.Wm)(d,{data:r.endpointStatus,maximumNumberOfResults:20,onShowTooltip:i.showTooltip,onToggleShowAverageResponseTime:i.toggleShowAverageResponseTime,showAverageResponseTime:r.showAverageResponseTime},null,8,["data","onShowTooltip","onToggleShowAverageResponseTime","showAverageResponseTime"]),(0,o.Wm)(g,{onPage:i.changePage},null,8,["onPage"])]),!0):(0,o.kq)("",!0),r.endpointStatus&&r.endpointStatus.key?((0,o.wg)(),(0,o.iD)("div",vt,[ft,wt,(0,o._)("div",xt,[(0,o._)("div",yt,[kt,(0,o._)("img",{src:i.generateUptimeBadgeImageURL("7d"),alt:"7d uptime badge",class:"mx-auto"},null,8,Tt)]),(0,o._)("div",bt,[Rt,(0,o._)("img",{src:i.generateUptimeBadgeImageURL("24h"),alt:"24h uptime badge",class:"mx-auto"},null,8,_t)]),(0,o._)("div",St,[It,(0,o._)("img",{src:i.generateUptimeBadgeImageURL("1h"),alt:"1h uptime badge",class:"mx-auto"},null,8,Dt)])])])):(0,o.kq)("",!0),r.endpointStatus&&r.endpointStatus.key?((0,o.wg)(),(0,o.iD)("div",At,[$t,Ct,(0,o._)("img",{src:i.generateResponseTimeChartImageURL(),alt:"response time chart",class:"mt-6"},null,8,Pt),(0,o._)("div",Et,[(0,o._)("div",Ht,[Lt,(0,o._)("img",{src:i.generateResponseTimeBadgeImageURL("7d"),alt:"7d response time badge",class:"mx-auto mt-2"},null,8,Ut)]),(0,o._)("div",Wt,[Mt,(0,o._)("img",{src:i.generateResponseTimeBadgeImageURL("24h"),alt:"24h response time badge",class:"mx-auto mt-2"},null,8,Ot)]),(0,o._)("div",jt,[Bt,(0,o._)("img",{src:i.generateResponseTimeBadgeImageURL("1h"),alt:"1h response time badge",class:"mx-auto mt-2"},null,8,qt)])])])):(0,o.kq)("",!0),r.endpointStatus&&r.endpointStatus.key?((0,o.wg)(),(0,o.iD)("div",Yt,[zt,Nt,(0,o._)("div",Zt,[(0,o._)("div",Gt,[(0,o._)("img",{src:i.generateHealthBadgeImageURL(),alt:"health badge",class:"mx-auto"},null,8,Kt)])])])):(0,o.kq)("",!0),r.endpointStatus&&r.endpointStatus.key?((0,o.wg)(),(0,o.iD)("div",Ft,[Vt,Jt,(0,o._)("ul",Xt,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.events,(t=>((0,o.wg)(),(0,o.iD)("li",{key:t,class:"p-3 my-4"},[(0,o._)("h2",Qt,["HEALTHY"===t.type?((0,o.wg)(),(0,o.j4)(h,{key:0,class:"w-8 inline mr-2 text-green-600"})):"UNHEALTHY"===t.type?((0,o.wg)(),(0,o.j4)(u,{key:1,class:"w-8 inline mr-2 text-red-500"})):"START"===t.type?((0,o.wg)(),(0,o.j4)(c,{key:2,class:"w-8 inline mr-2 text-gray-400 dark:text-gray-100"})):(0,o.kq)("",!0),(0,o.Uk)(" "+(0,a.zw)(t.fancyText),1)]),(0,o._)("div",es,[(0,o._)("div",ts,(0,a.zw)(e.prettifyTimestamp(t.timestamp)),1),(0,o._)("div",ss,(0,a.zw)(t.fancyTimeAgo),1)])])))),128))])])):(0,o.kq)("",!0)]),(0,o.Wm)(p,{onRefreshData:i.fetchData},null,8,["onRefreshData"])],64)}var os=s(9505),as=s(7163),rs=s(8585),is={name:"Details",components:{Pagination:lt,Endpoint:Ge,Settings:be,ArrowDownCircleIcon:os.Z,ArrowUpCircleIcon:as.Z,PlayCircleIcon:rs.Z},emits:["showTooltip"],mixins:[G],methods:{fetchData(){fetch(`${this.serverUrl}/api/v1/endpoints/${this.$route.params.key}/statuses?page=${this.currentPage}`,{credentials:"include"}).then((e=>{200===e.status?e.json().then((e=>{if(JSON.stringify(this.endpointStatus)!==JSON.stringify(e)){this.endpointStatus=e,this.uptime=e.uptime;let t=[];for(let s=e.events.length-1;s>=0;s--){let n=e.events[s];if(s===e.events.length-1)"UNHEALTHY"===n.type?n.fancyText="Endpoint is unhealthy":"HEALTHY"===n.type?n.fancyText="Endpoint is healthy":"START"===n.type&&(n.fancyText="Monitoring started");else{let t=e.events[s+1];"HEALTHY"===n.type?n.fancyText="Endpoint became healthy":"UNHEALTHY"===n.type?n.fancyText=t?"Endpoint was unhealthy for "+this.generatePrettyTimeDifference(t.timestamp,n.timestamp):"Endpoint became unhealthy":"START"===n.type&&(n.fancyText="Monitoring started")}n.fancyTimeAgo=this.generatePrettyTimeAgo(n.timestamp),t.push(n)}this.events=t}})):e.text().then((e=>{console.log(`[Details][fetchData] Error: ${e}`)}))}))},generateHealthBadgeImageURL(){return`${this.serverUrl}/api/v1/endpoints/${this.endpointStatus.key}/health/badge.svg`},generateUptimeBadgeImageURL(e){return`${this.serverUrl}/api/v1/endpoints/${this.endpointStatus.key}/uptimes/${e}/badge.svg`},generateResponseTimeBadgeImageURL(e){return`${this.serverUrl}/api/v1/endpoints/${this.endpointStatus.key}/response-times/${e}/badge.svg`},generateResponseTimeChartImageURL(){return`${this.serverUrl}/api/v1/endpoints/${this.endpointStatus.key}/response-times/24h/chart.svg`},changePage(e){this.currentPage=e,this.fetchData()},showTooltip(e,t){this.$emit("showTooltip",e,t)},toggleShowAverageResponseTime(){this.showAverageResponseTime=!this.showAverageResponseTime}},data(){return{endpointStatus:{},uptime:{},events:[],hourlyAverageResponseTime:{},serverUrl:"."===cs?"..":cs,currentPage:1,showAverageResponseTime:!0,chartLabels:[],chartValues:[]}},created(){this.fetchData()}};const ls=(0,P.Z)(is,[["render",ns],["__scopeId","data-v-dd19f9b4"]]);var ds=ls;const gs=[{path:"/",name:"Home",component:ht},{path:"/endpoints/:key",name:"Details",component:ds}],hs=(0,ie.p7)({history:(0,ie.PO)("/gatus/"),routes:gs});var us=hs;const cs="/gatus";(0,n.ri)(re).use(us).mount("#app")}},t={};function s(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,s),a.exports}s.m=e,function(){var e=[];s.O=function(t,n,o,a){if(!n){var r=1/0;for(g=0;g<e.length;g++){n=e[g][0],o=e[g][1],a=e[g][2];for(var i=!0,l=0;l<n.length;l++)(!1&a||r>=a)&&Object.keys(s.O).every((function(e){return s.O[e](n[l])}))?n.splice(l--,1):(i=!1,a<r&&(r=a));if(i){e.splice(g--,1);var d=o();void 0!==d&&(t=d)}}return t}a=a||0;for(var g=e.length;g>0&&e[g-1][2]>a;g--)e[g]=e[g-1];e[g]=[n,o,a]}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.p="/gatus/"}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,r=n[0],i=n[1],l=n[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(l)var g=l(s)}for(t&&t(n);d<r.length;d++)a=r[d],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(g)},n=self["webpackChunkgatus"]=self["webpackChunkgatus"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(2967)}));n=s.O(n)})();