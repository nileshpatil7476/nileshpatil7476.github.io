// Smooth-scroll for in-page anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Highlight the sidebar link that matches the given URL
const activate = (url) => {
    $(".nav_menu_portfolio a").each(function () {
        if (url == this.href) {
            $(this).closest("li").addClass("active");
        } else {
            $(this).closest("li").removeClass("active");
        }
    });
};

// Show the back-to-top button everywhere except the About Me section
const toggleTopButton = (sectionId) => {
    const btnTop = document.getElementById('buttontotop');
    if (!btnTop) return;
    const show = sectionId !== "aboutme";
    btnTop.style.visibility = show ? 'visible' : 'hidden';
    btnTop.style.opacity = show ? 1 : 0;
};

// Called from <body onhashchange="myFunction()">
function myFunction() {
    activate(window.location.href);
    toggleTopButton(window.location.href.split('#')[1]);
}

// Scroll-spy: update the active link as sections pass the top of the viewport
$("#content").on('scroll', function () {
    $('.section_nav').each(function () {
        const top = $(this).offset().top;
        if (top < window.pageYOffset + 10 && top + $(this).height() > window.pageYOffset + 10) {
            const id = $(this).attr('id');
            activate(window.location.href.split('#')[0] + '#' + id);
            toggleTopButton(id);
        }
    });
});
