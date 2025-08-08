document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a[href^='#']");
    const sections = document.querySelectorAll("section"); // Assuming each section has an ID

    // Add click event to smooth scroll to section
    links.forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            let targetId = this.getAttribute("href").substring(1); // Remove #
            let targetElement = document.getElementById(targetId);

            if (targetElement) {
                let headerOffset = 67; // Adjust based on your navbar height
                let elementPosition = targetElement.getBoundingClientRect().top;
                let offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Function to add active class to the corresponding link
    window.addEventListener("scroll", function () {
        let currentSection = "";

        sections.forEach(section => {
            let sectionTop = section.offsetTop - 100; // Offset to trigger earlier or later
            let sectionBottom = sectionTop + section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentSection = section.getAttribute("id");
            }
        });

        links.forEach(link => {
            link.classList.remove("active"); // Remove active class from all links
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active"); // Add active class to the current link
            }
        });
    });
});
