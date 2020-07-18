import React from "react";
import { useTable, usePagination } from "react-table";
import { Form, Col } from "react-bootstrap";

const TableQuestion = ({ columns, data }) => {
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    pageOptions,
    page,
    state: { pageIndex, pageSize },
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
  } = useTable({
    columns,
    data,
    usePagination,
  });

  return (
    <>
      <div className="card">
        <div className="card-header"></div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-striped table-bordered first"
              {...getTableProps()}
            >
              <thead>
                <tr>
                  <th></th>
                </tr>
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

export default TableQuestion;
