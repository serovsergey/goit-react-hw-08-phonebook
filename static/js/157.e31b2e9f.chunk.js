"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[157],{7157:function(e,r,a){a.r(r),a.d(r,{default:function(){return w}});a(2791);var n=a(5705),s=a(7103),o=a(6650),i=a(4565),t=a(9368),l=a(7205),m="registerPage_container__mZ5HJ",u="registerPage_form__-TYnA",d=a(9434),h=a(6838),c=a(5206),p=a(184),w=function(){var e=(0,d.I0)(),r=s.Ry({name:s.Z_("Enter your name").required("Name is required"),email:s.Z_("Enter your email").email("Enter a valid email").required("Email is required"),password:s.Z_("Enter your password").min(8,"Password should be of minimum 8 characters length").required("Password is required")}),a=(0,n.TA)({initialValues:{name:"",email:"",password:""},validationSchema:r,onSubmit:function(r){e(h.Z.register(r)).unwrap().then((function(){return c.Am.info("You have registered!")})).catch((function(e){return c.Am.error("Failed to register with error: \n".concat(e.message))}))}});return(0,p.jsxs)(o.Z,{elevation:4,className:m,children:[(0,p.jsx)(i.Z,{component:"h2",variant:"h4",align:"center",children:"Register new user"}),(0,p.jsxs)("form",{onSubmit:a.handleSubmit,className:u,children:[(0,p.jsx)(t.Z,{fullWidth:!0,id:"name",name:"name",label:"Name",value:a.values.name,onChange:a.handleChange,error:a.touched.name&&Boolean(a.errors.name),helperText:a.touched.name&&a.errors.name}),(0,p.jsx)(t.Z,{fullWidth:!0,id:"email",name:"email",label:"Email",value:a.values.email,onChange:a.handleChange,error:a.touched.email&&Boolean(a.errors.email),helperText:a.touched.email&&a.errors.email}),(0,p.jsx)(t.Z,{fullWidth:!0,id:"password",name:"password",label:"Password",type:"password",value:a.values.password,onChange:a.handleChange,error:a.touched.password&&Boolean(a.errors.password),helperText:a.touched.password&&a.errors.password}),(0,p.jsx)(l.Z,{color:"primary",variant:"contained",type:"submit",children:"Register"})]})]})}}}]);
//# sourceMappingURL=157.e31b2e9f.chunk.js.map