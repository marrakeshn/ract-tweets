import React from "react";
import { DropdownContent, Dropdown, Dropbtn, Content } from './UserFilter.styled';
const UserFilter = ({ onChange }) => {
  return (
    <Dropdown>
      <Dropbtn>Filter</Dropbtn>
      <DropdownContent>
        <Content onClick={onChange}>All</Content>
        <Content onClick={onChange}>Follow</Content>
        <Content onClick={onChange}>Followings</Content>
      </DropdownContent>
    </Dropdown>
  );
};

export default UserFilter;
