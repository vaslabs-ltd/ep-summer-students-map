export function sortStudentsBySurname(students) {
  return [...students].sort((a, b) => a.lastName.localeCompare(b.lastName));
}
