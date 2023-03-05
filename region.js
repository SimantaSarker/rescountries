const loadAllData = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => showAllData(data));
};
const showAllData = (countries) => {
  const countriesContainer=document.getElementById('countries-info');
  countries.slice(0,15).forEach((country) => {
  //  console.log(country.cca2)
  const div=document.createElement('div');
  div.innerHTML=`
  <div class="card w-full bg-base-100 shadow-2xl h-[90%]">
  <figure class="px-10 pt-10">
    <img src="${country.flags.png}" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${country.name.common}</h2>
    <p>Population: ${country.population}</p>
    <div class="card-actions">
      <button class="btn btn-primary" onclick="showModal('${country.region}')">Details</button>
    </div>
  </div>
</div>


  `;
  countriesContainer.appendChild(div)

  });
};




//--------------------- Region based code------------


const showModal=regions=>{
  const url=`https://restcountries.com/v3.1/region/${regions}`;
  console.log(url);
  fetch(url)
  .then(res=>res.json())
  .then(region=>displayRegion(region.slice(0,10)))

}


const displayRegion=(regions)=>{
  const regionsContainer=document.getElementById('regions-flag-Container');
  regionsContainer.innerHTML=''
  regions.forEach((region)=>{
    const div=document.createElement('dvi');
    div.innerHTML=`
    <div class="card w-full bg-base-100 shadow-2xl h-[90%]">
  <figure class="px-10 pt-10">
    <img src="${region.flags.png}" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${region.name.common}</h2>
    <p>Population: ${region.population}</p>
    <div class="card-actions">
      <button class="btn btn-primary" onclick="showModal('${region.region}')">Details</button>
    </div>
  </div>
</div>
    `;
    regionsContainer.appendChild(div);
 
    
  })

}


loadAllData();
