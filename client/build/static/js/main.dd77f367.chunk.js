(this["webpackJsonpflatshare-tailwind"]=this["webpackJsonpflatshare-tailwind"]||[]).push([[0],{46:function(e,t,a){},47:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(12),s=a.n(c),i=(a(46),a(47),a(26)),l=a.n(i),o=a(37),d=a(16),b=a(40),j=a(15),u=a(3),x="REGISTER",p=a(17),h=a(97),m=a(1);function f(e){return Object(m.jsx)(h.a,Object(b.a)({elevation:6,color:"warning",severity:"warning",variant:"filled"},e))}var O=Object(p.b)((function(e){return{redirectTo:e.redirectTo,data:e.data}}),{register:function(e){return console.log("=== REGISTER ACTION DISPATCHED ==="),{type:x,payload:e}}})((function(e){var t=Object(r.useState)(!1),a=Object(d.a)(t,2),n=a[0],c=a[1],s=Object(r.useState)(""),i=Object(d.a)(s,2),b=i[0],x=i[1],p=Object(r.useState)(""),h=Object(d.a)(p,2),O=h[0],v=h[1],y=Object(r.useState)(""),g=Object(d.a)(y,2),N=g[0],w=g[1],T=Object(r.useState)(""),C=Object(d.a)(T,2),S=C[0],k=C[1],E=Object(r.useState)(""),I=Object(d.a)(E,2),R=I[0],F=I[1];var A=function(){var t=Object(o.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==N&&""!==S&&""!==b&&""!==O){t.next=6;break}return"Name | Mobile Number | City  are required.\n",F("Name | Mobile Number | City  are required.\n"),t.abrupt("return");case 6:if(!isNaN(parseInt(S))){t.next=12;break}return"Mobile Number is invalid",F("Mobile Number is invalid"),t.abrupt("return");case 12:e.register({name:N,number:S,selected:b,email:O});case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return e.redirectTo?Object(m.jsx)(u.a,{to:e.redirectTo}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"fixed relative inset-0 flex items-center justify-center",children:Object(m.jsx)("button",{type:"button",onClick:function(){c(!0)},className:"transition duration-500 ease-in-out p-6 m-6 bg-white text-purple font-bold rounded-full py-5 px-11 text-xl hover:text-white hover:bg-purple transform hover:-translate-y-1 hover:scale-110",children:"Apply Now!"})}),Object(m.jsx)(j.b,{appear:!0,show:n,as:r.Fragment,children:Object(m.jsx)(j.a,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:function(){c(!1)},children:Object(m.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[Object(m.jsx)(j.b.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(m.jsx)(j.a.Overlay,{className:"fixed inset-0"})}),Object(m.jsx)("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),Object(m.jsx)(j.b.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(m.jsxs)("div",{className:"inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl",children:[Object(m.jsx)(j.a.Title,{className:"text-lg font-medium leading-6 text-gray-900",children:Object(m.jsxs)("span",{className:"flex p-10 justify-center",children:["We're Excited to see you join."," ",Object(m.jsx)("span",{className:"wave",children:"\ud83d\udc4b"})]})}),Object(m.jsxs)("div",{className:"mt-2",children:[Object(m.jsxs)("div",{className:"flex flex-col m-2",children:[Object(m.jsx)("span",{children:"Full Name"}),Object(m.jsx)("input",{type:"text",className:"p-2 border-0 border-b-2 border-purple focus:ring-opacity-0",value:N,onChange:function(e){return w(e.target.value)},name:"name"})]}),Object(m.jsxs)("div",{className:"flex flex-col m-2",children:[Object(m.jsx)("span",{children:"Mobile Number"}),Object(m.jsx)("input",{type:"text",className:"p-2 border-0 border-b-2 border-purple focus:ring-opacity-0",value:S,onChange:function(e){return k(e.target.value)},name:"num"})]}),Object(m.jsxs)("div",{className:"flex flex-col m-2",children:[Object(m.jsx)("span",{children:"Email"}),Object(m.jsx)("input",{type:"text",className:"p-2 border-0 border-b-2 border-purple focus:ring-opacity-0",value:O,onChange:function(e){return v(e.target.value)},name:"email"})]}),Object(m.jsxs)("div",{className:"flex flex-col m-2",children:[Object(m.jsx)("span",{children:"City"}),Object(m.jsx)("input",{type:"text",className:"p-2 border-0 border-b-2 border-purple focus:ring-opacity-0",value:b,onChange:function(e){return x(e.target.value)},name:"name"})]}),Object(m.jsxs)("div",{className:"flex justify-center ",children:[Object(m.jsx)("button",{className:"transition duration-500 ease-in-out p-6 m-6 bg-purple text-white font-bold rounded-full py-5 px-11 mt-40 text-xl  transform hover:-translate-y-1 hover:scale-110",onClick:A,children:"Submit"}),(e.error||R)&&Object(m.jsx)(f,{severity:"error",onClick:function(){return F(null)},children:e.error||R})]})]})]})})]})})})]})})),v=function(){return Object(m.jsxs)("div",{className:" flex flex-col h-screen  bg-dark_blue bg-waves bg-bottom bg-no-repeat",children:[Object(m.jsx)("div",{className:"flex justify-center bg-purple",children:Object(m.jsx)("span",{className:"font-bold text-3xl text-white p-4",children:"FlatShare"})}),Object(m.jsxs)("div",{className:" flex flex-col justify-center items-center ",children:[Object(m.jsx)("div",{children:Object(m.jsx)("span",{className:"flex text-white font-bold text-4xl p-10 m-10",children:"Hey, We are still in private beta opening up soon!"})}),Object(m.jsx)("div",{children:Object(m.jsx)(O,{})})]})]})},y=a(25),g=Object(p.b)((function(e){return{redirectTo:e.redirectTo,data:e.data}}),{})((function(e){if(e.data){var t=e.data.name,a=e.data.count;return Object(m.jsxs)("div",{className:" flex flex-col h-screen  bg-dark_blue bg-waves bg-bottom bg-no-repeat",children:[Object(m.jsx)("div",{className:"flex justify-center bg-purple",children:Object(m.jsx)("span",{className:"font-bold text-3xl text-white p-4",children:"Thank You!"})}),Object(m.jsx)("div",{className:" flex flex-col justify-center items-center ",children:Object(m.jsx)("div",{children:Object(m.jsxs)("span",{className:"flex text-white  text-4xl p-10 m-10",children:[t,", we'll text you the invite soon. You are ",a," on the waiting list, Invite your firends to move up in the list"]})})})]})}return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u.a,{to:"/"}),";"]})})),N=function(){return Object(m.jsxs)("div",{className:" flex flex-col h-screen  bg-dark_blue bg-waves bg-bottom bg-no-repeat",children:[Object(m.jsx)("div",{className:"flex justify-center bg-purple",children:Object(m.jsx)("span",{className:"font-bold text-3xl text-white p-4",children:"Oh No!! Something went wrong, Please try again later"})}),Object(m.jsx)("div",{className:" flex flex-col justify-center items-center ",children:Object(m.jsx)("div",{children:Object(m.jsx)("span",{className:"flex text-white  text-4xl p-10 m-10",children:"If you still experience the same error please mail me at @mail.com"})})})]})},w=function(e){return Object(m.jsxs)("div",{className:" flex flex-col h-screen  bg-dark_blue bg-waves bg-bottom bg-no-repeat",children:[Object(m.jsx)("div",{className:"flex justify-center bg-purple",children:Object(m.jsx)("span",{className:"font-bold text-3xl text-white p-4",children:"Whooops!"})}),Object(m.jsx)("div",{className:" flex flex-col justify-center items-center ",children:Object(m.jsx)("div",{children:Object(m.jsx)("span",{className:"flex text-white  text-4xl p-10 m-10",children:"The data you provided already exists in our Database."})})})]})},T=a(21),C="API_REQUEST",S=a(39),k=a.n(S),E="REDIRECT",I=function(e,t){return console.log("=== REDIRECT ACTION DISPATCHED ==="),t||(t={data:"Something went wrong"}),{type:E,payload:e,data:t.data}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return{redirectTo:t.payload,data:t.data};default:return e}},F=Object(T.a)((function(){return function(e){return function(t){switch(e(t),t.type){case x:e(function(e){var t=e.url,a=e.method,r=e.data;return{type:C,meta:{url:t,method:a,data:r}}}({url:"".concat("http://localhost:3001","/submit"),method:"POST",data:t.payload}))}}}}),(function(e){var t=e.dispatch;return function(e){return function(a){if(e(a),a.type===C){var r=a.meta,n=r.url,c=r.method,s=r.data;k()({method:c,url:n,data:s}).then((function(e){var a=e.data;e.stat;t(function(e){return{type:"API_SUCCESS",payload:e.response}}({response:a})),"User already exists!"===a.data.stat?t(I("/exists",a)):"New user added"===a.data.stat&&t(I("/thank-you",a))})).catch((function(e){console.log(e),t({type:"API_ERROR",payload:{error:e.response}.error}),t(I("/error",void 0))}))}}}}))(T.b)(R);var A=function(){return Object(m.jsx)(p.a,{store:F,children:Object(m.jsx)(y.a,{children:Object(m.jsx)("div",{className:"App",style:{marginTop:40},children:Object(m.jsxs)(u.d,{children:[Object(m.jsx)(u.b,{exact:!0,path:"/",children:Object(m.jsx)(v,{})}),Object(m.jsx)(u.b,{path:"/thank-you",children:Object(m.jsx)(g,{})}),Object(m.jsx)(u.b,{path:"/error",children:Object(m.jsx)(N,{})}),Object(m.jsx)(u.b,{path:"/exists",children:Object(m.jsx)(w,{})})]})})})})};s.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(A,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.dd77f367.chunk.js.map