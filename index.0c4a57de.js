!function(){var e=document.querySelector(".js-form"),r=document.querySelectorAll(".js-input"),o=document.querySelector(".js-input-email"),t=document.querySelector(".js-input-phone");e.onsubmit=function(){var e=o.value,s=t.value,l=Array.from(r).filter((function(e){return""===e.value}));return r.forEach((function(e){""===e.value?e.classList.add("error"):e.classList.remove("error")})),0!==l.length?(console.log("inputs not filled"),!1):/^[0-9\s]*$/.test(String(s))?(t.classList.remove("error"),/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())?void o.classList.remove("error"):(console.log("email not valid"),o.classList.add("error"),!1)):(console.log("phone not valid"),t.classList.add("error"),!1)}}();
//# sourceMappingURL=index.0c4a57de.js.map
