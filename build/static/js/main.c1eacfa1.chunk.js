(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__xjR_b",label:"ContactForm_label__2vNPs",input:"ContactForm_input__14utx",button:"ContactForm_button__11Usi"}},,,function(t,e,n){t.exports={list:"ContactList_list__1dy_m",item:"ContactList_item__16O4z",button:"ContactList_button__2pRqI"}},,,function(t,e,n){t.exports={label:"Filter_label__20Tnj",input:"Filter_input__1wrl4"}},function(t,e,n){t.exports={title:"App_title__UORLo",section:"App_section__vp4Ri"}},,,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(11),s=n.n(o),r=(n(16),n(10)),i=n(3),l=n(20),u=n(2),b=n.n(u),j=n(0);function m(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),o=c[0],s=c[1],r=Object(a.useState)(""),l=Object(i.a)(r,2),u=l[0],m=l[1],d=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":s(a);break;case"number":m(a);break;default:return}};return Object(j.jsxs)("form",{className:b.a.form,onSubmit:function(t){t.preventDefault(),e(o,u),s(""),m("")},children:[Object(j.jsxs)("label",{className:b.a.label,children:["Name",Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",className:b.a.input,placeholder:"Jon Jonson",value:o,onChange:d,required:!0})]}),Object(j.jsxs)("label",{className:b.a.label,children:["Number",Object(j.jsx)("input",{className:b.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,placeholder:"111-11-11",value:u,onChange:d})]}),Object(j.jsx)("button",{className:b.a.button,type:"submit",children:"Add contact"})]})}var d=n(5),p=n.n(d),f=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:p.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:p.a.item,children:[Object(j.jsxs)("p",{className:p.a.info,children:[a,": ",c]}),Object(j.jsx)("button",{className:p.a.button,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},O=n(8),h=n.n(O),_=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:h.a.label,children:["Find contacts by name",Object(j.jsx)("input",{className:h.a.input,type:"text",value:e,onChange:n})]})},x=n(9),v=n.n(x),C=function(){var t=Object(a.useState)((function(){var t;return null!==(t=JSON.parse(localStorage.getItem("contacts")))&&void 0!==t?t:[]})),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(""),s=Object(i.a)(o,2),u=s[0],b=s[1];Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:v.a.title,children:"Phonebook"}),Object(j.jsx)(m,{onSubmit:function(t,e){if(n.find((function(t){return t.name.toLowerCase()===e.toLowerCase()})))return alert("".concat(e," is already in contacts"));Object(r.a)(n).push({id:Object(l.a)(),name:e,number:t}),c(Object(r.a)(n))}}),Object(j.jsx)("h2",{className:v.a.section,children:"Contacts"}),Object(j.jsx)(_,{value:u,onChange:function(t){var e=t.target;b(e.value)}}),Object(j.jsx)(f,{contacts:function(){var t=u.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))},onDeleteContact:function(t){c(n.filter((function(e){return e.id!==t})))}})]})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.c1eacfa1.chunk.js.map