import { useSelector } from 'react-redux';
import { isUserLogin } from '../../redux/auth/auth-selectors';
import { getUser } from '../../redux/auth/auth-selectors';
import css from './home.module.css';

const Home = () => {
  const isLogin = useSelector(isUserLogin);
  const { name } = useSelector(getUser);
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Wellcome {name}</h2>
      <p className={css.text}>Now you will exactly not forget your contacts!</p>
      {!isLogin && (
        <p className={css.info}>
          Please, Sign up or Log in to have access to the Phonebook!
        </p>
      )}
    </div>
  );
};
export default Home;
