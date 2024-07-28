"use client";
import Link from "next/link";
import { DataGrid } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";

const sampleData = [
  { id: 1, name: "John Doe", age: 30, city: "New York" },
  { id: 2, name: "Jane Smith", age: 25, city: "Los Angeles" },
  { id: 3, name: "Alice Johnson", age: 35, city: "Chicago" },
  { id: 4, name: "Bob Brown", age: 40, city: "Houston" },
];

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "age", headerName: "Age", width: 110 },
  { field: "city", headerName: "City", width: 150 },
];

const PokedexList = () => {
  const router = useRouter();

  const handleRowClick = (params) => {
    router.push(`/details/${params.id}`);
  };
  return (
    <>
      <Link href="/">Home</Link>
      <div>Pokedex List</div>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={sampleData}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onRowClick={handleRowClick}
        />
      </Box>
    </>
  );
};

export default PokedexList;
