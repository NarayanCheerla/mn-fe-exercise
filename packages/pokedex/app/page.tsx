"use client";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";

import useGetPokemons from "./hooks/useGetPokemons";
import { useAppDispatch } from "./features/pokemon/hooks";
import { setPokemon } from "./features/pokemon/pokemon-slice";
import useGetPokemonDetails from "./hooks/useGetPokemonDetails";
import type { PokemonDetailsResponse, SpritesType } from "../types";

const PokedexList = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const rowsPerPageOptions = [5, 10, 20];
  const [nextUrl, setNextUrl] = useState("");
  const [urls, setUrls] = useState<string[]>([]);
  const [previousUrl, setPreviousUrl] = useState("");
  const [dataGridData, setDataGridData] = useState<any>([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [paginationModel, setPaginationModel] = useState({
    page,
    pageSize,
  });
  const { data, error, isError, isLoading, isFetching, isSuccess } =
    useGetPokemons({
      offset: page,
      limit: pageSize
    });
  const {
    data: pokemonDetails,
    isLoading: detailsLoading,
    isError: detailsErro,
  } = useGetPokemonDetails({ urls });

  const columns = useMemo(
    () => [
      { field: "id", headerName: "Id", width: 90 },
      {
        field: "sprites",
        headerName: "Image",
        width: 60,
        renderCell: (
          params: GridCellParams<PokemonDetailsResponse, SpritesType>
        ) => {
          return <Avatar src={params.value?.front_default} />;
        },
      },
      { field: "name", headerName: "Name", width: 150 },
    ],
    []
  );

  useEffect(() => {
    setPage(paginationModel.page);
    setPageSize(paginationModel.pageSize);
  },[paginationModel]);

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

  const handleRowClick = (data: { row: PokemonDetailsResponse }) => {
    dispatch(setPokemon(data?.row));
    router.push("/pokemon-details");
  };



  return (
    <div className="w-3/4 m-auto mt-2">
      <div className="flex items-start justify-center">
        {detailsLoading && <h1>Loading..</h1>}
        {!detailsLoading && (
          <Box sx={{ height: 400, width: "100%" }}>
            <Typography
              variant="h3"
              component="h3"
              sx={{ textAlign: "center", mt: 3, mb: 3 }}
            >
              Pokemon List
            </Typography>
            <DataGrid
              rows={dataGridData}
              columns={columns}
              pageSizeOptions={rowsPerPageOptions}
              paginationModel={paginationModel}
              onPaginationModelChange={setPaginationModel}
              onRowClick={handleRowClick}
            />
          </Box>
        )}
      </div>
    </div>
  );
};

export default PokedexList;
