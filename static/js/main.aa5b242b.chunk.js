(this["webpackJsonpsection-3"]=this["webpackJsonpsection-3"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(3),o=n.n(c),s=(n(14),n(1)),i=n.n(s),u=n(4),l=n(5),m=n(6),h=n(7),d=n(8),f=(n(16),n(17),function(e){var t=e.monster;return a.a.createElement("div",{className:"card-container"},a.a.createElement("img",{src:"https://robohash.org/".concat(t.id),alt:""}),a.a.createElement("h1",null,t.name),a.a.createElement("p",null,t.email))}),p=(n(18),function(e){var t=e.monsters;return a.a.createElement("div",{className:"card-list"},t.map((function(e){return a.a.createElement(f,{key:e.id,monster:e})})))}),v=(n(19),function(e){var t=e.search;return a.a.createElement("div",null,a.a.createElement("input",{id:"search-box",type:"search",placeholder:"Search...",onChange:t}))}),E=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;function t(){return(t=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return t.apply(this,arguments)})().then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=(t.monsters,t.searchField,this.state.monsters.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())})));return a.a.createElement("div",{className:"App"},a.a.createElement("div",null,a.a.createElement("h1",{id:"title"},"Monster Friends"),a.a.createElement(v,{search:function(t){return e.setState({searchField:t.target.value})}}),a.a.createElement(p,{monsters:n})))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.aa5b242b.chunk.js.map