import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  position: fixed;
  top: 126px;
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

export const LoadMoreBtn = styled.button`
  display: block;
  margin: 0 auto;
  width: 196px;
  height: 50px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border: none;
  border-radius: 10px;
  cursor: pointer;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #ebd8ff;

  &:hover {
    color: #ffc318;
  }
`;

