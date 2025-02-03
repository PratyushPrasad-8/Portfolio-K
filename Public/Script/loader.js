const loader = document.getElementById('loader');
  const mainContent = document.getElementById('main-content');
  const greetings = ["Hello", "Namaste", "Bonjour"];
  let index = 0;

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
    }
  }

  window.onload = () => {
    showGreeting();
  };