import { Outlet, Link } from "react-router-dom";
import '../App.css';

const HeaderLayout = () => {
    return (
      <>
        <nav>
        <ul class="horizontal-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link> 
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </>
    )
  };
  
  export default HeaderLayout;
