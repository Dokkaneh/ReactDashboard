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
                  <DashboardIcon/>
                  <li><span>Dashboard</span></li>
                  <li><span>Dashboard</span></li>
                  <li><span>Dashboard</span></li>
                  <li><span>Dashboard</span></li>
              </ul>
          </div>
          <div className="bottom">color option</div>
    </div>
  )
}

export default Sidebar