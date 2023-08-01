import NavBar from "@/components/NavBar";

export default function layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <NavBar />
      <div className="p-6">{children}</div>
    </div>
  );
}
