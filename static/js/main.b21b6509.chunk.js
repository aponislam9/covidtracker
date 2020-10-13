(this.webpackJsonpcovidtracker=this.webpackJsonpcovidtracker||[]).push([[0],{17:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",deaths:"Cards_deaths__Qdjzq",recovered:"Cards_recovered__1aizD"}},212:function(e,t,a){e.exports={App:"App_App__16ZpL"}},213:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(75),o=a.n(c),u=(a(94),a(6)),s=a.n(u),i=a(11),l=a(76),d=a(77),p=a(86),m=a(85),f=(a(96),a(97),a(235)),v=a(231),h=a(232),b=a(236),g=a(233),E=a(37),y=a.n(E),x=a(17),w=a.n(x),C=a(38),k=a.n(C),j=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:f.b.container},r.a.createElement(v.a,{gutterBottom:!0,variant:"h3",component:"h2"},"Global"),r.a.createElement(h.a,{container:!0,spacking:3,justify:"center"},r.a.createElement(h.a,{item:!0,component:b.a,xs:12,md:3,className:k()(w.a.card,w.a.infected)},r.a.createElement(g.a,null,r.a.createElement(v.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(v.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(v.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(v.a,{variant:"body2"},"Number of active cases of Covid 19"))),r.a.createElement(h.a,{item:!0,component:b.a,xs:12,md:3,className:k()(w.a.card,w.a.recovered)},r.a.createElement(g.a,null,r.a.createElement(v.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(v.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(v.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(v.a,{variant:"body2"},"Number of recoveries from Covid 19"))),r.a.createElement(h.a,{item:!0,component:b.a,xs:12,md:3,className:k()(w.a.card,w.a.deaths)},r.a.createElement(g.a,null,r.a.createElement(v.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(v.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(v.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(v.a,{variant:"body2"},"Number of deaths from Covid 19"))))):"loading"},_=a(35),O=a(25),S=a.n(O),D="https://covid19.mathdro.id/api",N=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=D,t&&(a="".concat(D,"/countries/").concat(t)),e.prev=2,e.next=5,S.a.get(a);case 5:return n=e.sent,r=n.data,c={confirmed:r.confirmed,recovered:r.recovered,deaths:r.deaths,lastUpdate:r.lastUpdate},e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(2);case 13:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("https://api.covidtracking.com/v1/us/daily.json");case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){return{confirmed:e.positive,recovered:e.recovered,deaths:e.death,date:e.dateChecked}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),U=a(49),G=a(83),I=a.n(G),R=function(e){var t=e.data,a=t.confirmed,c=t.deaths,o=t.recovered,u=e.country,l=Object(n.useState)([]),d=Object(_.a)(l,2),p=d[0],m=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=p.length?r.a.createElement(U.b,{data:{labels:p.map((function(e){var t=e.date;return new Date(t).toLocaleDateString()})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"#red",backgroundColor:"rgb(255,0,0,0.5)",fill:!0},{data:p.map((function(e){return e.recovered})),label:"Recovered",borderColor:"green",backgroundColor:"rgba(0, 255, 0, 0.5)",fill:!0}]}}):null;console.log(a,o);var v=a?r.a.createElement(U.a,{data:{lables:["gae","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"],data:[a.value,o.value,c.value]}]},options:{legend:{display:!0},title:{display:!0,text:"Current state in ".concat(u)}}}):null;return r.a.createElement("div",{className:I.a.container},u?v:f)},z=a(237),J=a(234),L=a(84),M=a.n(L),W=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(_.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,A();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(z.a,{className:M.a.formControl},r.a.createElement(J.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},Z=(a(212),function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(a);case 2:n=t.sent,console.log(n),e.setState({data:n,country:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:"App"},r.a.createElement(j,{data:t}),r.a.createElement(W,{handleCountryChange:this.handleCountryChange}),r.a.createElement(R,{data:t,country:a}))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,t,a){},84:function(e,t,a){},89:function(e,t,a){e.exports=a(213)},94:function(e,t,a){},96:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},97:function(e,t,a){}},[[89,1,2]]]);
//# sourceMappingURL=main.b21b6509.chunk.js.map