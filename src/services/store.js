// Importing necessary functions from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Importing the API slice for managing articles
import { articleApi } from "./article";

// Creating the Redux store with configureStore function
export const store = configureStore({
  // Configuring reducers for the store
  reducer: {
    // Using the reducer path from articleApi slice
    [articleApi.reducerPath]: articleApi.reducer,
  },
  // Configuring middleware for the store
  middleware: (getDefaultMiddleware) =>
    // Concatenating default middleware with articleApi middleware
    getDefaultMiddleware().concat(articleApi.middleware),
});
