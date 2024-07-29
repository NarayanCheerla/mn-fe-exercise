import axios from "axios";
import { useQueries } from "@tanstack/react-query";

import type {
  PokemonDetailsInputType,
  PokemonDetailsResponse,
} from "../../types";

const QUERY_KEY_POKEMON_DETAILS = "Get Pomemon Details";

const getPokomonDetails = async (
  url: string,
): Promise<PokemonDetailsResponse[]> => {
  const response = await axios.get(url);
  return response.data;
};
const useGetPokemonDetails = ({ urls }: PokemonDetailsInputType) => {
  return useQueries({
    queries:
      urls?.map((url) => ({
        queryKey: [QUERY_KEY_POKEMON_DETAILS, url],
        queryFn: () => getPokomonDetails(url),
        enabled: !!url,
        // staleTime: Infinity,
      })) ?? [],
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        isLoading: results.some((result) => result.isLoading),
        isError: results.some((result) => result.isError),
        isFetching: results.some((result) => result.isFetching),
      };
    },
  });
};

export default useGetPokemonDetails;
