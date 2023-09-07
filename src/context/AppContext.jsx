// AppContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [pageSize, setPageSize] = useState(5);
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [genderFilter, setGenderFilter] = useState(''); // Add gender filter state
  const [categoryFilter, setCategoryFilter] = useState(''); // Add category filter state
  const [firstNameFilter, setFirstNameFilter] = useState('');
  const [emailFilter, setEmailFilter] = useState('');
  const [birthdayFilter, setBirthdayFilter] = useState('');
  const [titleFilter, setTitleFilter] = useState('');
  const [brandFilter, setBrandFilter] = useState('');

  useEffect(() => {
    // Fetch data from the API using Axios and set it to the 'data' state.
    // You can use api-users.js and api-products.js here.
  }, [
    pageSize,
    searchValue,
    currentPage,
    data,
    total,
    genderFilter,
    firstNameFilter,
    emailFilter,
    birthdayFilter,
    categoryFilter,
    titleFilter,
    brandFilter,
  ]);

  const contextValue = {
    pageSize,
    setPageSize,
    searchValue,
    setSearchValue,
    data,
    currentPage,
    setCurrentPage,
    total,
    setTotal,
    setData,
    genderFilter,
    setGenderFilter,
    categoryFilter,
    setCategoryFilter,
    firstNameFilter,
    setFirstNameFilter,
    emailFilter,
    setEmailFilter,
    birthdayFilter,
    setBirthdayFilter,
    titleFilter,
    setTitleFilter,
    brandFilter,
    setBrandFilter,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
