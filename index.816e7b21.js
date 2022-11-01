// Shrinking header on scroll at media > 1024px
const mediaQueryLg = window.matchMedia("(min-width: 1024px)");
function lgScrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("nav-bar").style.paddingBottom = "0rem";
        document.getElementById("nav-bar").style.paddingTop = "0rem";
        document.getElementById("nav-bar").style.backgroundColor = "#1B2539";
        document.getElementById("logo").style.width = "7rem";
    } else {
        document.getElementById("nav-bar").style.paddingBottom = "1.5rem";
        document.getElementById("nav-bar").style.paddingTop = "1.5rem";
        document.getElementById("nav-bar").style.backgroundColor = "rgb(17, 24, 39)";
        document.getElementById("logo").style.width = "8rem";
    }
}
if (mediaQueryLg.matches) document.addEventListener("scroll", lgScrollFunction, {
    passive: true
});
mediaQueryLg.addEventListener("change", ()=>{
    if (mediaQueryLg.matches) // console.log('Screen now larger than 1024 px, adding lgScrollFunction');
    document.addEventListener("scroll", lgScrollFunction, {
        passive: true
    });
    else document.removeEventListener("scroll", lgScrollFunction, {
        passive: true
    });
});
// Hide nav bar on sm viewports < 1024 
const nav = document.getElementById("nav-bar");
const mediaQuerySm = window.matchMedia("(max-width: 1023px)");
function smScrollFunction() {
    if (lastScrollY < window.scrollY) {
        if (nav.classList.contains("nav--hidden")) ;
        else nav.classList.add("nav--hidden");
    } else {
        if (!nav.classList.contains("nav--hidden")) ;
        else nav.classList.remove("nav--hidden");
    }
    lastScrollY = window.scrollY;
}
let lastScrollY = window.scrollY;
if (mediaQuerySm.matches) document.addEventListener("scroll", smScrollFunction, {
    passive: true
});
mediaQuerySm.addEventListener("change", ()=>{
    if (mediaQuerySm.matches) // console.log('Screen now smaller than 1024 px, adding smScrollFunction;')
    document.addEventListener("scroll", smScrollFunction, {
        passive: true
    });
    else document.removeEventListener("scroll", smScrollFunction);
});
// NAV Mobile Button < 1024 px
const navToggleBtn = document.getElementById("nav-toggle-btn");
const navbarCTA = document.getElementById("navbar-cta");
function toggleHandler() {
    navbarCTA.classList.toggle("hidden");
    navbarCTA.classList.toggle("open");
}
$(document).ready(function() {
    $(document).click(function(event) {
        var clickover = $(event.target);
        // console.log(clickover);
        var _opened = $(".navbar-collapse").hasClass("open");
        // console.log(_opened);
        if (_opened === true && !clickover.hasClass("navbar-toggle")) // console.log('')
        toggleHandler();
    });
});
navToggleBtn.addEventListener("click", toggleHandler, {
    passive: true
});
// FAQ Section
$(".togglefaq").click(function(e) {
    e.preventDefault();
    var notthis = $(".active").not(this);
    notthis.find(".icon-minus").addClass("icon-plus").removeClass("icon-minus");
    notthis.find(".fa-minus").addClass("fa-plus").removeClass("fa-minus");
    notthis.toggleClass("active").next(".faqanswer").slideToggle(600);
    $(this).toggleClass("active").next().slideToggle("fast");
    $(this).children("i").toggleClass("icon-plus icon-minus");
    $(this).children("i").toggleClass("fa-plus fa-minus");
});
// SMTP.js
/* SmtpJS.com - v3.0.0 */ var Email = {
    send: function(a) {
        return new Promise(function(n, e) {
            a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send";
            var t = JSON.stringify(a);
            Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function(e) {
                n(e);
            });
        });
    },
    ajaxPost: function(e, n, t) {
        var a = Email.createCORSRequest("POST", e);
        a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function() {
            var e = a.responseText;
            null != t && t(e);
        }, a.send(n);
    },
    ajax: function(e, n) {
        var t = Email.createCORSRequest("GET", e);
        t.onload = function() {
            var e = t.responseText;
            null != n && n(e);
        }, t.send();
    },
    createCORSRequest: function(e, n) {
        var t = new XMLHttpRequest;
        return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t;
    }
};
function sendEmail() {
    console.log("Sending Email");
    Email.send({
        SecureToken: "0d8b88ac-bded-4150-a1a1-22f51f08793a",
        To: "marcus.l.campbell@gmail.com",
        From: "offers@mccrossanproperty.uk",
        Subject: "Testing SMTP.js",
        Body: "Testing with secure token only."
    }).then((message)=>console.log(message));
}
// Copyright year
document.querySelector(".year").textContent = new Date().getFullYear();

//# sourceMappingURL=index.816e7b21.js.map
