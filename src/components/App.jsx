import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Home } from './Home/Home';
import Homes from '../Pages/Home';

const Movies = lazy(() => import('../Pages/Movies'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));
const Cast = lazy(() => import('./SideBar/SideBar'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route index element={<Homes />} /> */}
          {/* <Route path="movies" element={<Movies />} /> */}
          {/* <Route path="/movies/:id" element={<MovieDetails />}> */}
            {/* <Route path="cast" element={<Cast />} /> */}
            {/* <Route path="reviews" element={<Reviews />} /> */}
          {/* </Route> */}
        </Route>
      </Routes>
    </div>
  );
};