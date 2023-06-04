export const selectUsers = state => state.users.items;
export const selectIsFollowed = (state, id) => {
  return state.users.followedUsersId.includes(id);
}

export const selectIsFullyLoaded = (state) => state.users.isFullyLoaded;
