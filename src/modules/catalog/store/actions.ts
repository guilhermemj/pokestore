import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../core/api';

export const clearPokemonsList = createAction('catalog/clearPokemonsList');

// TODO: Try https://redux-toolkit.js.org/rtk-query/overview
export const fetchPokemonsList = createAsyncThunk('catalog/fetchPokemons', api.getPokemonList);

export const clearAndFetchPokemonsList = createAsyncThunk('catalog/clearAndFetchPokemons', async (_, { dispatch }) => {
  // Dispatch basic action
  dispatch(clearPokemonsList());

  // Dispatch async thunk
  await dispatch(fetchPokemonsList());

  // Some extra logic
  console.log('C O M P O S A B I L I T Y');
});
