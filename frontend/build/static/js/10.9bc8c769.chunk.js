(this["webpackJsonpreact-news"]=this["webpackJsonpreact-news"]||[]).push([[10],{133:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);var a=n(23),c=n(0),s=n.n(c),r=(n(133),n(4),n(121)),u=n.n(r);t.default=function(e){var t=e.url,n=Object(c.useState)([]),r=Object(a.a)(n,2),o=r[0],l=r[1];return Object(c.useEffect)((function(){u.a.get(t).then((function(e){return e.data})).then((function(e){l(e),console.log(e)})).catch((function(e){return console.log(e)}))}),[]),s.a.createElement("div",{className:"home-page"},o.map((function(e){return s.a.createElement("div",{className:"post",key:e.Id},s.a.createElement("h1",null,s.a.createElement("span",{className:"id"},e.Id)," ",e.Author.FirstName," ",e.Author.LastName),s.a.createElement("p",null," ",e.Message))})))}}}]);
//# sourceMappingURL=10.9bc8c769.chunk.js.map