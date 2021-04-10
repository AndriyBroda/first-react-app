export const ProfileViewRoute = {
  template: '/users/profile/:id',
  format: (id: number) => `/users/profile/${id}`
};
