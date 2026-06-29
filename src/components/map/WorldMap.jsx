import { MapContainer, TileLayer } from "react-leaflet";
import FlyToStudent from "./FlyToStudent.jsx";
import StudentMarker from "./StudentMarker.jsx";
import MobileStudentsButton from "./MobileStudentsButton.jsx";
import { createDisplayMarkers } from "../../utils/clustering.js";

export default function WorldMap({
  students,
  selectedStudent,
  onSelectStudent,
  onOpenSidebar
}) {
  const displayMarkers = createDisplayMarkers(students);

  return (
    <div className="relative min-h-0 min-w-0 overflow-visible">
      <MobileStudentsButton onClick={onOpenSidebar} />

      <MapContainer
        center={[48, 10]}
        zoom={4}
        minZoom={2}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FlyToStudent student={selectedStudent} />

        {displayMarkers.map((marker) => (
          <StudentMarker
            key={marker.id}
            marker={marker}
            onSelectStudent={onSelectStudent}
          />
        ))}
      </MapContainer>
    </div>
  );
}