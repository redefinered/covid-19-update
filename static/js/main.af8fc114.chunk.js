(this["webpackJsonpcovid-19-update"]=this["webpackJsonpcovid-19-update"]||[]).push([[0],{203:function(e,t,a){},208:function(e,t,a){},228:function(e,t,a){},230:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),l=a.n(c),o=(a(98),a(32)),i=a(33),u=a(36),s=a(35),m=a(234),d=a(235),h=function(){return r.a.createElement(m.a,{className:"d-flex align-items-center justify-content-center",style:{height:"100vh"}},r.a.createElement(d.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))},v=a(21),f=a(91),y=a(80),p=a.n(y),E=a(81),g=a.n(E),b=a(82),k=a.n(b),S=(a(203),function(e){var t=e.data,a=e.handleSelect,n=e.selectedCountry,c=e.handleSearch,l=e.searchString,o=[],i=p()(t,(function(e){return g()(e.country.toLowerCase(),l.toLowerCase())}));return(i=k()(i,(function(e){return e.country}))).map((function(e){o.push(r.a.createElement(v.a.Item,{value:e.country,key:e.country,active:e.country===n,onClick:function(e){return a(e)}},e.country))})),r.a.createElement(v.a,null,r.a.createElement(v.a.Toggle,{className:"btn-lg",variant:"primary",id:"dropdown-basic"},n),r.a.createElement(v.a.Menu,null,r.a.createElement("div",{className:"px-4 my-2"},r.a.createElement(f.a.Control,{onChange:function(e){return c(e)},type:"search",placeholder:"Search your country..."})),r.a.createElement("div",{className:"dropdown-menu-list"},o)))}),w=a(49),N=a.n(w),C=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).tick=function(){n.setState({time:N()()})},n.state={time:N()()},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timeInterval=setInterval((function(){e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timeInterval)}},{key:"render",value:function(){var e=this.state.time;return r.a.createElement("div",{className:"time"},r.a.createElement("p",null,"As of ",r.a.createElement("strong",null,"".concat(e.format("dddd, D MMM YYYY")," ").concat(e.format("hh:mm:ss A")))))}}]),a}(r.a.Component),j=a(238),O=(a(208),function(e){var t,a=e.title,n=e.value,c=e.color;return r.a.createElement(j.a,{text:"white",bg:c,className:"mb-4"},r.a.createElement(j.a.Body,{className:"text-center my-4"},r.a.createElement(j.a.Title,null,r.a.createElement("strong",null,a)),r.a.createElement(j.a.Text,{className:"figure"},(t=n)?t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"):0)))}),x=a(236),M=a(88),T=a(50),I=a.n(T),A=function(e){var t=e.country,a=e.data,n=I()(a,(function(e){return e.country===t})),c=Object.keys(n),l=[{key:"cases",label:"Total Cases",variant:"info"},{key:"todayCases",label:"New Cases",variant:"warning"},{key:"deaths",label:"Total Deaths",variant:"danger"},{key:"recovered",label:"Total Recoveries",variant:"success"}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,c.map((function(e){var t=I()(l,(function(t){return t.key===e}));if(void 0!==t)return r.a.createElement(M.a,{key:e},r.a.createElement(O,{title:t.label,value:n[e],color:t.variant}))}))))},D=a(237),W=a(89),Y=a.n(W),B=(a(228),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleSelect=function(e){n.setState({country:e.target.getAttribute("value")})},n.handleSearch=function(e){n.setState({searchString:e.target.value})},n.state={data:[],country:"World",searchString:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;Y.a.get("https://coronavirus-19-api.herokuapp.com/countries").then((function(t){var a=t.data;e.setState({data:a})}))}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country,n=e.searchString;return 0!==t.length&&a?r.a.createElement(m.a,{fluid:!0},r.a.createElement(D.a,{className:"mt-3"},r.a.createElement("h1",null,"Covid-19 Updates"),r.a.createElement(C,null),r.a.createElement("p",{className:"lead"},"This page updates everyday so you stay updated on the global situation regarding the Coronovirus pandemic"),r.a.createElement(S,{data:t,handleSelect:this.handleSelect,selectedCountry:a,handleSearch:this.handleSearch,searchString:n})),r.a.createElement(A,{country:a,data:t}),r.a.createElement("footer",{className:"py-3"},r.a.createElement("p",{className:"text-muted"},"\xa9 reddeguzman | ","v".concat("1.0.1-beta.22")))):r.a.createElement(h,null)}}]),a}(r.a.Component));a(229);var L=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},93:function(e,t,a){e.exports=a(230)},98:function(e,t,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.af8fc114.chunk.js.map