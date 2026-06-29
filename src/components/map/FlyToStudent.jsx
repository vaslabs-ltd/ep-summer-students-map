import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function FlyToStudent({ student }) {
  const map = useMap();

  useEffect(() => {
    if (!student) return;
    map.flyTo([student.lat, student.lng], 5, { duration: 0.8 });
  }, [student, map]);

  return null;
}
