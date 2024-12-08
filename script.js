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
