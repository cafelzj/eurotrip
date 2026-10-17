/* Basemap configuration. Card coordinates remain WGS84 regardless of renderer. */
const mapProviders = {
  "osm": {
    "name": "OpenStreetMap",
    "coordinateSystem": "wgs84",
    "tiles": "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    "maxZoom": 19,
    "attribution": "© <a href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\" rel=\"noopener\">OpenStreetMap</a>"
  }
};
