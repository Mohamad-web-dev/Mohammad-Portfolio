import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {

  const position = [35.3676, 51.2370];
  const innerW = window.innerWidth
  return (
    <MapContainer
      center={position}
      zoom={15}
      style={
        innerW <= 990 ?{
          height : "250px",
          width: "250px",
          borderRadius:"20px"
        } :
        {
        height: "300px",
        width: "300px",
        borderRadius: "20px"
      }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>
          Hasanabad Fashafuyeh
        </Popup>
      </Marker>

    </MapContainer>
  );
}

export default Map;