"use client";

import { Customers } from "@/components/customers/customers";
import { Menu } from "@/components/menu/manu";
import { useUserDashboard } from "@/hook/use-dashboard/user-dashboard";
import Challenger from "./challenger/page";

export default function Dashboard() {
  const { selecDashboard } = useUserDashboard();
  return (
    <main className="w-full h-screen bg-bg-primary flex">
      <Menu />

      <section className="w-full h-full ml-[230px] ">
        {selecDashboard == "customer" && <Customers />}
        {selecDashboard == "challanger" && <Challenger />}
      </section>
    </main>
  );
}
