import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productReducer from "../productslice/productslice.js";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], 
};

const persistedReducer = persistReducer(persistConfig, productReducer);

const store = configureStore({
  reducer: {
    products: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], 
      },
    }),
});

export const persistor = persistStore(store);
export default store;
