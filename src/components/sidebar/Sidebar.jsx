import "./Sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
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
                 
                  <li> <DashboardIcon className="icon"/><span>Dashboard</span></li>
                  <li><span>Users</span></li>
                  <li><span>Products</span></li>
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