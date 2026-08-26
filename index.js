// 1. Zadej přesný název tvého pmtiles souboru
const PMTILES_URL = "moje-mapa.pmtiles";

// 2. Zaregistrujeme formát PMTiles do mapového enginu
const protocol = new pmtiles.Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);

// 3. Vygenerujeme styl přímo v kódu (světlé téma "light")
const myStyle = protomaps_themes_base.default(`pmtiles://${PMTILES_URL}`, "light");

// 4. Inicializace samotné mapy
const map = new maplibregl.Map({
  container: "map",
  style: myStyle,
  // POZOR: Zde musíš mít souřadnice, které leží uvnitř tvého výřezu! [délka, šířka]
  center: [16.55, 49.1], 
  zoom: 12
});

// 5. Přidání navigačních tlačítek (+/-)
map.addControl(new maplibregl.NavigationControl());
