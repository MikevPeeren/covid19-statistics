(this["webpackJsonpcovid19-statistics"]=this["webpackJsonpcovid19-statistics"]||[]).push([[0],{215:function(t,e,n){},217:function(t,e,n){},218:function(t,e,n){},240:function(t,e,n){},370:function(t,e,n){},372:function(t,e,n){"use strict";n.r(e);var a=n(5),r=n(0),c=n(17),s=n.n(c),i=(n(215),n(19)),o=n.n(i),u=n(30),d=n(25),l=(n(217),n(218),n(12)),j=n.n(l),f=n(416),b=n(418),h=n(417),p=n(113),O=n(410),v=n(414),x=n(415),y="https://api.covid19api.com",m="Total Confirmed",C="Total Deaths",_="Total Recovered",w={year:"numeric",month:"numeric",day:"numeric"},S={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"},g=function(t){var e=t.title,n=t.dateString,r=t.statistic,c=new Date(Date.parse(n)).toLocaleDateString("nl-NL",S),s=e===m?Object(a.jsx)(O.a,{}):e===C?Object(a.jsx)(v.a,{}):e===_?Object(a.jsx)(x.a,{}):"",i=j()("StatisticCard__Avatar",{"StatisticCard__Avatar--confirmed":e===m,"StatisticCard__Avatar--deaths":e===C,"StatisticCard__Avatar--recovered":e===_}),o=j()("StatisticCard__Content",{"StatisticCard__Content--confirmed":e===m,"StatisticCard__Content--deaths":e===C,"StatisticCard__Content--recovered":e===_});return Object(a.jsxs)(f.a,{className:"StatisticCard",variant:"outlined",children:[Object(a.jsx)(h.a,{classes:{avatar:i},avatar:s,title:e,subheader:"Updated at: ".concat(c)}),Object(a.jsx)(b.a,{classes:{root:o},children:Object(a.jsx)(p.a,{variant:"h4",component:"p",children:r})})]})},k=n(419),D=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(k.a,{size:100,color:"secondary",thickness:3.5,variant:"indeterminate"})})},N=n(110),A=n.n(N),F=function(){var t=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.a.get("".concat(y,"/summary")).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),T=function(){var t=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.a.get("".concat(y,"/countries")).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),L=function(){var t=Object(u.a)(o.a.mark((function t(e,n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.a.get("".concat(y,"/total/country/").concat(e,"/status/").concat(n)).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),I=function(){var t=Object(r.useState)(null),e=Object(d.a)(t,2),n=e[0],c=e[1],s=Object(r.useState)(!0),i=Object(d.a)(s,2),l=i[0],j=i[1];return Object(r.useEffect)((function(){function t(){return(t=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=c,t.next=3,F();case 3:t.t1=t.sent,(0,t.t0)(t.t1),j(!1);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}l&&!n&&function(){t.apply(this,arguments)}()})),Object(a.jsxs)(a.Fragment,{children:[l&&Object(a.jsx)(D,{}),!l&&n&&Object(a.jsxs)("div",{className:"Covid19__GlobalStatistics",children:[Object(a.jsx)(g,{title:m,dateString:n.Date,statistic:n.Global.TotalConfirmed}),Object(a.jsx)(g,{title:C,dateString:n.Date,statistic:n.Global.TotalDeaths}),Object(a.jsx)(g,{title:_,dateString:n.Date,statistic:n.Global.TotalRecovered})]})]})},G=(n(240),n(430)),E=n(427),K=n(423),R=n(196),z=n(197),H=n(112),J=n(90),q=n(199),B=function(t){var e=t.country,n=Object(r.useState)(!0),c=Object(d.a)(n,2),s=c[0],i=c[1],l=Object(r.useState)(void 0),j=Object(d.a)(l,2),f=j[0],b=j[1];Object(r.useEffect)((function(){function t(){return(t=Object(u.a)(o.a.mark((function t(){var n,a,r,c,s,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(e,"confirmed");case 2:return n=t.sent,t.next=5,L(e,"deaths");case 5:return a=t.sent,t.next=8,L(e,"recovered");case 8:return r=t.sent,t.next=11,h(n);case 11:return c=t.sent,t.next=14,p(a,c);case 14:return s=t.sent,t.next=17,O(r,s);case 17:u=t.sent,b(u),i(!1);case 20:case"end":return t.stop()}}),t)})))).apply(this,arguments)}i(!0),b(void 0),function(){t.apply(this,arguments)}()}),[e]);var h=function(){var t=Object(u.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e&&Object.keys(e).length>0)){t.next=2;break}return t.abrupt("return",e.map((function(t){var e=v(t.Date);return t.Date=e,t.Confirmed=t.Cases,t})));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(u.a)(o.a.mark((function t(e,n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e&&n&&Object.keys(e).length>0)){t.next=2;break}return t.abrupt("return",n.map((function(t){var n=e.find((function(e){return v(e.Date)===t.Date}));return n&&(t.Deaths=n.Cases),t})));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),O=function(){var t=Object(u.a)(o.a.mark((function t(e,n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e&&n&&Object.keys(e).length>0)){t.next=2;break}return t.abrupt("return",n.map((function(t){var n=e.find((function(e){return v(e.Date)===t.Date}));return n&&(t.Recovered=n.Cases),t})));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),v=function(t){return new Date(Date.parse(t)).toLocaleDateString("nl-NL",w)};return Object(a.jsxs)(a.Fragment,{children:[s&&Object(a.jsx)(D,{}),f&&Object(a.jsx)("div",{style:{width:"80%",height:300},className:"CountryAreaChart",children:Object(a.jsx)(G.a,{children:Object(a.jsxs)(E.a,{width:600,height:400,data:f,children:[Object(a.jsx)(K.a,{strokeDasharray:"1 1"}),Object(a.jsx)(R.a,{dataKey:"Date"}),Object(a.jsx)(z.a,{}),Object(a.jsx)(H.a,{}),Object(a.jsx)(J.a,{verticalAlign:"top",height:36}),Object(a.jsx)(q.a,{type:"monotone",dataKey:"Confirmed",fillOpacity:.5,stroke:"#027be3",fill:"#027be3"}),Object(a.jsx)(q.a,{type:"monotone",dataKey:"Deaths",fillOpacity:.5,stroke:"#f44336",fill:"#f44336"}),Object(a.jsx)(q.a,{type:"monotone",dataKey:"Recovered",fillOpacity:.5,stroke:"#009688",fill:"#009688"})]})})}),!f&&!s&&Object(a.jsx)("div",{className:"CountryAreaChart__Country--undefined",children:"No Data could be found for this Country."})]})},U=(n(370),n(424)),V=n(431),W=n(425),M=n(426),P=n(429),Q=function(t){var e=Object(r.useState)(""),n=Object(d.a)(e,2),c=n[0],s=n[1],i=Object(r.useState)(void 0),l=Object(d.a)(i,2),j=l[0],f=l[1];return Object(r.useEffect)((function(){function t(){return(t=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=f,t.next=3,T();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),j&&j.sort((function(t,e){return t.Country.toLowerCase()<e.Country.toLowerCase()?-1:t.Country.toLowerCase()>e.Country.toLowerCase()?1:0})),Object(a.jsxs)(U.a,{children:[Object(a.jsx)(V.a,{id:"country__input--label",children:"Country"}),Object(a.jsx)(M.a,{value:c,onChange:function(e){s(e.target.value),t.setCountryState(e.target.value)},id:"country__input",labelId:"country__input--label",children:j&&j.map((function(t){return Object(a.jsx)(P.a,{value:t.Slug,children:t.Country},t.Country)}))}),Object(a.jsx)(W.a,{children:"Select the Country for which you require Statistics."})]})},X=function(){var t=Object(r.useState)(""),e=Object(d.a)(t,2),n=e[0],c=e[1],s=function(){var t=Object(u.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c(e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"Covid19",children:[Object(a.jsx)("header",{className:"Covid19__Header",children:"COVID-19 Statistics"}),Object(a.jsx)("div",{className:"Covid19__GlobalStatistics",children:Object(a.jsx)(I,{})}),Object(a.jsx)("div",{className:"Covid19__SearchForm",children:Object(a.jsx)(Q,{setCountryState:s})}),Object(a.jsx)("div",{className:"Covid19__CountryAreaChart",children:n&&Object(a.jsx)(B,{country:n})}),Object(a.jsxs)("footer",{className:"Covid19__Footer",children:[Object(a.jsx)("h3",{className:"Covid19__Footer--h3",children:"About this data"}),Object(a.jsx)("h4",{className:"Covid19__Footer--h4",children:"It changes rapidly"}),Object(a.jsx)("p",{className:"Covid19__Footer--p",children:"\nThis data changes rapidly, so what\u2019s shown may be out of date.\nInformation about reported cases is also available on the World Health\nOrganization site."}),Object(a.jsx)("h4",{className:"Covid19__Footer--h4",children:"It doesn\u2019t include all cases"}),Object(a.jsx)("p",{className:"Covid19__Footer--p",children:"\nConfirmed cases aren\u2019t all cases. They only include people who tested\npositive. Testing rules and availability vary by country.\n"})]})]})};s.a.render(Object(a.jsx)(X,{}),document.getElementById("root"))}},[[372,1,2]]]);
//# sourceMappingURL=main.f383aaeb.chunk.js.map