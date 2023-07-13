import Header from "./(lib)/header";
import Navbar from "./(lib)/navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <Navbar />
      {children}
    </div>
  );
}
