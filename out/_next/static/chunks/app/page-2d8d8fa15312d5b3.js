(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3764:function(e,t,r){Promise.resolve().then(r.bind(r,2590))},2590:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var s=r(7437),a=r(2265),o=r(9842),n=r(5236);r(6648),r(8877);let l=(0,n.ZF)({apiKey:"AIzaSyD4MWk4PujNyXNF9_F2rwWhG9vtmdW10SM",authDomain:"posts-146b2.firebaseapp.com",projectId:"posts-146b2",storageBucket:"posts-146b2.appspot.com",messagingSenderId:"330965439458",appId:"1:330965439458:web:a7256b989e9515982b1fbb",measurementId:"G-T6R6RRKSZP"}),i=e=>{let{onSubmissionSuccess:t,submitted:r}=e,[n,l]=(0,a.useState)(!1),[i,d]=(0,a.useState)(""),m=async e=>{e.preventDefault();try{let e=(0,o.JU)((0,o.hJ)(c,"petition"));await (0,o.pl)(e,{bool:n,comments:i}),t(r),console.log("Data successfully submitted to Firebase!")}catch(e){console.error("Error submitting data: ",e)}};return(0,s.jsxs)("form",{onSubmit:m,className:"text-white ml-20",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"bool",children:"Need a rework?:    "}),(0,s.jsxs)("select",{id:"bool",value:n,onChange:e=>l("true"===e.target.value),required:!0,children:[(0,s.jsx)("option",{className:"text-black",value:"true",children:"✔️"}),(0,s.jsx)("option",{value:"false",children:"❌"})]})]}),(0,s.jsxs)("div",{className:"py-4",children:[(0,s.jsx)("label",{htmlFor:"comments",children:"Your Comment:"}),(0,s.jsx)("br",{}),(0,s.jsx)("textarea",{id:"comments",value:i,onChange:e=>d(e.target.value),required:!0,className:"rounded-md"})]}),(0,s.jsx)("button",{type:"submit",className:"w-24  rounded-sm bg-blue-400",children:"Submit"})]})},c=(0,o.ad)(l),d=e=>{let{petitions:t,setPetitions:r,submitted:n}=e;return(0,a.useEffect)(()=>{(async()=>{try{let e=(0,o.hJ)(c,"petition"),t=await (0,o.PL)(e),s=[];t.forEach(e=>{s.push({id:e.id,...e.data()})}),r(s)}catch(e){console.error("Error fetching petitions:",e)}})()},[n]),(0,s.jsx)("div",{className:" w-[55rem] p-4 ",children:(0,s.jsx)("ul",{children:t.map(e=>(0,s.jsx)(m,{petition:e},e.id))})})},m=e=>{let{petition:t}=e;return(0,s.jsx)("article",{className:"text-wrap petition w-[50rem] p-6 rounded-500 ".concat(function(){let e=["bg-red-300/80","bg-indigo-300/80","bg-lime-300/80","bg-cyan-300/80","bg-pink-300/80","bg-slate-300/80","bg-teal-200/80"],t=Math.floor(Math.random()*e.length);return e[t]}()),children:(0,s.jsx)("li",{children:(0,s.jsx)("p",{children:t.comments})})})};function h(){let[e,t]=(0,a.useState)([]),r=(0,o.hJ)(c,"petition"),[n,l]=(0,a.useState)(!1);return(0,o.PL)(r).then(e=>{let t=[];e.forEach(e=>{t.push(e.data())}),console.log(t)}).catch(e=>{console.error("Error fetching petitions:",e)}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 ",children:[(0,s.jsx)("div",{className:"absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl","aria-hidden":"true",children:(0,s.jsx)("div",{className:"aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[red] to-[#9089fc] opacity-70",style:{clipPath:"polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"}})}),(0,s.jsxs)("p",{className:"text leading-12 text-gray-900",children:[(0,s.jsx)("strong",{className:"font-semibold",children:"Save the pangolier"}),(0,s.jsx)("svg",{viewBox:"0 0 2 2",className:"mx-2 inline h-0.5 w-0.5 fill-current","aria-hidden":"true",children:(0,s.jsx)("circle",{cx:1,cy:1,r:1})}),"Stop the evil Gaben from corruting the hero !"]}),(0,s.jsx)("div",{className:"absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl","aria-hidden":"true",children:(0,s.jsx)("div",{className:"aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[red] to-[#9089fc] opacity-70",style:{clipPath:"polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"}})}),(0,s.jsx)("div",{className:"flex flex-wrap items-center gap-x-4 gap-y-2"})]}),(0,s.jsxs)("div",{className:"flex  justify-end h-[36rem]",children:[(0,s.jsxs)("div",{className:"pt-40 grid text-center lg:grid-cols-1 lg:text-left w-[50rem]",children:[(0,s.jsxs)("a",{className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-green-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",children:[(0,s.jsxs)("h2",{className:"mb-3 text-4xl font-semibold",children:["\uD83D\uDC4D",(0,s.jsxs)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-green-400",children:["->",e.filter(e=>!0==e.bool).length]})]}),(0,s.jsx)("p",{className:"m-0 max-w-[30ch] opacity-80 boxes",children:"Change back to the old pangolier."})]}),(0,s.jsxs)("a",{className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-red-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",children:[(0,s.jsxs)("h2",{className:"mb-3 text-4xl font-semibold",children:["\uD83D\uDC4E",(0,s.jsxs)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-red-400",children:["->",e.filter(e=>!1==e.bool).length]})]}),(0,s.jsx)("p",{className:"m-0 max-w-[30ch] opacity-80 boxes",children:"He is in a good shape."})]})]}),(0,s.jsx)("video",{className:"h-[36rem]",poster:"https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pangolier.png",autoPlay:!0,preload:"auto",loop:!0,playsInline:!0,muted:!0,children:(0,s.jsx)("source",{type:"video/webm",src:"https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pangolier.webm"})})]}),(0,s.jsxs)("div",{className:"pt-40 grid text-center lg:grid-cols-2 lg:text-left w-[50rem]",children:[(0,s.jsx)("div",{children:(0,s.jsx)(i,{onSubmissionSuccess:e=>{l(!e)},submitted:n})}),(0,s.jsx)("div",{children:(0,s.jsx)(d,{petitions:e,submitted:n,setPetitions:t})})]})]})}},8877:function(){}},function(e){e.O(0,[404,358,335,971,23,744],function(){return e(e.s=3764)}),_N_E=e.O()}]);