import axios from 'axios';

export const getCountries = async () => {
  try {
    let { data } = await axios.get('https://api.covid19api.com/countries');
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
