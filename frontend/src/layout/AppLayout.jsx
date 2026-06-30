import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function AppLayout({ children }) {
  return (
    <main className="app">
      <Sidebar />
      <section className="workspace">
        <Header />
        {children}
      </section>
    </main>
  );
}