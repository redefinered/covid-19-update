(this["webpackJsonpcovid-19-update"]=this["webpackJsonpcovid-19-update"]||[]).push([[0],{194:function(e,t,a){},196:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),l=(a(84),a(27)),i=a(28),u=a(31),s=a(30),m=a(200),d=a(201),v=function(){return r.a.createElement(m.a,{className:"d-flex align-items-center justify-content-center",style:{height:"100vh"}},r.a.createElement(d.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))},f=a(205),y=a(5),h=a.n(y),p=r.a.forwardRef((function(e,t){var a=e.children,n=e.onClick;return r.a.createElement("button",{className:"btn btn-primary dropdown-toggle",type:"button",ref:t,onClick:function(e){e.preventDefault(),n(e)}},a)}));p.propTypes={children:h.a.any,onClick:h.a.func};var E=p,b=a(77),g=a(207),k=r.a.forwardRef((function(e,t){var a=e.children,c=e.style,o=e.className,l=e["aria-labelledby"],i=Object(n.useState)(""),u=Object(b.a)(i,2),s=u[0],m=u[1];return r.a.createElement("div",{ref:t,style:c,className:o,"aria-labelledby":l},r.a.createElement(g.a,{autoFocus:!0,className:"mx-3 my-2 w-auto",placeholder:"Type a country...",onChange:function(e){return m(e.target.value)},value:s}),r.a.createElement("ul",{className:"list-unstyled"},r.a.Children.toArray(a).filter((function(e){return!s||e.props.children.toLowerCase().startsWith(s)}))))})),w=(a(89),function(e){var t=e.data,a=e.handleSelect,n=e.selectedCountry;return r.a.createElement(f.a,{onSelect:function(e){return a(e)}},r.a.createElement(f.a.Toggle,{as:E,id:"dropdown-custom-components"},n),r.a.createElement(f.a.Menu,{bsPrefix:"dropdown-menu",as:k},t.map((function(e){return r.a.createElement(f.a.Item,{key:"".concat(e.country),eventKey:e.country,active:e.country===n},e.country)}))))}),C=a(40),N=a.n(C),S=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).tick=function(){n.setState({time:N()()})},n.state={time:N()()},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timeInterval=setInterval((function(){e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timeInterval)}},{key:"render",value:function(){var e=this.state.time;return r.a.createElement("div",{className:"time"},r.a.createElement("p",null,"As of ".concat(e.format("dddd, D MMM YYYY")," ").concat(e.format("hh:mm:ss A"))))}}]),a}(r.a.Component),j=a(206),O=function(e){var t,a=e.title,n=e.value,c=e.color;return r.a.createElement(j.a,{text:"white",bg:c},r.a.createElement(j.a.Body,{className:"text-center my-4"},r.a.createElement(j.a.Title,null,a),r.a.createElement(j.a.Text,null,(t=n)?t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"):0)))},x=a(202),M=a(203),T=a(41),I=a.n(T),D=function(e){var t=e.country,a=e.data,n=I()(a,(function(e){return e.country===t})),c=Object.keys(n),o=[{key:"cases",label:"Total Cases",variant:"info"},{key:"todayCases",label:"New Cases",variant:"warning"},{key:"deaths",label:"Deaths",variant:"danger"},{key:"recovered",label:"Recoveries",variant:"success"}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,c.map((function(e){var t=I()(o,(function(t){return t.key===e}));if(void 0!==t)return r.a.createElement(M.a,{key:e},r.a.createElement(O,{title:t.label,value:n[e],color:t.variant}))}))))},W=a(204),A=a(75),Y=a.n(A),B=(a(194),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleSelect=function(e){n.setState({country:e})},n.state={data:[],country:"World"},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;Y.a.get("https://coronavirus-19-api.herokuapp.com/countries").then((function(t){var a=t.data;e.setState({data:a})}))}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return 0===t.length?r.a.createElement(v,null):r.a.createElement(m.a,{fluid:!0},r.a.createElement(W.a,{className:"mt-3"},r.a.createElement("h1",null,"Covid-19 Updates"),r.a.createElement(S,null),r.a.createElement("p",{className:"lead"},"This page updates everyday so you stay updated on the global situation regarding the Coronovirus pandemic"),r.a.createElement(w,{data:t,handleSelect:this.handleSelect,selectedCountry:a})),r.a.createElement(D,{country:a,data:t}),r.a.createElement("footer",{className:"py-3"},r.a.createElement("p",{className:"text-muted"},"\xa9 SimpleSoft | ","Version: ".concat("1.0.1-beta.1"))))}}]),a}(r.a.Component));a(195);var R=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,t,a){e.exports=a(196)},84:function(e,t,a){},89:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.4f959d87.chunk.js.map