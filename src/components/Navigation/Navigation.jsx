import { NavLink } from "react-router-dom";
import styles from './Navigation.module.css';

export const Nav = () => {
    return (
        <div className={styles.Nav}>
    <NavLink to='/' end className={({ isActive }) => (isActive ? styles.active : styles.navLink)}>
        Home
      </NavLink>
      <NavLink to='/movies' end className={({ isActive }) => (isActive ? styles.active : styles.navLink)}>
        Movies
      </NavLink>
        </div>
    )
}

export default Nav;
