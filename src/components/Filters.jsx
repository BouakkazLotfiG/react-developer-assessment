import { useAppContext } from '../context/AppContext';

const Filters = () => {
  const { pageSize, setPageSize, setCurrentPage } = useAppContext();

  const handlePageSizeChange = (e) => {
    const newSize = parseInt(e.target.value, 10);
    setPageSize(newSize);
    setCurrentPage(1); // Reset to the first page when changing page size
  };

  // const handleSearchChange = (e) => {
  //   setSearchValue(e.target.value);
  // };

  return (
    <div className='flex items-center space-x-4'>
      <div>
        <label htmlFor='pageSize'>Page Size:</label>
        <select
          id='pageSize'
          value={pageSize}
          onChange={handlePageSizeChange}
          className='border border-gray-300 rounded px-2 py-1'
        >
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='20'>20</option>
          <option value='50'>50</option>
        </select>
      </div>
      {/* <div>
        <button
          onClick={() => setSearchValue('')}
          className='text-blue-500 cursor-pointer'
        >
          Reset
        </button>
        <input
          type='text'
          placeholder='Search'
          value={searchValue}
          onChange={handleSearchChange}
          className='border border-gray-300 rounded px-2 py-1'
        />
      </div> */}
    </div>
  );
};

export default Filters;
