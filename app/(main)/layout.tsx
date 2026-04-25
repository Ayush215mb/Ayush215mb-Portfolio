import Navbar from "@/components/common/navbar";
import FractalTree from "@/components/common/fractal-tree";
import Footer from "@/components/common/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-20 pb-5">
      <FractalTree />
      <Navbar />
      <main className="w-full my-10 flex justify-center items-center flex-col gap-16 ">
        {children}
      </main>
      <Footer />
    </div>
  );
}
