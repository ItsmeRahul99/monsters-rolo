(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(3),a=n.n(r),o=(n(12),n(4)),i=n(5),h=n(7),l=n(6),u=(n(13),n(14),n(0)),j=function(e){return Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:"robot",className:"robotImg"}),Object(u.jsx)("h3",{children:e.monster.name}),Object(u.jsx)("h4",{children:e.monster.email})]})},d=(n(16),function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("section",{className:"card-list",children:e.monsters.map((function(e){return Object(u.jsx)(j,{monster:e})}))})})}),m=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("input",{className:"search",autoFocus:!0,type:"search",placeholder:t,onChange:n})})}),b=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={name:"Rahul",monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{className:"newFont",children:"Monsters palace"}),Object(u.jsx)(m,{handleChange:this.handleChange,placeholder:"Search Monsters"}),Object(u.jsx)(d,{monsters:s})]})})}}]),n}(s.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),f()}],[[18,1,2]]]);
//# sourceMappingURL=main.b287c94a.chunk.js.map