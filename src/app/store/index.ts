import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import uiReducer from "./slices/uiSlice";
import performanceReducer from "./slices/performanceSlice";
import navigationReducer from "./slices/navigationSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      ui: uiReducer,
      performance: performanceReducer,
      navigation: navigationReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// Typed Hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

