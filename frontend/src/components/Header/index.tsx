import logo from "../../assets/logo.svg";
import "./index.css";

export function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" />
      <h1 className="title">DsMetas</h1>
    </header>
  );
}
