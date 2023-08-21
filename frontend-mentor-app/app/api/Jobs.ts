import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Job {
    id: number,
    company: string,
    logo: string,
    new: boolean,
    featured: boolean,
    position: string,
    role: string,
    level: string,
    postedAt: string,
    contract: string,
    location: string,
    languages: string[],
    tools: string[]
}

const BASE_URL : string = "http://localhost:8000/";

// Define a service using a base URL and expected endpoints
export const jobApi = createApi({
  reducerPath: 'jobApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  // tagTypes: ['job'],
  endpoints: (builder) => ({
    getAllJobByName: builder.query<Job[], void>({
      query: () => "jobs",
      // providesTags: ['job']
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllJobByNameQuery } = jobApi;