import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const API_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=c60f23325eccf10545a9340f27497a4d&query=";

const cart = JSON.parse(localStorage.getItem("cart"));
const cartlength = JSON.parse(localStorage.getItem("cartlength"));

const initialState = {
  items: [],
  isLoadingitems: false,
  cart: cart ? cart : [],
  cartlength: cartlength ? cartlength : 0,
};

export const getMovies = createAsyncThunk("movie/search", async (message) => {
  const response = await axios.get(API_URL + message);
  return response.data;
});

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoadingitems = false;
      state.items = [];
      state.cart = [];
      state.cartlength = 0;
    },
    addCart: (state, action) => {
      state.cart = [...state.cart, { ...action.payload, idu: uuidv4() }];
      state.cartlength = state.cartlength + 1;
    },
    deleteCart: (state, action) => {
      const cardid = action.payload.idu;
      state.cart = state.cart.filter((card) => card.idu !== cardid);
      state.cartlength = state.cartlength - 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        console.log("pending");
        state.isLoadingitems = true;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.items = action.payload.results;
        state.isLoadingitems = false;
        console.log(state.items);
      })
      .addCase(getMovies.rejected, (state) => {
        state.isLoadingitems = false;
        console.log("reject");
      });
  },
});

export const { reset, addCart, deleteCart } = movieSlice.actions;
export default movieSlice.reducer;
