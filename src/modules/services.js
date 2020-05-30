import axios from 'axios';

const { REACT_APP_GEOLOCATION_DB_API_KEY, REACT_APP_API_URL } = process.env;

export const getGeolocation = async () => {
  try {
    let { data } = await axios.get(
      `https://geolocation-db.com/json/${REACT_APP_GEOLOCATION_DB_API_KEY}`
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCasesByCountry = async (country) => {
  try {
    let { data } = await axios.get(`${REACT_APP_API_URL}/dayone/country/${country}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getHerokuAllStatus = async () => {
  try {
    let { data } = await axios.get('https://coronavirus-19-api.herokuapp.com/countries');
    return data;
  } catch (error) {
    throw new Error(error);
  }
};