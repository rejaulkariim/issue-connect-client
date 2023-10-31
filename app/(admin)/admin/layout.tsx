import ProtectedRoute from "@/hoc/roleProtectio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Issue Connect App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProtectedRoute allowedRoles={["admin"]}>{children}</ProtectedRoute>;
}
