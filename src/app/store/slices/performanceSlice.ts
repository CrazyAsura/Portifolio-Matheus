import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PerformanceState {
  isLowPower: boolean;
  prefersReducedMotion: boolean;
  tier: number;
  isMobile: boolean;
  fps?: number;
  ready: boolean;
}

const initialState: PerformanceState = {
  isLowPower: false,
  prefersReducedMotion: false,
  tier: 2,
  isMobile: false,
  fps: undefined,
  ready: false,
};

export const performanceSlice = createSlice({
  name: "performance",
  initialState,
  reducers: {
    setPerformanceState: (state, action: PayloadAction<Partial<PerformanceState>>) => {
      return { ...state, ...action.payload };
    },
    setReducedMotion: (state, action: PayloadAction<boolean>) => {
      state.prefersReducedMotion = action.payload;
      state.isLowPower = action.payload || state.tier <= 1;
    },
  },
});

export const { setPerformanceState, setReducedMotion } = performanceSlice.actions;

export default performanceSlice.reducer;

