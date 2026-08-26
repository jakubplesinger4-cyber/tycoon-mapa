// Název tvého souboru
const PMTILES_URL = "moje-mapa.pmtiles";

// 1. Zaregistrujeme formát PMTiles do mapového enginu
const protocol = new pmtiles.Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);

// 2. Stáhneme oficiální "světlý" vizuální styl pro Protomaps
fetch("https://protomaps.github.io/basemaps-assets/style-light.json")
  .then(response => response.json())
  .then(style => {
    
    // 3. TADY JE TO KOUZLO: Vnutíme stylu tvůj lokální 13MB soubor místo stahování z internetu
    style.sources.protomaps.url = `pmtiles://${PMTILES_URL}`;

    // 4. Inicializace samotné mapy
    const map = new maplibregl.Map({
      container: "map",
      style: style,          // Napojení upraveného stylu
      center: [16.55, 49.1], // POZOR! MapLibre má souřadnice opačně než Leaflet: [délka, šířka]
      zoom: 12
    });
    
    // Přidání navigačních tlačítek (zoom) do rohu
    map.addControl(new maplibregl.NavigationControl());
  });
