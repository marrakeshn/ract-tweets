import {  UsersList } from '../components/UsersList/UsersList';

export const App = () => {

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
    <UsersList/>
    </div>
  );
};
