import ListUsers from './users/listUsers';
import ListInquiries from './inquiries/listInquiries';
import Buttons from './buttons';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
} from 'react-router-dom';

const Sidebar = () => {
  return(
    <>
    <div className='Sidebar main-sidebar mt-2 '>
      <div className="container sidebarWrapper os-content content">
        <div className="row sidebarMenu">
          <h3 className="sidebarTitle">Sidebar</h3>
          <div className=" ">
            <ul className="nav flex-column sidebarList">
              <li className="nav-item sidebarListItem">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item sidebarListItem">
                <Link className="nav-link active" aria-current="page" to="/listUsers">Users</Link>
              </li>
              <li className="nav-item sidebarListItem">
                <Link className="nav-link" to="/listInquiries">Inquiries</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
} 

export default Sidebar;