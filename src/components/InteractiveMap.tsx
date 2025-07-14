'use client';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L, { LatLngBounds } from 'leaflet';
import { useEffect } from 'react';

// When importing images in Next.js, they are objects. We need to access the .src property for the URL string.
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = L.icon({
    iconRetinaUrl: iconRetinaUrl.src,
    iconUrl: iconUrl.src,
    shadowUrl: shadowUrl.src,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = defaultIcon;


const serviceAreas = [
  { name: 'Rodriguez (Montalban)', position: [14.74, 121.15] as L.LatLngExpression },
  { name: 'San Mateo', position: [14.69, 121.12] as L.LatLngExpression },
  { name: "Antipolo City", position: [14.58, 121.17] as L.LatLngExpression },
  { name: 'Marikina City', position: [14.65, 121.10] as L.LatLngExpression },
  { name: 'Cainta', position: [14.57, 121.12] as L.LatLngExpression },
  { name: 'Taytay', position: [14.56, 121.13] as L.LatLngExpression },
];

// This component will automatically adjust the map's view
function SetMapView({ bounds }: { bounds: LatLngBounds }) {
  const map = useMap();
  useEffect(() => {
    // The 'isValid' method exists on the LatLngBounds object instance.
    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [map, bounds]);
  return null;
}

export const InteractiveMap = () => {
  // Create a bounding box from all the service area coordinates
  const bounds = L.latLngBounds(serviceAreas.map(area => area.position));

  return (
    // Add z-10 to the className to place it below the z-40 header
    <MapContainer scrollWheelZoom={false} className="w-full h-full z-10">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {serviceAreas.map((area) => (
        <Marker key={area.name} position={area.position}>
          <Popup>
            Servicing {area.name}, Rizal
          </Popup>
        </Marker>
      ))}
      <SetMapView bounds={bounds} />
    </MapContainer>
  );
};