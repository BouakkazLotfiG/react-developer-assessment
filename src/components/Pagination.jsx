import { useAppContext } from '../context/AppContext';

const Pagination = () => {
  const { currentPage, total, pageSize, setCurrentPage } = useAppContext();

  const totalPages = Math.ceil(total / pageSize);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    const maxPageNumbers = 5; // Number of page numbers to display in the center
    const halfMaxPageNumbers = Math.floor(maxPageNumbers / 2);

    // Always display the first page
    pageNumbers.push(
      <span
        key={1}
        onClick={() => handlePageChange(1)}
        className={`px-3 py-1 cursor-pointer ${
          currentPage === 1 ? 'bg-blue-500 text-black bg-gray-200' : 'bg-white'
        } rounded`}
      >
        1
      </span>
    );

    if (currentPage > halfMaxPageNumbers + 2) {
      // Display an ellipsis if there are pages between 2 and (currentPage - halfMaxPageNumbers)
      pageNumbers.push(
        <span key='ellipsis-start' className='px-3 py-1'>
          ...
        </span>
      );
    }

    const startPage = Math.max(2, currentPage - halfMaxPageNumbers);
    const endPage = Math.min(totalPages - 1, currentPage + halfMaxPageNumbers);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <span
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 cursor-pointer ${
            currentPage === i
              ? 'bg-blue-500 text-black bg-gray-200'
              : 'bg-white'
          } rounded`}
        >
          {i}
        </span>
      );
    }

    if (currentPage < totalPages - halfMaxPageNumbers - 1) {
      // Display an ellipsis if there are pages between (currentPage + halfMaxPageNumbers) and (totalPages - 1)
      pageNumbers.push(
        <span key='ellipsis-end' className='px-3 py-1'>
          ...
        </span>
      );
    }

    // Always display the last page
    pageNumbers.push(
      <span
        key={totalPages}
        onClick={() => handlePageChange(totalPages)}
        className={`px-3 py-1 cursor-pointer ${
          currentPage === totalPages
            ? 'bg-blue-500 text-black bg-gray-200'
            : 'bg-white'
        } rounded`}
      >
        {totalPages}
      </span>
    );

    return pageNumbers;
  };

  return (
    <div className='flex justify-center mt-4'>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className='px-3 py-1 mr-2 bg-blue-500 text-black rounded'
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='px-3 py-1 ml-2 bg-blue-500 text-black rounded'
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
