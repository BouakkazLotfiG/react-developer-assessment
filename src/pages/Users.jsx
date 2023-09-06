// UsersPage.js
import { useEffect } from 'react';
import Filters from '../components/Filters';
import DataTable from '../components/DataTable';
import Pagination from '../components/Pagination';

import { fetchUsers } from '../services/api-users';
import { useAppContext } from '../context/AppContext';

const Users = () => {
  const { pageSize, searchValue, data, currentPage, setData, setTotal, total } =
    useAppContext();

  // Function to fetch users data based on current filters and pagination
  const fetchData = async () => {
    try {
      const userData = await fetchUsers(pageSize, searchValue, currentPage);
      // Update the data in the context with the fetched data
      // This will trigger a re-render of the DataTable component
      setData(userData.users);
      setTotal(userData.total);
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
      id: 'firstName',
      label: 'First Name',
    },
    {
      id: 'lastName',
      label: 'Last Name',
    },
    {
      id: 'maidenName',
      label: 'Maiden Name',
    },
    {
      id: 'age',
      label: 'age',
    },
    {
      id: 'gender',
      label: 'gender',
    },
  ];

  console.log('data', data);

  return (
    <div>
      <h1>Home/Users</h1>
      <Filters />
      <DataTable columns={userColumn} data={data} />
      <Pagination total={total} />
    </div>
  );
};

export default Users;
