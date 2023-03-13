import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../../redux/auth/auth-operations';

import { getUser } from '../../../redux/auth/auth-selectors';

import css from './user-menu.module.css';

const UserMenu = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.container}>
      <p className={css.text}>{email}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
