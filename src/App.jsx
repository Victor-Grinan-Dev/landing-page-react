import "./App.css";
import HeroBanner from "./components/HeroBanner";
import Snippet from "./components/Snippet";
import Features from "./components/Features";
import Access from "./components/Access";
import SuperSharge from "./components/SuperSharge";
import References from "./components/References";
import CTA from "./components/CTA";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <HeroBanner/>
      <Snippet />
      <Features />
      <Access />
      <SuperSharge />
      <References />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
