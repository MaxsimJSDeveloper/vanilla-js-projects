import axios from 'axios';
import iziToast from 'izitoast';

const form = document.querySelector('.hero-form');
const description = document.querySelector('.hero-description');

form.addEventListener('submit', getName);

function getName(event) {
  event.preventDefault();
  const name = event.target.elements.hero.value;

  getHero(name).then(data => {
    console.log(data);
    const markup = createMarkup(data);
    description.insertAdjacentHTML('beforeend', markup);
  });

  event.target.reset();
}

async function getHero(name) {
  const url = 'https://superhero-search.p.rapidapi.com/api/';

  const response = await axios.get(url, {
    params: {
      hero: name,
    },
    headers: {
      'X-RapidAPI-Key': '28088c2f9cmshe017453cff91eb1p1d53fcjsn2e39c72e4ae2',
      'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
    },
  });

  return response.data;
}

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
