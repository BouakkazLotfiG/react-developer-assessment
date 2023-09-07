// UsersPage.js
import { useEffect, useState } from 'react';
import UserFilters from '../components/UserFilters';
import DataTable from '../components/DataTable';
import Pagination from '../components/Pagination';

import { fetchUsers } from '../services/api-users';
import { useAppContext } from '../context/AppContext';
import UserSearch from '../components/UserSearch';
import { Link } from 'react-router-dom';
import { IconChevronLeft } from '@tabler/icons-react';

const Users = () => {
  const {
    pageSize,
    searchValue,
    data,
    currentPage,
    setData,
    setTotal,
    total,
    genderFilter,
    firstNameFilter,
    emailFilter,
    birthdayFilter,
  } = useAppContext();
  const [filteredUsers, setFilteredUsers] = useState(data);

  // Function to fetch users data based on current filters and pagination
  const fetchData = async () => {
    try {
      const userData = await fetchUsers(
        pageSize,
        currentPage,
        genderFilter,
        firstNameFilter,
        emailFilter,
        birthdayFilter
      );
      // Update the data in the context with the fetched data
      // This will trigger a re-render of the DataTable component
      setData(userData.users);
      setTotal(userData.total);
      setFilteredUsers(userData.users);
    } catch (error) {
      // Handle errors here, e.g., show an error message
      console.error('Error fetching user data:', error);
    }
  };

  // Use useEffect to fetch data when the component mounts and whenever filters or page change
  useEffect(() => {
    fetchData();
  }, [
    pageSize,
    searchValue,
    currentPage,
    genderFilter,
    firstNameFilter,
    emailFilter,
    birthdayFilter,
  ]);

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
    {
      id: 'email',
      label: 'Email',
    },
    {
      id: 'username',
      label: 'user name',
    },
    {
      id: 'birthDate',
      label: 'Birth Date',
    },
    {
      id: 'bloodGroup',
      label: 'blood Group',
    },
    {
      id: 'eyeColor',
      label: 'Eye Color',
    },
  ];

  return (
    <div className='flex flex-col gap-8 p-8 '>
      <div className='flex items-center gap-4'>
        <Link to='/'>
          <IconChevronLeft size={20} />
        </Link>
        <h1>Home/Users</h1>
      </div>
      <UserFilters users={data} setFilteredUsers={setFilteredUsers} />

      <DataTable columns={userColumn} data={filteredUsers} />
      <Pagination total={total} />
    </div>
  );
};

export default Users;
