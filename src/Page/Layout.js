import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>

<nav className="navbar navbar-expand-sm ms-5 ps-5 navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand col-md-7 col-6 text-dark" to="#"> <img src='img/2.png' /> </a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon bg-dark"></span>
    </button>

    <div className="collapse navbar-collapse col-md-4 col-6 " id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link text-black ms-4 "  to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-black ms-4" to="/About">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-black ms-4" to="/Services">SERVICES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-black ms-4"  to="/Contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

<Outlet />
</>
  )
};
export default Layout;