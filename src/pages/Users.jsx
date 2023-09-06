import { useEffect, useState } from 'react';
import { getUsers } from '../services/api-users';
import DataTable from '../components/DataTable';

const userColumns = [
  { key: 'firstName', header: 'First Name' },
  { key: 'lastName', header: 'last Name' },
  { key: 'maideName', header: 'maide Name' },
  { key: 'age', header: 'age' },
  { key: 'gender', header: 'gender' },
  { key: 'email', header: 'email' },
  { key: 'userName', header: 'user Name' },
  { key: 'bloodGroup', header: 'blood Group' },
  { key: 'eyeColor', header: 'eye Color' },
];

const Users = () => {
  const [users, setUsers] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    // Function to fetch users based on filters
    async function fetchUsers() {
      try {
        const response = await getUsers({
          _limit: 5,
          _page: 1,
        });
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchUsers();
  }, [pageSize, currentPage, searchValue]);

  return (
    <div>
      <DataTable
        data={users} // Your data array
        columns={userColumns} // Your columns configuration
      />
    </div>
  );
};

export default Users;
