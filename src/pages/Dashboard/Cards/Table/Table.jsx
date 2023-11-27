import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { v4 as uuidv4 } from "uuid";
uuidv4();

import "./Table.css";

const columns = [
  { id: "nome", label: "Nome", minWidth: 240 },
  { id: "fotografo", label: "Fotógrafo", minWidth: 120 },
  {
    id: "data",
    label: "Data",
    minWidth: 100,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 140,
  },
  {
    id: "progresso",
    label: "Progresso",
    minWidth: 70,
    format: (value) => Math.round(value),
  },
];

function createData(
  nome,
  fotografo,
  data,
  status,
  progresso,
  key = uuidv4()
  ) {
    return {
      nome,
      fotografo,
      data,
      status:
      status === 1
      ? "Completo"
      : status === 2
      ? "Em andamento"
      : status === 3
      ? "Upload de Imagens"
      : status === 4
      ? "Cancelado"
      : null,
      progresso,
      key,
    };
  }
  
  const rows = [
    createData("Nome", "Nome", "Data", 1, 100),
    createData("Nome", "Nome", "Data", 1, 100),
    createData("Nome", "Nome", "Data", 1, 100),
    createData("Nome", "Nome", "Data", 1, 100),
    createData("Nome", "Nome", "Data", 1, 100),
  ];
  
  const MyTable = () => {
    return (
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead className="table__header">
            <TableRow className="table__line__header">
              {columns.map((column) => (
                <TableCell
                className="table__cell__header"
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.key}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell className="table__body__cell" key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? value > 100
                          ? "N/A"
                          : column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
  );
};

export default MyTable;
