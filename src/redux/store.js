// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";
// import counterReducer from "./slices/counterSlice";
// import cartReducer from "./slices/cartSlice";
// import userReducer from "./slices/userSlice";
// import notifyReducer from "./slices/notifySlice";
// // import ProfileCards from "../Pages/Cards/ProfileCards";
// import detailFormReducer from "./slices/detailFormSlice";
// const rootReducer = combineReducers({
//   user: userReducer,
//   detailForm: detailFormReducer,
//   counter: counterReducer,
//   cart: cartReducer,
//   notify: notifyReducer
// });

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
// });

// export const persistor = persistStore(store);



import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, 
  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER 
} from "redux-persist";

import counterReducer from "./slices/counterSlice";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/userSlice";
import notifyReducer from "./slices/notifySlice";
import detailFormReducer from "./slices/detailFormSlice";

const rootReducer = combineReducers({
  user: userReducer,
  detailForm: detailFormReducer,
  counter: counterReducer,
  cart: cartReducer,
  notify: notifyReducer
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  // ✅ Fix for non-serializable redux-persist actions
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
});

export const persistor = persistStore(store);
