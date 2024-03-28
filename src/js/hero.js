import axios from 'axios';
import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.hero-form');
const description = document.querySelector('.hero-description');

// Відправка форми
form.addEventListener('submit', getName);

async function getName(event) {
  event.preventDefault();
  const name = event.target.elements.hero.value.trim();

  try {
    const data = await getHero(name);
    const markup = createMarkup(data);
    description.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.error('Error fetching hero:', error);
    iziToast.error({
      title: 'Error',
      message:
        'Failed to fetch hero. Please input correct name, for example (batman).',
      position: 'topRight',
    });
  }

  event.target.reset();
}

// відповідь сервера
async function getHero(name) {
  const response = await axios.get(
    'https://superhero-search.p.rapidapi.com/api/',
    {
      params: {
        hero: name,
      },
      headers: {
        'X-RapidAPI-Key': '28088c2f9cmshe017453cff91eb1p1d53fcjsn2e39c72e4ae2',
        'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
      },
    }
  );

  return response.data;
}

// створення розмітки
function createMarkup(hero) {
  return `<li class="hero-card card">
  <div class="image-container">
    <img
      src="${hero.images.lg}"
      alt="${hero.name}"
      class="hero-image"
      width="300"
      height="500"
    />
  </div>
  <div class="hero-body">
    <h3 class="hero-name">${hero.name}</h3>

    <div class="hero-powerstats">
      <p class="hero-bio"><span class="container">Full name</span>: ${hero.biography.fullName}</p>
      <p class="hero-bio"><span class="container">Place of birth</span>: ${hero.biography.placeOfBirth}</p>
      <p class="hero-bio"><span class="container">Publisher</span>: ${hero.biography.publisher}</p>
      <p class="hero-bio"><span class="container">Alignment</span>: ${hero.biography.alignment}</p>
      <p class="hero-bio"><span class="container">Gender</span>: ${hero.appearance.gender}</p>
      <p class="hero-bio"><span class="container">Race</span>: ${hero.appearance.race}</p>
    </div>
<h4 class="stats">Powerstats</h4>
    <div class="hero-powerstats">
      <span><span class="container">Power</span>: ${hero.powerstats.power}</span>
      <span><span class="container">Strength</span>: ${hero.powerstats.strength}</span>
      <span><span class="container">Speed</span>: ${hero.powerstats.speed}</span>
      <span><span class="container">Combat</span>: ${hero.powerstats.combat}</span>
    </div>
  </div>
</li>`;
}
