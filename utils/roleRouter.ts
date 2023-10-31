export const roleRouter = (userRole: string, router: any) => {
  switch (userRole) {
    case "admin":
      router.push("/admin/messages");
      break;
    case "user":
      router.push("/user/discuss");
      break;
    default:
      router.push("/");
      break;
  }
};
