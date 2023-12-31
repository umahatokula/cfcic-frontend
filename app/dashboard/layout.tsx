import DashboardHeader from "@/components/DashboardHeader";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex justify-center bg-[#FBFBFB]">
      {/* <Alert /> */}
      <main className="w-full laptop:w-[550px] desktop:w-[600px] min-h-screen shadow bg-white text-gray-800 overflow-hidden">
        <DashboardHeader />
        <div className="p-5">{children}</div>
      </main>
    </div>
  );
}
