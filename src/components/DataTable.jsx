import PropTypes from 'prop-types';

function DataTable({ data, columns }) {
  return (
    <table className='table-auto w-full'>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key} className='px-4 py-2'>
              {column.header.toUpperCase()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {columns.map((column) => (
              <td key={column.key} className='border px-4 py-2'>
                {item[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

DataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DataTable;
