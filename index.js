// 1. Zaregistrujeme formát PMTiles
const protocol = new pmtiles.Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);

// 2. Definice minimalistického stylu přímo v kódu (žádné stahování zvenku)
const myStyle = {
  version: 8,
  sources: {
    protomaps: {
      type: "vector",
      url: "pmtiles://moje-mapa.pmtiles"
    }
  },
  layers: [
    {
      id: "background",
      type: "background",
      paint: { "background-color": "#f8f4f0" }
    },
    {
      id: "water",
      type: "fill",
      source: "protomaps",
      "source-layer": "water",
      paint: { "fill-color": "#b5d0d0" }
    },
    {
      id: "roads",
      type: "line",
      source: "protomaps",
      "source-layer": "roads",
      paint: { 
        "line-color": "#ffffff",
        "line-width": 1 
      }
    },
    {
      id: "buildings",
      type: "fill",
      source: "protomaps",
      "source-layer": "buildings",
      paint: { "fill-color": "#e0ded9" }
    }
  ]
};

// 3. Inicializace MapLibre mapy
const map = new maplibregl.Map({
  container: "map",
  style: myStyle,
  center: [16.55, 49.1], // [délka, šířka]
  zoom: 12
});

map.addControl(new maplibregl.NavigationControl());
