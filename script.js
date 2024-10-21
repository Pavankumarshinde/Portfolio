function showProject(projectId, element) {
    // Hide all projects
    const projects = document.querySelectorAll('.portfolio-container');
    projects.forEach(project => {
        project.classList.remove('active');
    });

    // Show the selected project
    document.getElementById(projectId).classList.add('active');

    // Remove the active class from all project links
    const projectLinks = document.querySelectorAll('#projects_names a');
    projectLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Add the active class to the clicked link
    element.classList.add('active');
}

function scrollToSection(sectionId, element) {
    // Scroll to the selected section smoothly
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });

    // Remove the active class from all the links
    const links = document.querySelectorAll('#nav-menu li');
    links.forEach(link => link.classList.remove('active'));

    // Add the active class to the clicked link
    element.classList.add('active');
}

// Update active link based on scroll position
function updateActiveLinkOnScroll() {
    const sections = document.querySelectorAll('main > section'); // Select sections directly under main
    const scrollPosition = window.scrollY + 50; // Add offset for active link detection

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const activeLink = document.querySelector(`#nav-menu li.active`);
            if (activeLink) {
                activeLink.classList.remove('active');
            }
            document.querySelector(`#nav-menu #${section.id}-link`).classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLinkOnScroll);