import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('../components/Layout/Layout'));
const Home = lazy(() => import('../pages/HomePage/homePage'));
const Tweets = lazy(() => import('../pages/TweetsPage/tweetsPage'));



export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
