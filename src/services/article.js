// Importing necessary functions from Redux Toolkit Query
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Accessing the RapidAPI key from environment variables
const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

// Creating an API slice using createApi function
export const articleApi = createApi({
  // Defining the name for the reducer path
  reducerPath: "articleApi",
  // Configuring the base query with fetchBaseQuery
  baseQuery: fetchBaseQuery({
    // Setting the base URL for API requests
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    // Adding headers to the requests for authentication
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set("X-RapidAPI-Host", "article-extractor-and-summarizer.p.rapidapi.com");

      return headers;
    },
  }),
  // Defining API endpoints using builder.query
  endpoints: (builder) => ({
    getSummary: builder.query({
      // Defining the query function for the endpoint
      // encodeURIComponent() function encodes special characters that may be present in the parameter values
      // If we do not properly encode these characters, they can be misinterpreted by the server and cause errors or unexpected behavior. Thus that RTK bug
      query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

// Exporting the generated hooks for making queries
export const { useLazyGetSummaryQuery } = articleApi;
