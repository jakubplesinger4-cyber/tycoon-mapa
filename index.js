// 1. Nastavení středu mapy a zoomu pro tvůj výřez
const map = L.map("map").setView([49.1, 16.55], 12);

// 2. Vytvoření instance PMTiles zdroje
const p = new pmtiles.PMTiles("moje-mapa.pmtiles");

// 3. Vytvoření vrstvy s přímým odkazem na zdroj
const layer = protomapsL.leafletLayer({
  url: p,
  theme: "light",
});

layer.addTo(map);
