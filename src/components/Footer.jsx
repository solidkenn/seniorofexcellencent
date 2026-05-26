import { Link } from 'react-router-dom';

const navLinkClass = 'hover:text-white transition-colors';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 py-20 border-t border-white/5 text-sm">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-zinc-400">
        <div className="lg:col-span-1">
          <div className="text-lg font-bold text-white mb-6">Seniors of Excellence NT</div>
          <p className="leading-relaxed mb-6">
            Honoring the wisdom and vitality of our senior community across the Northern Territory since
            2012.
          </p>
          <div className="flex gap-4">
            <span
              className="material-symbols-outlined text-white hover:text-orange-400 cursor-pointer transition-colors"
              aria-hidden="true"
            >
              social_leaderboard
            </span>
            <span
              className="material-symbols-outlined text-white hover:text-orange-400 cursor-pointer transition-colors"
              aria-hidden="true"
            >
              public
            </span>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 font-label-caps">Quick Links</h4>
          <ul className="space-y-4">
            <li>
              <Link className={navLinkClass} to="#">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className={navLinkClass} to="#">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link className={navLinkClass} to="/nominate">
                Nomination Guidelines
              </Link>
            </li>
            <li>
              <Link className={navLinkClass} to="/#criteria">
                Nomination Criteria
              </Link>
            </li>
            <li>
              <Link className={navLinkClass} to="/#sponsors">
                Our Sponsors
              </Link>
            </li>
            <li>
              <Link className={navLinkClass} to="#">
                Weekly Bulletin
              </Link>
            </li>
            <li>
              <Link className={navLinkClass} to="/in-memoriam">
                In Memoriam
              </Link>
            </li>
            <li>
              <Link className={navLinkClass} to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 font-label-caps">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-orange-400 text-sm" aria-hidden="true">
                mail
              </span>
              <a className="hover:text-white transition-colors" href="mailto:seniorsofexcellencent@gmail.com">
                seniorsofexcellencent@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-orange-400 text-sm" aria-hidden="true">
                location_on
              </span>
              <span>
                P.O. Box 40561,
                <br />
                Casuarina, NT 0811
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 font-label-caps">Legacy</h4>
          <p className="text-xs italic leading-loose">
            &quot;The future belongs to those who believe in the beauty of their dreams and the strength of
            their service.&quot;
          </p>
          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-white font-bold mb-2">© 2026 Seniors of Excellence NT.</p>
            <p>Honoring Wisdom and Vitality.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
