import { createSlice } from '@reduxjs/toolkit';

import initialState from './state';
import { clearPokemonsList, fetchPokemonsList } from './actions';

export default createSlice({
  name: 'catalog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(clearPokemonsList, (state) => {
      Object.assign(state, initialState);
    });

    builder.addCase(fetchPokemonsList.pending, (state) => {
      state.loading += 1;
    });

    builder.addCase(fetchPokemonsList.fulfilled, (state, action) => {
      state.loading -= 1;
      state.error = null;
      state.results = action.payload;
    });

    builder.addCase(fetchPokemonsList.rejected, (state, action) => {
      state.loading -= 1;
      state.error = action.error;
      state.results = [];
    });
  },
});
