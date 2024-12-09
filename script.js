// Menu dropdown functionality
const menuButton = document.getElementById('menuButton');
const menuDropdown = document.getElementById('menuDropdown');

menuButton.addEventListener('click', function () {
    // Toggle dropdown visibility
    menuDropdown.style.display = menuDropdown.style.display === 'block' ? 'none' : 'block';
});

// Redirect to search page when the search button is clicked
function redirectToSearchPage() {
    window.location.href = "search.html"; // Replace with your actual search page URL
}

// Select segments
const fruitySegment = document.getElementById('fruitySegment');
const citrusSegment = document.getElementById('citrusSegment');

// Add shake effect on click
fruitySegment.addEventListener('click', () => {
    addShakeEffect(fruitySegment); // Adds the shake effect to the fruity segment
});

citrusSegment.addEventListener('click', () => {
    addShakeEffect(citrusSegment); // Adds the shake effect to the citrus segment
});

// Function to add and remove the shake effect
function addShakeEffect(element) {
    element.classList.add('shake'); // Add the shake class
    setTimeout(() => {
        element.classList.remove('shake'); // Remove it after the animation ends
    }, 500); // Match the duration of the animation (500ms)
}

// Add fade-in effect on load
window.onload = () => {
    fruitySegment.style.opacity = 0;
    citrusSegment.style.opacity = 0;

    setTimeout(() => {
        fruitySegment.style.transition = "opacity 1.5s ease";
        citrusSegment.style.transition = "opacity 1.5s ease";
        fruitySegment.style.opacity = 1;
        citrusSegment.style.opacity = 1;
    }, 300); // Fade in after a slight delay
};

