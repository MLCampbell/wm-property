const mediaQueryLg=window.matchMedia("(min-width: 1150px)");function lgScrollFunction(){document.body.scrollTop>80||document.documentElement.scrollTop>80?(document.getElementById("nav-bar").style.paddingBottom="0.2rem",document.getElementById("nav-bar").style.paddingTop="0.2rem",document.getElementById("nav-bar").style.backgroundColor="#1B2539",document.getElementById("logo").style.width="6rem"):(document.getElementById("nav-bar").style.paddingBottom="1.5rem",document.getElementById("nav-bar").style.paddingTop="1.5rem",document.getElementById("nav-bar").style.backgroundColor="rgb(17, 24, 39)",document.getElementById("logo").style.width="8rem")}mediaQueryLg.matches&&document.addEventListener("scroll",lgScrollFunction,{passive:!0}),mediaQueryLg.addEventListener("change",(()=>{mediaQueryLg.matches?document.addEventListener("scroll",lgScrollFunction,{passive:!0}):document.removeEventListener("scroll",lgScrollFunction,{passive:!0})}));const navToggleBtn=document.getElementById("nav-toggle-btn"),navbarCTA=document.getElementById("navbar-cta");function toggleHandler(){navbarCTA.classList.toggle("hidden"),navbarCTA.classList.toggle("open")}$(document).ready((function(){$(document).click((function(e){var n=$(e.target);!0!==$(".navbar-collapse").hasClass("open")||n.hasClass("navbar-toggle")||toggleHandler()}))})),navToggleBtn.addEventListener("click",toggleHandler,{passive:!0}),$(".togglefaq").click((function(e){e.preventDefault();var n=$(".active").not(this);n.find(".icon-minus").addClass("icon-plus").removeClass("icon-minus"),n.find(".fa-minus").addClass("fa-plus").removeClass("fa-minus"),n.toggleClass("active").next(".faqanswer").slideToggle(600),$(this).toggleClass("active").next().slideToggle("fast"),$(this).children("i").toggleClass("icon-plus icon-minus"),$(this).children("i").toggleClass("fa-plus fa-minus")}));var Email={send:function(e){return new Promise((function(n,o){e.nocache=Math.floor(1e6*Math.random()+1),e.Action="Send";var t=JSON.stringify(e);Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?",t,(function(e){n(e)}))}))},ajaxPost:function(e,n,o){var t=Email.createCORSRequest("POST",e);t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.onload=function(){var e=t.responseText;null!=o&&o(e)},t.send(n)},ajax:function(e,n){var o=Email.createCORSRequest("GET",e);o.onload=function(){var e=o.responseText;null!=n&&n(e)},o.send()},createCORSRequest:function(e,n){var o=new XMLHttpRequest;return"withCredentials"in o?o.open(e,n,!0):"undefined"!=typeof XDomainRequest?(o=new XDomainRequest).open(e,n):o=null,o}};function sendEmail(){let e=document.getElementById("name").value,n=document.getElementById("email").value,o=document.getElementById("number").value,t=document.getElementById("message").value,s="[FORM SUBMITTED] New Enquiry from "+e,l=`New Enquiry<br><br>\n    Name: ${e}<br>\n    Email: ${n}<br>\n    Contact number: ${o}<br>\n    House Number: ${document.getElementById("address1").value}<br>\n    Street: ${document.getElementById("address2").value}<br>\n    Postcode: ${document.getElementById("postcode").value}<br><br>\n    Message: ${t}<br><br>\n    Source: ${document.getElementById("source").value}`;return console.log("Sending Email to enquiry_form@resolvepropertybuyers.com from "+n),Email.send({SecureToken:"8578e083-3759-498f-b701-11f96777798d",To:"enquiry_form@resolvepropertybuyers.com",From:"enquiry_form@resolvepropertybuyers.com",Subject:s,Body:l}).then((e=>{console.log("Result: "+e),"OK"===e?(console.log("Success behaviour"),submitSuccess()):(console.log("Error: "+e),alert(e),submitFailure(e))})),!1}function hideFormElements(){$(".modal-title").text(" "),$(".modal-sub-heading").addClass("hidden"),$("#contact-form").addClass("hidden")}function clearInputs(){document.querySelectorAll("#name, #email, #number, #message").forEach((e=>{e.value=""}))}function submitSuccess(){clearInputs(),hideFormElements(),$(".response-display").removeClass("hidden"),$(".response-display").addClass("flex").addClass("flex-col").addClass("flex-shrink")}function submitFailure(e){hideFormElements(),$(".error-display").removeClass("hidden"),$(".error-display").addClass("flex").addClass("flex-col").addClass("flex-shrink"),$(".error-message").text(e)}$(".modal-btn").click((()=>{$(".modal-container").removeClass("hidden").addClass("block").addClass("open"),$(".modal").removeClass("hidden").addClass("block"),$(".modal-title").text("Contact Us"),$(".modal-sub-heading").removeClass("hidden"),$("#contact-form").removeClass("hidden"),$(".response-display").addClass("hidden"),$(".error-display").addClass("hidden");const e=document.body;e.style.height="100vh",e.style.overflowY="hidden"})),$(".modal-close-btn").click((()=>{$(".modal-container").removeClass("block").addClass("hidden").removeClass("open"),$(".modal").removeClass("block").addClass("hidden");const e=document.body;e.style.top;e.style.position="",e.style.top="",e.style.height="",e.style.overflowY=""})),$(".modal-container").click((e=>{const n=e.target.classList,o=n.contains("modal-container"),t=n.contains("modal-close-btn"),s=document.querySelector(".modal-container");if(o&&s.classList.contains("open")&&!t){console.log("Modal is open and container was clicked, close"),$(".modal-container").removeClass("block").addClass("hidden").removeClass("open"),$(".modal").removeClass("block").addClass("hidden");const e=document.body,n=e.style.top;console.log(n),e.style.position="",e.style.top="",e.style.height="",e.style.overflowY=""}})),document.querySelector(".year").textContent=(new Date).getFullYear();
//# sourceMappingURL=index.44571c18.js.map