import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavbarAuth from './NavbarAuth/NavbarAuth';
import UserMenu from './UserMenu/UserMenu';

import css from './navbar.module.css';
import { isUserLogin } from '../../redux/auth/auth-selectors';

// import items from './items';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <header className={css.header}>
      {/* <NavLink to="/">Logo</NavLink> */}

      <ul className={css.menu}>
        <NavLink className={css.link} to="/">
          <p>Home</p>
        </NavLink>
        {isLogin && (
          <NavLink className={css.link} to="/my-contacts">
            <p>Contacts</p>
          </NavLink>
        )}
      </ul>

      {!isLogin && <NavbarAuth />}
      {isLogin && <UserMenu />}
    </header>
  );
};

export default Navbar;
