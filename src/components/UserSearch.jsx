import { useState } from 'react';

const UserSearch = ({ users, setFilteredUsers }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    const newSearchQuery = e.target.value;
    setSearchQuery(newSearchQuery);
    // Call a function to filter the user data based on the search query
    filterUsers(newSearchQuery);
  };

  const filterUsers = (query) => {
    // Filter the users array based on the search query
    const filteredUsers = users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(query.toLowerCase()) ||
        user.lastName.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase()) ||
        user.maidenName.toLowerCase().includes(query.toLowerCase()) ||
        user.username.toLowerCase().includes(query.toLowerCase())
    );
    // Set the filtered users in the state
    setFilteredUsers(filteredUsers);
  };

  return (
    <div className=' px-8 h-7 flex justify-center items-center border-r-2 border-slate-400 max-w-md'>
      <div className='relative mx-auto w-max transition-width'>
        <input
          value={searchQuery}
          onChange={handleSearchChange}
          type='search'
          className='peer cursor-pointer relative z-10 h-12 w-12 rounded-full bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-black focus:pl-16 focus:pr-4 transition ease-linear duration-300'
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-black peer-focus:stroke-black transition-width'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      </div>
    </div>
  );
};

export default UserSearch;
