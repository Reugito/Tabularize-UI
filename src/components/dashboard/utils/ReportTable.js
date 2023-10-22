import React, { useEffect, useState } from 'react';
import { useTable, usePagination } from 'react-table';
import api from '../../../services/Api';
import './ReportTable.css'; // Add a CSS file for styling

function ReportTable() {
  const [data, setData] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getUploadedData();
        setData(response.data);
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'User ID',
        accessor: 'userId',
      },
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Body',
        accessor: 'body',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex }, // Set initial page index
    },
    usePagination
  );

  return (
    <div>
      <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map((headerGroup) => (
    <tr {...headerGroup.getHeaderGroupProps()}>
      {headerGroup.headers.map((column) => (
        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
      ))}
    </tr>
  ))}
</thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={pageIndex === 0}>
          {'<<'}
        </button>
        <button onClick={previousPage} disabled={!canPreviousPage}>
          {'<'}
        </button>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <button onClick={nextPage} disabled={!canNextPage}>
          {'>'}
        </button>
        <button
          onClick={() => gotoPage(pageOptions.length - 1)}
          disabled={pageIndex === pageOptions.length - 1}
        >
          {'>>'}
        </button>
      </div>
    </div>
  );
}

export default ReportTable;
