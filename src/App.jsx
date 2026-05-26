import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Events from './pages/Events.jsx';
import Gallery from './pages/Gallery.jsx';
import Home from './pages/Home.jsx';
import InMemoriam from './pages/InMemoriam.jsx';
import Nominate from './pages/Nominate.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/in-memoriam" element={<InMemoriam />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/nominate" element={<Nominate />} />
      </Routes>
    </BrowserRouter>
  );
}
