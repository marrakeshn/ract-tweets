import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import logoMain from '../../images/favicon.ico';

import { Header, Nav, StyledLink, LoaderContainer } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/tweets">Tweets</StyledLink>
        </Nav>
        <img src={logoMain} alt="tweetApp logo"/>
      </Header>
      <Suspense
        fallback={
          <LoaderContainer>
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#4b2a99"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </LoaderContainer>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
