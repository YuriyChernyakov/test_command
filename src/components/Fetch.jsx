import axios from 'axios';

export const fetch = async url => {
  const response = await axios.get(url);
  return response.data;
};