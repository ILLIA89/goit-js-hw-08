!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a);var n=a("1WSnx"),o=document.querySelector(".feedback-form"),l="feedback-form-state",i=document.querySelector('input[name="email"]'),u=document.querySelector('textarea[name="message"]'),s={};o.addEventListener("input",(0,n.throttle)((function(e){s[e.target.name]=s[e.target.value],localStorage.setItem(l,JSON.stringify({email:s.email,message:s.message}))}),500)),o.addEventListener("submit",(function(e){if(e.preventDefault(),""===i.value||""===u.value)return alert("Заповніть всі поля!");console.log({email:i.value,message:u.value}),s={},localStorage.removeItem(l),i.value="",u.value=""}));var f=function(e){try{var t=localStorage.getItem(e);if(!t)return;return JSON.parse(t)}catch(e){return void console.error("Get state error: ",e.message)}}(l);if(f){var c=f.email,d=f.message;i.value=c,u.value=d}}();
//# sourceMappingURL=03-feedback.d18e8a08.js.map
