import type { RootState } from '../../../core/store';

export function isCatalogLoading(state: RootState) {
  return state.catalog.loading > 0;
}

export function getCatalogResults(state: RootState) {
  return state.catalog.results;
}

export function hasCatalogError(state: RootState) {
  return state.catalog.error !== null;
}

export function getCatalogError(state: RootState) {
  return state.catalog.error;
}
