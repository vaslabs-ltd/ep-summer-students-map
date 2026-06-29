export default function StudentListItem({ student, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={[
        "w-full rounded-xl border p-3 text-left transition hover:-translate-y-0.5 hover:border-cern-blue hover:bg-cern-light",
        selected ? "border-cern-blue bg-cern-light" : "border-slate-200"
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <img
          src={student.photo}
          alt=""
          className="h-11 w-11 rounded-full object-cover"
        />

        <div>
          <p className="font-bold">
            {student.lastName}, {student.firstName}
          </p>
          <p className="text-sm text-slate-600">{student.university}</p>
          <p className="text-xs text-slate-500">
            {student.city}, {student.country}
          </p>
        </div>
      </div>
    </button>
  );
}
