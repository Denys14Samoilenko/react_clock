(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),o=n.n(c),a=n(2),i=n(3),r=n(5),l=n(4),s=n(1),u=n.n(s),d=(n(12),n(0));function h(e){return e.toUTCString().slice(-12,-4)}var m=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={today:new Date},e.timer=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timer=window.setInterval((function(){e.setState({today:new Date}),console.info(h(e.state.today))}),1e3)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timer)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:this.props.clockName})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:h(this.state.today)})]})}}]),n}(u.a.Component);function k(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var v=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={hasClock:!0,clockName:"Clock-0"},e.timerId=0,e.handleShowClock=function(){return e.setState({hasClock:!0})},e.handleHideClock=function(t){t.preventDefault(),e.setState({hasClock:!1})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("contextmenu",this.handleHideClock),document.addEventListener("click",this.handleShowClock),this.timerId=window.setInterval((function(){e.setState({clockName:k()})}),3300)}},{key:"componentDidUpdate",value:function(e,t){var n=this.state,c=n.clockName,o=n.hasClock;t.clockName!==c&&o&&console.debug("Renamed from ".concat(t.clockName," to ").concat(c))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.handleHideClock),document.removeEventListener("click",this.handleHideClock),window.clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state,t=e.clockName,n=e.hasClock;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),n&&Object(d.jsx)(m,{clockName:t})]})}}]),n}(u.a.Component);o.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e465d28f.chunk.js.map