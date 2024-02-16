// import { Link } from "react-router-dom";
export default function AdminManu() {
  return (

    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-text mx-3">Kingsman Tailer</div>
      </a>
      <hr className="sidebar-divider my-0" />
      <li className="nav-item">
        <a className="nav-link" href="index.html">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span> Home </span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link collapsed" href="admin-catagery.html">
          <i className="fas fa-fw fa-cog" />
          <span>Catagery</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link collapsed" href="admin-product.html">
          <i className="fas fa-fw fa-wrench" />
          <span>Produces</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link collapsed" href="admin-order.html">
          <i className="fas fa-fw fa-wrench" />
          <span>Order</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link collapsed" href="admin-user.html">
          <i className="fas fa-fw fa-wrench" />
          <span>Users</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link collapsed" href="admin.changepassword.html">
          <i className="fas fa-fw fa-wrench" />
          <span>Change Password</span>
        </a>
      </li>
      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" />
      </div>
    </ul>

  );
}