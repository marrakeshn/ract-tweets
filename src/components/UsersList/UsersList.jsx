import UserCard from '../UserCard/UserCard';
import UserFilter from '../UserFilter/UserFilter';
import { List, LoadMore, LoadNotif, Users } from './UserList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/users/operations';
import { selectIsFullyLoaded, selectUsers } from '../../redux/users/selectors';

export const UsersList = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.users.page);
  const users = useSelector(selectUsers);
  const isFullyLoaded = useSelector(selectIsFullyLoaded);

  const handleLoadMore = () => {
    dispatch(fetchUsers({ page: page + 1 }));
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
        <Users>
          {isFullyLoaded && <LoadNotif>
            All users is loaded
          </LoadNotif>}
          <LoadMore disabled={isFullyLoaded} onClick={handleLoadMore}>
            Load More
          </LoadMore>
        </Users>
      </div>
    </div>
  );
};

