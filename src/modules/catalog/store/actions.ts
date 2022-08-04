import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../core/api';

export const fetchPokemonsList = createAsyncThunk('catalog/fetchPokemons', api.getPokemonList);

export const clearPokemonsList = createAction('catalog/clearPokemonsList');
