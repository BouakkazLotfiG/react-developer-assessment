import { useAppContext } from '../context/AppContext';

const Pagination = () => {
  const { currentPage, total, pageSize, setCurrentPage } = useAppContext();

  const totalPages = Math.ceil(total / pageSize);
  console.log('totalPages', totalPages);
  console.log('total', total);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <span
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 cursor-pointer ${
            currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200'
          } rounded`}
        >
          {i}
        </span>
      );
    }

    return pageNumbers;
  };

  return (
    <div className='flex justify-center mt-4'>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className='px-3 py-1 mr-2 bg-blue-500 text-white rounded'
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='px-3 py-1 ml-2 bg-blue-500 text-white rounded'
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
