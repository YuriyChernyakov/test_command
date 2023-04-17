import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation, NavLink, Link } from 'react-router-dom';
import { fetch } from 'components/Fetch';
import Loader from '../components/Loader/Loader';
import { BiArrowBack } from 'react-icons/bi';

const MovieDetails = () => {
  const [fullInfo, setFullInfo] = useState({});
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const backAdress = location.state ? location.state.from : `/movies`;
  const firstImgLink = 'https://image.tmdb.org/t/p/w300';
  const defaultImg = `https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-no-image-available-icon-flat.jpg`;

  useEffect(() => {
    const fullInfoLink = `https://api.themoviedb.org/3/movie/${id}?api_key=73d1d1a66744e8a71fb191bdd223462e&language=en-US`;
    setLoader(true);
    const getApi = async () => {
      try {
        const getInfo = await fetch(fullInfoLink);
        setFullInfo(getInfo);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getApi();
  }, [id]);
  const {
    poster_path,
    name,
    genres,
    overview,
    vote_average,
    title,
    release_date,
  } = fullInfo;

  if (!release_date) {
    return;
  }

  return (
    <div>
      {loader && <Loader />}
      <Link to={backAdress}>
        <BiArrowBack />
        Go back
      </Link>
      {error && <h2>Sorry, something went wrong. Please try again</h2>}

      <>
        <div>
          <img
            src={poster_path ? firstImgLink + poster_path : defaultImg}
            alt={title ?? name}
          />
          <div>
            <h3>
              {title ?? name} ({release_date.slice(0, 4)})
            </h3>
            <h4>User Score: {(vote_average * 10).toFixed(1)}%</h4>
            <h4>Overview</h4>
            <p>{overview}</p>
            <h4>Genres</h4>
            <p>
              {genres.length
                ? genres.map(({ name }) => name).join(', ')
                : 'unknown genres'}
            </p>
          </div>
        </div>
        <div>
          <h4>Additional Information</h4>
          <div>
            <NavLink to="cast" state={{ from: backAdress }}>
              Cast
            </NavLink>
            <NavLink to="reviews" state={{ from: backAdress }}>
              Reviews
            </NavLink>
          </div>
        </div>
        <Suspense ffullback={null}>
          <Outlet />
        </Suspense>
      </>
    </div>
  );
};
export default MovieDetails;