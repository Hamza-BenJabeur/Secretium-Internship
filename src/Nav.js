
import './App.css';
import {Link} from 'react-router-dom'
function Nav() {
  return (
    <div>

  <nav>
    {/* <img src="src/logo/hbj1993.PNG" alt=""/> */}
      <h3 className="logo">logo</h3>
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
