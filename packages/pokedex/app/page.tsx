"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { DataGrid } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";

import useGetPokemons from "./hooks/useGetPokemons";
import type { PokemonDetailsResponse } from "../types";
import { useAppDispatch } from "./features/pokemon/hooks";
import { setPokemon } from "./features/pokemon/pokemon-slice";
import useGetPokemonDetails from "./hooks/useGetPokemonDetails";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 150 },
];

const API_URL = "https://pokeapi.co/api/v2/pokemon";

const PokedexList = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [url, setUrl] = useState(API_URL);
  const [nextUrl, setNextUrl] = useState("");
  const [urls, setUrls] = useState<string[]>([]);
  const [previousUrl, setPreviousUrl] = useState("");
  const [dataGridData, setDataGridData] = useState<any>([]);
  const { data, error, isError, isLoading, isFetching, isSuccess } =
    useGetPokemons(url);
  const {
    data: pokemonDetails,
    isLoading: detailsLoading,
    isError: detailsErro,
  } = useGetPokemonDetails({ urls });

  useEffect(() => {
    if (!detailsLoading) {
      setDataGridData(pokemonDetails ?? []);
    }
  }, [detailsLoading]);

  useEffect(() => {
    if (isSuccess) {
      setNextUrl(data.next ?? "");
      setPreviousUrl(data.previous ?? "");
      setUrls(data.results.map((pokemon) => pokemon.url));
    }
  }, [data, isSuccess]);

  const handleRowClick = (data: {row: PokemonDetailsResponse}) => {
    dispatch(setPokemon(data?.row));
    router.push("/pokemon-details");
  };

  return (
    <div className="w-3/4 m-auto mt-2">
      <div className="flex items-start justify-center">
      {
        detailsLoading && <h1>Loading..</h1>
      }
      {!detailsLoading && (
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={dataGridData}
            columns={columns}
            // pageSize={5}
            // rowsPerPageOptions={[5]}
            onRowClick={handleRowClick}
          />
        </Box>
      )}
      </div>
    </div>
  );
};

export default PokedexList;
