(this["webpackJsonpreact-news"]=this["webpackJsonpreact-news"]||[]).push([[11],{151:function(e,t,a){},162:function(e,t,a){"use strict";a.r(t);var n=a(23),r=a(0),u=a.n(r),c=(a(151),a(4)),l=a(121),s=a.n(l);t.default=function(e){var t=e.url,a=Object(r.useState)(""),l=Object(n.a)(a,2),o=l[0],i=l[1],p=Object(r.useState)(""),m=Object(n.a)(p,2),f=m[0],h=m[1],b=Object(r.useState)(""),g=Object(n.a)(b,2),v=g[0],d=g[1],E=Object(r.useState)(""),j=Object(n.a)(E,2),O=j[0],S=j[1];return u.a.createElement("div",{className:"post-page"},u.a.createElement("h1",null,"Add a new Post "),u.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s.a.post(t,{title:o,message:f,author:{firstname:v,lastname:O}}).then((function(){i(""),h(""),d(""),S(""),alert("Post Successful")})).catch((function(e){return console.log(e)}))}},u.a.createElement("div",null,u.a.createElement("input",{type:"text",placeholder:"First Name",value:v,onChange:function(e){return d(e.target.value)}}),u.a.createElement("input",{type:"text",placeholder:"Last Name",value:O,onChange:function(e){return S(e.target.value)}})),u.a.createElement("input",{type:"text",placeholder:"Title",value:o,onChange:function(e){return i(e.target.value)}}),u.a.createElement("textarea",{placeholder:"Message",value:f,onChange:function(e){return h(e.target.value)}}),u.a.createElement(c.b,{type:"submit",size:"large"},"Post")))}}}]);
//# sourceMappingURL=11.c64fa299.chunk.js.map