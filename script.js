var map = L.map("map", {
  center: [38.451440213829905, 27.141684430822952], //38.451440213829905, 27.141684430822952
  zoom: 11,
});
const nobEczaneLink = "https://openapi.izmir.bel.tr/api/ibb/nobetcieczaneler";
L.tileLayer("http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
  attribution:
    'maked by <a href="https://github.com/atayizuf/nobetciMap/" target="_blank">Ufuk Açıkgöz</a>',
}).addTo(map);
const myIcon = L.icon({
  iconUrl: "test.png",
  iconSize: [50, 70],
  popupAnchor: [2, -35],
});
fetch(nobEczaneLink)
  .then((resp) => resp.json())
  .then((resp) => {
    for (let i = 0; i < resp.length; i++) {
      const marker = L.marker(
        [parseFloat(resp[i].LokasyonX), parseFloat(resp[i].LokasyonY)],
        {
          icon: myIcon,
        }
      )
        .addTo(map)
        .bindPopup(
          `<div class="ana"><h4 id="popid">${resp[i].Bolge}</h4><h2>${resp[i].Adi}</h2><br /><a class="telefon" href="tel:${resp[i].Telefon}">${resp[i].Telefon}</a><br><div id="aciklama">${resp[i].BolgeAciklama}</div><a class="gitbuton" href="https://www.google.com/maps/place/${resp[i].LokasyonX},${resp[i].LokasyonY}/@${resp[i].LokasyonX},${resp[i].LokasyonY},17.25z" target="_blank">Navigasyon Kullan</a></div>`
        );
    }
  });
const kapatbas = document.getElementById("kapat");
const basonerikapat = document.getElementById("basoneri");
kapatbas.addEventListener("click", () => {
  basonerikapat.style.display = "none";
});

const viewSet = document.getElementById("setview");
viewSet.addEventListener("click", () => {
  map.setView(new L.LatLng(38.451440213829905, 27.141684430822952), 11);
});
