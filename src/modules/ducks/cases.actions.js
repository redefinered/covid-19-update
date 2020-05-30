import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    getInitialData: [],
    getInitialDataSuccess: ['data'],
    getInitialDataFailure: ['error'],
    setCountry: ['country'],
    setCountries: ['countries'],
    getCasesByCountry: ['country'],
    getCasesByCountrySuccess: ['data'],
    getCasesByCountryFailure: ['error']
  },
  { prefix: '@Cases/' }
);

export { Types, Creators };
