import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import type { PokemonFilters, PokemonResponse } from "../../types";

const API_URL = `https://pokeapi.co/api/v2/pokemon`;
const QUERY_KEY_POKEMONS_LIST = "Get Pomemons List";

const getPokomons = async ({
  offset,
  limit,
}: PokemonFilters): Promise<PokemonResponse> => {
  const response = await axios.get(
    `${API_URL}?offset=${offset}&limit=${limit}`,
  );
  return response.data;
};
const useGetPokemons = ({ offset, limit }: PokemonFilters) => {
  return useQuery({
    queryKey: [QUERY_KEY_POKEMONS_LIST, offset, limit],
    queryFn: () => getPokomons({ offset, limit }),
    // staleTime: Infinity,
  });
};

export default useGetPokemons;
