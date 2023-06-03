import UserCard from '../UserCard/UserCard';
import UserFilter from '../UserFilter/UserFilter';
import { List, LoadMore } from './UserList.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/users/operations';
import { selectUsers } from '../../redux/users/selectors';


export const UsersList = () => {
  const dispatch = useDispatch();
  const usersPerPage = 3;
  const FILTER_VALUES = {
    FOLLOW: 'Follow',
    FOLLOWINGS: 'Followings',
  };
  const [displayedUsers, setDisplayedUsers] = useState([]);
  const [filter, setFilter] = useState('All');
  const users = useSelector(selectUsers);
  useEffect(() => {
    dispatch(fetchUsers())
  }, []);

  useEffect(() => {
    filterUsers();
  }, [filter]);

  const filterUsers = () => {
    let filteredUsers = users;

    if (filter === FILTER_VALUES.FOLLOW) {
      filteredUsers = users.filter((user) => !Object.keys(localStorage).includes(user.id));
    } else if (filter === FILTER_VALUES.FOLLOWINGS) {
      filteredUsers = users.filter((user) => Object.keys(localStorage).includes(user.id));
    }

    setDisplayedUsers(filteredUsers);
  };

  const handleLoadMore = () => {
    const currentIndex = displayedUsers.length;
    const newDisplayedUsers = users.slice(0, currentIndex + usersPerPage);
    setDisplayedUsers(newDisplayedUsers);
  };


  const handleFilterChange = ({ target }) => {
    target.parentNode.previousSibling.textContent = target.textContent;
    setFilter(target.textContent);
  };

  return (
    <div>
      <div>
        <UserFilter onChange={handleFilterChange} />
      </div>
      <div>
        <List>
          {!!users.length && users.map((user) => <UserCard key={user.id} {...user} />)}
        </List>
        {users.length < users.length && (
          <LoadMore onClick={handleLoadMore}>
            Load More
          </LoadMore>
        )}
      </div>
    </div>
  );
};

