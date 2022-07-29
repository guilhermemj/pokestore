import type { SerializedError } from "@reduxjs/toolkit";

export type CatalogState = {
  results: any[];
  loading: number;
  error: SerializedError | null;
};

const state: CatalogState = {
  results: [],
  loading: 0,
  error: null,
};

export default state;
