"use client";
import Slider from "./components/Slider/Slider";
import Navbar from "./components/navbar/Navbar";
import Product from "./pages/Product/page";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="shadow-md sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="px-4 md:px-8 py-6 space-y-12">
        <section className="rounded-xl overflow-hidden shadow-sm">
          <Slider />
        </section>
        <section className="mt-8">
          <Product />
        </section>
      </main>
    </div>
  );
}
