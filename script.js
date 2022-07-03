let dashboard = {
    covidTracker: function(country){
      fetch("https://api.covid19api.com/live/country/" + country)
      .then(response => response.json())
      .then((datas) => this.displaycovid(datas))
    },
    displaycovid: function (datas) {
        console.log(datas);
        document.getElementById("Recovered").innerHTML = datas[200].Recovered.toLocaleString();
        document.getElementById("size").innerText = datas[200].Active.toLocaleString();
        document.getElementById("Confirmed").innerHTML = datas[200].Confirmed.toLocaleString();
        document.getElementById("death").innerHTML = datas[200].Deaths.toLocaleString();
        document.getElementById("Capital").innerHTML = datas[200].Country.toLocaleString();
        document.getElementById("population").innerHTML = datas[200].CountryCode.toLocaleString();
        document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + datas[200].Country.toLocaleString() + "')";
        
    },


    search: function () {
      this.covidTracker(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function () {
    dashboard.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      dashboard.search();
    }
});

document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?covid')";