async function getChuckNorrisJoke() {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      const joke = data.value;
      document.querySelector('.show_joke').innerHTML = `<p>${joke}</p>`;
    } catch (error) {
      console.error('Virhe:', error);
    }
  }
  
  document.querySelector('.chuck').addEventListener('click', getChuckNorrisJoke);
  