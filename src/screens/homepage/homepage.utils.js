import sortBy from 'lodash/sortBy';
import find from 'lodash/find';

export const countrySlugOverrides = [
  { country: 'USA', slug: 'united-states' },
  { country: 'Hong Kong', slug: 'hong-kong-sar-china' }
];

export const setUpCountriesData = (herokuData) => {
  let countries = [];
  countries = herokuData.map((d) => {
    let slug = d.country.toLowerCase().split(' ').join('-');
    let overrideExists = find(countrySlugOverrides, (c) => c.country === d.country);
    if (overrideExists) slug = overrideExists.slug;
    return {
      name: d.country,
      slug
    };
  });
  // sort by country name
  countries = sortBy(countries, (c) => c.name);
  return countries;
};
