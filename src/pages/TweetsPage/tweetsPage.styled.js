import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  position: fixed;
  top: 126px;
  left: 1360px;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: Montserrat,sans-serif;
  text-decoration: none;
  border-radius: 20px;
  font-weight: 200;
  font-size: 16px;
  min-width: 120px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  color: #ebd8ff;
  padding: 6px 8px;

  &:hover {
    color: #ffc318;
  }
`;

export const TweetsContainer = styled.div`
  position: relative;
  padding: 0 86px 72px 86px;
`;


