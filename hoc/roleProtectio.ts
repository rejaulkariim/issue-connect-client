"use client";

import { RootState } from "@/store/store";
import { isAuthorized } from "@/utils/authService";
import { roleRouter } from "@/utils/roleRouter";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ allowedRoles, children }: any) => {
  const userRole = useSelector(
    (state: RootState) => state?.user?.user?.user?.role
  );

  const router = useRouter();

  useEffect(() => {
    if (!isAuthorized(userRole, allowedRoles)) {
      roleRouter(userRole, router);
    }
  }, [userRole, allowedRoles, router]);

  return isAuthorized(userRole, allowedRoles) ? children : null;
};

export default ProtectedRoute;
