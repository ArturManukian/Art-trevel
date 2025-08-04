import { Outlet, Link, useLocation } from "react-router-dom";
import './Layout.sass';
import logo from './png-logo.png';
import { useEffect, useState } from 'react';

const Layout = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <nav>
        <div className="imglogo">
          <img className="img" src={logo} alt="logo" />
        </div>
        <ul>
          <li>
            <Link className={activePath === "/Home1" ? "active" : ""} to="/Home1">HOME</Link>
          </li>
          <li>
            <Link className={activePath === "/Home2" ? "active" : ""} to="/Home2">ABOUT US</Link>
          </li>
          <li>
            <Link className={activePath === "/Home3" ? "active" : ""} to="/Home3">LANDING</Link>
          </li>
          <li>
            <Link className={activePath === "/Home4" ? "active" : ""} to="/Home4">CONTACT US</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
