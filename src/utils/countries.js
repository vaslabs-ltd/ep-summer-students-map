export function getCountries(students) {
  const countries = students.map((student) => student.country);
  return ["All", ...Array.from(new Set(countries)).sort()];
}
