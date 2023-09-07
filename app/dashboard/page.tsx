
import { redirect } from "next/navigation";
import React from "react";
import { getAuthCookie } from "../actions";
import Dashboard from "@/components/Dashboard";

async function DashboardPage() {
  const token = await getAuthCookie();
  if (!token) redirect("/login");

  return (
    <>
      <Dashboard />
    </>
  );
}

export default DashboardPage;
