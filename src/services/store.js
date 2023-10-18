import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";

export const store = configureStore({
  // get a specific slice of the whole store (global state)
  reducer: {
    // we want something specific from api
    [articleApi.reducerPath]: articleApi.reducer,
  },
  // do something with state before we get it
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware),
});
