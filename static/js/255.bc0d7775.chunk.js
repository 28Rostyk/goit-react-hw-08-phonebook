"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[255],{255:function(e,n,a){a.r(n),a.d(n,{default:function(){return m}});var t=a(413),r=a(772),l=a(202),i=a(543),s={name:{type:"text",name:"name",required:!0,label:"Name",placeholder:"User name"},email:{type:"email",name:"email",required:!0,label:"Email",placeholder:"User email"},password:{type:"password",name:"password",required:!0,label:"Password",placeholder:"User password"}},u={name:"",email:"",password:""},o="register-form_form__AtyVK",c=a(184),d=function(e){var n=e.onSubmit,a=(0,i.Z)({initialState:u,onSubmit:n}),d=a.state,m=a.handleChange,h=a.handleSubmit,f=d.name,p=d.email,b=d.password;return(0,c.jsxs)("form",{onSubmit:h,className:o,children:[(0,c.jsx)(r.Z,(0,t.Z)({value:f,handleChange:m},s.name)),(0,c.jsx)(r.Z,(0,t.Z)({value:p,handleChange:m},s.email)),(0,c.jsx)(r.Z,(0,t.Z)({value:b,handleChange:m},s.password)),(0,c.jsx)(l.Z,{children:"Register"})]})},m=function(){return(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)("h1",{className:"page-title",children:"Register page"}),(0,c.jsx)(d,{})]})}},202:function(e,n,a){a.d(n,{Z:function(){return l}});var t="button_btn__tJ42D",r=a(184),l=function(e){var n=e.children,a=e.type,l=void 0===a?"submit":a;return(0,r.jsx)("button",{type:l,className:t,children:n})}},772:function(e,n,a){a.d(n,{Z:function(){return d}});var t=a(413);function r(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=a(791),i=a(984),s="text-field_wrapper__UiQgu",u="text-field_field__0xPaa",o=a(184),c=["label","handleChange"],d=function(e){var n=e.label,a=e.handleChange,d=r(e,c),m=(0,l.useMemo)((function(){return(0,i.x0)()}),[]);return(0,o.jsxs)("div",{className:s,children:[(0,o.jsx)("label",{htmlFor:m,children:n}),(0,o.jsx)("input",(0,t.Z)({className:u,id:m,onChange:a},d))]})}},543:function(e,n,a){var t=a(942),r=a(413),l=a(439),i=a(791);n.Z=function(e){var n=e.initialState,a=e.onSubmit,s=(0,i.useState)((0,r.Z)({},n)),u=(0,l.Z)(s,2),o=u[0],c=u[1],d=(0,i.useCallback)((function(e){var n=e.target,a=n.name,l=n.value;c((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,t.Z)({},a,l))}))}),[c]);return{state:o,setState:c,handleChange:d,handleSubmit:function(e){e.preventDefault(),a((0,r.Z)({},o)),c((0,r.Z)({},n))}}}}}]);
//# sourceMappingURL=255.bc0d7775.chunk.js.map