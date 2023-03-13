import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavbarAuth from './NavbarAuth/NavbarAuth';
import UserMenu from './UserMenu/UserMenu';

import css from './navbar.module.css';
import { isUserLogin } from '../../redux/auth/auth-selectors';

import items from './items';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={css.link} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <header className={css.header}>
      {/* <NavLink to="/">Logo</NavLink> */}

      <ul className={css.menu}>{elements}</ul>

      {!isLogin && <NavbarAuth />}
      {isLogin && <UserMenu />}
    </header>
  );
};

export default Navbar;
