import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    getCountries: [],
    getCountriesSuccess: ['data'],
    getCountriesFailure: ['error']
  },
  { prefix: '@Cases/' }
);

export { Types, Creators };
