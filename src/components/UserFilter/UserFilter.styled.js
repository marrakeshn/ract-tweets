import styled from '@emotion/styled';
export const Dropbtn = styled.button`
  background: linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  color: #ebd8ff;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  min-width: 160px;
`
export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 60px;

  &:hover .DropdownContent {
    display: block;
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  background-color: #ebd8ff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const Content = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #5cd3a8;
  }
`;
