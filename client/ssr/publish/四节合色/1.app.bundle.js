webpackJsonp([1],{309:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"config",function(){return i});var a=n(766),i={name:"tabs",menus:[],editable:{style:{layout:["basic"],title:["basic"],main:["basic"]}}},s=a.a;e.default=s;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"config","E:/test/active-cms/client/components/tabs/index.ts"),__REACT_HOT_LOADER__.register(s,"default","E:/test/active-cms/client/components/tabs/index.ts"))}()},312:function(t,e,n){var a,i;!function(){"use strict";function n(){for(var t=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var i=typeof a;if("string"===i||"number"===i)t.push(a);else if(Array.isArray(a))t.push(n.apply(null,a));else if("object"===i)for(var c in a)s.call(a,c)&&a[c]&&t.push(c)}}return t.join(" ")}var s={}.hasOwnProperty;void 0!==t&&t.exports?t.exports=n:(a=[],void 0!==(i=function(){return n}.apply(e,a))&&(t.exports=i))}()},766:function(t,e,n){"use strict";var a=n(93),i=n.n(a),s=n(92),c=n.n(s),r=n(41),o=n.n(r),l=n(42),u=n.n(l),d=n(89),_=n.n(d),m=n(88),f=n.n(m),v=n(32),p=n.n(v),b=n(312),E=n.n(b),y=n(868),h=(n.n(y),function(t){function e(t){o()(this,e);var n=_()(this,(e.__proto__||c()(e)).call(this,t));return n.state={data:[{id:"aasd1-12313",title:"Tab 1",content:"Content 1"},{id:"bbssa-12313",title:"Tab 2",content:"Content 2"}],activeId:"aasd1-12313"},n.handleActive=n.handleActive.bind(n),n}return f()(e,t),u()(e,[{key:"handleActive",value:function(t){var e=t.currentTarget.getAttribute("data-id");this.setState({activeId:e})}},{key:"render",value:function(){var t=this,e=this.props.style,n=this.state,a=n.data,s=n.activeId;return p.a.createElement("div",{className:"ac-tabs",style:i()({},e&&i()({},e.layout))},this.props.children,p.a.createElement("div",{className:"ac-tabs-menu",style:i()({},e&&i()({},e.title))},a.map(function(e){return p.a.createElement("div",{key:e.id,"data-id":e.id,className:"ac-tabs-menu-items",onClick:t.handleActive},e.title)})),p.a.createElement("div",{className:"ac-tabs-main",style:i()({},e&&i()({},e.main))},a.map(function(t){return p.a.createElement("div",{key:t.id,className:E()("ac-tabs-main-items",{"ac-tabs-main-items-hide":s!==t.id})},t.content)})))}}]),e}(p.a.Component)),A=h;e.a=A;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(h,"Tabs","E:/test/active-cms/client/components/tabs/Tabs.tsx"),__REACT_HOT_LOADER__.register(A,"default","E:/test/active-cms/client/components/tabs/Tabs.tsx"))}()},868:function(t,e){}});