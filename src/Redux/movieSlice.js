import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const getMovieData = createAsyncThunk("movie/getData", async () => {
  try {
    const { data } = await axios.get(
      "https://www.omdbapi.com/?i=tt3896198&apikey=d7f42210&s"
    );
    return data;
  } catch (error) {
    toast.error(error.message);
  }
});

const movieSlice = createSlice({
  name: "movie",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovieData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMovieData.fulfilled, (state, action) => {
      state.loading = false;
      state.myMovie = action.payload;
    });
    builder.addCase(getMovieData.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default movieSlice.reducer;
