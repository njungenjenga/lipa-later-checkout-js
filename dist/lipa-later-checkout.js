!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.lipalater=t():e.lipalater=t()}(self,(function(){return(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{openModal:()=>c});const o=["delivery_option","facility_plan","item_brand","item_code","item_decription","item_type","item_value","preferred_option","store_key"];function n(e,t){const o=document.createElement("input");return o.type="hidden",o.name=e,o.value=t,o}function i(e){return!e}const r=["ng","ke","ug","rw"];function c(e){const{orderDetails:t,api_key:c,country:l,onFail:s,onSuccess:a}=e;if(console.log("the data collected incoming",t,c,l),i(c))throw"api_key missing. Please provide an api_key";if(i(t))throw"orderDetails missing. Please provide the orderDetails object";if(i(l))throw"country is missing. Please provide the country in the format: 'ng, ke, rw, ug' ";if(!r.includes(l))throw"Please provide the country in the format: 'ng, ke, rw, ug' ";t.items.map((e=>{const t=Object.keys(e);let n=o.filter((e=>!t.includes(e)));if(n.length>0)throw`One of the object(s) is missing the ${n} property`}));const d=function(){const e=document.createElement("div");return e.className="lipa-later-checkout__overlay",e.style.position="fixed",e.style.width="100%",e.style.height="100%",e.style.top="0",e.style.left="0",e.style.right="0",e.style.bottom="0",e.style.backgroundColor="#f0f4f8",e}(),p=function(){const e=document.createElement("iframe");return e.id="lipa-later-checkout",e.name="lipa-later-checkout",e.width="100%",e.height="100%",e}();d.appendChild(p);const u=document.getElementsByTagName("script"),m=u[u.length-1];var f;m.parentNode.insertBefore(d,m.nextSibling),function(e,t,o){const i=e.items,r=document.createElement("form");r.id="lipa-later-item-data",r.method="post",r.target="lipa-later-checkout",r.action="https://develop.d1euvomf008lqs.amplifyapp.com";const c=n("order_id",e.order_id),l=n("api_key",t),s=n("country_code",o);r.appendChild(c),r.appendChild(l),r.appendChild(s),i.map(((e,t)=>{for(const[o,i]of Object.entries(e)){const e=n(o+(t+1),i);r.appendChild(e)}})),document.body.appendChild(r),r.submit(),r.parentNode.removeChild(r)}(t,c,l),f=function(o){if(console.log("Received message event",o),"https://develop.d1euvomf008lqs.amplifyapp.com"!==o.origin&&(void 0===e.origin||e.origin!==o.origin))return void console.error(o.origin," is an invalid origin");document.querySelector(".lipa-later-checkout__overlay").remove(),window.removeEventListener("message",f,!1);const n=o.data;"object"==typeof n&&(n.success?("function"==typeof a&&a(n.message),"string"==typeof t.success_url&&""!==t.success_url.trim()&&(document.location=t.success_url)):("function"==typeof s&&s(n.errorMessage),"string"==typeof t.cancel_url&&""!==t.cancel_url.trim()&&(document.location=t.cancel_url)))},"undefined"!=typeof window&&window.addEventListener("message",f,!1)}return t})()}));