(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(3632)}])},3632:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return b}});var n=a(5893),t=a(3353),i=a(8888),l=a(8083),r=a(6529),c=a(1664),o=a.n(c),m=a(5675),d=a.n(m),h=a(7294),u=a(386),x=a(2749),p=e=>{let{children:s}=e,[a,t]=(0,h.useState)(!1),[i,l]=(0,h.useState)({name:"",email:"",message:""}),[c,o]=(0,h.useState)(""),[m,d]=(0,h.useState)("success"),[p,g]=(0,h.useState)(!1),b=e=>{let{name:s,value:a}=e.target;l(e=>({...e,[s]:a}))},j=async e=>{e.preventDefault(),g(!0),(await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({access_key:"YOUR_ACCESS_KEY",name:i.name,email:i.email,message:i.message})})).ok?(o("Your message has been sent successfully!"),d("success"),l({name:"",email:"",message:""}),setTimeout(()=>t(!1),3e3)):(o("There was an error submitting your message. Please try again."),d("danger")),g(!1)};return(0,n.jsxs)(n.Fragment,{children:[s,(0,n.jsxs)(u.Z,{show:a,onHide:()=>t(e=>!e),placement:"end",children:[(0,n.jsx)(u.Z.Header,{closeButton:!0,children:(0,n.jsx)(u.Z.Title,{as:"h5",children:"Get in Touch"})}),(0,n.jsxs)(u.Z.Body,{children:[(0,n.jsxs)("form",{onSubmit:j,className:"d-flex flex-column",children:[(0,n.jsx)("label",{htmlFor:"name",className:"mb-2",children:"Name"}),(0,n.jsx)("input",{type:"text",id:"name",name:"name",placeholder:"Your Name",value:i.name,onChange:b,required:!0,className:"mb-3 p-2"}),(0,n.jsx)("label",{htmlFor:"email",className:"mb-2",children:"Email"}),(0,n.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Your Email",value:i.email,onChange:b,required:!0,className:"mb-3 p-2"}),(0,n.jsx)("label",{htmlFor:"message",className:"mb-2",children:"Message"}),(0,n.jsx)("textarea",{id:"message",name:"message",placeholder:"Your Message",value:i.message,onChange:b,required:!0,className:"mb-3 p-2",rows:4}),(0,n.jsx)(r.Z,{type:"submit",className:"btn-neo-primary btn-lg",disabled:p,children:p?"Sending...":"Send Message"})]}),c&&(0,n.jsx)(x.Z,{variant:m,className:"mt-3",children:c})]})]})]})},g=()=>(0,n.jsxs)("section",{className:"hero-section d-flex align-items-center py-5 position-relative",style:{background:"linear-gradient(180deg, hsla(260, 84%, 51%, 1) 0%, hsla(320, 32%, 50%, 1) 100%)",minHeight:"95vh",paddingBottom:"20px"},children:[(0,n.jsx)(t.Z,{className:"text-center",children:(0,n.jsx)(i.Z,{children:(0,n.jsxs)(l.Z,{children:[(0,n.jsx)("div",{style:{position:"relative",width:"80%",height:"300px",margin:"0 auto"},children:(0,n.jsx)(d(),{src:"/assets/construction.png",alt:"Under Construction",fill:!0,style:{objectFit:"contain"}})}),(0,n.jsx)("h1",{className:"display-5 fw-bold text-white mb-4",children:"Under Construction"}),(0,n.jsxs)("div",{className:"text-white text-center",children:[(0,n.jsx)("p",{className:"lead mb-3",children:"We're currently under construction, but we're working behind the scenes to bring you insightful content and practical tips to streamline your workflows."}),(0,n.jsx)("p",{className:"lead",children:"Check back soon for updates—we're excited to help you transform the way you work!"})]}),(0,n.jsxs)("div",{className:"d-none",children:[(0,n.jsx)(o(),{href:"/services",passHref:!0,children:(0,n.jsx)(r.Z,{className:"btn-neo-primary btn-lg px-4 gap-3",children:"Explore Our Services"})}),(0,n.jsx)(p,{children:(0,n.jsx)(r.Z,{className:"btn-neo-secondary-outline btn-lg px-4",children:"Get in Touch"})})]})]})})}),(0,n.jsx)("div",{className:"wave-container position-absolute bottom-0 start-0 w-100",style:{marginBottom:"-5px"},children:(0,n.jsx)("span",{children:(0,n.jsx)("div",{className:"svg-border-rounded text-white",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",preserveAspectRatio:"none",fill:"currentColor",style:{display:"block",width:"100%",height:"100%"},children:(0,n.jsx)("path",{fill:"white",fillOpacity:"1",d:"M0,128L120,144C240,160,480,192,720,197.3C960,203,1200,181,1320,170.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"})})})})})]}),b=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g,{}),"  "]})}},function(e){e.O(0,[207,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);