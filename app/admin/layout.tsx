import Sidebar from "./components/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen bg-neutral-50">
      <Sidebar />

      <section className="flex-1 p-10">
        {children}
      </section>
    </main>
  );
}