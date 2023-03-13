import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../../redux/auth/auth-operations';

import { getUser } from '../../../redux/auth/auth-selectors';

import css from './user-menu.module.css';
import defaultAvatar from '../../../img/avatar.png';
import Button from '@mui/material/Button';
const UserMenu = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.container}>
      <img
        src={defaultAvatar}
        alt="Default Avatar"
        width="32"
        className={css.avatar}
      />
      <span className={css.name}>Welcome, {email}</span>

      <Button
        className={css.Button}
        color="secondary"
        variant="outlined"
        type="button"
        onClick={onLogout}
      >
        Log out
      </Button>
    </div>
  );
};

export default UserMenu;
