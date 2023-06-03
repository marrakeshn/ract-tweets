import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { UsersList } from '../../components/UsersList/UsersList';
import {
  BackLink,
  TweetsContainer,
} from './tweetsPage.styled';

const Tweets = () => {
  const location = useLocation();
  const pathToBack = useRef(location.state?.from ?? '/');

  return (
    <TweetsContainer>
      <BackLink to={pathToBack.current}>
        <FaChevronLeft />
        Go Back
      </BackLink>
      <UsersList />
    </TweetsContainer>
  );
};

export default Tweets;
