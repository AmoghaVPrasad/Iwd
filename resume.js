document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll('.panel');

    window.addEventListener("scroll", function() {
        var scrollPosition = window.scrollY;
        var windowHeight = window.innerHeight;

        sections.forEach(function(section) {
            var sectionTrigger = section.offsetTop - windowHeight * 0.7;

            // Adjust the opacity based on the scroll position
            section.style.opacity = scrollPosition >= sectionTrigger ? 1 : 0;

            // Adjust the visibility of each section
            section.style.visibility = scrollPosition >= sectionTrigger ? 'visible' : 'hidden';
        });
    });
});