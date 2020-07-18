import React, { useState } from "react";
import { useTable, useFilters } from "react-table";
import { Form, Col } from "react-bootstrap";

const Table = ({
  columns,
  data,
  handleOpenUpdate,
  handleDelete,
  handleOpen,
  createButtonText,
}) => {
  const [filterInput, setFilterInput] = useState("");

  // Update the state when input changes
  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter("name", value);
    setFilterInput(value);
  };

  // Input element

  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    setFilter, // The useFilter Hook provides a way to set the filter
  } = useTable(
    {
      columns,
      data,
    },
    useFilters // Adding the useFilters Hook to the table
  );

  return (
    <>
      <div className="card">
        <div className="card-header">
          <Form>
            <Form.Row>
              <Col xs={7}>
                <Form.Control
                  value={filterInput}
                  onChange={handleFilterChange}
                  placeholder={"Search name"}
                />
              </Col>

              <Col>
                {handleOpen ? (
                  <button
                    className="btn btn-primary btn-sm float-right"
                    id="btnCreate"
                    onClick={handleOpen}
                  >
                    {createButtonText}
                  </button>
                ) : (
                  <></>
                )}
              </Col>
            </Form.Row>
          </Form>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-striped table-bordered first"
              {...getTableProps()}
            >
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()}>
                        {column.render("Header")}
                      </th>
                    ))}
                    {handleOpenUpdate ? <th></th> : <></>}
                    {handleOpenUpdate ? <th></th> : <></>}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                      {handleOpenUpdate ? (
                        <td>
                          <button
                            onClick={() => handleOpenUpdate(data[i].id)}
                            className="btn btn-primary btn-xs"
                          >
                            Edit
                          </button>
                        </td>
                      ) : (
                        <></>
                      )}

                      {handleDelete ? (
                        <td>
                          <button
                            onClick={() => handleDelete(data[i].id)}
                            className="btn btn-danger btn-xs"
                          >
                            Delete
                          </button>
                        </td>
                      ) : (
                        <></>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
