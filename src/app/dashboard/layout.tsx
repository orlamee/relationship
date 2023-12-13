"use client";
import Sidebar from "@/components/sidebar";



export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <section className="relative">
      <Sidebar />
      <main className="flex-1 xl:ml-[330px]">{children}</main>
    </section>
  );
}
