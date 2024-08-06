import { Link, Outlet } from "react-router-dom";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us">
      <ul>
        <li>
          <Link to="site-mission">Site Misson</Link>
        </li>
        <li>
          <Link to="site-history">Site History</Link>
        </li>
      </ul>
      <p>You can find out more information about our site here.</p>
      <Outlet />
    </div>
  );
}

export default AboutUs;
