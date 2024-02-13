import Footer from "@/components/Footer";
import HowTo from "@/components/HowTo";
import Info from "@/components/Info";
import NavBar from "@/components/NavBar";

export default function Home() 
{
  return (
    <>
      <header className="sticky top-0 z-50">
        <NavBar/>
      </header>
      <main className="bg-cover flex min-h-screen flex-col items-center justify-between" style={{backgroundImage:`url('https://images7.alphacoders.com/122/1226536.jpg')`}}>
        <Info/>
        <HowTo/>
        <button className="bg-red-950 p-4 rounded-lg hover:bg-red-900 mb-6">PLAY NOW!</button>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}
