(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(94)},39:function(e,t,a){},90:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(6),s=a.n(c),i=(a(39),a(8)),o=a(9),l=a(11),m=a(10),u=a(12),p=a(4),d=(a(90),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(p.a,{outline:!0,color:"primary",onClick:this.props.addItem},r.a.createElement(p.d,{icon:"plus-square",className:"fa-lg mr-2 green-text"})," Add"),r.a.createElement(p.a,{outline:!0,color:"orange",onClick:this.props.removeItem},r.a.createElement(p.d,{icon:"minus-square",className:"fa-lg mr-2 pink-text"})," Remove"),r.a.createElement(p.a,{outline:!0,color:"danger",onClick:this.props.clearAll},r.a.createElement(p.d,{icon:"trash-alt",className:"fa-lg mr-2 red-text"})," Clear"))}}]),t}(n.Component)),h=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.entries,t=0,a=e.map(function(e,a){return r.a.createElement(p.f,{key:e.key,index:a,className:"mb-1"},"Task number ",t++)});return r.a.createElement(p.e,{className:"theList"},a)}}]),t}(n.Component),f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).inputElement=r.a.createRef(),e.clearAll=function(t){t.preventDefault(),e.setState({items:[]})},e.removeItem=function(t){t.preventDefault(),e.state.items.pop();var a=e.state.items;e.setState({items:a})},e.addItem=function(t){t.preventDefault();var a=e.state.currentItem;e.state.items.push(a);var n=e.state.items;e.setState({items:n,currentItem:{key:Date.now()}})},e.state={items:[],currentItem:{key:""}},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.c,{fluid:!0,className:"App heavy-rain-gradient"},r.a.createElement(p.g,{center:!0},r.a.createElement(p.b,{size:"4",className:"mt-5"},r.a.createElement(d,{addItem:this.addItem,removeItem:this.removeItem,clearAll:this.clearAll}))),r.a.createElement(p.g,{center:!0,className:"mt-5"},r.a.createElement(p.b,{size:"4",className:" mb-5"},r.a.createElement(h,{entries:this.state.items}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(91),a(92),a(93);s.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.8f7bf4f4.chunk.js.map