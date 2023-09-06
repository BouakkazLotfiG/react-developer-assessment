const Dropdown = ({ options, selectedValue, onChange }) => {
  return (
    <select
      className='p-2 rounded border border-gray-300'
      value={selectedValue}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
