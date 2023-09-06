import PropTypes from 'prop-types';
import Dropdown from './DropDown';
import Pagination from './Pagination';
import { useEffect, useState } from 'react';
import { getUsers } from '../services/api-users';

function DataTable({ data, columns }) {
  const [pageSize, setPageSize] = useState(5); // Default page size
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filteredData, setFilteredData] = useState(data);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const skip = (currentPage - 1) * pageSize;
      setLoading(true);
      const response = getUsers({
        limit: pageSize,
        skip,
      });
      setTotalPages(Math.ceil((await response).data.total) / pageSize);
      console.log((await response).data.total);
      setFilteredData((await response).data.users);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Update data when page size changes
  useEffect(() => {
    fetchData();
  }, [pageSize]);
  // Handle page size change
  const handlePageSizeChange = (event) => {
    const newSize = parseInt(event.target.value, 10);
    setPageSize(newSize);
    setCurrentPage(1); // Reset to the first page when page size changes
  };

  // Handle page navigation (next and previous)
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  console.log(filteredData);
  return (
    <>
      <div className='flex items-center mb-4'>
        <span className='mr-2'>Items per page:</span>
        <Dropdown
          options={[5, 10, 20, 50]}
          selectedValue={pageSize}
          onChange={handlePageSizeChange}
        />
      </div>
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
          {filteredData?.map((item) => (
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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
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
