import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDarkMode } from '../hooks/useDarkMode.js';

const desktopNavClass = ({ isActive }) =>
  [
    'font-medium transition-colors duration-200',
    isActive ? 'text-orange-600' : 'text-zinc-900 hover:text-orange-600'
  ].join(' ');

export default function Header({ variant = 'default' }) {
  const isNominate = variant === 'nominate';
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggle } = useDarkMode();

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('mobile-nav-open');
    } else {
      document.body.classList.remove('mobile-nav-open');
    }
    return () => document.body.classList.remove('mobile-nav-open');
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-zinc-900/10">
      <nav className="flex justify-between items-center h-20 px-8 max-w-7xl mx-auto antialiased">
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0 min-w-0 no-underline text-inherit hover:opacity-90 transition-opacity"
          onClick={closeMobile}
        >
          <img
            src="/assets/logo.png"
            width="56"
            height="56"
            className="header-logo"
            alt="Seniors of Excellence Northern Territory"
          />
          <span className="text-xl font-bold tracking-tight text-black truncate">
            Seniors of Excellence NT
          </span>
        </Link>

        {!isNominate && (
          <div className="hidden lg:flex items-center gap-8">
            <NavLink className={desktopNavClass} to="/about">
              About
            </NavLink>
            <NavLink className={desktopNavClass} to="/events">
              Events
            </NavLink>
            <NavLink className={desktopNavClass} to="/gallery">
              Gallery
            </NavLink>
            <NavLink className={desktopNavClass} to="/in-memoriam">
              In Memoriam
            </NavLink>
            <NavLink className={desktopNavClass} to="/contact">
              Contact
            </NavLink>
          </div>
        )}

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            id="mobile-nav-toggle"
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg border border-zinc-200 bg-white text-zinc-900 hover:border-primary-container transition-colors"
            aria-controls="mobile-nav-panel"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span
              className={['material-symbols-outlined text-2xl mobile-nav-icon-menu', mobileOpen ? 'hidden' : ''].join(
                ' '
              )}
              aria-hidden="true"
            >
              menu
            </span>
            <span
              className={['material-symbols-outlined text-2xl mobile-nav-icon-close', mobileOpen ? '' : 'hidden'].join(
                ' '
              )}
              aria-hidden="true"
            >
              close
            </span>
          </button>

          <button
            type="button"
            id="dark-mode-toggle"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={isDark}
            className="flex items-center justify-center w-11 h-11 rounded-lg border border-zinc-200 bg-white text-zinc-900 hover:border-primary-container transition-colors"
            onClick={toggle}
          >
            <span
              className={['material-symbols-outlined text-2xl dark-mode-icon-moon', isDark ? 'hidden' : ''].join(' ')}
              aria-hidden="true"
            >
              dark_mode
            </span>
            <span
              className={['material-symbols-outlined text-2xl dark-mode-icon-sun', isDark ? '' : 'hidden'].join(' ')}
              aria-hidden="true"
            >
              light_mode
            </span>
          </button>

          {isNominate ? (
            <Link
              className="hidden lg:flex items-center gap-2 text-sm font-semibold text-secondary hover:text-on-surface transition-colors"
              to="/"
            >
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Back to site
            </Link>
          ) : (
            <Link
              className="bg-primary-container text-on-primary-fixed font-label-caps px-6 py-3 rounded-lg hover:brightness-110 active:opacity-80 transition-all font-bold"
              to="/nominate"
            >
              Nominate Now
            </Link>
          )}
        </div>
      </nav>

      <div
        id="mobile-nav-panel"
        className={['lg:hidden', mobileOpen ? 'is-open' : ''].filter(Boolean).join(' ')}
        hidden={!mobileOpen}
      >
        <ul className="mobile-nav-list">
          <li>
            <NavLink to="/" onClick={closeMobile}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMobile}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" onClick={closeMobile}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" onClick={closeMobile}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/in-memoriam" onClick={closeMobile}>
              In Memoriam
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMobile}>
              Contact
            </NavLink>
          </li>
          {!isNominate && (
            <li className="mobile-nav-nominate lg:hidden">
              <NavLink to="/nominate" onClick={closeMobile}>
                Nominate Now
              </NavLink>
            </li>
          )}
          {isNominate && (
            <li>
              <NavLink to="/nominate" onClick={closeMobile} aria-current="page">
                Nominate
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}
