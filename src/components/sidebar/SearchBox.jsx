import { Search } from "lucide-react";

export default function SearchBox({ query, setQuery }) {
  return (
    <>
      <label htmlFor="search" className="mb-2 block text-sm font-bold">
        Search
      </label>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-3 text-slate-400" size={18} />

        <input
          id="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Name, university, city, country..."
          className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-3 outline-none focus:border-cern-blue focus:ring-4 focus:ring-blue-100"
        />
      </div>
    </>
  );
}
