import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngExpression } from "leaflet";

const ContactMap = () => {
  // Center position roughly in the middle of Bangladesh
  const position: LatLngExpression = [23.685, 90.3563];

  return (
    <div className="w-full h-[400px] overflow-hidden">
      <MapContainer
        center={position}
        zoom={7} // zoomed out to show the entire country
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[23.8103, 90.4125]}>
          <Popup>Our Main Office – Dhaka, Bangladesh</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ContactMap;
