export default function CountryFilter({ country, setCountry, countries }) {
  return (
    <>
      <label htmlFor="country" className="mb-2 block text-sm font-bold">
        Filter by country
      </label>

      <select
        id="country"
        value={country}
        onChange={(event) => setCountry(event.target.value)}
        className="mb-6 w-full rounded-xl border border-slate-300 px-3 py-3 outline-none focus:border-cern-blue focus:ring-4 focus:ring-blue-100"
      >
        {countries.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}
