import NavBar from "@/components/NavBar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="px-6 pt-20 pb-32">{children}</div>
    </section>
  );
}
