import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { jobApi } from './api/Jobs'
import filterReducer from "./features/filterSlice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [jobApi.reducerPath]: jobApi.reducer,
    filter: filterReducer,
    
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobApi.middleware),
})

export type RootStateType = ReturnType<typeof store.getState>