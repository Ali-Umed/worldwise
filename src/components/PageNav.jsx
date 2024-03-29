import styles from './PageNav.module.css';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

function PageNav() {
  return (
    <div>
      <nav className={styles.nav}>
        <Logo />
        <ul>
          <li>
            <NavLink to="/pricing">pricing</NavLink>
          </li>
          <li>
            <NavLink to="/product">product</NavLink>{' '}
          </li>
          <li>
            {' '}
            <NavLink to="/login" className={styles.ctaLink}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PageNav;
