import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as r}from"./assets/vendor-a40df528.js";const s=document.querySelector(".form");s.addEventListener("submit",n);function n(o){o.preventDefault();const e=s.elements.state.value.toLowerCase(),t=s.elements.delay.value;m(e,t).then(()=>{r.success({title:"OK",message:`✅ Fulfilled promise in ${t} ms`,position:"topRight"})}).catch(()=>{r.error({title:"Error",message:`❌ Rejected promise in ${t} ms`,position:"topRight"})}),s.reset()}function m(o,e){return new Promise((t,i)=>{setTimeout(()=>{o==="fulfilled"?t(e):i(e)},e)})}
//# sourceMappingURL=commonHelpers8.js.map
