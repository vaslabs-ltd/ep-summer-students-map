import { useState } from "react";
import Hero from "../components/layout/Hero.jsx";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import WorldMap from "../components/map/WorldMap.jsx";
import { useStudents } from "../hooks/useStudents.js";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const {
    query,
    setQuery,
    country,
    setCountry,
    countries,
    filteredStudents,
    selectedStudent,
    setSelectedStudent
  } = useStudents();

  function handleSelectStudent(student) {
    setSelectedStudent(student);
    setSidebarOpen(false);
  }

  return (
    <>
      <Hero />

      <main className="w-full overflow-x-hidden bg-cern-grey px-6 py-8">
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid h-[80vh] min-h-[720px] overflow-visible md:grid-cols-[360px_minmax(0,1fr)]">
            <Sidebar
              open={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
              query={query}
              setQuery={setQuery}
              country={country}
              setCountry={setCountry}
              countries={countries}
              students={filteredStudents}
              selectedStudent={selectedStudent}
              onSelectStudent={handleSelectStudent}
            />

            <WorldMap
              students={filteredStudents}
              selectedStudent={selectedStudent}
              onSelectStudent={handleSelectStudent}
              onOpenSidebar={() => setSidebarOpen(true)}
            />
          </div>
        </section>
      </main>
    </>
  );
}