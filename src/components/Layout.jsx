import { Outlet } from 'react-router-dom';

import Footer from './Footer.jsx';
import Header from './Header.jsx';
import ScrollToTop from './ScrollToTop.jsx';

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="mt-20 font-body-md antialiased overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
