// Sidebar toggle functionality
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar");

// Open sidebar
openBtn.addEventListener("click", () => {
  sidebar.style.width = "250px";
  document.body.style.overflow = "hidden";  // Disable body scroll when sidebar is open
});

// Close sidebar
closeBtn.addEventListener("click", () => {
  sidebar.style.width = "0";
  document.body.style.overflow = "auto";  // Re-enable body scroll when sidebar is closed
});

// Close sidebar when a link is clicked (for mobile view)
const navItems = document.querySelectorAll('.sidebar-links a');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      sidebar.style.width = "0";  // Close sidebar after clicking a link
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }
  });
});
