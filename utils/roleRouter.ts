export const roleRouter = (userRole: string, router: any) => {
  switch (userRole) {
    case "admin":
      router.push("/admin");
      break;
    case "user":
      router.push("/admin/messages");
      break;
  }
};
