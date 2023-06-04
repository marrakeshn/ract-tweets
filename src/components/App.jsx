import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { fetchUsers } from '../redux/users/operations';
import { useDispatch, useSelector } from 'react-redux';

const Layout = lazy(() => import('../components/Layout/Layout'));
const Home = lazy(() => import('../pages/HomePage/homePage'));
const Tweets = lazy(() => import('../pages/TweetsPage/tweetsPage'));


export const App = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.users.page);

  useEffect(() => {
    dispatch(fetchUsers({ page }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='tweets' element={<Tweets />} />
        <Route path='*' element={<Home />} />
      </Route>
    </Routes>
  );
};
