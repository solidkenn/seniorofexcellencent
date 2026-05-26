import { useEffect, useMemo, useRef, useState } from 'react';
import PageHero from '../components/PageHero';
import { EVENTS_DATA } from '../data/events.js';

const MONTH_FILTERS = [
  { month: 'all', label: 'All events', icon: 'event' },
  { month: 'may', label: 'May 2026', icon: 'calendar_month' },
  { month: 'june', label: 'June 2026', icon: 'calendar_month' },
  { month: 'july', label: 'July 2026', icon: 'calendar_month' },
  { month: 'october', label: 'October 2026', icon: 'calendar_month' },
];

const FEATURED_COUNT = 4;

export default function Events() {
  const sortedEvents = useMemo(
    () => [...EVENTS_DATA].sort((a, b) => a.sortDate.localeCompare(b.sortDate)),
    []
  );
  const featured = useMemo(() => sortedEvents.slice(0, FEATURED_COUNT), [sortedEvents]);

  const [selectedMonth, setSelectedMonth] = useState('all');
  const [modalEvent, setModalEvent] = useState(null);

  const lastTriggerRef = useRef(null);
  const closeBtnRef = useRef(null);

  const visibleEvents = useMemo(
    () => sortedEvents.filter((ev) => selectedMonth === 'all' || ev.month === selectedMonth),
    [sortedEvents, selectedMonth]
  );

  useEffect(() => {
    document.title = 'Events – Seniors of Excellence NT';
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape' && modalEvent) {
        setModalEvent(null);
        document.body.style.overflow = '';
        lastTriggerRef.current?.focus();
        lastTriggerRef.current = null;
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [modalEvent]);

  useEffect(() => {
    if (modalEvent) {
      document.body.style.overflow = 'hidden';
      closeBtnRef.current?.focus();
    }
  }, [modalEvent]);

  function openModal(ev, triggerEl) {
    lastTriggerRef.current = triggerEl;
    setModalEvent(ev);
  }

  function closeModal() {
    setModalEvent(null);
    document.body.style.overflow = '';
    lastTriggerRef.current?.focus();
    lastTriggerRef.current = null;
  }

  function renderFeaturedCard(ev) {
    const isDark = ev.featuredDark;
    const articleClass = isDark
      ? 'bg-zinc-900 rounded-lg overflow-hidden shadow-sm border border-zinc-800 text-white flex flex-col'
      : 'bg-white rounded-lg overflow-hidden shadow-sm border border-zinc-900/10 flex flex-col';
    const dateBadge = isDark ? 'bg-primary-container text-black' : 'bg-black text-white';
    const summaryClass = isDark ? 'text-zinc-300' : 'text-secondary';
    const linkClass = isDark ? 'text-primary-container' : 'text-primary';
    const imgClass = `h-56 w-full object-cover${ev.imageTop ? ' object-top bg-white' : ''}`;

    return (
      <article key={ev.id} className={articleClass}>
        <img className={imgClass} src={ev.image} alt={ev.alt} />
        <div className="p-8 flex flex-col flex-1">
          <span className={`${dateBadge} text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded self-start`}>
            {ev.date}
          </span>
          <h3 className="font-h3 text-h3 mt-5 mb-3">{ev.title}</h3>
          <p className={`${summaryClass} font-body-md text-base leading-relaxed flex-1`}>{ev.summary}</p>
          <a
            className={`mt-6 inline-flex items-center gap-2 ${linkClass} font-bold text-sm hover:underline`}
            href={`#${ev.id}`}
          >
            <span>See in Calendar</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </a>
        </div>
      </article>
    );
  }

  return (
    <>
      <PageHero eyebrow="EVENTS CALENDAR" title="Upcoming Events">
        <p className="font-body-lg text-body-lg text-zinc-300 leading-relaxed max-w-2xl">
          Explore ceremonies, community gatherings, and campaign events connected to Seniors of Excellence NT.
        </p>
      </PageHero>

      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <h2 className="font-h2 text-h2 mb-4">Featured Events</h2>
              <p className="font-body-md text-body-md text-secondary max-w-2xl">
                The next upcoming events for 2026. See the full calendar below for all dates including the annual awards gala.
              </p>
            </div>
            <a
              className="text-primary-container font-bold font-label-caps border-b-2 border-primary-container pb-1 hover:text-primary transition-colors"
              href="#calendar"
            >
              View Calendar
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">{featured.map(renderFeaturedCard)}</div>
        </div>
      </section>

      <section className="py-24 bg-white" id="calendar">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-h2 text-h2 mb-4">2026 Events Calendar</h2>
            <p className="font-body-md text-body-md text-secondary max-w-2xl mx-auto">
              Choose a month to filter events, or view all. Click an event to see full details in a popup.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-1">
              <p className="font-label-caps text-secondary tracking-widest mb-4">MONTHS</p>
              <div className="flex flex-row lg:flex-col gap-3 flex-wrap">
                {MONTH_FILTERS.map((btn) => {
                  const isActive = selectedMonth === btn.month;
                  return (
                    <button
                      key={btn.month}
                      type="button"
                      className={`month-filter-btn flex items-center gap-3 rounded-lg border px-4 py-3 transition-all text-left ${
                        isActive
                          ? 'border-primary-container bg-primary-container text-black'
                          : 'border-zinc-200 bg-surface-container-low hover:bg-primary-container hover:border-primary-container hover:text-black'
                      }`}
                      data-month={btn.month}
                      aria-pressed={isActive}
                      onClick={() => setSelectedMonth(btn.month)}
                    >
                      <span
                        className={`material-symbols-outlined text-lg shrink-0 ${!isActive ? 'text-primary-container' : ''}`}
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {btn.icon}
                      </span>
                      <span className="font-bold text-sm">{btn.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="flex flex-col" id="calendar-timeline">
                {sortedEvents.map((ev) => {
                  const visible = selectedMonth === 'all' || ev.month === selectedMonth;
                  const visIndex = visibleEvents.findIndex((e) => e.id === ev.id);
                  const showConnector = visible && visIndex >= 0 && visIndex < visibleEvents.length - 1;
                  const isLastVisible = visible && visIndex === visibleEvents.length - 1;

                  return (
                    <div
                      key={ev.id}
                      id={ev.id}
                      className={`calendar-timeline-entry flex gap-6 scroll-mt-24 ${visible ? '' : 'hidden'}`}
                      data-month={ev.month}
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-primary-container flex flex-col items-center justify-center shrink-0">
                          <span className="text-black font-bold text-xl leading-none">{ev.day}</span>
                          <span className="text-black font-bold text-[10px] uppercase tracking-wider leading-tight">
                            {ev.monthAbbr}
                          </span>
                        </div>
                        <div
                          className={`timeline-connector w-0.5 bg-primary-container/30 flex-1 min-h-[48px] mt-2 ${showConnector ? '' : 'hidden'}`}
                        />
                      </div>
                      <button
                        type="button"
                        className={`event-modal-trigger event-timeline-card flex-1 rounded-lg border p-6 hover:-translate-y-0.5 hover:shadow-lg transition-all motion-safe:hover:-translate-y-1 text-left w-full md:max-w-none ${isLastVisible ? '' : 'mb-6'}`}
                        onClick={(e) => openModal(ev, e.currentTarget)}
                      >
                        <span className="event-timeline-date font-label-caps tracking-widest text-xs">{ev.date}</span>
                        <h3 className="font-h3 text-h3 mt-2 mb-2">{ev.title}</h3>
                        <p className="event-timeline-desc font-body-md text-base leading-relaxed">{ev.summary}</p>
                        <span className="mt-4 inline-flex items-center gap-1 event-timeline-cta font-bold text-sm">
                          View details <span className="material-symbols-outlined text-base">arrow_forward</span>
                        </span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event detail modal */}
      <div
        id="event-modal"
        className={`fixed inset-0 z-[100] ${modalEvent ? '' : 'hidden'}`}
        aria-hidden={modalEvent ? 'false' : 'true'}
      >
        <div id="event-modal-overlay" className="absolute inset-0 bg-black/60" onClick={closeModal} role="presentation" />
        <div className="relative z-10 flex min-h-full items-center justify-center p-4 pointer-events-none">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-modal-title"
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-2xl border border-zinc-200 pointer-events-auto"
          >
            <button
              ref={closeBtnRef}
              type="button"
              id="event-modal-close"
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black transition-colors"
              aria-label="Close"
              onClick={closeModal}
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            {modalEvent ? (
              <>
                <img
                  id="event-modal-image"
                  className={`h-64 w-full object-cover rounded-t-lg${modalEvent.imageTop ? ' object-top bg-white' : ''}`}
                  src={modalEvent.image}
                  alt={modalEvent.alt}
                />
                <div className="p-8">
                  <span
                    id="event-modal-date"
                    className="inline-block bg-black text-white text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded"
                  >
                    {modalEvent.date}
                  </span>
                  <h2 id="event-modal-title" className="font-h3 text-h3 mt-5 mb-4 text-on-surface">
                    {modalEvent.title}
                  </h2>
                  <p id="event-modal-description" className="text-xl leading-relaxed text-secondary">
                    {modalEvent.description}
                  </p>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
