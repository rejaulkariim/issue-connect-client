export const isAuthorized = (userRole: string, allowedRoles: string) => {
  return allowedRoles?.includes(userRole);
};
