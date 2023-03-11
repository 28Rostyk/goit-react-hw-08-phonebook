import css from './home.module.css';

const Home = () => {
  return (
    <>
      <h2 className={css.home_title}>Wellcome</h2>
      <p className={css.home_decription}>
        Now you will exactly not forget your contacts!
      </p>
      <p className={css.home_decription}>
        Please, Sign up or Log in to have access to the Phonebook!
      </p>
    </>
  );
};
export default Home;
