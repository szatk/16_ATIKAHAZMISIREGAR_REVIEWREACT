(this["webpackJsonpd5-review-react"]=this["webpackJsonpd5-review-react"]||[]).push([[0],{52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var c=t(1),n=t.n(c),s=t(14),l=t.n(s),i=t(4),r=t(10),o=t(31),d=t(3),j=t(15),m=t(32),b=t.n(m),u=t(9),A={fullname:/^[a-zA-Z][a-zA-Z\s]{6,50}/,email:/^[a-zA-Z0-9](([a-zA-Z0-9]+\.)|([a-zA-Z0-9])*)[a-zA-Z0-9]+@([a-zA-Z]+\.)+([a-zA-Z]+)$/,phone:/^(08)([0-9]{8,11})$/},h={fullname:{value:"",touched:!1,required:!0,err:!1,errMessage:"Hanya karakter alphabet dengan panjang 6 - 50 karakter"},email:{value:"",touched:!1,required:!0,err:!1,errMessage:"Email tidak valid. Pastikan penulisan sudah benar seperti: example@mail.com"},phone:{value:"",touched:!1,required:!0,err:!1,errMessage:"Nomor handphone tidak valid. Pastikan hanya berisi angka"},nationality:{value:"Indonesia"},message:{value:""}},x=Object(j.b)({name:"contact",initialState:h,reducers:{changed:function(e,a){var t=a.payload,c=t.name,n=t.value;if(e[c]&&(e[c].value=n,A[c])){var s=A[c].test(n);e[c].err=!s}},touched:function(e,a){var t=a.payload.name;e[t].hasOwnProperty("touched")&&!e[t].touched&&(e[t].touched=!0)},reset:function(){return h},findAllInvalid:function(e){for(var a in e){var t=e[a];(t.err||t.required&&!t.value)&&(e[a].err=!0,e[a].touched=!0)}}}}),g=x.reducer,v=x.actions,O=v.changed,f=v.reset,p=v.touched,N=v.findAllInvalid,w=Object(d.b)({contact:g}),Y={key:"root",version:1,storage:b.a},H=Object(u.g)(Y,w),B=Object(j.a)({reducer:H,middleware:function(e){return e({serializableCheck:{ignoredActions:[u.a,u.f,u.b,u.c,u.d,u.e]}})}}),G=Object(u.h)(B),P=t(2),y=t(13);function M(){return(new Date).toLocaleString("en-GB").split(" ")[1]}var C=t(0);function X(){return Object(C.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light px-5 shadow-sm",children:Object(C.jsxs)("div",{className:"container-fluid",children:[Object(C.jsx)(i.b,{className:"navbar-brand",to:"/",children:Object(C.jsx)("img",{src:"data:image/png;base64,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",alt:"logo perusahaan"})}),Object(C.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(C.jsx)("span",{className:"navbar-toggler-icon"})}),Object(C.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarContent",children:[Object(C.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"}),Object(C.jsxs)("ul",{className:"navbar-nav d-flex align-items-center",children:[Object(C.jsx)("li",{className:"nav-item px-2 ",children:Object(C.jsx)(i.b,{exact:!0,to:"/",className:"nav-link",activeClassName:"my-active","aria-current":"page",children:"HOME"})}),Object(C.jsx)("li",{className:"nav-item px-2",children:Object(C.jsx)(i.b,{exact:!0,to:"/news",className:"nav-link",activeClassName:"my-active","aria-current":"page",children:"NEWS"})}),Object(C.jsx)("li",{className:"nav-item px-2",children:Object(C.jsx)(i.b,{exact:!0,to:"/",className:"nav-link","aria-current":"page",children:"EXPERIENCE"})}),Object(C.jsx)("li",{className:"nav-item px-2",children:Object(C.jsx)(i.b,{className:"nav-link contact-us","aria-current":"page",to:"/contact",children:"CONTACT"})})]})]})]})})}var D=t.p+"static/media/matthew-hamilton-tNCH0sKSZbA-unsplash.52885822.jpg";t(52);function I(){var e=function(){var e=Object(c.useState)((function(){return M()})),a=Object(y.a)(e,2),t=a[0],n=a[1];return Object(c.useEffect)((function(){var e=setInterval((function(){n(M())}),1e3);return function(){return clearInterval(e)}}),[]),t}();return Object(C.jsxs)("div",{id:"my-content",children:[Object(C.jsx)(X,{}),Object(C.jsx)("div",{className:"header-body d-flex justify-content-center ",children:Object(C.jsxs)("div",{className:"container mt-5",children:[Object(C.jsx)("div",{className:"row mb-5",children:Object(C.jsx)("h1",{style:{margin:"auto",textAlign:"center"},children:e})}),Object(C.jsxs)("div",{className:"row",children:[Object(C.jsx)("div",{className:"col-md-5 ",children:Object(C.jsx)("img",{className:"my-img",src:D,alt:"profile-pic"})}),Object(C.jsxs)("div",{className:"col-md-7",children:[Object(C.jsx)("h6",{className:"deskripsi",children:"Hi, my name is"}),Object(C.jsx)("h1",{className:"deskripsi",children:"Anne Sullivian"}),Object(C.jsx)("h4",{className:"deskripsi",children:"I Build things for the web"}),Object(C.jsx)("div",{className:"container-my-button",children:Object(C.jsx)(i.b,{to:"/contact",children:Object(C.jsx)("button",{type:"button",className:"btn btn-primary btn-lg btn-getInTouch",children:"Get In Touch"})})})]})]})]})})]})}t(53);var z=t.p+"static/media/charles-rRWiVQzLm7k-unsplash.0b577bce.jpg";function J(){var e=Object(r.c)((function(e){return e.contact})),a=Object(r.b)(),t=Object(P.f)();function n(e){var t=e.target,c=t.name,n=t.value;a(O({name:c,value:n}))}function s(e){var t=e.target.name;a(p({name:t}))}return Object(c.useEffect)((function(){a(f())}),[a]),Object(C.jsxs)("main",{children:[Object(C.jsxs)("div",{className:"container-content-image",children:[Object(C.jsx)("img",{className:"content-image bg-img",src:z,alt:"poster"}),Object(C.jsx)("div",{className:"content-image backrop-img"}),Object(C.jsx)("img",{className:"content-image logo",src:"data:image/png;base64,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",alt:"logo"})]}),Object(C.jsxs)("div",{className:"content-form",children:[Object(C.jsx)("h2",{children:"Contact Us"}),Object(C.jsxs)("form",{action:"/",method:"post",autoComplete:"off",children:[Object(C.jsxs)("div",{className:"mb-2",children:[Object(C.jsxs)("label",{htmlFor:"fullname",className:"form-label",children:["Full Name",Object(C.jsx)("span",{children:"*"})]}),Object(C.jsx)("input",{value:e.fullname.value,onChange:n,onFocus:s,name:"fullname",id:"fullname",type:"text",className:"".concat(e.fullname.err&&e.fullname.touched?"errField":""," form-control form-control-sm"),placeholder:"Your full name here..."}),Object(C.jsx)("p",{className:"".concat(e.fullname.err&&e.fullname.touched?"show":"hide"," errMessage"),children:e.fullname.errMessage})]}),Object(C.jsxs)("div",{className:"mb-2",children:[Object(C.jsxs)("label",{htmlFor:"email",className:"form-label",children:["Email Address",Object(C.jsx)("span",{children:"*"})]}),Object(C.jsx)("input",{value:e.email.value,onChange:n,onFocus:s,name:"email",id:"email",type:"email",className:"".concat(e.email.err&&e.email.touched?"errField":""," form-control form-control-sm"),placeholder:"example@mail.com"}),Object(C.jsx)("p",{className:"".concat(e.email.err&&e.email.touched?"show":"hide"," errMessage"),children:e.email.errMessage})]}),Object(C.jsxs)("div",{className:"mb-2",children:[Object(C.jsxs)("label",{htmlFor:"phone",className:"form-label",children:["Phone Number",Object(C.jsx)("span",{children:"*"})]}),Object(C.jsx)("input",{value:e.phone.value,onChange:n,onFocus:s,name:"phone",id:"phone",type:"text",className:"".concat(e.phone.err&&e.phone.touched?"errField":""," form-control form-control-sm"),placeholder:"0812xxxxxxxx"}),Object(C.jsx)("p",{className:"".concat(e.phone.err&&e.phone.touched?"show":"hide"," errMessage"),children:e.phone.errMessage})]}),Object(C.jsxs)("div",{className:"mb-4",children:[Object(C.jsx)("label",{htmlFor:"nationality",className:"form-label",children:"Nationality"}),Object(C.jsx)("br",{}),Object(C.jsxs)("select",{value:e.nationality.value,onChange:n,onFocus:s,name:"nationality",id:"nationality",className:"form-select form-select-sm","aria-label":".form-select-sm example",children:[Object(C.jsx)("option",{value:"Indonesia",children:"Indonesia"}),Object(C.jsx)("option",{value:"Malaysia",children:"Malaysia"}),Object(C.jsx)("option",{value:"Filipina",children:"Filipina"}),Object(C.jsx)("option",{value:"Thailand",children:"Thailand"})]})]}),Object(C.jsx)("br",{}),Object(C.jsxs)("div",{className:"mb-2",children:[Object(C.jsx)("label",{htmlFor:"message",className:"form-label",children:"Message"}),Object(C.jsx)("textarea",{value:e.message.value,onChange:n,onFocus:s,name:"message",id:"message",className:"form-control form-control-sm",rows:"3",placeholder:"Enter your message here..."})]}),Object(C.jsx)("div",{className:"container-my-button",children:Object(C.jsx)("button",{onClick:function(c){c.preventDefault();var n=!0;for(var s in e){var l=e[s];if(l.err||l.required&&!l.value){n=!1;break}}!n&&alert("Form tidak valid! Pastikan field terisi dengan benar"),n?t.push("/review"):a(N())},type:"submit",className:"btn my-button",children:"Submit"})})]})]})]})}t(54);function F(){var e=Object(r.c)((function(e){return e.contact}));return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("header",{}),Object(C.jsx)("div",{className:"box-absolute",children:Object(C.jsxs)("div",{className:"content",children:[Object(C.jsxs)("div",{className:"form",children:[Object(C.jsxs)("div",{className:"field",children:[Object(C.jsx)("div",{className:"v1",children:"Fullname"}),Object(C.jsx)("div",{className:"v2",children:":"}),Object(C.jsx)("div",{className:"v3",children:e.fullname.value})]}),Object(C.jsxs)("div",{className:"field",children:[Object(C.jsx)("div",{className:"v1",children:"Email Address"}),Object(C.jsx)("div",{className:"v2",children:":"}),Object(C.jsx)("div",{className:"v3",children:e.email.value})]}),Object(C.jsxs)("div",{className:"field",children:[Object(C.jsx)("div",{className:"v1",children:"Phone Number"}),Object(C.jsx)("div",{className:"v2",children:":"}),Object(C.jsx)("div",{className:"v3",children:e.phone.value})]}),Object(C.jsxs)("div",{className:"field",children:[Object(C.jsx)("div",{className:"v1",children:"Nationality"}),Object(C.jsx)("div",{className:"v2",children:":"}),Object(C.jsx)("div",{className:"v3",children:e.nationality.value})]})]}),Object(C.jsx)("p",{children:e.message.value}),Object(C.jsx)("hr",{}),Object(C.jsx)("h4",{className:"first-h4",children:"Thanks for contacting us!"}),Object(C.jsx)("h4",{children:"We will be in touch with you shortly."}),Object(C.jsx)("div",{className:"container-my-button",children:Object(C.jsx)(i.b,{to:"/",children:Object(C.jsx)("button",{type:"button",className:"btn btn-primary btn-lg btn-getInTouch",children:"Home"})})}),Object(C.jsx)("img",{className:"content-graphic",src:"data:image/png;base64,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",alt:""})]})}),Object(C.jsx)("footer",{})]})}var q=t(21),Z=t.n(q),E=t(34),L=t(35),k=t.n(L);t(75);function T(){var e=Object(c.useState)(null),a=Object(y.a)(e,2),t=a[0],n=a[1],s=Object(c.useState)(null),l=Object(y.a)(s,2),i=l[0],r=l[1];return Object(c.useEffect)((function(){function e(){return(e=Object(E.a)(Z.a.mark((function e(){var a;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=64U3e8oy0NKoKhizZoBXnb7Jyi9gni39");case 3:a=e.sent,n(a.data.results.slice(0,5)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(X,{}),Object(C.jsx)("div",{className:"mycontainer",children:i?Object(C.jsx)("h3",{children:"Oops.. Something went wrong :("}):null===t||void 0===t?void 0:t.map((function(e){return Object(C.jsxs)("div",{className:"mb-5",children:[Object(C.jsx)("p",{className:"subjudul",children:e.section}),Object(C.jsx)("h2",{className:"judul",children:e.title}),Object(C.jsx)("p",{className:"author",children:e.byline}),Object(C.jsx)("div",{children:Object(C.jsxs)("div",{className:"imgContainer",children:[Object(C.jsx)("img",{src:e.multimedia[0].url,alt:"news"}),Object(C.jsx)("p",{children:e.multimedia[0].caption})]})}),Object(C.jsx)("div",{className:"berita",children:Object(C.jsx)("p",{children:e.abstract})}),Object(C.jsx)("hr",{})]},e.url)}))})]})}var V=function(){return Object(C.jsxs)(P.c,{children:[Object(C.jsx)(P.a,{exact:!0,path:"/review",component:F}),Object(C.jsx)(P.a,{exact:!0,path:"/contact",component:J}),Object(C.jsx)(P.a,{exact:!0,path:"/",component:I}),Object(C.jsx)(P.a,{exact:!0,path:"/news",component:T})]})},W=(t(76),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,78)).then((function(a){var t=a.getCLS,c=a.getFID,n=a.getFCP,s=a.getLCP,l=a.getTTFB;t(e),c(e),n(e),s(e),l(e)}))});l.a.render(Object(C.jsx)(n.a.StrictMode,{children:Object(C.jsx)(i.a,{children:Object(C.jsx)(r.a,{store:B,children:Object(C.jsx)(o.a,{loading:null,persistor:G,children:Object(C.jsx)(V,{})})})})}),document.getElementById("root")),W()}},[[77,1,2]]]);
//# sourceMappingURL=main.b3f68255.chunk.js.map