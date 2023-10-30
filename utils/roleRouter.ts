export const roleRouter = (userRole: string, router: any) => {
  switch (userRole) {
    case "admin":
      router.push("/dashboard");
      break;
    case "user":
      router.push("/user/discuss");
      break;
  }
};
