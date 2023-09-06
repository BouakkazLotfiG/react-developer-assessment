const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className='my-4 flex justify-between items-center'>
      <button
        className={`${
          currentPage === 1
            ? 'opacity-50 cursor-not-allowed'
            : 'opacity-100 cursor-pointer'
        } bg-blue-500 text-white px-3 py-1 rounded`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className='text-gray-600'>
        Page {currentPage} of {totalPages}
      </span>
      <button
        className={`${
          currentPage === totalPages
            ? 'opacity-50 cursor-not-allowed'
            : 'opacity-100 cursor-pointer'
        } bg-blue-500 text-white px-3 py-1 rounded`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
