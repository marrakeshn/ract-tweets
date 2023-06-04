import styled from '@emotion/styled';

export const Users = styled.div`
  display: flex;
  flex-direction: column`;
export const List = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 380px;
  gap: 37px;
  align-content: center;

  @media screen and (min-width: 867px) {
    max-width: 1280px;
    flex-wrap: wrap;
    flex-direction: unset;
  }

`;

export const LoadMore = styled.button`
  cursor: pointer;
  font-family: Montserrat, sans-serif;
  text-decoration: none;
  border-radius: 20px;
  font-weight: 300;
  font-size: 16px;
  background: linear-gradient(114.99deg,
    #471ca9 -0.99%,
  #5736a3 54.28%,
  #4b2a99 78.99%);
  color: #ebd8ff;
  margin: 25px auto 0;
  padding: 14px 56px;
  text-transform: uppercase;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);

  &:hover {
    color: #ffc318;
  }

  &:disabled {
    background: gray;
    cursor: not-allowed;

    &:hover {
      color: red;
    }
  }
`;

export const LoadNotif = styled.h3`
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 20px;
  margin-top: 25px;
  color: red;
  text-align: center;
`
