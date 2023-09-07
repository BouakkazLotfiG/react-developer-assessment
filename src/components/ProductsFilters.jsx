import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import ProductSearch from './ProductSearch';

const ProductsFilters = ({ products, setFilteredProducts }) => {
  const {
    pageSize,
    setPageSize,
    setCurrentPage,
    categoryFilter,
    setCategoryFilter,
    titleFilter,
    setTitleFilter,
    brandFilter,
    setBrandFilter,
  } = useAppContext();
  const [focusedInput, setFocusedInput] = useState(null);
  const handlePageSizeChange = (e) => {
    const newSize = parseInt(e.target.value, 10);
    setPageSize(newSize);
    setCurrentPage(1); // Reset to the first page when changing page size
  };

  const handleCategoryChange = (e) => {
    const newCategoryFilter = e.target.value;

    setCategoryFilter(newCategoryFilter);
    setCurrentPage(1); // Reset to the first page when changing gender filter
  };

  const handleTitleChange = (e) => {
    const newTitleFilter = e.target.value;
    setTitleFilter(newTitleFilter);
    setCurrentPage(1); // Reset to the first page when changing firstName filter
  };

  const handleBrandChange = (e) => {
    const newBrandFilter = e.target.value;
    setBrandFilter(newBrandFilter);
    setCurrentPage(1); // Reset to the first page when changing firstName filter
  };

  const handleInputFocus = (inputName) => {
    setFocusedInput(inputName);
    // Clear values of other inputs except the focused one
    if (inputName !== 'title') setTitleFilter('');
    if (inputName !== 'brand') setBrandFilter('');
  };
  return (
    <div className='flex justify-start items-center w-2/3 '>
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

      <ProductSearch
        products={products}
        setFilteredProducts={setFilteredProducts}
      />

      <input
        type='text'
        placeholder='title'
        value={titleFilter}
        onChange={handleTitleChange}
        onFocus={() => handleInputFocus('title')}
        className='px-6 w-20 mx-4'
      />

      <input
        type='text'
        placeholder='brand'
        value={brandFilter}
        onChange={handleBrandChange}
        onFocus={() => handleInputFocus('brand')}
        className='px-6 w-24 mx-4'
      />

      <select
        id='category'
        value={categoryFilter}
        onChange={handleCategoryChange}
        className='bg-white'
      >
        <option value=''>Category</option>
        <option value='laptops'>Laptops</option>
      </select>
    </div>
  );
};

export default ProductsFilters;
