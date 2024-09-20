import logo from './logo.svg';
import './App.css';
import Home from './Page/Home';
import Services from './Page/Services';
import Layout from './Page/Layout';
import About from './Page/About';
import Contact from './Page/Contact';
import Error from './Page/Error';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
<>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
</>
  );

}

export default App;
