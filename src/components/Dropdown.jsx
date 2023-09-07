const DropDown = ({ pageSize, handlePageSizeChange }) => {
  return (
    <div className='flex gap-3 border-r-2 border-slate-400 pr-8'>
      <select
        id='pageSize'
        value={pageSize}
        onChange={handlePageSizeChange}
        className='px-2 py-1 bg-white'
      >
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='50'>50</option>
      </select>
      Entries
    </div>
  );
};

export default DropDown;
