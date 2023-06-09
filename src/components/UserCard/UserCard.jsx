import React from 'react';
import logo from '../../images/logo.svg';
import frame from '../../images/avatarFrame.png';
import picture from '../../images/backgroundImage.png';
import {
  Avatar,
  AvatarContainer,
  Button,
  ButtonFollowed,
  Circle,
  ImageContainer,
  Line,
  Logo,
  UserCardStyled,
  UserItem,
  UserList,
  Wrapper,
} from './UserCard.styled';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/users/operations';

const formatNumber = (number) => Intl.NumberFormat('en-US').format(number);

function UserCard({ avatar, user, tweets, followers, id, isFollowed }) {
  const dispatch = useDispatch();

  const handleFollowClick = () => {
    dispatch(updateUser({ id, followers: isFollowed ? followers - 1 : followers + 1, isFollowed: !isFollowed }));
  };

  return (
    <Wrapper>
      <UserCardStyled>
        <ImageContainer>
          <a href={'https://goit.global/ph/'} target='_blank' rel='noreferrer'>
            <Logo
              src={logo}
              alt='logo'
              width='76'
              height='20'
              href={'https://goit.global/ph/'}
            />
          </a>
          <img src={picture} alt='background' width='308' height='168'></img>
        </ImageContainer>
        <Line></Line>
        <AvatarContainer>
          <Circle src={frame} alt='circle'></Circle>
          <Avatar src={avatar} alt={user} />
        </AvatarContainer>
        <UserList>
          <UserItem>
            <p>{tweets} tweets</p>
          </UserItem>
          <UserItem>
            <p>{formatNumber(followers)} followers</p>
            {/*<p>{followers} followers</p>*/}
          </UserItem>
        </UserList>
        {isFollowed ? (
          <ButtonFollowed onClick={handleFollowClick}>Following</ButtonFollowed>
        ) : (
          <Button type='button' onClick={handleFollowClick}>
            Follow
          </Button>
        )}
      </UserCardStyled>
    </Wrapper>
  );
}

export default UserCard;
