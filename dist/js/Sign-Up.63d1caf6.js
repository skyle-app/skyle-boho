(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Sign-Up"],{b0c0:function(t,e,a){var r=a("83ab"),s=a("9bf2").f,n=Function.prototype,o=n.toString,i=/^\s*function ([^ (]*)/,l="name";r&&!(l in n)&&s(n,l,{configurable:!0,get:function(){try{return o.call(this).match(i)[1]}catch(t){return""}}})},e08b:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("a-card",{staticClass:"card-signup header-solid h-full",attrs:{bordered:!1,bodyStyle:{paddingTop:0}},scopedSlots:t._u([{key:"title",fn:function(){return[a("h5",{staticClass:"font-semibold text-center"},[t._v("보호자 회원가입")])]},proxy:!0}])},[a("a-form",{staticClass:"login-form",attrs:{id:"components-form-demo-normal-login",form:t.form},on:{submit:t.handleSubmit}},[a("a-form-item",{staticClass:"mb-10"},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"Please input your name!"}]}],expression:"[\n\t\t\t\t\t\t'name',\n\t\t\t\t\t\t{ rules: [{ required: true, message: 'Please input your name!' }] },\n\t\t\t\t\t\t]"}],attrs:{placeholder:"보호자 이름"}})],1),a("a-form-item",{staticClass:"mb-10"},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id",{rules:[{required:!0,message:"Please input your ID!"}]}],expression:"[\n\t\t\t\t\t\t'id',\n\t\t\t\t\t\t{ rules: [{ required: true, message: 'Please input your ID!' }] },\n\t\t\t\t\t\t]"}],attrs:{placeholder:"보호자 아이디"}})],1),a("a-form-item",{staticClass:"mb-10"},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"Please input your Password!"}]}],expression:"[\n\t\t\t\t\t\t'password',\n\t\t\t\t\t\t{ rules: [{ required: true, message: 'Please input your Password!' }] },\n\t\t\t\t\t\t]"}],attrs:{type:"password",placeholder:"보호자 비밀번호"}})],1),a("a-form-item",{staticClass:"mb-10"},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["phone",{rules:[{required:!0,message:"Please input your phone number!"}]}],expression:"[\n\t\t\t\t\t\t'phone',\n\t\t\t\t\t\t{ rules: [{ required: true, message: 'Please input your phone number!' }] },\n\t\t\t\t\t\t]"}],attrs:{placeholder:"보호자 휴대전화 번호","max-length":11}})],1),a("a-form-item",{staticClass:"mb-10"},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["birth",{rules:[{required:!0,message:"Please input your birth!"}]}],expression:"[\n\t\t\t\t\t\t'birth',\n\t\t\t\t\t\t{ rules: [{ required: true, message: 'Please input your birth!' }] },\n\t\t\t\t\t\t]"}],attrs:{placeholder:"보호자 생년월일"}})],1),a("a-form-item",{staticClass:"mb-10"},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{required:!0,message:"Please input your email!"}]}],expression:"[\n\t\t\t\t\t\t'email',\n\t\t\t\t\t\t{ rules: [{ required: true, message: 'Please input your email!' }] },\n\t\t\t\t\t\t]"}],attrs:{placeholder:"보호자 이메일"}})],1),a("a-form-item",{staticClass:"mb-10"},[a("a-checkbox",{directives:[{name:"decorator",rawName:"v-decorator",value:["remember",{valuePropName:"checked",initialValue:!0}],expression:"[\n\t\t\t\t\t\t'remember',\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tvaluePropName: 'checked',\n\t\t\t\t\t\t\tinitialValue: true,\n\t\t\t\t\t\t},\n\t\t\t\t\t\t]"}]},[a("a",{staticClass:"font-bold text-dark",attrs:{href:"https://skyle.kr/policy/terms"}},[t._v("이용약관")]),t._v("과 "),a("a",{staticClass:"font-bold text-dark",attrs:{href:"https://skyle.kr/policy/privacy"}},[t._v("개인정보 처리방침")]),t._v("에 동의합니다. ")])],1),a("a-form-item",[a("a-button",{staticClass:"login-form-button",attrs:{type:"primary",block:"","html-type":"submit"}},[t._v(" 회원 가입 ")])],1)],1),a("p",{staticClass:"font-semibold text-muted text-center"},[t._v("이미 계정이 있으신가요? "),a("router-link",{staticClass:"font-bold text-dark",attrs:{to:"/sign-in"}},[t._v("로그인")])],1)],1)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sign-up-header",staticStyle:{"background-image":"url('images/bg-signup.jpg')"}},[a("div",{staticClass:"content"},[a("h1",{staticClass:"mb-5"},[t._v("회원 가입")])])])}],n=(a("b0c0"),a("bc3a")),o=a.n(n),i={data:function(){return{}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"normal_login"})},created:function(){$cookies.isKey("token")&&(alert("이미 로그인 되어 있습니다."),location.hash="#/manage")},methods:{handleSubmit:function(t){t.preventDefault(),this.form.validateFields((function(t,e){if(!t){var a=new FormData;a.append("name",e.name),a.append("id",e.id),a.append("password",e.password),a.append("phone",e.phone),a.append("birth",e.birth),a.append("email",e.email),o.a.post("https://api.skyle.kr/api/v1/signup",a).then((function(t){console.log(t),console.log(t.data),200!=t.data.status?(alert(t.data.message),console.error("회원가입 오류: ",t.data.error)):(document.cookie="token="+t.data.token,alert(t.data.message),location.hash="#/manage")})).catch((function(t){console.error("통신 오류: ",t)}))}}))}}},l=i,u=a("2877"),m=Object(u["a"])(l,r,s,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=Sign-Up.63d1caf6.js.map