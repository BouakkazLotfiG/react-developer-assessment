const DataTable = ({ columns, data }) => {
  return (
    <table className='table-auto w-full border-4 border-grey'>
      <thead className='bg-blue p-2'>
        <tr>
          {columns.map((column) => (
            <th
              width='250px'
              key={column.id}
              className='text-left px-4 py-2 border-4 border-grey'
            >
              {column.label.toUpperCase()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className='border-4 border-grey'>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={column.id} className='px-4 py-2 border-4 border-grey'>
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
