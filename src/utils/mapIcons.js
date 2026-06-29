import L from "leaflet";

export function getMarkerIcon(count = 1) {
  const isCluster = count > 1;

  return L.divIcon({
    className: isCluster ? "custom-cluster" : "custom-pin",
    html: isCluster ? `<span>${count}</span>` : "<span></span>",
    iconSize: isCluster ? [42, 42] : [28, 28],
    iconAnchor: isCluster ? [21, 21] : [14, 28],
    popupAnchor: [0, -24]
  });
}
