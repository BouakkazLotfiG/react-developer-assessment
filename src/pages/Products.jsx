// UsersPage.js
import { useEffect } from 'react';
import Filters from '../components/Filters';
import DataTable from '../components/DataTable';
import Pagination from '../components/Pagination';

import { fetchProducts } from '../services/api-products';
import { useAppContext } from '../context/AppContext';

const Products = () => {
  const { pageSize, searchValue, data, currentPage, setData } = useAppContext();

  // Function to fetch users data based on current filters and pagination
  const fetchData = async () => {
    try {
      const userData = await fetchProducts(pageSize, searchValue, currentPage);
      // Update the data in the context with the fetched data
      // This will trigger a re-render of the DataTable component
      setData(userData.products);
    } catch (error) {
      // Handle errors here, e.g., show an error message
      console.error('Error fetching user data:', error);
    }
  };

  // Use useEffect to fetch data when the component mounts and whenever filters or page change
  useEffect(() => {
    fetchData();
  }, [pageSize, searchValue, currentPage]);

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
      id: 'stock',
      label: 'stock',
    },
    {
      id: 'brand',
      label: 'brand',
    },
  ];
  console.log(data);

  return (
    <div>
      <h1>Home/Products</h1>
      <Filters />
      <DataTable columns={userColumn} data={data} />
      <Pagination />
    </div>
  );
};

export default Products;
