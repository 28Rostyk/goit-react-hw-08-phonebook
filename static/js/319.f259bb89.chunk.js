"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[319],{7319:function(t,e,n){n.r(e),n.d(e,{default:function(){return A}});var a=n(9434),r=n(2791),s=n(4942),o=n(1413),c=n(9439),i=n(3659),u=function(t){return t.contacts.items},l=function(t){var e=t.contacts,n=t.filter;if(!n)return e.items;var a=n.toLowerCase();return e.items.filter((function(t){return t.name.toLowerCase().includes(a)}))},m=n(5984),d="ContactForm_addForm__DC0qI",h="ContactForm_addInput__ItTl5",_="ContactForm_addButton__YOtQ2",f=n(184),p={name:"",number:""},v=function(){var t=(0,r.useState)((0,o.Z)({},p)),e=(0,c.Z)(t,2),n=e[0],l=n.name,v=n.number,x=e[1],C=(0,a.v9)(u),b=(0,a.I0)();function j(t){var e=t.target,n=e.name,a=e.value;x((function(t){return(0,o.Z)((0,o.Z)({},t),{},(0,s.Z)({},n,a))}))}var N=(0,m.x0)();return(0,f.jsxs)("form",{className:d,onSubmit:function(t){t.preventDefault();var e=l;b((0,i.v6)({name:l,number:v})),C.some((function(t){return t.name===e}))?(console.log(C.name),x({name:l,number:v})):x((0,o.Z)({},p))},children:[(0,f.jsx)("label",{htmlFor:N,children:"Name"}),(0,f.jsx)("input",{className:h,type:"text",name:"name",value:l,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,id:N,onChange:j}),(0,f.jsx)("label",{htmlFor:N,children:"Phone"}),(0,f.jsx)("input",{className:h,type:"tel",name:"number",value:v,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,id:N,onChange:j}),(0,f.jsx)("button",{className:_,children:"Add contact"})]})},x=function(t){return t.filter},C="ContactList_contactList__Xc7yH",b="ContactList_contactItem__TpIoF",j="ContactList_contactName__6uKOS",N="ContactList_contactNumber__7y6Tr",g="ContactList_delButton__WYBKA",y=function(){var t=(0,a.v9)(l),e=(0,a.v9)(x),n=(0,a.I0)();var r=""!==e&&t.filter((function(t){return t.name.toLowerCase().includes(e)})),s=r||t;return(0,f.jsx)("ul",{className:C,children:s.map((function(t){var e=t.name,a=t.id,r=t.number;return(0,f.jsxs)("li",{className:b,children:[(0,f.jsxs)("span",{className:j,children:[e,":"]}),(0,f.jsx)("span",{className:N,children:r}),(0,f.jsx)("button",{className:g,onClick:function(){return n((0,i.in)(a))},children:"Delete"})]},a)}))})},F=n(5653),L="Filter_Filter__1UX1K",w=function(){var t=(0,a.I0)(),e=(0,a.v9)(x);return(0,f.jsxs)("label",{children:["Find contacts by name",(0,f.jsx)("input",{value:e,className:L,type:"text",onChange:function(e){return t((0,F.T)(e.target.value.toLowerCase()))}})]})},I="Contacts_Box__VSrMr",k="Contacts_ContactsBox__P809p",Z="Contacts_notificationMessage__V3rIG",A=function(){var t=(0,a.I0)(),e=(0,a.v9)(u);return(0,r.useEffect)((function(){t((0,i.CL)())}),[t]),(0,f.jsxs)("div",{className:I,children:[(0,f.jsx)("h1",{children:"Phonebook"}),(0,f.jsx)(v,{}),(0,f.jsxs)("div",{className:k,children:[(0,f.jsx)("h2",{children:"Contacts"}),e.length>0&&(0,f.jsx)(w,{}),(0,f.jsx)(y,{}),0===e.length&&(0,f.jsx)("p",{className:Z,children:"There are no contacts in your phonebook"})]})]})}},5984:function(t,e,n){n.d(e,{x0:function(){return a}});var a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,e){return t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=319.f259bb89.chunk.js.map