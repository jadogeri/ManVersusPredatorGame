import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

//const BASE_URL = "http://localhost:4000/api"
const BASE_URL =  "https://manversuspredatorgame.onrender.com/api"

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  endpoints: () => ({}),
  tagTypes: ['User']
});