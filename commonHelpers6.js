import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as n,a as t}from"./assets/vendor-a40df528.js";const o=document.querySelector(".hero-form"),p=document.querySelector(".hero-description");o.addEventListener("submit",c);async function c(a){a.preventDefault();const e=a.target.elements.hero.value.trim();try{const s=await i(e),r=l(s);p.insertAdjacentHTML("beforeend",r)}catch(s){console.error("Error fetching hero:",s),n.error({title:"Error",message:"Failed to fetch hero. Please input correct name, for example (batman).",position:"topRight"})}a.target.reset()}async function i(a){return(await t.get("https://superhero-search.p.rapidapi.com/api/",{params:{hero:a},headers:{"X-RapidAPI-Key":"28088c2f9cmshe017453cff91eb1p1d53fcjsn2e39c72e4ae2","X-RapidAPI-Host":"superhero-search.p.rapidapi.com"}})).data}function l(a){return`<li class="hero-card card">
  <div class="image-container">
    <img
      src="${a.images.lg}"
      alt="${a.name}"
      class="hero-image"
      width="300"
      height="500"
    />
  </div>
  <div class="hero-body">
    <h3 class="hero-name">${a.name}</h3>

    <div class="hero-powerstats">
      <p class="hero-bio"><span class="container">Full name</span>: ${a.biography.fullName}</p>
      <p class="hero-bio"><span class="container">Place of birth</span>: ${a.biography.placeOfBirth}</p>
      <p class="hero-bio"><span class="container">Publisher</span>: ${a.biography.publisher}</p>
      <p class="hero-bio"><span class="container">Alignment</span>: ${a.biography.alignment}</p>
      <p class="hero-bio"><span class="container">Gender</span>: ${a.appearance.gender}</p>
      <p class="hero-bio"><span class="container">Race</span>: ${a.appearance.race}</p>
    </div>
<h4 class="stats">Powerstats</h4>
    <div class="hero-powerstats">
      <span><span class="container">Power</span>: ${a.powerstats.power}</span>
      <span><span class="container">Strength</span>: ${a.powerstats.strength}</span>
      <span><span class="container">Speed</span>: ${a.powerstats.speed}</span>
      <span><span class="container">Combat</span>: ${a.powerstats.combat}</span>
    </div>
  </div>
</li>`}
//# sourceMappingURL=commonHelpers6.js.map
