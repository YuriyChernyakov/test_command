import { useParams } from 'react-router-dom';
import { fetch } from 'components/Fetch';
import { useState, useEffect } from 'react';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const reviewsLink = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=73d1d1a66744e8a71fb191bdd223462e&language=en-US&page=1`;

    const getApi = async () => {
      setLoading(true);
      try {
        const getInfo = await fetch(reviewsLink);
        setReviews(getInfo.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getApi();
  }, [id]);

  return (
    <div>
      {loading && <Loader />}
      {reviews.length === 0 && !loading ? (
        <h3>Sorry, we didn't find anything</h3>
      ) : (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Reviews;