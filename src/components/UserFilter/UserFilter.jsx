import React, { useState } from 'react';
import { Content, Dropbtn, Dropdown, DropdownContent } from './UserFilter.styled';
import { fetchFilteredUsers } from '../../redux/users/operations';
import { useDispatch } from 'react-redux';

const FILTER_MAP = {
  All: undefined,
  Followed: true,
  Unfollowed: false,
};

const UserFilter = () => {
  const dispatch = useDispatch();
  const [isOpened, setIsOpened] = useState(false);
  const [filterLabel, setFilterLabel] = useState('All');

  const handleFilterChange = (filterValue) => {
    dispatch(fetchFilteredUsers({ page: 1, isFollowed: FILTER_MAP[filterValue] }));
    setIsOpened(false);
    setFilterLabel(filterValue);
  };

  return (
    <Dropdown>
      <Dropbtn onClick={() => setIsOpened(!isOpened)}>Filter by {filterLabel}</Dropbtn>
      {isOpened && <DropdownContent>
        <Content onClick={() => handleFilterChange('All')}>All</Content>
        <Content onClick={() => handleFilterChange('Followed')}>Followed</Content>
        <Content onClick={() => handleFilterChange('Unfollowed')}>Unfollowed</Content>
      </DropdownContent>}
    </Dropdown>
  );
};

export default UserFilter;
