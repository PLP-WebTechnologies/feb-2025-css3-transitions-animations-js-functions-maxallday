// Function to store user preference in localStorage
function savePreference(key, value) {
    localStorage.setItem(key, value);
}

// Function to retrieve user preference
function getPreference(key) {
    return localStorage.getItem(key);
}

// Theme toggle functionality
document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    // Save theme preference in localStorage
    if (document.body.classList.contains("dark-mode")) {
        savePreference("theme", "dark");
    } else {
        savePreference("theme", "light");
    }
});

// Apply saved theme on page load
window.onload = function() {
    if (getPreference("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};

//function to pop up when order button is clicked
// Show popup function
function showPopup() {
    document.getElementById("popup").style.display = "block";
}

// Hide popup function
function hidePopup() {
    document.getElementById("popup").style.display = "none";
}
// Add event listener to the order button
document.getElementById("orderButton").addEventListener("click", function() {
    showPopup();
});