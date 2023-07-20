import { createSlice } from "@reduxjs/toolkit";

const BrewerySlice = createSlice({
  name: "brewery",
  initialState: {
    searchInput: "",
    searchValues: [],
    selectedValue: [],
  },
  reducers: {
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});

export const { setSearchInput } = BrewerySlice.actions;
// export BrewerySlice.reducer;
