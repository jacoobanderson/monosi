"use strict";(self.webpackChunkmonosi_documentation=self.webpackChunkmonosi_documentation||[]).push([[4013],{245:function(e,t,n){var a=n(7462),l=n(3366),r=n(7294),c=n(5303),m=n(3003),o=["sidebar","children"];t.Z=function(e){var t=e.sidebar,n=e.children,i=(0,l.Z)(e,o),s=t&&t.items.length>0;return r.createElement(c.Z,(0,a.Z)({},i,{className:"relative"}),r.createElement("div",{className:"flex space-x-20 "},r.createElement("main",{itemScope:!0,itemType:"http://schema.org/Blog"},n),s&&r.createElement("aside",{className:"sticky top-24 mt-12 hidden h-full md:inline"},r.createElement(m.Z,{sidebar:t}))))}},3003:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),l=n(9960);function r(e){var t=e.sidebar,n=e.row;if(0===t.items.length)return null;return a.createElement("div",null,a.createElement("div",{className:n&&"col col--4"},a.createElement("h3",{className:"mb-2 text-xl font-semibold"},"Tags"),a.createElement("ul",null,a.createElement("span",{className:"mb-5 flex flex-wrap"},[{title:"community",url:"/blog/tags/community"},{title:"announcement",url:"/blog/tags/announcement"},{title:"releases",url:"/blog/tags/release"}].map((function(e){var t=e.title,n=e.url;return a.createElement(l.Z,{key:n,className:"my-2 mr-2 inline-flex items-center rounded-full bg-[color:var(--ifm-badge-background-color)] px-3 py-0.5 text-sm font-medium text-[color:var(--ifm-color)] no-underline hover:opacity-80",to:n},t)}))))))}},9503:function(e,t,n){n.r(t);var a=n(7294),l=n(245),r=n(4199),c=n(3616);t.default=function(e){var t=e.tags,n=e.sidebar,m=(0,c.MA)();return a.createElement(l.Z,{title:m,wrapperClassName:"max-w-screen-lg mx-auto px-10 my-16",pageClassName:c.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:n},a.createElement("h1",{className:"mb-5 text-3xl font-semibold"},m),a.createElement(r.Z,{tags:Object.values(t)}))}},4199:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),l=n(9960);var r=function(e){var t=e.permalink,n=e.name,r=e.count;return a.createElement(l.Z,{href:t,className:"my-2 mr-2 inline-flex items-center rounded-full bg-[color:var(--ifm-badge-background-color)] px-3 py-1 text-sm font-medium text-[color:var(--ifm-color)] no-underline hover:opacity-80 "},n,r&&a.createElement("span",{className:"ml-2 inline-flex items-center justify-center rounded-full bg-[color:var(--ifm-color)] px-2 py-1 text-xs font-bold leading-none text-[color:var(--ifm-badge-background-color)]"},r))},c=n(3616);function m(e){var t=e.letterEntry;return a.createElement("article",null,a.createElement("h2",{className:"text-xl font-semibold"},t.letter),a.createElement("ul",{className:"mb-5"},t.tags.map((function(e){return a.createElement("li",{key:e.permalink,className:"mx-2 my-1 inline-block"},a.createElement(r,e))}))),a.createElement("hr",null))}var o=function(e){var t=e.tags,n=(0,c.PZ)(t);return a.createElement("section",{className:"flex flex-col space-y-10"},n.map((function(e){return a.createElement(m,{key:e.letter,letterEntry:e})})))}}}]);