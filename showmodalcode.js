const loadAllData = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => showAllData(data.slice(0,2)));
};


const showAllData = (countries) => {
  const countriesContainer=document.getElementById('countries-info');
  countriesContainer.innerHTML=''
  countries.forEach((country) => {
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
      <button class="btn btn-primary" onclick="showDetails('${country.cca2}')">Details</button>
    </div>
  </div>
</div>


  `;
  countriesContainer.appendChild(div)

  });
};

// --------------trying to show details after clicking each flag details button----------

const showDetails=code=>{
  const url=`https://restcountries.com/v3.1/alpha/${code}`;
  fetch(url)
  .then(res=>res.json())
  .then(values=>console.log(values))
}
loadAllData();




// ---------here is the code of showALL countries after click Show ALl button--------
const showAll=()=>{
 fetch("https://restcountries.com/v3.1/all")
 .then(res=>res.json())
.then(data=>{
  showAllData(data);
  const button=document.getElementById('showAll');
  button.classList('d-none')
})
};
