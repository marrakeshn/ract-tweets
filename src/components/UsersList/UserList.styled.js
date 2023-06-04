import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  flex-wrap: wrap;
  gap: 37px;
  align-content: center;
`;

export const LoadMore = styled.button`
  margin: 0 auto;
  margin-top: 32px;
  padding: 14px 56px;
  text-transform: uppercase;
  background: linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  color: #ebd8ff;

  &:disabled {
    background: gray;
  }
`;
