import { useLocation } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { UsersList } from '../../components/UsersList/UsersList';
import {
  BackLink,
  TweetsContainer,
  LoadMoreBtn,
} from './tweetsPage.styled';
import { fetchUsers } from '../../redux/users/operations';

const Tweets = () => {
  const [setUsers] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [threeElRender, setThreeElRender] = useState(3);
  const location = useLocation();

  const pathToBack = useRef(location.state?.from ?? '/');

  useEffect(() => {
    try {
      const getUsers = async () => {
        const { users } = await fetchUsers();
        if (!users.length) {
          Notify.error('Oops, something went wrong.');
          return;
        }
        const twoEl = users.slice(0, threeElRender);
        const filteredData = twoEl.map(
          ({ id, user, tweets, followers, avatar }) => ({
            id,
            user,
            tweets,
            followers,
            avatar,
          })
        );
        if (!filteredData.length) {
          Notify.error("Oops, There's no tweets");
          return;
        }

        setUsers(filteredData);

        if (threeElRender !== users.length) {
          setShowButton(true);
        } else {
          setShowButton(false);
          Notify.info("Oops! there's no more tweets");
        }
      };
      getUsers();
    } catch (e) {
      Notify.error('Oops, something went wrong.');
    }
  }, [threeElRender]);

  const counterForData = () => {
    setThreeElRender(prevState => prevState + 3);
    console.log(threeElRender);
  };

  return (
    <TweetsContainer>
      <BackLink to={pathToBack.current}>
        <FaChevronLeft />
        Go Back
      </BackLink>
      <UsersList />
      {showButton && (
        <LoadMoreBtn type="button" onClick={counterForData}>
          Load more
        </LoadMoreBtn>
      )}
    </TweetsContainer>
  );
};

export default Tweets;
