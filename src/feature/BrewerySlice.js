import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BrewerySlice = createSlice({
  name: "brewery",
  initialState: {
    searchInput: "",
    searchValues: [],
    selectedValue: [],
    isLoading: false,
  },
  reducers: {
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrewery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchValues = [...action.payload];
        console.log(state.searchValues);
      })
      .addCase(fetchBrewery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBrewery.rejected, (state) => {
        state.isLoading = true;
      });
  },
});

export const { setSearchInput } = BrewerySlice.actions;
export default BrewerySlice.reducer;
export const fetchBrewery = createAsyncThunk(
  "fetch/BreweryLocation",
  async (location) => {
    const url = `https://api.openbrewerydb.org/v1/breweries/autocomplete?query=${location
      .split(" ")
      .reduce((prev, cur) => prev + "_" + cur)}`;
    const response = await axios.get(url);
    return response.data;
  }
);
