"use client";
import { Header } from "components";
import { useRouter } from "next/navigation";
import { Avatar, Box } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";

import useGetPokemons from "./hooks/useGetPokemons";
import { useAppDispatch } from "./features/pokemon/hooks";
import { setPokemon } from "./features/pokemon/pokemon-slice";
import useGetPokemonDetails from "./hooks/useGetPokemonDetails";
import type {
  PokemonDetailsResponse,
  PokemonTypes,
  SpritesType,
} from "../types";

const PokedexList = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(0);
  const rowsPerPageOptions = [5, 10, 20];
  const [rowCount, setRowCount] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [urls, setUrls] = useState<string[]>([]);
  const [dataGridData, setDataGridData] = useState<any>([]);
  const [paginationModel, setPaginationModel] = useState({
    page,
    pageSize,
  });
  const { data, isError, isLoading, isFetching, isSuccess } = useGetPokemons({
    offset: page * pageSize,
    limit: pageSize,
  });
  const {
    data: pokemonDetails,
    isFetching: detailsFetching,
    isError: detailsError,
  } = useGetPokemonDetails({ urls });

  const columns = useMemo(
    () => [
      { field: "id", headerName: "Id", width: 90 },
      {
        field: "sprites",
        headerName: "Image",
        width: 90,
        renderCell: (
          params: GridCellParams<PokemonDetailsResponse, SpritesType>,
        ) => <Avatar src={params.value?.front_default} />,
      },
      { field: "name", headerName: "Name", width: 200 },
      { field: "weight", headerName: "Weight", width: 100 },
      { field: "order", headerName: "Order", width: 100 },
      { field: "base_experience", headerName: "Base Exp", width: 100 },
      {
        field: "is_default",
        headerName: "Default",
        width: 100,
      },
      {
        field: "types",
        headerName: "Types",
        width: 150,
        renderCell: (
          params: GridCellParams<PokemonDetailsResponse, PokemonTypes[]>,
        ) =>
          params.value
            ?.map((t) => t.type)
            .map((n) => n.name)
            .join(", "),
      },
    ],
    [],
  );

  useEffect(() => {
    setPage(paginationModel.page);
    setPageSize(paginationModel.pageSize);
  }, [paginationModel]);

  useEffect(() => {
    if (!detailsFetching) {
      setDataGridData(pokemonDetails ?? []);
    }
  }, [detailsFetching, paginationModel]);

  useEffect(() => {
    if (isSuccess) {
      setRowCount(data.count ?? 0);
      setUrls(data.results.map((pokemon) => pokemon.url));
    }
  }, [isLoading, isFetching, isSuccess]);

  const handleRowClick = (data: { row: PokemonDetailsResponse }) => {
    dispatch(setPokemon(data?.row));
    router.push("/pokemon-details");
  };

  return (
    <div className="w-3/4 m-auto mt-2">
      {(isError || detailsError) && (
        <h1 className="text-red-500 p-2 bg-red-50 m-1 rounded text-center">
          Error while fetching data.
        </h1>
      )}
      <Box sx={{ height: 400, width: "100%" }}>
        <Header
          size="lg"
          title="Pokemon List"
          extraClassNames="flex justify-center"
        />
        <DataGrid
          loading={detailsFetching}
          paginationMode="server"
          columns={columns}
          rowCount={rowCount}
          rows={dataGridData}
          onRowClick={handleRowClick}
          paginationModel={paginationModel}
          pageSizeOptions={rowsPerPageOptions}
          onPaginationModelChange={setPaginationModel}
        />
      </Box>
    </div>
  );
};

export default PokedexList;
