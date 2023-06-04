import UserCard from '../UserCard/UserCard';
import UserFilter from '../UserFilter/UserFilter';
import { List, LoadMore } from './UserList.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/users/operations';
import { selectIsFullyLoaded, selectUsers } from '../../redux/users/selectors';

export const UsersList = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.users.page)
  const users = useSelector(selectUsers);
  const isFullyLoaded = useSelector(selectIsFullyLoaded);

  useEffect(() => {
    dispatch(fetchUsers({ page }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoadMore = () => {
    dispatch(fetchUsers({ page: page + 1 }))
  };

  return (
    <div>
      <div>
        <UserFilter />
      </div>
      <div>
        <List>
          {!!users.length && users.map((user) => <UserCard key={user.id} {...user} />)}
        </List>
        {isFullyLoaded && <h3 style={{ color: 'red' }}>
          All users is loaded
        </h3>}
        <LoadMore disabled={isFullyLoaded} onClick={handleLoadMore}>
          Load More
        </LoadMore>
      </div>
    </div>
  );
};

