import React, { useState, useEffect } from 'react';
import logo from '../../images/logo.svg';
import frame from '../../images/avatarFrame.png';
import picture from '../../images/backgroundImage.png';
import {
  Wrapper,
  UserCardStyled,
  AvatarContainer,
  Line,
  Logo,
  Avatar,
  Circle,
  ImageContainer,
  UserList,
  UserItem,
  Button } from './UserCard.styled';


function UserCard({ avatar, user, tweets, followers }) {
  const [isFollowed, setIsFollowed] = useState(false);


  return (
    <Wrapper>
      <UserCardStyled>
        <ImageContainer>
          <Logo src={logo} alt="logo" width="76" height="20"></Logo>
          <img src={picture} alt="background" width="308" height="168"></img>
        </ImageContainer>
        <Line></Line>
        <AvatarContainer>
          <Circle src={frame} alt="circle"></Circle>
          <Avatar src={avatar} alt={user} />
        </AvatarContainer>
        <UserList>
          <UserItem>
            <p>{tweets} tweets</p>
          </UserItem>
          <UserItem>
            {/*<p>{isFollowed ? followers + 1 : followers} Followers</p>*/}
            <p>{followers} followers</p>
          </UserItem>
        </UserList>
        {/*{isFollowing ? (*/}
        {/*  <ButtonFollowing onClick={handleFollowBtn}>Following</ButtonFollowing>*/}
        {/*) : (*/}
        {/*  <Button type="button" onClick={handleFollowBtn}>*/}
        {/*    Follow*/}
        {/*  </Button>*/}
        {/*)}*/}
        <Button onClick={() => setIsFollowed(!isFollowed)}>{isFollowed ? 'Following' : 'Follow'}</Button>
      </UserCardStyled>
    </Wrapper>

  );
}

export default UserCard;
