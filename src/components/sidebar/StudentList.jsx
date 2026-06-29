import StudentListItem from "./StudentListItem.jsx";

export default function StudentList({ students, selectedStudent, onSelectStudent }) {
  if (students.length === 0) {
    return (
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
        No students match your search.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {students.map((student) => (
        <StudentListItem
          key={student.id}
          student={student}
          selected={selectedStudent?.id === student.id}
          onClick={() => onSelectStudent(student)}
        />
      ))}
    </div>
  );
}
