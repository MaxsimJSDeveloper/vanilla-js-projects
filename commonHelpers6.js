import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{a as p}from"./assets/vendor-a40df528.js";const r=document.querySelector(".hero-form"),t=document.querySelector(".hero-description");r.addEventListener("submit",c);function c(s){s.preventDefault();const a=s.target.elements.hero.value;o(a).then(e=>{console.log(e);const n=i(e);t.insertAdjacentHTML("beforeend",n)}),s.target.reset()}async function o(s){const a="https://superhero-search.p.rapidapi.com/api/";return(await p.get(a,{params:{hero:s},headers:{"X-RapidAPI-Key":"28088c2f9cmshe017453cff91eb1p1d53fcjsn2e39c72e4ae2","X-RapidAPI-Host":"superhero-search.p.rapidapi.com"}})).data}function i(s){return`<li class="hero-card card">
  <div class="image-container">
    <img
      src="${s.images.lg}"
      alt="${s.name}"
      class="hero-image"
      width="300"
      height="500"
    />
  </div>
  <div class="hero-body">
    <h3 class="hero-name">${s.name}</h3>

    <div class="hero-powerstats">
      <p class="hero-bio"><span class="container">Full name</span>: ${s.biography.fullName}</p>
      <p class="hero-bio"><span class="container">Place of birth</span>: ${s.biography.placeOfBirth}</p>
      <p class="hero-bio"><span class="container">Publisher</span>: ${s.biography.publisher}</p>
      <p class="hero-bio"><span class="container">Alignment</span>: ${s.biography.alignment}</p>
      <p class="hero-bio"><span class="container">Gender</span>: ${s.appearance.gender}</p>
      <p class="hero-bio"><span class="container">Race</span>: ${s.appearance.race}</p>
    </div>
<h4 class="stats">Powerstats</h4>
    <div class="hero-powerstats">
      <span><span class="container">Power</span>: ${s.powerstats.power}</span>
      <span><span class="container">Strength</span>: ${s.powerstats.strength}</span>
      <span><span class="container">Speed</span>: ${s.powerstats.speed}</span>
      <span><span class="container">Combat</span>: ${s.powerstats.combat}</span>
    </div>
  </div>
</li>`}
//# sourceMappingURL=commonHelpers6.js.map
