(this["webpackJsonpreact-food"]=this["webpackJsonpreact-food"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),o=n.n(a),i=n(4),s=n.n(i),r=(n(13),n(7)),l=n(2),u=(n(14),function(){return Object(c.jsx)("div",{children:Object(c.jsx)("p",{className:"headerText",children:"What Should I Eat?"})})}),d=(n(15),n.p+"static/media/foodChooserLogo.7f6b602e.png"),j=function(){return Object(c.jsx)("div",{className:"logoContainer",children:Object(c.jsx)("img",{className:"mainLogo",alt:"food-chooser-logo",src:d})})},b=function(e){var t=e.toggle,n=e.content,a=o.a.useState(!1),i=Object(l.a)(a,2),s=i[0],r=i[1];return Object(c.jsxs)(o.a.Fragment,{children:[t((function(){return r(!0)})),s&&n((function(){return r(!1)}))]})},m=(n(16),function(e){var t=e.children;return s.a.createPortal(Object(c.jsx)("div",{className:"modal",children:t}),document.getElementById("modal-root"))});n(17);var h=function(){var e=Object(a.useState)([{id:1,name:"Chinese"},{id:2,name:"Indian"},{id:3,name:"Pizza"},{id:4,name:"Burgers"},{id:5,name:"Nando's"},{id:6,name:"Italian"}]),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(""),s=Object(l.a)(i,2),d=s[0],h=s[1],f=Object(a.useState)((function(){return Math.floor(Math.random()*n.length)})),O=Object(l.a)(f,2),x=O[0],g=O[1],v=Object(a.useState)("You should eat..."),N=Object(l.a)(v,2),p=N[0],C=N[1],B=function(){var e={id:n.length,name:d},t=[].concat(Object(r.a)(n),[e]);o(t),h(""),console.log(n)},k=function(e){13===e.keyCode&&B()},S=function(e){var t=e.target.getAttribute("name");o(n.filter((function(e){return e.name!==t})))};return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(u,{}),Object(c.jsx)(j,{}),Object(c.jsx)("p",{className:"resultsText",children:p}),Object(c.jsxs)("div",{className:"editGoButtons",children:[Object(c.jsx)(b,{toggle:function(e){return Object(c.jsx)("button",{className:"editButton",onClick:e,children:"Edit"})},content:function(e){return Object(c.jsx)(m,{children:Object(c.jsxs)("div",{className:"listModal",children:[Object(c.jsx)("button",{className:"closeWindowButton",onClick:e,children:"\xd7"}),Object(c.jsx)("div",{className:"list",children:n.map((function(e,t){return Object(c.jsxs)("div",{className:"itemName",children:[Object(c.jsx)("p",{children:e.name}),Object(c.jsx)("button",{className:"deleteButton",name:e.name,onClick:S,children:"\xd7"})]},t)}))}),Object(c.jsxs)("div",{className:"inputArea",children:[Object(c.jsx)("input",{value:d,onChange:function(e){return h(e.target.value)},onKeyPress:k,type:"text",placeholder:"Add more food...",className:"inputTextArea"}),Object(c.jsx)("button",{type:"submit",className:"submitButton",onClick:function(){return B()},children:"Add"})]})]})})}}),Object(c.jsx)("button",{className:"goButton",onClick:function(){if(!(n.length>=1))return null;var e=Math.floor(Math.random()*n.length);g(e),C(n[x].name)},children:"Go!"})]})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),f()}],[[18,1,2]]]);
//# sourceMappingURL=main.46979a38.chunk.js.map