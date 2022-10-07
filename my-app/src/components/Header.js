import { NavLink } from "react-router-dom";
// import logo from "../images/GAMRx10.png";

function Header() {
  return (
    <header >
    
        <nav className="navbar">
          {/* <img id="logoPic" src={logo} alt="logo" /> */}
          <div className="navLinks">
          <NavLink className={"link"} to="/"><a>Home</a></NavLink> 
          </div>
          <div className="navLinks">
          <NavLink className={"link"} to="/Login"><a>Login / Register </a></NavLink>
          </div>
          <div className="navLinks">
          <NavLink className={"link"} to="/Profile"><a>Click me</a></NavLink>
          </div>
        </nav>

    </header>
  );
}

export default Header;