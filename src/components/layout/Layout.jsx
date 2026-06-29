import Header from "./Header.jsx";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-cern-grey text-cern-dark">
      <Header />
      {children}
    </div>
  );
}
