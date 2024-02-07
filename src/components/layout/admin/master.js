'use client'

import Sidebar from "./sidebar";
import { usePathname } from "next/navigation";

export default function LayoutAdmin() {
  const path = usePathname();
  return (
    path.startsWith("/admin") && (
      <>
        {/* <Navbar /> */}
        <Sidebar />
      </>
    )
  );
}
