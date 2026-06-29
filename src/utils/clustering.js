export function createDisplayMarkers(students) {
  const groups = new Map();

  students.forEach((student) => {
    const key = `${student.lat},${student.lng}`;

    if (!groups.has(key)) {
      groups.set(key, {
        id: key,
        lat: student.lat,
        lng: student.lng,
        students: []
      });
    }

    groups.get(key).students.push(student);
  });

  return Array.from(groups.values());
}
