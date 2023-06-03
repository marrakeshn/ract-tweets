import { useSelector } from 'react-redux';
import UserCard from '../UserCard/UserCard';
import { selectUsers } from '../../redux/users/selectors';
import { List } from './UserList.styled'


export const UsersList = () => {
  // const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  return (
    <div>
      <List>
        {!!users.length && users.map((user) => <UserCard key={user.id} {...user}/>)}
      </List>
    </div>
  );
};

