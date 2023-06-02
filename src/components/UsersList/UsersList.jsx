import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../UserCard/UserCard';
import { selectUsers } from '../../redux/users/selectors';


export const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  return (
    <div>
      <ul>
        {!!users.length && users.map((user) => <UserCard key={user.id} {...user}/>)}
      </ul>
    </div>
  );
};

