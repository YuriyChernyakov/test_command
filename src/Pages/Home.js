import { useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader';
import { fetch } from '../components/Fetch';
import { Link } from 'react-router-dom';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const topFilms =
    'https://api.themoviedb.org/3/trending/movie/day?api_key=73d1d1a66744e8a71fb191bdd223462e';
  const firstImgLink = 'https://image.tmdb.org/t/p/w300';
  const defaultImg = `https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-no-image-available-icon-flat.jpg`;
  useEffect(() => {
    const getApi = async () => {
      setLoader(true);
      try {
        const getTop = await fetch(topFilms);
        setFilms(getTop.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getApi();
  }, []);

  return (
    <div>
      {error ? (
        <h2>Sorry, something went wrong. Please reload the page</h2>
      ) : (
        <>
          <h2>Trending Today</h2>
          {loader ? (
            <Loader />
          ) : (
            <ul>
              {films.map(
                ({ id, name, title, poster_path, release_date = [] }) => (
                  <li key={id}>
                    <Link to={`/movies/${id}`} state={{ from: '/' }}>
                      {' '}
                      <img
                        src={
                          poster_path ? firstImgLink + poster_path : defaultImg
                        }
                        alt={name}
                        loading="lazy"
                      />
                      {title ?? name} (
                      {release_date !== ''
                        ? release_date.slice(0, 4)
                        : 'unknown year'}
                      )
                    </Link>
                  </li>
                )
              )}
            </ul>
          )}
        </>
      )}
    </div>
  );
};
export default Home;