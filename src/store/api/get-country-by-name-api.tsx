import { api } from ".";

export const getCountryByName = api.injectEndpoints({
    endpoints: (builder) => ({
        getCountryByName: builder.query({
            query: (name) => `/name/${name}`,
        }),
    }),
})

export const { useGetCountryByNameQuery } = getCountryByName;