$(document).ready(function () {
    general_utils();
    load_publications();           // from publications.js
    load_research_assistants();    // from assistants.js
});

function general_utils() {
    // Smooth scrolling for nav links
    $('.nav-menu a').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 800);
        }
    });
}
