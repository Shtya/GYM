import HomePage from "./component/section_1/HomePage";
import Program from "./component/Section_2/program";
import Why from "./component/section_3/Why";
import Plans from "./component/section_4/Plans";
import Testimonials from "./component/section_5/Testimonials";
import Footer from "./component/section_6/Footer";
import Nav from "./component/section_1/NavBar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Program" element={<Program />} />
        <Route path="/Why" element={<Why />} />
        <Route path="/Plans" element={<Plans />} />
        <Route path="/Testimonials" element={<Testimonials />} />

      </Routes>
        <Footer />
    </div>
  );
}

export default App;
