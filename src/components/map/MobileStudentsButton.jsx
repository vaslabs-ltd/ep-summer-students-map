export default function MobileStudentsButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="absolute left-4 top-4 z-[650] rounded-xl bg-white px-4 py-3 text-sm font-bold shadow md:hidden"
    >
      Show students
    </button>
  );
}
