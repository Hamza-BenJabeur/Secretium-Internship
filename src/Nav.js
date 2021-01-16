
import './App.css';
import {Link} from 'react-router-dom'
function Nav() {
  return (
  <nav>
      <h3>logo</h3>
      <ul className="nav-links">
          <Link to='/about' className="links">
          <li>About</li>
          </Link>
          
          <Link to='/posts' className="links">
          <li>Posts</li>
          </Link>
          

      </ul>
  </nav>
  );
}

export default Nav;
