import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// import NavbarAuth from './NavbarAuth/NavbarAuth';
// import NavbarUser from './NavbarUser/NavbarUser';

import css from './navbar.module.css';
// import { isUserLogin } from '../../redux/auth/auth-selectors';

import items from './items';
import NavbarAuth from './NavbarAuth/NavbarAuth';

const Navbar = () => {
  //   const isLogin = useSelector(isUserLogin);

  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={css.link} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <div className={css.navbar}>
      <NavLink to="/">Logo</NavLink>

      <ul className={css.menu}>{elements}</ul>

      <NavbarAuth />
      {/* {!isLogin && <NavbarAuth />}
      {isLogin && <NavbarUser />} */}
    </div>
  );
};

export default Navbar;
