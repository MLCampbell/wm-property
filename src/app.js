// Shrinking header on scroll at media > 1150 px
const mediaQueryLg = window.matchMedia('(min-width: 1150px)');

function lgScrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("nav-bar").style.paddingBottom = "0.2rem";
        document.getElementById("nav-bar").style.paddingTop = "0.2rem";

        document.getElementById("nav-bar").style.backgroundColor = "#1B2539";
        document.getElementById("logo").style.width = "6rem";
    } else {
        document.getElementById("nav-bar").style.paddingBottom = "1.5rem";
        document.getElementById("nav-bar").style.paddingTop = "1.5rem";

        document.getElementById("nav-bar").style.backgroundColor = "rgb(17, 24, 39)";
        document.getElementById("logo").style.width = "8rem";
    }
};

if (mediaQueryLg.matches) {
    document.addEventListener("scroll", lgScrollFunction, { passive: true });
}

mediaQueryLg.addEventListener("change", () => {
    if (mediaQueryLg.matches) {
        // console.log('Screen now larger than 1150 px, adding lgScrollFunction');
        document.addEventListener("scroll", lgScrollFunction, { passive: true });
    } else {
        document.removeEventListener("scroll", lgScrollFunction, { passive: true });
        // console.log('Screen now smaller than 1150 px, removing lgScrollFunction');
    }
});


// Hide nav bar on sm viewports < 1024 

// const nav = document.getElementById('nav-bar');
// const mediaQuerySm = window.matchMedia('(max-width: 1023px)');

// function smScrollFunction() {
//     if (lastScrollY < window.scrollY) {
//         if (nav.classList.contains('nav--hidden')) {
//             // console.log('going down but not adding the class');
//         } else {
//             nav.classList.add('nav--hidden');
//         }
//     } else {
//         if (!nav.classList.contains('nav--hidden')) {
//             // console.log('going up but not remnoving the class');
//         } else {
//             nav.classList.remove('nav--hidden');
//         }
//     }

//     lastScrollY = window.scrollY;
// }

// let lastScrollY = window.scrollY;

// if (mediaQuerySm.matches) {
//     document.addEventListener("scroll", smScrollFunction, { passive: true });
// }

// mediaQuerySm.addEventListener("change", () => {
//     if (mediaQuerySm.matches) {
//         // console.log('Screen now smaller than 1024 px, adding smScrollFunction;')
//         document.addEventListener("scroll", smScrollFunction, { passive: true })
//     } else {
//         document.removeEventListener("scroll", smScrollFunction)
//         // console.log('Screen now smaller than 1024 px, removing smScrollFunction;')
//     }
// });


// NAV Mobile Button < 1024 px
const navToggleBtn = document.getElementById('nav-toggle-btn');
const navbarCTA = document.getElementById('navbar-cta');

function toggleHandler() {
    navbarCTA.classList.toggle('hidden');
    navbarCTA.classList.toggle('open');
    navToggleBtn.classList.toggle('navbar-toggle-bg')
};

$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        // console.log(clickover);
        var _opened = $(".navbar-collapse").hasClass("open");
        // console.log(_opened);
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            // console.log('')
            toggleHandler();
        }
    });
});

navToggleBtn.addEventListener('click', toggleHandler, { passive: true });



// FAQ Section
$('.togglefaq').click(function (e) {
    e.preventDefault();
    var notthis = $('.active').not(this);
    notthis.find('.icon-minus').addClass('icon-plus').removeClass('icon-minus');
    notthis.find('.fa-minus').addClass('fa-plus').removeClass('fa-minus');
    notthis.toggleClass('active').next('.faqanswer').slideToggle(600);
    $(this).toggleClass('active').next().slideToggle("fast");
    $(this).children('i').toggleClass('icon-plus icon-minus');
    $(this).children('i').toggleClass('fa-plus fa-minus');
});


// SMTP.js

/* SmtpJS.com - v3.0.0 */
var Email = {
    send: function (a) {
        return new Promise(function (n, e) {
            a.nocache = Math.floor(1e6 * Math.random() + 1),
                a.Action = "Send";
            var t = JSON.stringify(a);
            Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?",
                t,
                function (e) { n(e) })
        })
    },
    ajaxPost: function (e, n, t) {
        var a = Email.createCORSRequest("POST", e);
        a.setRequestHeader("Content-type",
            "application/x-www-form-urlencoded"),
            a.onload = function () {
                var e = a.responseText;
                null != t && t(e)
            },
            a.send(n)
    },
    ajax: function (e, n) {
        var t = Email.createCORSRequest("GET", e);
        t.onload = function () {
            var e = t.responseText;
            null != n && n(e)
        },
            t.send()
    },
    createCORSRequest: function (e, n) {
        var t = new XMLHttpRequest;
        return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null,
            t
    }
};

// Send email handler
function sendEmail() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let number = document.getElementById('number').value;
    let message = document.getElementById('message').value;
    let address1 = document.getElementById('address1').value;
    let address2 = document.getElementById('address2').value;
    let postcode = document.getElementById('postcode').value;
    let source = document.getElementById('source').value;
    let subject = "[FORM SUBMITTED] New Enquiry from " + name;
    let finalMessage =
        `New Enquiry<br><br>
    Name: ${name}<br>
    Email: ${email}<br>
    Contact number: ${number}<br>
    House Number: ${address1}<br>
    Street: ${address2}<br>
    Postcode: ${postcode}<br><br>
    Message: ${message}<br><br>
    Source: ${source}`;

    console.log('Sending Email to enquiry_form@resolvepropertybuyers.com from ' + email);

    Email.send({
        SecureToken: '8578e083-3759-498f-b701-11f96777798d',
        To: 'enquiry_form@resolvepropertybuyers.com',
        From: "enquiry_form@resolvepropertybuyers.com",
        Subject: subject,
        Body: finalMessage
    }).then(
        message => {
            console.log('Result: ' + message)
            if (message === "OK") {
                // console.log("Success behaviour");
                submitSuccess();
                // submitSuccess();
            } else {
                console.log("Error: " + message);
                submitFailure(message);
            }
        }
    );
    return false;
};

function hideFormElements() {
    // const modalHeight = $('#form-modal').height();
    $('.modal-title').text(' ');
    $('.modal-sub-heading').addClass('hidden');
    $('#sourcing-form').addClass('hidden');
    // $('#form-modal').height(modalHeight);
};

function clearInputs() {
    const inputs = document.querySelectorAll('#name, #email, #number, #message');

    inputs.forEach(input => {
        input.value = '';
    });
};


function submitSuccess() {
    clearInputs()
    $('.modal-container').removeClass('block').addClass('hidden').removeClass('open');
    $('.modal').removeClass('block').addClass('hidden');
    window.location.href = "https://resolvepropertybuyers.com/thankyou.html";
    // Removing in-modal success display in favour of separate page.
    // $('.response-display').removeClass('hidden');
    // $('.response-display').addClass('flex').addClass('flex-col').addClass('flex-shrink');
};

function submitFailure(msg) {
    hideFormElements();
    $('.error-display').removeClass('hidden');
    $('.error-display').addClass('flex').addClass('flex-col').addClass('flex-shrink');
    $('.error-message').text(msg);
};


// Form Modal
// -----------------------------------------------------------------------

$('.modal-btn').click(() => {
    // console.log('modal btn clicked');
    $('.modal-container').removeClass('hidden').addClass('block').addClass('open');
    $('.modal').removeClass('hidden').addClass('block');

    $('.modal-title').text('Contact Us')
    $('.modal-sub-heading').removeClass('hidden');
    $('#sourcing-form').removeClass('hidden');
    $('.response-display').addClass('hidden');
    $('.error-display').addClass('hidden');

    const body = document.body;
    body.style.height = '100vh';
    body.style.overflowY = 'hidden';
}
);

// Close modal button
$('.modal-close-btn').click(() => {
    $('.modal-container').removeClass('block').addClass('hidden').removeClass('open');
    $('.modal').removeClass('block').addClass('hidden');

    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    body.style.height = '';
    body.style.overflowY = '';
    // window.scrollTo(0, parseInt(scrollY || '0') * -1);
})

// Close modal on backdrop click
$('.modal-container').click((e) => {
    const clickEventClasses = e.target.classList;
    const modalContainerClicked = clickEventClasses.contains('modal-container');
    const closeButtonClicked = clickEventClasses.contains('modal-close-btn')

    const modalContainer = document.querySelector('.modal-container');

    if (modalContainerClicked && modalContainer.classList.contains('open') && !closeButtonClicked) {
        console.log('Modal is open and container was clicked, close');
        $('.modal-container').removeClass('block').addClass('hidden').removeClass('open');
        $('.modal').removeClass('block').addClass('hidden');
        const body = document.body;
        const scrollY = body.style.top;
        console.log(scrollY);
        body.style.position = '';
        body.style.top = '';
        body.style.height = '';
        body.style.overflowY = '';
        // window.scrollTo(0, parseInt(scrollY || '0') * -1);
    } else {
        // console.log('Do nothing');
    }
}
);

// Copyright year
// ------------------------

document.querySelector('.year').textContent = (new Date().getFullYear())