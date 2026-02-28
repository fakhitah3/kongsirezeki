"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUserRole } from "@/lib/useUserRole";

export default function DashboardRouter() {
  const router = useRouter();

  useEffect(() => {
  getUserRole().then((role) => {
    if (role === "pelajar") router.push("/dashboard/pelajar");
    if (role === "penyumbang") router.push("/dashboard/penyumbang");
    if (role === "sukarelawan") router.push("/dashboard/sukarelawan");
    if (role === "admin") router.push("/dashboard/admin");
  });
}, []);

  return <p className="p-10">Memuatkan dashboard...</p>;
}