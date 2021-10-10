(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={btnDeleteContact:"ContactList_btnDeleteContact__106Vb",contactListItem:"ContactList_contactListItem__3-f_n",numberPhone:"ContactList_numberPhone__2E0Nw"}},13:function(t,e,n){t.exports={filterContainer:"Filter_filterContainer__1y55a",labelFilter:"Filter_labelFilter__2SMlI",inputFilter:"Filter_inputFilter__WTXWK"}},16:function(t,e,n){t.exports={mainSection:"Phonebook_mainSection__3WmEs",containerContacts:"Phonebook_containerContacts__nq7M4"}},26:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),i=(n(26),n(17)),s=n(39),l=n(6),b=n.n(l),u=n(3),j=n(4),m={addContact:Object(j.b)("contacts/add"),deleteContact:Object(j.b)("contacts/delete"),changeFilter:Object(j.b)("contacts/changeFilter")},d=function(t){return t.contacts.filter},O=function(t){return t.contacts.items},h=function(t){var e=O(t),n=d(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},f=n(1);function p(){var t=Object(a.useState)(""),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),l=o[0],j=o[1],d=Object(u.c)(O),h=Object(u.b)(),p=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":j(a);break;default:return}},_=function(){c(""),j("")};return Object(f.jsxs)("form",{className:b.a.mainForm,onSubmit:function(t){t.preventDefault(),void 0===d.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?(h(m.addContact({name:n,id:Object(s.a)(),number:l})),_()):alert("".concat(n," is alreade in contacts."))},children:[Object(f.jsxs)("label",{className:b.a.labelForm,children:[Object(f.jsx)("input",{className:b.a.inputForm,value:n,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:p}),"Name"]}),Object(f.jsxs)("label",{className:b.a.labelForm,children:[Object(f.jsx)("input",{className:b.a.inputForm,value:l,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:p}),"Number"]}),Object(f.jsx)("button",{className:b.a.buttonForm,type:"submit",children:"Add contact"})]})}var _=n(12),x=n.n(_);function F(){var t=Object(u.b)(),e=Object(u.c)(h);return Object(f.jsx)("ul",{children:e.map((function(e){return Object(f.jsxs)("li",{className:x.a.contactListItem,children:[Object(f.jsx)("button",{className:x.a.btnDeleteContact,type:"button",onClick:function(){return t(m.deleteContact(e.id))},children:"delete"}),e.name,": ",Object(f.jsx)("span",{className:x.a.numberPhone,children:e.number})]},e.id)}))})}var C=n(13),v=n.n(C);function g(){var t=Object(u.b)(),e=Object(u.c)(d);return Object(f.jsx)("div",{className:v.a.filterContainer,children:Object(f.jsxs)("label",{className:v.a.labelFilter,children:[Object(f.jsx)("input",{className:v.a.inputFilter,type:"text",value:e,onChange:function(e){return t(m.changeFilter(e.target.value))}}),"Find contacts by name"]})})}var N=n(16),k=n.n(N);function y(){return Object(f.jsxs)("section",{className:k.a.mainSection,children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(p,{}),Object(f.jsxs)("div",{className:k.a.containerContacts,children:[Object(f.jsx)("h2",{children:"Contacts:"}),Object(f.jsx)(g,{}),Object(f.jsx)(F,{})]})]})}function w(){return Object(f.jsx)(y,{})}var L,S=n(19),A=n(11),P=n(7),z=n(2),I=Object(j.c)([],(L={},Object(P.a)(L,m.addContact,(function(t,e){var n=e.payload;return[].concat(Object(A.a)(t),[n])})),Object(P.a)(L,m.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),L)),T=Object(j.c)("",Object(P.a)({},m.changeFilter,(function(t,e){return e.payload}))),D=Object(z.b)({items:I,filter:T}),J=n(5),M=n(20),W=n.n(M),q=n(21),E=n.n(q),V=[].concat(Object(A.a)(Object(j.d)({serializableCheck:{ignoredActions:[J.a,J.f,J.b,J.c,J.d,J.e]}})),[E.a]),Z={key:"contacts",storage:W.a,blacklist:["filter"]},B=Object(j.a)({reducer:{contacts:Object(J.g)(Z,D)},middleWare:V,devTools:!1}),K={store:B,persistor:Object(J.h)(B)};o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(u.a,{store:K.store,children:Object(f.jsx)(S.a,{loading:null,persistor:K.persistor,children:Object(f.jsx)(w,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={mainForm:"Form_mainForm__2nmTN",labelForm:"Form_labelForm__8dgPV",inputForm:"Form_inputForm__1x4JT",buttonForm:"Form_buttonForm__1OhVh"}}},[[37,1,2]]]);
//# sourceMappingURL=main.464461a3.chunk.js.map