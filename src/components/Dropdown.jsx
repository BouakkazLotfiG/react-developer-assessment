function Dropdown({ pageSizeOptions, selectedPageSize, onSelectPageSize }) {
  return (
    <select
      className='bg-gray-300 text-gray-700 px-2 py-1 rounded'
      value={selectedPageSize}
      onChange={(e) => onSelectPageSize(Number(e.target.value))}
    >
      {pageSizeOptions.map((pageSize) => (
        <option key={pageSize} value={pageSize}>
          {pageSize}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
