// Function to toggle the menu visibility on small screens
function toggleMenu() {
  if (window.innerWidth <= 1024) {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active"); // Toggles the visibility of the nav menu
  }
}

// Function to show the selected project (or section) and highlight the active link
function showProject(projectId, element) {
  // Hide all projects (or sections)
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

// Function to scroll to the selected section and highlight the active link in the navbar
function scrollToSection(sectionId, element) {
  // Remove active class from all navbar items
  const sections = document.querySelectorAll("nav ul li");
  sections.forEach((section) => section.classList.remove("active"));
  
  // Add the active class to the clicked link
  element.classList.add("active");

  // Scroll to the corresponding section
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });

  // On mobile screens, close the menu after clicking a section
  if (window.innerWidth <= 768) {
    closeMenu(); // Close the menu after clicking the link
  }
}

// Function to close the menu on mobile screens
function closeMenu() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("active"); // Hide the menu by removing the active class

  // Optionally, show main content and other elements if needed
  const mainContent = document.querySelector("main");
  const sections = document.querySelectorAll("section");
  const middleIcon = document.getElementById("middle_icon");
  const socialIcons = document.querySelector(".social-icons");

  mainContent.style.display = "block";
  sections.forEach((section) => (section.style.display = "block"));
  middleIcon.style.display = "block";
  socialIcons.style.display = "flex";
}

// Function to update active link based on scroll position
function updateActiveLinkOnScroll() {
  const sections = document.querySelectorAll("main > section"); // Select sections directly under main
  const scrollPosition = window.scrollY + 50; // Add offset for active link detection

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      const activeLink = document.querySelector(`#nav-menu li.active`);
      if (activeLink) {
        activeLink.classList.remove("active");
      }
      document.querySelector(`#nav-menu #${section.id}-link`).classList.add("active");
    }
  });
}

// Add event listeners to detect scrolling for active link update
window.addEventListener("scroll", updateActiveLinkOnScroll);

// Add event listeners to nav links for scrolling to sections
const navLinks = document.querySelectorAll("#nav-menu a");
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const sectionId = link.getAttribute("href").replace("#", "");
    const sectionElement = document.getElementById(sectionId);
    scrollToSection(sectionId, link);
  });
});
