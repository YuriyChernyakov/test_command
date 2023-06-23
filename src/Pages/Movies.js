import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { fetch } from 'components/Fetch';
import { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import css from '../components/styled.module.css'

const Movies = () => {
  const [qwery, setQwery] = useState('');
  const [searchres, setSearchres] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({});
  const searchName = searchParams.get('search') ?? '';

  const { register, handleSubmit, reset } = useForm();
  const imgLink = 'https://image.tmdb.org/t/p/w300';
  const defaultImg = `https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-no-image-available-icon-flat.jpg`;
  const location = useLocation();

  const onSubmit = value => {
    if (qwery === value.name) {
      return;
    }
    reset();
    setError(false);
    setSearchres([]);
    setSearchParams({ search: value.name });
    setQwery(value.name);
  };
  useEffect(() => {
    setQwery(searchName);
    const findFilms = `https://api.themoviedb.org/3/search/movie?api_key=73d1d1a66744e8a71fb191bdd223462e&language=en-US&query=${qwery}&page=1&include_adult=false`;

    if (!qwery) {
      return;
    }
    const getApi = async () => {
      setLoader(true);
      try {
        const getTop = await fetch(findFilms);
        setSearchres(getTop.results);

        getTop.total_results === 0 && toast("Sorry,we didn't find anything");
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getApi();
  }, [qwery, searchName]);
  return (
    <div>
      <form className={css.formMov} onSubmit={handleSubmit(onSubmit)}>
        <label className={css.labelMov}>Enter the name of the movie</label>
        <div>
          <input
            className={css.inpMov}
            type="text"
            {...register('name', { required: true })}
            placeholder="Conan"
          />

          <button className={css.buttMov} type="submit">Search</button>
        </div>
      </form>
      <ToastContainer />
      {error ? (
        <h2 className={css.titleHome}>
          Sorry, something went wrong. Please reload the page and try again
        </h2>
      ) : (
        <ul className={css.filmList}>
          {searchres !== [] &&
            searchres.map(
              ({ id, name, title, poster_path, release_date = [] }) => (
                <li className={css.listItemHome} key={id}>
                  <Link className={css.linkMovie} to={`${id}`} state={{ from: location }}>
                    {' '}
                    <img
                      className={css.imgHome}
                      src={poster_path ? imgLink + poster_path : defaultImg}
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
    </div>
  );
};
export default Movies;