const loader = document.getElementById('loader');
const mainContent = document.getElementById('main-content');
const greetings = ["Hello", "Namaste", "Bonjour"];
let index = 0;

// Check if the loader has been shown before
const hasVisited = localStorage.getItem('hasVisited');

function showGreeting() {
  if (index < greetings.length) {
    loader.textContent = greetings[index];
    setTimeout(() => {
      loader.textContent = "";
      index++;
      setTimeout(showGreeting, 500);
    }, 1500);
  } else {
    loader.style.display = 'none';
    mainContent.style.display = 'block';
    // Mark that the loader has been shown
    localStorage.setItem('hasVisited', 'true');
  }
}

window.onload = () => {
  if (!hasVisited) {
    mainContent.style.display = 'none';  // Hide main content initially
    showGreeting();                      // Show loader only on first visit
  } else {
    loader.style.display = 'none';       // Hide loader on subsequent visits
    mainContent.style.display = 'block'; // Directly show main content
  }
};
