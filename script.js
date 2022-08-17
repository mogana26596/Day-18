const container= document.querySelector("container");
var result= fetch("https://restcountries.com/v3.1/all");
result.then((data)=> data.json())
      .then((data1)=> foo(data1));

function foo(data1) { 
var div= document.createElement("div");
div.className="row";
data1.forEach((country)=> {
var div1= document.createElement("div");
div1.style.margin="30px";
div1.className="col md-4"
div1.innerHTML=` <div class="card" style="width: 23rem;" "height: 40rem;">
                      <h2 class="card-title">${country.name.common}</h2>
                      <div><img src="${country.flags.svg}" alt="..."></div>
                        <div class="card-body">
                          <p class="region">Region: ${country.region}</p>
                          <p class="card-text">Capital: ${country.capital}</p>
                          <p class="card-text">Latitude: ${country.latlng[0]}</p>
                          <p class="card-text">Longitude: ${country.latlng[1]}</p>
                          <p class="card-text">Country code: ${country.cca3}</p>
                          <button type="submit()">Click for Weather</button>
                        </div>
                 </div>`
div.append(div1);                
document.body.append(div);
})
}

