import { useState } from "react";
import { Marker, Popup } from "react-leaflet";
import {
  Linkedin,
  Github,
  Instagram,
  Globe,
  Mail,
  X
} from "lucide-react";

import PopupCard from "./PopupCard.jsx";
import { getMarkerIcon } from "../../utils/mapIcons.js";

export default function StudentMarker({ marker, onSelectStudent }) {
  const [profileStudent, setProfileStudent] = useState(null);

  const isCluster = marker.students.length > 1;
  const firstStudent = marker.students[0];

  return (
    <>
      <Marker
        position={[marker.lat, marker.lng]}
        icon={getMarkerIcon(marker.students.length)}
        eventHandlers={{
          click: () => onSelectStudent(firstStudent)
        }}
      >
        <Popup maxWidth={300} autoPan={true} keepInView={true}>
          {isCluster ? (
            <div className="w-64">
              <h3 className="mb-3 text-base font-bold text-cern-dark">
                {marker.students.length} students in {firstStudent.city}
              </h3>

              <div className="max-h-80 space-y-2 overflow-y-auto pr-2">
                {marker.students.map((student) => (
                  <div
                    key={student.id}
                    className="rounded-xl border border-slate-200 p-3"
                  >
                    <p className="font-bold text-cern-dark">
                      {student.fullName}
                    </p>

                    <p className="text-xs font-semibold text-cern-blue">
                      {student.university}
                    </p>

                    <button
                      type="button"
                      onClick={() => setProfileStudent(student)}
                      className="mt-3 rounded-lg bg-cern-blue px-3 py-2 text-xs font-bold text-white"
                    >
                      View Profile
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="w-64">
              <p className="font-bold text-cern-dark">
                {firstStudent.fullName}
              </p>

              <p className="text-xs font-semibold text-cern-blue">
                {firstStudent.university}
              </p>

              <button
                type="button"
                onClick={() => setProfileStudent(firstStudent)}
                className="mt-3 rounded-lg bg-cern-blue px-3 py-2 text-xs font-bold text-white"
              >
                View Profile
              </button>
            </div>
          )}
        </Popup>
      </Marker>

      {profileStudent && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 px-4">
          <div className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setProfileStudent(null)}
              className="absolute right-4 top-4 rounded-lg border p-2"
            >
              <X size={18} />
            </button>

            <div className="flex gap-4">
              <img
                src={profileStudent.photo}
                alt={profileStudent.fullName}
                className="h-24 w-24 rounded-2xl object-cover"
              />

              <div>
                <h2 className="text-2xl font-black text-cern-dark">
                  {profileStudent.fullName}
                </h2>

                <p className="mt-1 font-semibold text-cern-blue">
                  {profileStudent.university}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {profileStudent.city}, {profileStudent.country}
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-cern-light px-3 py-1 text-sm font-semibold text-cern-dark">
                {profileStudent.department}
              </span>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                {profileStudent.researchArea}
              </span>
            </div>

            <p className="mt-5 leading-7 text-slate-700">
              {profileStudent.text}
            </p>

            {profileStudent.quote && (
              <blockquote className="mt-5 rounded-xl border-l-4 border-cern-blue bg-cern-light p-4 italic text-cern-dark">
                “{profileStudent.quote}”
              </blockquote>
            )}

            <div className="mt-5 flex items-center gap-4 border-t pt-4">
              {profileStudent.linkedin && (
                <a
                  href={profileStudent.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                  className="text-[#0A66C2]"
                >
                  <Linkedin size={22} />
                </a>
              )}

              {profileStudent.github && (
                <a
                  href={profileStudent.github}
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                  className="text-slate-800"
                >
                  <Github size={22} />
                </a>
              )}

              {profileStudent.instagram && (
                <a
                  href={profileStudent.instagram}
                  target="_blank"
                  rel="noreferrer"
                  title="Instagram"
                  className="text-pink-600"
                >
                  <Instagram size={22} />
                </a>
              )}

              {profileStudent.website && (
                <a
                  href={profileStudent.website}
                  target="_blank"
                  rel="noreferrer"
                  title="Website"
                  className="text-cern-blue"
                >
                  <Globe size={22} />
                </a>
              )}

              {profileStudent.email && (
                <a
                  href={`mailto:${profileStudent.email}`}
                  title="Email"
                  className="text-slate-500"
                >
                  <Mail size={22} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}