import { X } from "lucide-react";
import SearchBox from "./SearchBox.jsx";
import CountryFilter from "./CountryFilter.jsx";
import StudentList from "./StudentList.jsx";

export default function Sidebar({
  open,
  onClose,
  query,
  setQuery,
  country,
  setCountry,
  countries,
  students,
  selectedStudent,
  onSelectStudent
}) {
  const hasSearch = query.trim().length > 0;
  const hasCountryFilter = country !== "All";
  const shouldShowList = hasSearch || hasCountryFilter;

  return (
    <aside
      id="students"
      className={[
        "h-full min-h-0 overflow-y-auto border-r border-slate-200 bg-white p-5 transition md:relative md:block md:translate-x-0",
        open
          ? "fixed inset-y-0 left-0 z-[700] w-[86%] max-w-sm translate-x-0 shadow-2xl"
          : "hidden md:block"
      ].join(" ")}
    >
      <div className="mb-5 flex items-center justify-between md:hidden">
        <strong>Students</strong>

        <button
          onClick={onClose}
          className="rounded-lg border p-2"
          type="button"
        >
          <X size={18} />
        </button>
      </div>

      <SearchBox query={query} setQuery={setQuery} />

      <CountryFilter
        country={country}
        setCountry={setCountry}
        countries={countries}
      />

      <div className="mt-6 rounded-xl border border-dashed border-slate-300 p-6 text-center">
        <h3 className="text-lg font-bold">
          {students.length} Students
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Search for a student or choose a country to show matching results.
        </p>
      </div>

      {shouldShowList && (
        <div className="mt-5">
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="font-bold">{students.length} results</span>
            <span className="text-slate-500">A-Z by surname</span>
          </div>

          <StudentList
            students={students}
            selectedStudent={selectedStudent}
            onSelectStudent={onSelectStudent}
          />
        </div>
      )}
    </aside>
  );
}