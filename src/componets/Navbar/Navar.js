import "./Navar.css";
import { Link } from "react-router-dom";
const Navar = () => {
  return (
    <div className="nav-container">
        <nav className="navbar">
          <img src="images/logo2.png" alt="logo.png" />
          <h1 className="navbar-text">Ink fusion.shop</h1>
          <Link className="seeCarrito" to={"/Cart"}>🛒</Link>
        </nav>
    </div>
  )
}

export default Navar
