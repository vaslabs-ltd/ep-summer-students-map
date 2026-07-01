import cernLogo from "../../assets/cern-logo.svg";

export default function Logo() {
  return (
    <img
      src={cernLogo}
      alt="CERN"
      width={80}
      height={80}
      className="w-20 h-auto"
    />
  );
}