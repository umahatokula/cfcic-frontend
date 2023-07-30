import NavBar from "@/components/NavBar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <NavBar />

      <div className="p-6">{children}</div>
    </section>
  );
}
