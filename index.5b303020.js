!function(){var e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),t=document.querySelectorAll(".mobile-nav__link"),c=document.querySelector(".mobile-btn"),i=function(){var n="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)};o.addEventListener("click",i),n.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})),c.onclick=function(){e.classList.remove("is-open")};for(var l=0;l<t.length;l++)t[l].onclick=function(o){e.classList.remove("is-open")}}();
//# sourceMappingURL=index.5b303020.js.map
