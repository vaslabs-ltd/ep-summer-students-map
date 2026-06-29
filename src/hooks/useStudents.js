import { useMemo, useState } from "react";
import { students as starterStudents } from "../data/students.js";
import { filterStudents } from "../utils/filtering.js";
import { sortStudentsBySurname } from "../utils/sorting.js";
import { getCountries } from "../utils/countries.js";

export function useStudents() {
  const [students] = useState(starterStudents);
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("All");
  const [selectedStudent, setSelectedStudent] = useState(starterStudents[0]);

  const countries = useMemo(() => getCountries(students), [students]);

  const filteredStudents = useMemo(() => {
    const filtered = filterStudents(students, query, country);
    return sortStudentsBySurname(filtered);
  }, [students, query, country]);

  return {
    students,
    query,
    setQuery,
    country,
    setCountry,
    countries,
    filteredStudents,
    selectedStudent,
    setSelectedStudent
  };
}
