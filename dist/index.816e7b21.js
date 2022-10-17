// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("nav-bar").style.paddingBottom = "1rem";
        document.getElementById("nav-bar").style.paddingTop = "0.2rem";
        document.getElementById("logo").style.fontSize = "1.125rem";
    } else {
        document.getElementById("nav-bar").style.paddingBottom = "2rem";
        document.getElementById("nav-bar").style.paddingTop = "2rem";
        document.getElementById("logo").style.fontSize = "2.25rem";
    }
}

//# sourceMappingURL=index.816e7b21.js.map
