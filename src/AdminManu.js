import { Link } from "react-router-dom";
import Toggel from "./toggel";
export default function AdminMenu() {
  return (
    <div id="wrapper">
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
          <div className="sidebar-brand-text mx-3">Kingsman Shpoing </div>
        </Link>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <Link className="nav-link" to="/home">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span> Home </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/catagery">
            <i className="fas fa-fw fa-cog" />
            <span>Category</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/product">
            <i className="fas fa-fw fa-wrench" />
            <span>Products</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/order">
            <i className="fas fa-fw fa-wrench" />
            <span>Order</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/user" >
            <i className="fas fa-fw fa-wrench" />
            <span>Users</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/adminchangepassword">
            <i className="fas fa-fw fa-wrench" />
            <span>Change Password</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
