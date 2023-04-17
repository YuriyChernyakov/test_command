import { Outlet, NavLink } from 'react-router-dom';
// import Loader from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
        <Outlet />
    </div>
  );
};