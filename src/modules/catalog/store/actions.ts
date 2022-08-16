import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../core/api';

// TODO: Try https://redux-toolkit.js.org/rtk-query/overview
export const fetchPokemonsList = createAsyncThunk('catalog/fetchPokemons', api.getPokemonList);

export const clearPokemonsList = createAction('catalog/clearPokemonsList');
