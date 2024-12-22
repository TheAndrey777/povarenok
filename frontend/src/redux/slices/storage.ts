import { createSlice } from "@reduxjs/toolkit/react";

import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  menu: {
    activeId: 1,
  },
};

const storageSlice = createSlice({
  name: "storage",
  initialState,
  reducers: {
    setMenuActiveId: (state, action: PayloadAction<any>) => {
      state.menu.activeId = action.payload.id;
      console.log(state, action);
    },
  },
});

export const { setMenuActiveId } = storageSlice.actions;

export const storageReducer = storageSlice.reducer;
