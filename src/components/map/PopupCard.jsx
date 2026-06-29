import { MapPin } from "lucide-react";
import SocialLinks from "../common/SocialLinks.jsx";

export default function PopupCard({ student }) {
  return (
    <article className="w-72">
      <div className="flex gap-3">
        <img
          src={student.photo}
          alt={student.firstName}
          className="h-20 w-20 rounded-xl object-cover"
        />

        <div>
          <h3 className="text-lg font-bold text-cern-dark">
            {student.firstName} {student.lastName}
          </h3>
          <p className="text-sm font-semibold text-cern-blue">
            {student.university}
          </p>
          <p className="mt-1 flex items-center gap-1 text-sm text-slate-600">
            <MapPin size={14} />
            {student.city}, {student.country}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-700">{student.text}</p>

      {student.quote && (
        <blockquote className="mt-3 rounded-xl border-l-4 border-cern-blue bg-cern-light p-3 text-sm text-cern-dark">
          “{student.quote}”
        </blockquote>
      )}

      <SocialLinks student={student} />
    </article>
  );
}
