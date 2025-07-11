import { combineReducers } from "redux";
import appReducer from "./appReducer";
import userReducer from "./userReducer"; // Sử dụng userReducer
import adminReducer from "./adminReducer";

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistCommonConfig = {
  storage: storage,
  stateReconciler: autoMergeLevel2,
};
console.log("persistCommonConfig:", persistCommonConfig);
const userPersistConfig = {
  ...persistCommonConfig,
  key: "user",
  whitelist: ["isLoggedIn", "userInfo"],
};
const appPersistConfig = {
  ...persistCommonConfig,
  key: "app",
  whitelist: ["language"],
};
const createRootReducer = () =>
  combineReducers({
    user: persistReducer(userPersistConfig, userReducer),
    app: persistReducer(appPersistConfig, appReducer),
    admin: adminReducer,
  });

export default createRootReducer;
