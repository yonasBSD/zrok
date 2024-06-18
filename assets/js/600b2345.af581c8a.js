"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4900],{169:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=n(5893),s=n(1151);const a={sidebar_position:40},r="Configuring Limits",l={id:"guides/self-hosting/metrics-and-limits/configuring-limits",title:"Configuring Limits",description:"This guide is current as of zrok version v0.4.31.",source:"@site/../docs/guides/self-hosting/metrics-and-limits/configuring-limits.md",sourceDirName:"guides/self-hosting/metrics-and-limits",slug:"/guides/self-hosting/metrics-and-limits/configuring-limits",permalink:"/docs/guides/self-hosting/metrics-and-limits/configuring-limits",draft:!1,unlisted:!1,editUrl:"https://github.com/openziti/zrok/blob/main/docs/../docs/guides/self-hosting/metrics-and-limits/configuring-limits.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Configuring Metrics",permalink:"/docs/guides/self-hosting/metrics-and-limits/configuring-metrics"},next:{title:"OAuth",permalink:"/docs/category/oauth"}},o={},c=[{value:"Understanding the zrok Limits Agent",id:"understanding-the-zrok-limits-agent",level:2},{value:"Types of Limits",id:"types-of-limits",level:3},{value:"The Global Configuration",id:"the-global-configuration",level:2},{value:"Global Resouce Count Limits",id:"global-resouce-count-limits",level:3},{value:"Global Bandwidth Limits",id:"global-bandwidth-limits",level:3},{value:"Limit Classes",id:"limit-classes",level:2},{value:"Unscoped Resource Count Classes",id:"unscoped-resource-count-classes",level:3},{value:"Unscoped Bandwidth Classes",id:"unscoped-bandwidth-classes",level:3},{value:"Scoped Classes",id:"scoped-classes",level:3},{value:"Limit Actions",id:"limit-actions",level:2},{value:"Unlimited Accounts",id:"unlimited-accounts",level:2},{value:"Experimental Limits Locking",id:"experimental-limits-locking",level:2},{value:"Caveats",id:"caveats",level:2},{value:"Aggregate Bandwidth",id:"aggregate-bandwidth",level:3},{value:"Administration Through SQL",id:"administration-through-sql",level:3},{value:"Performance",id:"performance",level:3}];function d(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"configuring-limits",children:"Configuring Limits"}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["This guide is current as of zrok version ",(0,t.jsx)(i.code,{children:"v0.4.31"}),"."]})}),"\n",(0,t.jsx)(i.admonition,{type:"warning",children:(0,t.jsxs)(i.p,{children:["If you have not yet configured ",(0,t.jsx)(i.a,{href:"/docs/guides/self-hosting/metrics-and-limits/configuring-metrics",children:"metrics"}),", please visit the ",(0,t.jsx)(i.a,{href:"/docs/guides/self-hosting/metrics-and-limits/configuring-metrics",children:"metrics guide"})," first before working through the limits configuration."]})}),"\n",(0,t.jsx)(i.h2,{id:"understanding-the-zrok-limits-agent",children:"Understanding the zrok Limits Agent"}),"\n",(0,t.jsx)(i.p,{children:"The limits agent is a component of the zrok controller. It can be enabled and configured through the zrok controller configuration."}),"\n",(0,t.jsx)(i.p,{children:"The limits agent is responsible for controlling the number of resources in use (environments, shares, etc.) and also for ensuring that accounts are held below the configured data transfer bandwidth thresholds. The limits agent exists to manage resource consumption for larger, multi-user zrok installations."}),"\n",(0,t.jsx)(i.h3,{id:"types-of-limits",children:"Types of Limits"}),"\n",(0,t.jsxs)(i.p,{children:["Limits can be specified that control the number of environments, shares, reserved shares, unique names, and frontends per-share that can be created by an account. Limits that control the allowed number of resources are called ",(0,t.jsx)(i.em,{children:"resource count limits"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["Limits can be specified to control the amount of data that can be transferred within a time period. Limits that control the amount of data that can be transferred are called ",(0,t.jsx)(i.em,{children:"bandwidth limits"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["zrok limits can be specified ",(0,t.jsx)(i.em,{children:"globally"}),", applying to all users in a service instance. Limit ",(0,t.jsx)(i.em,{children:"classes"})," can be created to provide additional levels of resource allocation. Limit classes can then be ",(0,t.jsx)(i.em,{children:"applied"})," to multiple accounts, to alter their limit allocation beyond what's configured in the global configuration."]}),"\n",(0,t.jsx)(i.h2,{id:"the-global-configuration",children:"The Global Configuration"}),"\n",(0,t.jsxs)(i.p,{children:["The reference configuration for the zrok controller (found at ",(0,t.jsx)(i.a,{href:"https://github.com/openziti/zrok/blob/main/etc/ctrl.yml",children:(0,t.jsx)(i.code,{children:"etc/ctrl.yaml"})})," in the ",(0,t.jsx)(i.a,{href:"https://github.com/openziti/zrok",children:"repository"}),") contains the global limits configuration, which looks like this:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yaml",children:"# Service instance limits global configuration.\n#\n# See `docs/guides/metrics-and-limits/configuring-limits.md` for details.\n#\nlimits:\n  environments:     -1\n  shares:           -1\n  reserved_shares:  -1\n  unique_names:     -1\n  share_frontends:  -1\n  bandwidth:\n    period:         5m\n    warning:\n      rx:           -1\n      tx:           -1\n      total:        7242880\n    limit:\n      rx:           -1\n      tx:           -1\n      total:        10485760\n  enforcing:        false\n  cycle:            5m\n"})}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["A value of ",(0,t.jsx)(i.code,{children:"-1"})," appearing in the limits configuration mean the value is ",(0,t.jsx)(i.em,{children:"unlimited"}),"."]})}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"enforcing"})," boolean specifies whether or not limits are enabled in the service instance. By default, limits is disabled. No matter what else is configured in this stanza, if ",(0,t.jsx)(i.code,{children:"enforcing"})," is set to ",(0,t.jsx)(i.code,{children:"false"}),", there will be no limits placed on any account in the service instance."]}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"cycle"}),' value controls how frequently the limits agent will evaluate enforced limits. When a user exceeds a limit and has their shares disabled, the limits agent will evaluate their bandwidth usage on this interval looking to "relax" the limit once their usage falls below the threshold.']}),"\n",(0,t.jsx)(i.h3,{id:"global-resouce-count-limits",children:"Global Resouce Count Limits"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"environments"}),", ",(0,t.jsx)(i.code,{children:"shares"}),", ",(0,t.jsx)(i.code,{children:"reserved_shares"}),", ",(0,t.jsx)(i.code,{children:"unique_names"}),", and ",(0,t.jsx)(i.code,{children:"share_frontends"})," specify the resource count limits, globally for the service instance."]}),"\n",(0,t.jsx)(i.p,{children:"These resource counts will be applied to all users in the service instance by default."}),"\n",(0,t.jsx)(i.h3,{id:"global-bandwidth-limits",children:"Global Bandwidth Limits"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"bandwidth"})," section defines the global bandwidth limits for all users in the service instance."]}),"\n",(0,t.jsxs)(i.p,{children:["There are two levels of bandwidth limits that can be specified in the global configuration. The first limit defines a ",(0,t.jsx)(i.em,{children:"warning"})," threshold where the user will receive an email that they are using increased data transfer amounts and will ultimately be subject to a limit. If you do not want this warning email to be sent, then configure all of the values to ",(0,t.jsx)(i.code,{children:"-1"})," (unlimited)."]}),"\n",(0,t.jsxs)(i.p,{children:["The second limit defines the the actual ",(0,t.jsx)(i.em,{children:"limit"})," threshold, where the limits agent will disabled traffic for the account's shares."]}),"\n",(0,t.jsxs)(i.p,{children:["Bandwidth limits can be specified in terms of ",(0,t.jsx)(i.code,{children:"tx"})," (or ",(0,t.jsx)(i.em,{children:"transmitted"})," data), ",(0,t.jsx)(i.code,{children:"rx"})," (or ",(0,t.jsx)(i.em,{children:"received"})," data), and the ",(0,t.jsx)(i.code,{children:"total"})," bytes that are sent in either direction. If you only want to set the ",(0,t.jsx)(i.code,{children:"total"})," transferred limit, you can set ",(0,t.jsx)(i.code,{children:"rx"})," and ",(0,t.jsx)(i.code,{children:"tx"})," to ",(0,t.jsx)(i.code,{children:"-1"})," (for ",(0,t.jsx)(i.em,{children:"unlimited"}),"). You can configure any combination of these these values at either the limit or warning levels."]}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"period"})," specifies the time window for the bandwidth limit. See the documentation for ",(0,t.jsx)(i.a,{href:"https://pkg.go.dev/time#ParseDuration",children:(0,t.jsx)(i.code,{children:"time.Duration.ParseDuration"})})," for details about the format used for these durations. If the ",(0,t.jsx)(i.code,{children:"period"})," is set to 5 minutes, then the limits agent will monitor the transmitted and receivde traffic for the account for the last 5 minutes, and if the amount of data is greater than either the ",(0,t.jsx)(i.code,{children:"warning"})," or the ",(0,t.jsx)(i.code,{children:"limit"})," threshold, action will be taken."]}),"\n",(0,t.jsxs)(i.p,{children:["In the global configuration example above users are allowed to transfer a total of ",(0,t.jsx)(i.code,{children:"10485760"})," bytes in a ",(0,t.jsx)(i.code,{children:"5m"})," period, and they will receive a warning email after they transfer more than ",(0,t.jsx)(i.code,{children:"7242880"})," bytes in a ",(0,t.jsx)(i.code,{children:"5m"})," period."]}),"\n",(0,t.jsx)(i.h2,{id:"limit-classes",children:"Limit Classes"}),"\n",(0,t.jsxs)(i.p,{children:["The zrok limits agent includes a concept called ",(0,t.jsx)(i.em,{children:"limit classes"}),". Limit classes can be used to define resource count and bandwidth limits that can be selectively applied to individual accounts in a service instance."]}),"\n",(0,t.jsxs)(i.p,{children:["Limit classes are created by creating a record in the ",(0,t.jsx)(i.code,{children:"limit_classes"})," table in the zrok controller database. The table has this schema:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sql",children:"CREATE TABLE public.limit_classes (\n    id integer NOT NULL,\n    backend_mode public.backend_mode,\n    environments integer DEFAULT '-1'::integer NOT NULL,\n    shares integer DEFAULT '-1'::integer NOT NULL,\n    reserved_shares integer DEFAULT '-1'::integer NOT NULL,\n    unique_names integer DEFAULT '-1'::integer NOT NULL,\n    share_frontends integer DEFAULT '-1'::integer NOT NULL,\n    period_minutes integer DEFAULT 1440 NOT NULL,\n    rx_bytes bigint DEFAULT '-1'::integer NOT NULL,\n    tx_bytes bigint DEFAULT '-1'::integer NOT NULL,\n    total_bytes bigint DEFAULT '-1'::integer NOT NULL,\n    limit_action public.limit_action DEFAULT 'limit'::public.limit_action NOT NULL,\n    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,\n    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,\n    deleted boolean DEFAULT false NOT NULL\n);\n\n"})}),"\n",(0,t.jsx)(i.p,{children:"This schema supports constructing the 3 different types of limits classes that the system supports."}),"\n",(0,t.jsxs)(i.p,{children:["After defining a limit class in the database, it can be applied to specific user accounts (overriding the relevant parts of the global configuration) by inserting a row into the ",(0,t.jsx)(i.code,{children:"applied_limit_classes"})," table:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sql",children:"CREATE TABLE public.applied_limit_classes (\n    id integer NOT NULL,\n    account_id integer NOT NULL,\n    limit_class_id integer NOT NULL,\n    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,\n    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,\n    deleted boolean DEFAULT false NOT NULL\n);\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Create a row in this table linking the ",(0,t.jsx)(i.code,{children:"account_id"})," to the ",(0,t.jsx)(i.code,{children:"limit_class_id"})," to apply the limit class to a specific user account."]}),"\n",(0,t.jsx)(i.h3,{id:"unscoped-resource-count-classes",children:"Unscoped Resource Count Classes"}),"\n",(0,t.jsxs)(i.p,{children:["To support overriding the resource count limits defined in the global limits configuration, a site administrator can create a limit class by inserting a row into the ",(0,t.jsx)(i.code,{children:"limit_classes"})," table structured like this:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sql",children:"insert into limit_classes (environments, shares, reserved_shares, unique_names, share_frontends) values (1, 1, 1, 1, 1);\n"})}),"\n",(0,t.jsxs)(i.p,{children:["This creates a limit class that sets the ",(0,t.jsx)(i.code,{children:"environments"}),", ",(0,t.jsx)(i.code,{children:"shares"}),", ",(0,t.jsx)(i.code,{children:"reserved_shares"}),", and ",(0,t.jsx)(i.code,{children:"unique_names"})," all to ",(0,t.jsx)(i.code,{children:"1"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"When this limit class is applied to a user account those values would override the default resource count values configured globally."}),"\n",(0,t.jsxs)(i.p,{children:["Applying an unscoped resource count class ",(0,t.jsx)(i.em,{children:"does not"})," affect the bandwidth limits (either globally configured, or via a limit class)."]}),"\n",(0,t.jsx)(i.h3,{id:"unscoped-bandwidth-classes",children:"Unscoped Bandwidth Classes"}),"\n",(0,t.jsxs)(i.p,{children:["To support overriding the bandwidth limits defined in the global configuration, a site administrator can create a limit class by inserting a row into the ",(0,t.jsx)(i.code,{children:"limit_classes"})," table structured like this:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sql",children:"insert into limit_classes (period_minutes, total_bytes, limit_action) values (2, 204800, 'limit');\n"})}),"\n",(0,t.jsxs)(i.p,{children:["This inserts a limit class that allows for a total bandwidth transfer of ",(0,t.jsx)(i.code,{children:"204800"})," bytes every ",(0,t.jsx)(i.code,{children:"2"})," minutes."]}),"\n",(0,t.jsx)(i.p,{children:"When this limit class is applied to a user account, those values would override the default bandwidth values configured globally."}),"\n",(0,t.jsxs)(i.p,{children:["Applying an unscoped bandwidth class ",(0,t.jsx)(i.em,{children:"does not"})," affect the resource count limits (either globally configured, or via a limit class)."]}),"\n",(0,t.jsx)(i.h3,{id:"scoped-classes",children:"Scoped Classes"}),"\n",(0,t.jsxs)(i.p,{children:["A scoped limit class specifies ",(0,t.jsx)(i.em,{children:"both"})," the resource counts (",(0,t.jsx)(i.code,{children:"shares"}),", ",(0,t.jsx)(i.code,{children:"reserved_shares"}),", and ",(0,t.jsx)(i.code,{children:"unique_names"}),", but ",(0,t.jsx)(i.em,{children:"NOT"})," ",(0,t.jsx)(i.code,{children:"environments"}),") for a ",(0,t.jsx)(i.em,{children:"specific"})," backend mode. Insert a row like this:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sql",children:"insert into limit_classes (backend_mode, shares, reserved_shares, unique_names, period_minutes, total_bytes, limit_action) values ('web', 2, 1, 1, 2, 4096000, 'limit');\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Scoped limits are designed to ",(0,t.jsx)(i.em,{children:"increase"})," the limits for a specific backend mode beyond what the global configuration and the unscoped classes provide. The general approach is to use the global configuration and the unscoped classes to provide the general account limits, and then the scoped classes can be used to further increase (or potentially ",(0,t.jsx)(i.em,{children:"decrease"}),")  the limits for a specific backend mode."]}),"\n",(0,t.jsx)(i.p,{children:"If a scoped limit class exists for a specific backend mode, then the limits agent will use that limit in making a decision about limiting the resource count or bandwidth. All other types of shares will fall back to the unscoped classes or the global configuration."}),"\n",(0,t.jsx)(i.h2,{id:"limit-actions",children:"Limit Actions"}),"\n",(0,t.jsx)(i.p,{children:"When an account exceeds a bandwidth limit, the limits agent will seek to limit the affected shares (based on the combination of global configuration, unscoped limit classes, and scoped limit classes). It applies the limit by removing the underlying OpenZiti dial policies for any frontends that are trying to access the share."}),"\n",(0,t.jsxs)(i.p,{children:["This means that public frontends will simply return a ",(0,t.jsx)(i.code,{children:"404"})," as if the share is no longer there. Private frontends will also return ",(0,t.jsx)(i.code,{children:"404"})," errors. When the limit is relaxed, the dial policies are put back in place and the share will continue operating normally."]}),"\n",(0,t.jsx)(i.h2,{id:"unlimited-accounts",children:"Unlimited Accounts"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"accounts"})," table in the database includes a ",(0,t.jsx)(i.code,{children:"limitless"})," column. When this column is set to ",(0,t.jsx)(i.code,{children:"true"})," the account is not subject to any of the limits in the system."]}),"\n",(0,t.jsx)(i.h2,{id:"experimental-limits-locking",children:"Experimental Limits Locking"}),"\n",(0,t.jsxs)(i.p,{children:["zrok versions prior to ",(0,t.jsx)(i.code,{children:"v0.4.31"})," had a potential race condition when enforcing resource count limits. This usually only manifested in cases where shares or environments were being allocated programmatically (and fast enough to win the limits race)."]}),"\n",(0,t.jsxs)(i.p,{children:["This occurs due to a lack of transactional database locking around the limited structures. ",(0,t.jsx)(i.code,{children:"v0.4.31"})," includes a pessimistic locking facility that can be enabled ",(0,t.jsx)(i.em,{children:"only"})," on the PostgreSQL store implemention."]}),"\n",(0,t.jsxs)(i.p,{children:["If you're running PostgreSQL for your service instance and you want to enable the new experimental locking facility that eliminates the potential resource count race condition, add the ",(0,t.jsx)(i.code,{children:"enable_locking: true"})," flag to your ",(0,t.jsx)(i.code,{children:"store"})," definition:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yaml",children:"store:\n  enable_locking: true\n"})}),"\n",(0,t.jsx)(i.h2,{id:"caveats",children:"Caveats"}),"\n",(0,t.jsx)(i.p,{children:"There are a number of caveats that are important to understand when using the limits agent with more complicated limits scenarios:"}),"\n",(0,t.jsx)(i.h3,{id:"aggregate-bandwidth",children:"Aggregate Bandwidth"}),"\n",(0,t.jsx)(i.p,{children:"The zrok limits agent is a work in progress. The system currently does not track bandwidth individually for each backend mode type, which means all bandwidth values are aggregated between all of the share types that an account might be using. This will likely change in an upcoming release."}),"\n",(0,t.jsx)(i.h3,{id:"administration-through-sql",children:"Administration Through SQL"}),"\n",(0,t.jsx)(i.p,{children:"There are currently no administrative API endpoints (or corresponding CLI tools) to support creating and applying limit classes in the current release. The limits agent infrastructure was designed to support software integrations that directly manipulate the underlying database structures."}),"\n",(0,t.jsx)(i.p,{children:"A future release may provide API and CLI tooling to support the human administration of the limits agent."}),"\n",(0,t.jsx)(i.h3,{id:"performance",children:"Performance"}),"\n",(0,t.jsxs)(i.p,{children:["Be sure to minimize the number of different periods used for specifying bandwidth limits. Specifying limits in multiple different periods can cause a multiplicity of queries to be executed against the metrics store (InfluxDB). Standardizing on a period like ",(0,t.jsx)(i.code,{children:"24h"})," or ",(0,t.jsx)(i.code,{children:"6h"})," and using that consistently is the best way to to manage the performance of the metrics store."]})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>r});var t=n(7294);const s={},a=t.createContext(s);function r(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);