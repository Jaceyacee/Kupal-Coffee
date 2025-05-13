// JavaScript to manually add the 'active' class after a button is clicked
document.querySelectorAll('.guest-btn, .duration-btn, .submit-btn').forEach(button => {
    button.addEventListener('mousedown', function() {
        // On mouse down, apply the active state
        button.style.backgroundColor = '#4a3b2e'; // Set the clicked color
        button.style.color = 'white'; // Change text color if needed
    });

    button.addEventListener('mouseup', function() {
        // On mouse up, do not reset the color
        button.style.backgroundColor = '#4a3b2e'; // Maintain the clicked color
        button.style.color = 'white'; // Keep the text color
    });
});
