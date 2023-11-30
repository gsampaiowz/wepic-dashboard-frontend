import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TableContainer, Paper } from "@mui/material";
import CircularProgressWithLabel from "./CircularProgressWithLabel/CircularProgressWithLabel";

import "./Table.css";

const columns = [
  { id: "nome", label: "Nome", minWidth: 240, format: (value) => value.toLocaleString("pt-BR") },
  { id: "fotografo", label: "Fotógrafo", minWidth: 120, format: (value) => value.toLocaleString("pt-BR") },
  {
    id: "data",
    label: "Data",
    minWidth: 100,
    format: (value) => new Date(value).toLocaleDateString(),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 140,
    format: (value) => value.toLocaleString("pt-BR"),
  },
  {
    id: "progresso",
    label: "Progresso",
    minWidth: 70,
    format: (value) => Math.round(value),
  },
];

function createData(nome, fotografo, data, status, progresso) {
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
  };
}

const rows = [
  createData("Nome", "Nome", "2013-01-01T00:00:00.99999999", 1, 100),
  createData("Nome", "Nome", "2013-01-01T00:00:00.99999999", 2, 100),
  createData("Nome", "Nome", "2013-01-01T00:00:00.99999999", 4, 100),
  createData("Nome", "Nome", "2013-01-01T00:00:00.99999999", 1, 100),
  createData("Nome", "Nome", "2013-01-01T00:00:00.99999999", 3, 100),
];

const MyTable = () => {
  return (
    <Paper sx={{ boxShadow: "none", width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 200 }}>
        <Table className="table" stickyHeader>
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
            {rows.map((row,index) => {
              return (
                <TableRow className="table__line__body" hover tabIndex={-1} key={index}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        className={`table__body__cell ${
                          value.toString().trim() === "Completo"
                            ? "status--completed"
                            : value.toString().trim() === "Em andamento"
                            ? "status--pending"
                            : value.toString().trim() === "Upload de Imagens"
                            ? "status--uploading"
                            : value.toString().trim() === "Cancelado"
                            ? "status--canceled"
                            : null
                        }`}
                        key={column.id}
                        align={column.align}
                      >
                        {column.format && typeof value === "number" ? (
                          value > 100 ? (
                            "N/A"
                          ) : (
                            <CircularProgressWithLabel
                              variant="determinate"
                              value={column.format(value)}
                            />
                          )
                        ) : (
                          column.format(value)
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default MyTable;
