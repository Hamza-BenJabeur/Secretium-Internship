
import './App.css';
import {Link} from 'react-router-dom'
function Nav() {
  return (
    <div>

  <nav>
    <Link to="/" className="links">
    <img src="https://scontent-pmo1-1.xx.fbcdn.net/v/t1.0-9/140663557_3478641308900033_6231878707787636856_n.jpg?_nc_cat=109&ccb=2&_nc_sid=730e14&_nc_ohc=oLVTzXaNC94AX9OSBnT&_nc_ht=scontent-pmo1-1.xx&oh=dd952a5d50c2da601ae814ba12c05d18&oe=602C7EEB" alt="logo" className="secruitum-logo"/>

      {/* <h3 className="logo">logo</h3> */}
      </Link>
      <ul className="nav-links">
          <Link to='/photos' className="links">
          <li>photos</li>
          </Link>
          
          <Link to='/posts' className="links">
          <li>Posts</li>
          </Link>
          

      </ul>
  </nav>
  <div class="header">
  <h1>Secretium Internship Tasks</h1>
</div>
  </div>
  );
}

export default Nav;
