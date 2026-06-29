export function filterStudents(students, query, country) {
  const cleanQuery = query.toLowerCase().trim();

  return students
    .filter((student) => country === "All" || student.country === country)
    .filter((student) => {
      const searchableText = [
        student.firstName,
        student.lastName,
        student.university,
        student.city,
        student.country
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(cleanQuery);
    });
}
