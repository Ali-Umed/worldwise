<<<<<<< HEAD
import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
=======
import { NavLink } from 'react-router-dom';
import styles from './AppNav.module.css';

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities </NavLink>
        </li>
        <NavLink to="countries">countries </NavLink>
        <li></li>
      </ul>
    </nav>
  );
}

export default AppNav;
>>>>>>> 8db943725b5ac4d337ba1f73294ee385d05f8df1
