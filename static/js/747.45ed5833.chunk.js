"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[747],{7747:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(9434),r=n(7689),l=n(8724),i=n(9869),s=n(1413),o=n(1228),u=n(8202),c=n(8543),m={name:{type:"text",name:"name",required:!0,label:"Name",placeholder:"User name"},email:{type:"email",name:"email",required:!0,label:"Email",placeholder:"User email"},password:{type:"password",name:"password",required:!0,label:"Password",placeholder:"User password"}},d={name:"",email:"",password:""},f="register-form_form__AtyVK",h="register-form_textField__b+2F5",p=n(184),b=function(e){var t=e.onSubmit,n=(0,c.Z)({initialState:d,onSubmit:t}),a=n.state,r=n.handleChange,l=n.handleSubmit,i=a.name,b=a.email,g=a.password;return(0,p.jsxs)("form",{onSubmit:l,className:f,children:[(0,p.jsx)(o.Z,(0,s.Z)({className:h,value:i,handleChange:r},m.name)),(0,p.jsx)(o.Z,(0,s.Z)({className:h,value:b,handleChange:r},m.email)),(0,p.jsx)(o.Z,(0,s.Z)({className:h,value:g,handleChange:r},m.password)),(0,p.jsx)(u.Z,{children:"Register"})]})},g="register-page_page_title__t8HKv",v=function(){var e=(0,a.v9)(i.y6),t=(0,a.I0)();return e?(0,p.jsx)(r.Fg,{to:"/my-contacts"}):(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)("h1",{className:g,children:"Register page"}),(0,p.jsx)(b,{onSubmit:function(e){t((0,l.IU)(e))}})]})}},8202:function(e,t,n){n.d(t,{Z:function(){return l}});var a="button_btn__tJ42D",r=n(184),l=function(e){var t=e.children,n=e.type,l=void 0===n?"submit":n;return(0,r.jsx)("button",{type:l,className:a,children:t})}},1228:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(1413),r=n(3366);var l=n(2791),i=n(5984),s="text-field_wrapper__UiQgu",o="text-field_field__0xPaa",u=n(184),c=["label","handleChange"],m=function(e){var t=e.label,n=e.handleChange,m=function(e,t){if(null==e)return{};var n,a,l=(0,r.Z)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,c),d=(0,l.useMemo)((function(){return(0,i.x0)()}),[]);return(0,u.jsxs)("div",{className:s,children:[(0,u.jsx)("label",{htmlFor:d,children:t}),(0,u.jsx)("input",(0,a.Z)({className:o,id:d,onChange:n},m))]})}},8543:function(e,t,n){var a=n(4942),r=n(1413),l=n(9439),i=n(2791);t.Z=function(e){var t=e.initialState,n=e.onSubmit,s=(0,i.useState)((0,r.Z)({},t)),o=(0,l.Z)(s,2),u=o[0],c=o[1],m=(0,i.useCallback)((function(e){var t=e.target,n=t.name,l=t.value;c((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,a.Z)({},n,l))}))}),[c]);return{state:u,setState:c,handleChange:m,handleSubmit:function(e){e.preventDefault(),n((0,r.Z)({},u)),c((0,r.Z)({},t))}}}},5984:function(e,t,n){n.d(t,{x0:function(){return a}});var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=747.45ed5833.chunk.js.map