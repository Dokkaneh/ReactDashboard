import "./Sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
      <div className="sidebar">
          <div className="top">
              <span className="logo">lamaAdmin</span>
          </div>
          <hr />
          <div className="center">
              <ul>
                  <p className="title"></p>
                 <NavLink to="/" style={{textDecoration:"none"}}>
                      <li> <DashboardIcon className="icon" /><span>Dashboard</span></li>
                  </NavLink>
                  <NavLink to="/users" style={{textDecoration:"none"}}>
                      <li><span>Users</span></li>
                  </NavLink>
                  <NavLink to="/products" style={{textDecoration:"none"}}>
                      <li><span>Products</span></li>
                      </NavLink>
                  <li><span>Status</span></li>
                  <p className="title">Me</p>
                  <li><span>Log Out</span></li>
              </ul>
          </div>
          <div className="bottom">
              <div className="colorOption"></div>
              <div className="colorOption"></div>
          </div>
    </div>
  )
}

export default Sidebar