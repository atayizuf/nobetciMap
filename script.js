var map = L.map("map", {
  center: [38.45186951421481, 27.144738932596645],
  zoom: 13,
});

L.tileLayer("http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
}).addTo(map);
