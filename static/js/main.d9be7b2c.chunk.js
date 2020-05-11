(this["webpackJsonpcovid-19-update"]=this["webpackJsonpcovid-19-update"]||[]).push([[0],{195:function(e,t,a){},197:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),o=(a(84),a(27)),i=a(28),u=a(31),s=a(30),m=a(201),d=a(202),v=function(){return r.a.createElement(m.a,{className:"d-flex align-items-center justify-content-center",style:{height:"100vh"}},r.a.createElement(d.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))},f=a(206),y=a(5),h=a.n(y),p=r.a.forwardRef((function(e,t){var a=e.children,n=e.onClick;return r.a.createElement("button",{className:"btn btn-primary dropdown-toggle btn-lg",type:"button",ref:t,onClick:function(e){e.preventDefault(),n(e)}},a)}));p.propTypes={children:h.a.any,onClick:h.a.func};var E=p,b=a(77),g=a(208),k=r.a.forwardRef((function(e,t){var a=e.children,c=e.style,l=e.className,o=e["aria-labelledby"],i=Object(n.useState)(""),u=Object(b.a)(i,2),s=u[0],m=u[1];return r.a.createElement("div",{ref:t,style:c,className:l,"aria-labelledby":o},r.a.createElement(g.a,{autoFocus:!0,className:"mx-3 my-2 w-auto",placeholder:"Type a country...",onChange:function(e){return m(e.target.value)},value:s}),r.a.createElement("ul",{className:"list-unstyled"},r.a.Children.toArray(a).filter((function(e){return!s||e.props.children.toLowerCase().startsWith(s)}))))})),w=(a(89),function(e){var t=e.data,a=e.handleSelect,n=e.selectedCountry;return r.a.createElement(f.a,{onSelect:function(e){return a(e)}},r.a.createElement(f.a.Toggle,{as:E,id:"dropdown-custom-components"},n),r.a.createElement(f.a.Menu,{bsPrefix:"dropdown-menu",as:k},t.map((function(e){return r.a.createElement(f.a.Item,{key:"".concat(e.country),eventKey:e.country,active:e.country===n},e.country)}))))}),N=a(40),C=a.n(N),j=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).tick=function(){n.setState({time:C()()})},n.state={time:C()()},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timeInterval=setInterval((function(){e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timeInterval)}},{key:"render",value:function(){var e=this.state.time;return r.a.createElement("div",{className:"time"},r.a.createElement("p",null,"As of ",r.a.createElement("strong",null,"".concat(e.format("dddd, D MMM YYYY")," ").concat(e.format("hh:mm:ss A")))))}}]),a}(r.a.Component),O=a(207),S=(a(91),function(e){var t,a=e.title,n=e.value,c=e.color;return r.a.createElement(O.a,{text:"white",bg:c,className:"mb-4"},r.a.createElement(O.a.Body,{className:"text-center my-4"},r.a.createElement(O.a.Title,null,r.a.createElement("strong",null,a)),r.a.createElement(O.a.Text,{className:"figure"},(t=n)?t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"):0)))}),T=a(203),x=a(204),M=a(41),I=a.n(M),D=function(e){var t=e.country,a=e.data,n=I()(a,(function(e){return e.country===t})),c=Object.keys(n),l=[{key:"cases",label:"Total Cases",variant:"info"},{key:"todayCases",label:"New Cases",variant:"warning"},{key:"deaths",label:"Total Deaths",variant:"danger"},{key:"recovered",label:"Total Recoveries",variant:"success"}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,null,c.map((function(e){var t=I()(l,(function(t){return t.key===e}));if(void 0!==t)return r.a.createElement(x.a,{key:e},r.a.createElement(S,{title:t.label,value:n[e],color:t.variant}))}))))},W=a(205),A=a(75),Y=a.n(A),B=(a(195),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleSelect=function(e){n.setState({country:e})},n.state={data:[],country:"World"},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;Y.a.get("https://coronavirus-19-api.herokuapp.com/countries").then((function(t){var a=t.data;e.setState({data:a})}))}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return 0===t.length?r.a.createElement(v,null):r.a.createElement(m.a,{fluid:!0},r.a.createElement(W.a,{className:"mt-3"},r.a.createElement("h1",null,"Covid-19 Updates"),r.a.createElement(j,null),r.a.createElement("p",{className:"lead"},"This page updates everyday so you stay updated on the global situation regarding the Coronovirus pandemic"),r.a.createElement(w,{data:t,handleSelect:this.handleSelect,selectedCountry:a})),r.a.createElement(D,{country:a,data:t}),r.a.createElement("footer",{className:"py-3"},r.a.createElement("p",{className:"text-muted"},"\xa9 reddeguzman | ","v".concat("1.0.1-beta.8"))))}}]),a}(r.a.Component));a(196);var R=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,t,a){e.exports=a(197)},84:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.d9be7b2c.chunk.js.map