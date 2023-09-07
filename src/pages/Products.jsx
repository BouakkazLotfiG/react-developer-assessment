// UsersPage.js
import { useEffect, useState } from 'react';
import ProductsFilters from '../components/ProductsFilters';
import DataTable from '../components/DataTable';
import Pagination from '../components/Pagination';

import { fetchProducts } from '../services/api-products';
import { useAppContext } from '../context/AppContext';
import { IconChevronLeft } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const {
    pageSize,
    searchValue,
    data,
    currentPage,
    setData,
    setTotal,
    total,
    categoryFilter,
    titleFilter,
    brandFilter,
  } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState(data);

  const fetchData = async () => {
    try {
      const userData = await fetchProducts(
        pageSize,
        currentPage,
        categoryFilter,
        titleFilter,
        brandFilter
      );

      setData(userData.products);
      setTotal(userData.total);
      setFilteredProducts(userData.products);
    } catch (error) {
      // Handle errors here, e.g., show an error message
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [
    pageSize,
    searchValue,
    currentPage,
    categoryFilter,
    titleFilter,
    brandFilter,
  ]);

  // Define the columns for the DataTable
  const userColumn = [
    {
      id: 'title',
      label: 'title',
    },
    {
      id: 'price',
      label: 'price',
    },
    {
      id: 'rating',
      label: 'rating',
    },
    {
      id: 'discountPercentage',
      label: 'discount Percentage',
    },
    {
      id: 'stock',
      label: 'stock',
    },
    {
      id: 'brand',
      label: 'brand',
    },
    {
      id: 'category',
      label: 'category',
    },
  ];
  console.log(filteredProducts);

  return (
    <div className='flex flex-col gap-8 p-8'>
      <div className='flex items-center gap-4'>
        <Link to='/'>
          <IconChevronLeft size={20} />
        </Link>
        <h1>Home/Products</h1>
      </div>
      <ProductsFilters
        products={data}
        setFilteredProducts={setFilteredProducts}
      />

      <DataTable columns={userColumn} data={filteredProducts} />
      <Pagination total={total} />
    </div>
  );
};

export default Products;
