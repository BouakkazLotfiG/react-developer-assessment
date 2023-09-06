const DataTable = ({ columns, data }) => {
  return (
    <table className='table-auto w-full'>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.id} className='px-4 py-2'>
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={column.field} className='px-4 py-2'>
                {row[column.id]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
