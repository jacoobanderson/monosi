"use strict";(self.webpackChunkmonosi_documentation=self.webpackChunkmonosi_documentation||[]).push([[4013],{245:function(e,t,a){var n=a(7462),l=a(3366),r=a(7294),c=a(5303),m=a(3003),o=["sidebar","children"];t.Z=function(e){var t=e.sidebar,a=e.children,i=(0,l.Z)(e,o),s=t&&t.items.length>0;return r.createElement(c.Z,(0,n.Z)({},i,{className:"relative"}),r.createElement("div",{className:"flex space-x-20 "},r.createElement("main",{itemScope:!0,itemType:"http://schema.org/Blog"},a),s&&r.createElement("aside",{className:"sticky top-24 mt-12 hidden h-full md:inline"},r.createElement(m.Z,{sidebar:t}))))}},3003:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),l=a(9960);function r(e){var t=e.sidebar,a=e.row,r=[];return 0===t.items.length||0===r.length?null:n.createElement("div",null,n.createElement("div",{className:a&&"col col--4"},n.createElement("h3",{className:"mb-2 text-xl font-semibold"},"Tags"),n.createElement("ul",null,n.createElement("span",{className:"mb-5 flex flex-wrap"},r.map((function(e){var t=e.title,a=e.url;return n.createElement(l.Z,{key:a,className:"my-2 mr-2 inline-flex items-center rounded-full bg-[color:var(--ifm-badge-background-color)] px-3 py-0.5 text-sm font-medium text-[color:var(--ifm-color)] no-underline hover:opacity-80",to:a},t)}))))))}},9503:function(e,t,a){a.r(t);var n=a(7294),l=a(245),r=a(4199),c=a(3616);t.default=function(e){var t=e.tags,a=e.sidebar,m=(0,c.MA)();return n.createElement(l.Z,{title:m,wrapperClassName:"max-w-screen-lg mx-auto px-10 my-16",pageClassName:c.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:a},n.createElement("h1",{className:"mb-5 text-3xl font-semibold"},m),n.createElement(r.Z,{tags:Object.values(t)}))}},4199:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(9960);var r=function(e){var t=e.permalink,a=e.name,r=e.count;return n.createElement(l.Z,{href:t,className:"my-2 mr-2 inline-flex items-center rounded-full bg-[color:var(--ifm-badge-background-color)] px-3 py-1 text-sm font-medium text-[color:var(--ifm-color)] no-underline hover:opacity-80 "},a,r&&n.createElement("span",{className:"ml-2 inline-flex items-center justify-center rounded-full bg-[color:var(--ifm-color)] px-2 py-1 text-xs font-bold leading-none text-[color:var(--ifm-badge-background-color)]"},r))},c=a(3616);function m(e){var t=e.letterEntry;return n.createElement("article",null,n.createElement("h2",{className:"text-xl font-semibold"},t.letter),n.createElement("ul",{className:"mb-5"},t.tags.map((function(e){return n.createElement("li",{key:e.permalink,className:"mx-2 my-1 inline-block"},n.createElement(r,e))}))),n.createElement("hr",null))}var o=function(e){var t=e.tags,a=(0,c.PZ)(t);return n.createElement("section",{className:"flex flex-col space-y-10"},a.map((function(e){return n.createElement(m,{key:e.letter,letterEntry:e})})))}}}]);