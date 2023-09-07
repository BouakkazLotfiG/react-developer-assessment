import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import UserSearch from './UserSearch';

const UserFilters = ({ users, setFilteredUsers }) => {
  const {
    pageSize,
    setPageSize,
    setCurrentPage,
    setGenderFilter,
    genderFilter,
    firstNameFilter,
    setFirstNameFilter,
    emailFilter,
    setEmailFilter,
    birthdayFilter,
    setBirthdayFilter,
  } = useAppContext();

  const [focusedInput, setFocusedInput] = useState(null);

  const handlePageSizeChange = (e) => {
    const newSize = parseInt(e.target.value, 10);
    setPageSize(newSize);
    setCurrentPage(1); // Reset to the first page when changing page size
  };

  const handleGenderChange = (e) => {
    const newGenderFilter = e.target.value;
    setGenderFilter(newGenderFilter);
    setCurrentPage(1); // Reset to the first page when changing gender filter
  };

  const handleFirstNameChange = (e) => {
    const newFirstNameFilter = e.target.value;
    setFirstNameFilter(newFirstNameFilter);
    setCurrentPage(1); // Reset to the first page when changing firstName filter
  };
  const handleEmailChange = (e) => {
    const newEmailFilter = e.target.value;
    setEmailFilter(newEmailFilter);
    setCurrentPage(1); // Reset to the first page when changing firstName filter
  };
  const handleBirthdayChange = (e) => {
    const newBirthdayFilter = e.target.value;
    setBirthdayFilter(newBirthdayFilter);
    setCurrentPage(1); // Reset to the first page when changing firstName filter
  };

  const handleInputFocus = (inputName) => {
    setFocusedInput(inputName);
    // Clear values of other inputs except the focused one
    if (inputName !== 'firstName') setFirstNameFilter('');
    if (inputName !== 'email') setEmailFilter('');
    if (inputName !== 'birthday') setBirthdayFilter('');
  };

  return (
    <div className='flex justify-start items-center w-1/2 '>
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
      <UserSearch users={users} setFilteredUsers={setFilteredUsers} />

      <div className='w-full flex items-center'>
        {/* name */}

        <input
          type='text'
          placeholder='Name'
          value={firstNameFilter}
          onChange={handleFirstNameChange}
          onFocus={() => handleInputFocus('firstName')}
          className='px-6 w-1/4 mx-4'
        />

        <input
          type='text'
          placeholder='Email'
          value={emailFilter}
          onChange={handleEmailChange}
          onFocus={() => handleInputFocus('email')}
          className='w-1/4 px-6 mr-4'
        />

        {/* birthday */}

        <input
          type='text'
          placeholder='Birthday'
          value={birthdayFilter}
          onChange={handleBirthdayChange}
          onFocus={() => handleInputFocus('birthday')}
          className='w-1/4 px-3 mr-4'
        />

        {/* gender */}
        <div className='w-1/4'>
          <select
            id='gender'
            value={genderFilter}
            onChange={handleGenderChange}
            className='bg-white'
          >
            <option value=''>Gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default UserFilters;
