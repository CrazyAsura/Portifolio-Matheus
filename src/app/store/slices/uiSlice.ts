import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UiState {
  preloaderActive: boolean;
  preloaderProgress: number;
  isScrolled: boolean;
  scrollProgress: number;
  mobileMenuOpen: boolean;
}

const initialState: UiState = {
  preloaderActive: true,
  preloaderProgress: 0,
  isScrolled: false,
  scrollProgress: 0,
  mobileMenuOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setPreloaderProgress: (state, action: PayloadAction<number>) => {
      state.preloaderProgress = action.payload;
    },
    setPreloaderActive: (state, action: PayloadAction<boolean>) => {
      state.preloaderActive = action.payload;
    },
    setIsScrolled: (state, action: PayloadAction<boolean>) => {
      state.isScrolled = action.payload;
    },
    setScrollProgress: (state, action: PayloadAction<number>) => {
      state.scrollProgress = action.payload;
    },
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileMenuOpen = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
  },
});

export const {
  setPreloaderProgress,
  setPreloaderActive,
  setIsScrolled,
  setScrollProgress,
  setMobileMenuOpen,
  toggleMobileMenu,
} = uiSlice.actions;

export default uiSlice.reducer;

