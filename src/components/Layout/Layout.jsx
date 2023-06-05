import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import logoMain from '../../images/favicon.ico';
import { Header, LoaderContainer, Nav, StyledLink } from './Layout.styled';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';


function Copyright() {
  return (
    <Typography variant="body2" align="center" padding="20px 10px">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/marrakeshn?tab=repositories/">
        marrakeshn GitHub repo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Layout = () => {
  return (
    <div>
      <Header>
        <Nav>
          <StyledLink to='/'>Home</StyledLink>
          <StyledLink to='/tweets'>Tweets</StyledLink>
        </Nav>
        <img src={logoMain} alt='tweetApp logo' />
      </Header>
      <Suspense
        fallback={
          <LoaderContainer>
            <ThreeDots
              height='80'
              width='80'
              radius='9'
              color='#4b2a99'
              ariaLabel='three-dots-loading'
              wrapperStyle={{}}
              wrapperClassName=''
              visible={true}
            />
          </LoaderContainer>
        }
      >
        <Outlet />
      </Suspense>
      <Copyright />
    </div>
  );
};

export default Layout;
