import { api } from ".";

export const getAllCountries = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: () => `/all`,
    }),
  }),
});

export const { useGetAllCountriesQuery } = getAllCountries;
