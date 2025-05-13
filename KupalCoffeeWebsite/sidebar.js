// Get the menu button and sidebar
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.createElement("div");

// Create the overlay element
overlay.classList.add("overlay");
document.body.appendChild(overlay);

// Toggle sidebar visibility
menuBtn.addEventListener("click", function() {
    sidebar.classList.toggle("open");  // Open/close the sidebar
    overlay.classList.toggle("open");  // Show/Hide the overlay
});

// Close sidebar when overlay is clicked
overlay.addEventListener("click", function() {
    sidebar.classList.remove("open");
    overlay.classList.remove("open");
});



