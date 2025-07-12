import FireflyTrail from './components/FireFlyTrail';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import whimsicalImage from './assets/whimsical-ruchi.png';

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden font-[Inter] text-gray-200">
      {/* ✅ Responsive Background */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat sm:bg-fixed"
        style={{
          backgroundImage: `url(${whimsicalImage})`,
        }}
      />
      
      {/* ✅ Dark Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/40 -z-10" />

      {/* ✨ Firefly animation */}
      <FireflyTrail />

      {/* ✅ Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 w-full">
            <section id="home"><Home /></section>
            <section id="about"><About /></section>
            <section id="projects"><Projects /></section>
            <section id="skills"><Skills /></section>
            <section id="contact"><Contact /></section>
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
