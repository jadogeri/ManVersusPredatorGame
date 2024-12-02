import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

//const BASE_URL = "http://localhost:4000/api"
const BASE_URL = process.env.BASE_URL
alert(BASE_URL)
console.log("BASE URL ===" ,BASE_URL)
const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  endpoints: () => ({}),
  tagTypes: ['User']
});