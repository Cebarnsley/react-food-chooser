(this["webpackJsonpreact-food"]=this["webpackJsonpreact-food"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),o=n.n(a),s=n(4),i=n.n(s),r=(n(13),n(7)),l=n(2),u=(n(14),function(){return Object(c.jsx)("div",{children:Object(c.jsx)("p",{className:"headerText",children:"What Should I Eat?"})})}),d=(n(15),function(){return Object(c.jsx)("div",{className:"logoContainer",children:Object(c.jsx)("img",{className:"mainLogo",alt:"food-chooser-logo",src:window.location.origin+"/images/foodChooserLogo.png"})})}),j=function(e){var t=e.toggle,n=e.content,a=o.a.useState(!1),s=Object(l.a)(a,2),i=s[0],r=s[1];return Object(c.jsxs)(o.a.Fragment,{children:[t((function(){return r(!0)})),i&&n((function(){return r(!1)}))]})},b=(n(16),function(e){var t=e.children;return i.a.createPortal(Object(c.jsx)("div",{className:"modal",children:t}),document.getElementById("modal-root"))});n(17);var m=function(){var e=Object(a.useState)([{name:"Chinese"},{name:"Indian"},{name:"Pizza"},{name:"Burgers"},{name:"Nando's"},{name:"Italian"}]),t=Object(l.a)(e,2),n=t[0],o=t[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),m=i[0],h=i[1],O=Object(a.useState)(0),f=Object(l.a)(O,2),x=f[0],g=f[1],v=Object(a.useState)("You should eat..."),N=Object(l.a)(v,2),p=N[0],C=N[1],B=function(e){var t=e.target.getAttribute("name");o(n.filter((function(e){return e.name!==t})))};return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(u,{}),Object(c.jsx)(d,{}),Object(c.jsx)("p",{className:"resultsText",children:p}),Object(c.jsxs)("div",{className:"editGoButtons",children:[Object(c.jsx)(j,{toggle:function(e){return Object(c.jsx)("button",{className:"editButton",onClick:e,children:"Edit"})},content:function(e){return Object(c.jsx)(b,{children:Object(c.jsxs)("div",{className:"listModal",children:[Object(c.jsx)("button",{className:"closeWindowButton",onClick:e,children:"\xd7"}),Object(c.jsxs)("div",{className:"list",children:[n.map((function(e){return Object(c.jsxs)("div",{className:"itemName",children:[Object(c.jsx)("p",{children:e.name}),Object(c.jsx)("button",{className:"deleteButton",name:e.name,onClick:B,children:"\xd7"})]})})),Object(c.jsxs)("div",{className:"inputArea",children:[Object(c.jsx)("input",{value:m,onChange:function(e){return h(e.target.value)},type:"text",placeholder:"Add more food...",className:"inputTextArea"}),Object(c.jsx)("button",{type:"submit",className:"submitButton",onClick:function(){return function(){var e={name:m},t=[].concat(Object(r.a)(n),[e]);o(t),h("")}()},children:"Add"})]})]})]})})}}),Object(c.jsx)("button",{className:"goButton",onClick:function(){if(!(n.length>=1))return null;var e=Math.floor(Math.random()*n.length);g(e),C(n[x].name)},children:"Go!"})]})]})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),h()}],[[18,1,2]]]);
//# sourceMappingURL=main.30af1746.chunk.js.map