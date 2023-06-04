import styled from '@emotion/styled';

export const Wrapper = styled.li`
  position: relative;
  height: 464px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border-radius: 20px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;
export const UserCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 380px;
  padding: 28px;
`;

export const ImageContainer = styled.div`
  margin-bottom: 76px;
`;
export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Line = styled.div`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 226px;
  overflow: hidden;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const AvatarContainer = styled.div`
  position: absolute;
  top: 198px;
  left: 158px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgb(87 54 163);
`;
export const Circle = styled.img`
  position: absolute;
  top: -6px;
  left: -9px;
  z-index: 1;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 62px;
  height: 62px;
  object-fit: cover;
  border-radius: 50%;
`;
export const UserItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;
export const UserList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 26px;
`;
export const Button = styled.button`
  width: 196px;
  height: 50px;
  margin: 0 auto;
  background: #ebd8ff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  &:hover {
    border: 2px solid #5cd3a8;
  }
`;

export const ButtonFollowed = styled.button`
  width: 196px;
  height: 50px;
  margin: 0 auto;
  background: #5cd3a8;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  &:hover {
    border: 2px solid #ebd8ff;
  }
`;


