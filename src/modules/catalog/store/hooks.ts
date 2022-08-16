import { useAppDispatch, useAppSelector } from "../../../core/store/hooks";
import * as actions from "./actions";

import {
  getCatalogError,
  getCatalogResults,
  isCatalogLoading,
} from "./selectors";

// TODO: Try to receive dispatch/store as a parameter to reduce coupling
export function useCatalogStore() {
  const dispatch = useAppDispatch();

  const results = useAppSelector(getCatalogResults);
  const error = useAppSelector(getCatalogError);
  const isLoading = useAppSelector(isCatalogLoading);

  function fetchPokemonsList() {
    return dispatch(actions.fetchPokemonsList());
  }

  function clearPokemonsList() {
    return dispatch(actions.clearPokemonsList());
  }

  function clearAndFetchPokemonList() {
    return dispatch(actions.clearAndFetchPokemonsList());
  }

  return {
    results,
    error,
    isLoading,
    clearPokemonsList,
    fetchPokemonsList,
    clearAndFetchPokemonList,
  };
}
