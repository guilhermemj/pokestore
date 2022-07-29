export type ApiOptions = {
  useMocks?: boolean;
}

export type PokemonList = Array<{
  id: string;
  name: string;
  imageUrl: string;
  types: string[];
}>

export type PokemonDetails = {
  id: string;
  name: string;
  types: string[];
};

// ---------------------
//  External API Types
// ---------------------

type PokeApiListEntry = {
  name: string;
  url: string;
};

export type PokeApiListResult = {
  results: PokeApiListEntry[];
  count: number;
  [key: string]: any;
};


type PokemonApiType = {
  slot: number;
  type: {
    name: string;
  }
}

export type PokeApiDetailsResult = {
  id: string;
  name: string;
  types: PokemonApiType[];
  [key: string]: any;
}
