export const selectUsers = state => state.users.items;
export const selectIsFollowed = (state, id) => {
  return state.users.followedUsersId.includes(id);
}
