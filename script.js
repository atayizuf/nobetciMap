var map = L.map("map", {
  center: [38.451440213829905, 27.141684430822952], //38.451440213829905, 27.141684430822952
  zoom: 13,
});

L.tileLayer("http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
  attribution:
    'maked by <a href="https://github.com/atayizuf/nobetciMap/" target="_blank">Ufuk Açıkgöz</a>',
}).addTo(map);

let Adi = [];
let Adres = [];
let Bolge = [];
let BolgeAciklama = [];
let LokasyonX = [];
let LokasyonY = [];
let Telefon = [];

const myIcon = L.icon({
  iconUrl: "ecV2.svg",
  iconSize: [60, 100],
  iconAnchor: [0, 100],
  popupAnchor: [32, -90],
});

fetch("https://openapi.izmir.bel.tr/api/ibb/nobetcieczaneler")
  .then((resp) => resp.json())
  .then((resp) => {
    resp.forEach((x) => {
      Adi.push(x.Adi);
      Adres.push(x.Adres);
      Bolge.push(x.Bolge);
      BolgeAciklama.push(x.BolgeAciklama);
      LokasyonX.push(x.LokasyonX);
      LokasyonY.push(x.LokasyonY);
      Telefon.push(x.Telefon);
    });
    for (let i = 0; i < Bolge.length; i++) {
      const marker = L.marker([LokasyonX[i], LokasyonY[i]], {
        icon: myIcon,
      })
        .addTo(map)
        .bindPopup(
          `<div class="ana"><h4 id="popid">${Bolge[i]}</h4><h2>${Adi[i]}</h2><br /><a class="telefon" href="tel:${Telefon[i]}">${Telefon[i]}</a><br><div>${BolgeAciklama[i]}</div><div class="gitbuton" onclick="yap()">Navigasyon Kullan</div></div>`
        );
    }
  });

const kapatbas = document.getElementById("kapat");
const basonerikapat = document.getElementById("basoneri");
kapatbas.addEventListener("click", () => {
  basonerikapat.style.display = "none";
});

function yap() {
  alert("Yabbbılıyor... Yabılacak...");
}
