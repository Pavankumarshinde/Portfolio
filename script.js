function showProject(projectId, element) {
    // Hide all projects
    const projects = document.querySelectorAll(".portfolio-container");
    projects.forEach((project) => {
      project.classList.remove("active");
    });
  
    // Show the selected project
    document.getElementById(projectId).classList.add("active");
  
    // Remove the active class from all project links
    const projectLinks = document.querySelectorAll("#projects_names a");
    projectLinks.forEach((link) => {
      link.classList.remove("active");
    });
  
    // Add the active class to the clicked link
    element.classList.add("active");
  }
  
  function toggleMenu() {
    if (window.innerWidth <= 1024) {
      const navMenu = document.getElementById("nav-menu");
      const isMenuOpen = navMenu.style.display === "flex";
  
      // Toggle the display style of the nav menu
      navMenu.style.display = isMenuOpen ? "none" : "flex";
  
      // Hide or show main content based on the menu state
      const mainContent = document.querySelector("main");
      const sections = document.querySelectorAll("section");
      const middleIcon = document.getElementById("middle_icon");
      const socialIcons = document.querySelector(".social-icons");
  
      if (isMenuOpen) {
        // If menu is closing, show the main content
        mainContent.style.display = "block";
        sections.forEach((section) => (section.style.display = "block"));
        middleIcon.style.display = "block";
        socialIcons.style.display = "flex";
      } else {
        // If menu is opening, hide the main content
        mainContent.style.display = "none";
        sections.forEach((section) => (section.style.display = "none"));
        middleIcon.style.display = "none";
        socialIcons.style.display = "none";
      }
    }
  }
  
  function closeMenu() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.style.display = "none"; // Hide the menu
  
    // Show the main content when the menu is closed
    const mainContent = document.querySelector("main");
    const sections = document.querySelectorAll("section");
    const middleIcon = document.getElementById("middle_icon");
    const socialIcons = document.querySelector(".social-icons");
  
    mainContent.style.display = "block";
    sections.forEach((section) => (section.style.display = "block"));
    middleIcon.style.display = "block";
    socialIcons.style.display = "flex";
  }
  
  function scrollToSection(sectionId, element) {
    const sections = document.querySelectorAll("nav ul li");
    sections.forEach((section) => section.classList.remove("active"));
    element.classList.add("active");
  
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  
    if (window.innerWidth <= 768) {
      // Show the main content when a link is clicked
      const mainContent = document.querySelector("main");
      const sectionsInMain = document.querySelectorAll("section");
      mainContent.style.display = "block";
      sectionsInMain.forEach((section) => (section.style.display = "block"));
  
      closeMenu(); // Close the menu after clicking the link
    }
  }
  
  // Update active link based on scroll position
  function updateActiveLinkOnScroll() {
    const sections = document.querySelectorAll("main > section"); // Select sections directly under main
    const scrollPosition = window.scrollY + 50; // Add offset for active link detection
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
  
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        const activeLink = document.querySelector(`#nav-menu li.active`);
        if (activeLink) {
          activeLink.classList.remove("active");
        }
        document
          .querySelector(`#nav-menu #${section.id}-link`)
          .classList.add("active");
      }
    });
  }
  
  window.addEventListener("scroll", updateActiveLinkOnScroll);
  
  // Add event listeners to nav links for scrolling to sections
  const navLinks = document.querySelectorAll("#nav-menu a");
  navLinks.for;