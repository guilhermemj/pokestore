import Axios from 'axios';

import { getIdFromUrl, getImageUrl, simulateRequest } from './utils';

import {
  ApiOptions,
  PokeApiListResult,
  PokeApiDetailsResult,
  PokemonDetails,
  PokemonList,
} from './types';

const LIST_API_LIMIT = 15;

export function createAPI(baseURL: string, { useMocks = false }: ApiOptions = {}) {
  const $http = Axios.create({ baseURL });

  return {
    $http,

    async getPokemonList(): Promise<PokemonList> {
      if (useMocks) {
        return simulateRequest(Array(LIST_API_LIMIT).fill(null).map((_, index) => {
          const id = `${index + 1}`;
          const name = `poke_${id}`;
          const imageUrl = getImageUrl(id);
          return { id, name, imageUrl, types: ['grass', 'fire', 'water'] };
        }));
      }

      const { data: listResponse } = await $http.request<PokeApiListResult>({
        url: '/pokemon',
        method: 'get',
        params: {
          offset: 0,
          limit: LIST_API_LIMIT,
        },
      });

      return await Promise.all(
        listResponse.results.map(async ({ name, url }) => {
          const id = getIdFromUrl(url);
          const imageUrl = getImageUrl(id);

          const { data: detailsResponse } = await $http.request<PokeApiDetailsResult>({
            url: `/pokemon/${name}`,
            method: 'get',
          });

          const types = detailsResponse.types.map(({ type }) => type.name);

          return { id, name, imageUrl, types };
        })
      );
    },

    async getPokemonByName(name: string): Promise<PokemonDetails> {
      if (useMocks) {
        return simulateRequest({
          id: '1',
          name: 'bulbasaur',
          types: ['grass', 'poison'],
        });
      }

      const { data: detailsResponse } = await $http.request<PokeApiDetailsResult>({
        url: `/pokemon/${name}`,
        method: 'get',
      });

      return {
        id: detailsResponse.id,
        name: detailsResponse.name,
        types: detailsResponse.types.map(({ type }) => type.name),
      };
    },
  };
}

export default createAPI('https://pokeapi.co/api/v2/', { useMocks: true });
