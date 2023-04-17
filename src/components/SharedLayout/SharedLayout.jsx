import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import css from '../styled.module.css';
import '../../../src/index.css';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav className={css.navigation}>
          <NavLink className={css.navLink} to="/">Home</NavLink>
          <NavLink className={css.navLink} to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Suspense fullback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};