import css from '../styled.module.css';
import {SideBar} from '../SideBar/SideBar'

export const Home = () => {
  return (
    <div className={css.home}>
      <header>
        <div className={css.navigation}>
          <button type='button' className={css.theme}>Theme<img></img></button>
          <button type='button' className={css.user}>User</button>
        </div>
      </header>
      <SideBar/>
    </div>
  );
};