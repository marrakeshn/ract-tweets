import React, { useState } from 'react';
import { Content, Dropbtn, Dropdown, DropdownContent } from './UserFilter.styled';
import { fetchFilteredUsers } from '../../redux/users/operations';
import { useDispatch, useSelector } from 'react-redux';

const FILTER_MAP = {
  All: undefined,
  Followed: true,
  Unfollowed: false,
};

const getFilterLabel = (filterValue) => {
  if (filterValue === true) {
    return 'Followed'
  } else if (filterValue === false) {
    return 'Unfollowed'
  }

  return 'All'
}

const UserFilter = () => {
  const dispatch = useDispatch();
  const [isOpened, setIsOpened] = useState(false);
  const isFollowedFilterValue = useSelector((state) => state.users.isFollowedFilter)

  const handleFilterChange = (filterValue) => {
    dispatch(fetchFilteredUsers({ page: 1, isFollowed: FILTER_MAP[filterValue] }));
    setIsOpened(false);
  };

  return (
    <Dropdown>
      <Dropbtn onClick={() => setIsOpened(!isOpened)}>Filter by {getFilterLabel(isFollowedFilterValue)}</Dropbtn>
      {isOpened && <DropdownContent>
        <Content onClick={() => handleFilterChange('All')}>All</Content>
        <Content onClick={() => handleFilterChange('Followed')}>Followed</Content>
        <Content onClick={() => handleFilterChange('Unfollowed')}>Unfollowed</Content>
      </DropdownContent>}
    </Dropdown>
  );
};

export default UserFilter;
