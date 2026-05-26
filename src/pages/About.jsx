import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const SVG_PERSON = ({ fill = '#9ca3af' }) => (
  <svg viewBox="0 0 200 200" width={128} height={128} xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="72" r="40" fill={fill} />
    <ellipse cx="100" cy="175" rx="60" ry="50" fill={fill} />
  </svg>
);

const DURATION_MS = 560;

export default function About() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [stack0, setStack0] = useState('aims-front');
  const [stack1, setStack1] = useState('aims-back');

  const carouselRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    document.title = 'About Us – Seniors of Excellence NT';
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const goTo = useCallback(
    (next) => {
      if (animating || next === current || next < 0 || next > 1) return;

      setAnimating(true);
      const outgoing = current;
      const incoming = next;

      const setOutgoing = outgoing === 0 ? setStack0 : setStack1;
      const setIncoming = incoming === 0 ? setStack0 : setStack1;

      /* Place incoming behind, ready to rise */
      setIncoming('aims-enter-from-back');

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setOutgoing('aims-exit-to-back');
          setIncoming('aims-front');
        });
      });

      setCurrent(next);

      timeoutRef.current = window.setTimeout(() => {
        const setOutAfter = outgoing === 0 ? setStack0 : setStack1;
        setOutAfter('aims-back');
        setAnimating(false);
      }, DURATION_MS);
    },
    [animating, current]
  );

  const onCarouselKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goTo(current - 1);
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goTo(current + 1);
    }
  };

  return (
    <>
      <PageHero eyebrow="OUR STORY" title="About Seniors of Excellence NT">
        <p className="font-body-lg text-body-lg text-zinc-300 leading-relaxed max-w-2xl">
          Founded by a retiree who believed unsung heroes deserve recognition — celebrating the extraordinary
          contributions of Northern Territory seniors since 2005.
        </p>
      </PageHero>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="w-72 h-72 rounded-full overflow-hidden silhouette shadow-lg border border-zinc-200">
                <svg viewBox="0 0 200 200" width={200} height={200} xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="72" r="40" fill="#9ca3af" />
                  <ellipse cx="100" cy="175" rx="60" ry="50" fill="#9ca3af" />
                </svg>
              </div>
            </div>
            <div>
              <span className="inline-block font-label-caps text-primary text-xs mb-3 tracking-widest">
                FOUNDER &amp; PRESIDENT
              </span>
              <h2 className="font-h2 text-h2 mb-1">Michael (Mike) Foley OAM</h2>
              <p className="text-secondary text-sm font-semibold mb-6 uppercase tracking-wider">Founder / President</p>
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                Mike Foley dedicated a significant portion of his life to community service, beginning with his
                active involvement in various community groups during his spare time. This immersion in community work
                exposed him to a multitude of individuals who shared his passion, many of whom were retirees.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mt-4">
                Inspired by their dedication and contributions, Foley embarked on a mission to recognise and celebrate
                these unsung heroes upon his retirement in 2005.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-container-low" id="board">
        <div className="max-w-7xl mx-auto px-8">
          <span className="inline-block font-label-caps text-primary text-xs mb-3 tracking-widest">GOVERNANCE</span>
          <h2 className="font-h2 text-h2 mb-12">Our Board</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow flex flex-col items-center text-center pt-8 pb-6 px-6">
              <div className="w-32 h-32 rounded-full overflow-hidden silhouette border border-zinc-200 shrink-0 mb-5 flex items-center justify-center">
                <SVG_PERSON />
              </div>
              <div>
                <p className="font-label-caps text-primary text-[10px] tracking-widest mb-1">President</p>
                <h3 className="font-h3 text-h3">Michael (Mike) Foley OAM</h3>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow flex flex-col items-center text-center pt-8 pb-6 px-6">
              <div className="w-32 h-32 rounded-full overflow-hidden silhouette border border-zinc-200 shrink-0 mb-5 flex items-center justify-center">
                <SVG_PERSON />
              </div>
              <div>
                <p className="font-label-caps text-primary text-[10px] tracking-widest mb-1">Vice President</p>
                <h3 className="font-h3 text-h3">The Hon Willem Westra van Holthe</h3>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow flex flex-col items-center text-center pt-8 pb-6 px-6">
              <div className="w-32 h-32 rounded-full overflow-hidden silhouette border border-zinc-200 shrink-0 mb-5 flex items-center justify-center">
                <SVG_PERSON />
              </div>
              <div>
                <p className="font-label-caps text-primary text-[10px] tracking-widest mb-1">Treasurer</p>
                <h3 className="font-h3 text-h3">Jacqueline Dowling</h3>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow flex flex-col items-center text-center pt-8 pb-6 px-6">
              <div className="w-32 h-32 rounded-full overflow-hidden silhouette border border-zinc-200 shrink-0 mb-5 flex items-center justify-center">
                <SVG_PERSON />
              </div>
              <div>
                <p className="font-label-caps text-primary text-[10px] tracking-widest mb-1">
                  Secretary &amp; Public Officer
                </p>
                <h3 className="font-h3 text-h3">Kay Foley</h3>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-dashed border-zinc-300 hover:shadow-md transition-shadow flex flex-col items-center text-center pt-8 pb-6 px-6">
              <div className="w-32 h-32 rounded-full overflow-hidden silhouette border border-zinc-200 shrink-0 mb-5 flex items-center justify-center">
                <SVG_PERSON fill="#d1d5db" />
              </div>
              <div>
                <p className="font-label-caps text-primary text-[10px] tracking-widest mb-1">Committee Member</p>
                <h3 className="font-h3 text-h3 text-zinc-400">To Be Announced</h3>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-dashed border-zinc-300 hover:shadow-md transition-shadow flex flex-col items-center text-center pt-8 pb-6 px-6">
              <div className="w-32 h-32 rounded-full overflow-hidden silhouette border border-zinc-200 shrink-0 mb-5 flex items-center justify-center">
                <SVG_PERSON fill="#d1d5db" />
              </div>
              <div>
                <p className="font-label-caps text-primary text-[10px] tracking-widest mb-1">Committee Member</p>
                <h3 className="font-h3 text-h3 text-zinc-400">To Be Announced</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900 text-white" id="patron">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block font-label-caps text-primary-container text-xs mb-3 tracking-widest">
                OUR PATRON
              </span>
              <h2 className="font-h2 text-h2 mb-4">The Hon Sally Thomas</h2>
              <p className="text-zinc-300 font-body-lg text-body-lg leading-relaxed">
                We are honoured to have The Honourable Sally Thomas as our Patron, lending her distinguished support
                to the recognition of senior volunteers across the Northern Territory.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div
                className="w-64 h-64 rounded-full overflow-hidden border-2 border-primary-container/40 shadow-xl"
                style={{ background: '#27272a' }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <svg
                    viewBox="0 0 200 200"
                    width={160}
                    height={160}
                    xmlns="http://www.w3.org/2000/svg"
                    opacity={0.4}
                  >
                    <circle cx="100" cy="72" r="40" fill="#ff8c00" />
                    <ellipse cx="100" cy="175" rx="60" ry="50" fill="#ff8c00" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low" id="aims">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-14">
            <span className="inline-block font-label-caps text-primary text-xs mb-3 tracking-widest">
              WHAT WE STAND FOR
            </span>
            <h2 className="font-h2 text-h2 mb-4">Our Aims &amp; Mission</h2>
            <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto leading-relaxed">
              Supporting Northern Territory seniors through recognition, community service, and the celebration of
              voluntary excellence.
            </p>
          </div>

          <div
            ref={carouselRef}
            id="aims-carousel"
            className="max-w-4xl mx-auto"
            tabIndex={0}
            role="region"
            onKeyDown={onCarouselKeyDown}
            aria-roledescription="carousel"
            aria-label="Our Aims and Mission"
          >
            <div className="flex items-center gap-3 md:gap-6">
              <button
                type="button"
                className="shrink-0 z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg border border-zinc-900/10 bg-white text-on-surface hover:border-primary-container hover:text-primary transition-colors disabled:opacity-40 disabled:pointer-events-none"
                aria-label="Previous slide"
                disabled={current === 0}
                onClick={() => goTo(current - 1)}
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>

              <div className="aims-stack flex-1 min-w-0">
                <div
                  id="aims-slide-0"
                  className={`aims-carousel-slide ${stack0} bg-zinc-900 rounded-2xl border-l-4 border-primary-container p-8 lg:p-10 text-white flex flex-col overflow-hidden`}
                  role="group"
                  aria-roledescription="slide"
                  aria-label="1 of 2: Our Aims and Objectives"
                >
                  <span
                    className="material-symbols-outlined text-primary-container absolute top-6 right-6 text-6xl opacity-10 pointer-events-none"
                    aria-hidden="true"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <div className="relative z-10 mb-8">
                    <span className="inline-block font-label-caps text-primary-container text-xs mb-3 tracking-widest">
                      WHAT WE STAND FOR
                    </span>
                    <h3 className="font-h2 text-h2 mb-4">Our Aims &amp; Objectives</h3>
                    <p className="text-zinc-300 text-base leading-relaxed">
                      We support Northern Territory seniors through positive community engagement, lifelong
                      contribution, and recognition of voluntary excellence.
                    </p>
                  </div>
                  <div className="relative z-10 space-y-6">
                    {[
                      'To encourage and support all Senior Citizens wherever they are in the NT, to improve their quality of life through positive attitudes, good communication and sound values.',
                      'To urge Seniors to put to good use the valuable life skills they have attained throughout their lives in assisting others less fortunate than themselves.',
                      'By way of example, encourage other Seniors to aspire to achievement and accomplish goals to the advantage of themselves and others.',
                      'To share a common wealth of ideas and expertise through this program that encourages Seniors to recognise the value of achievement and self esteem that comes through community service, volunteering and other significant ways.',
                    ].map((text, i) => (
                      <div key={i} className="flex gap-4">
                        <span className="shrink-0 font-bold text-primary-container text-sm mt-0.5">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <p className="text-zinc-200 text-base leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  id="aims-slide-1"
                  className={`aims-carousel-slide ${stack1} bg-zinc-900 rounded-2xl border-l-4 border-primary-container p-8 lg:p-10 text-white flex flex-col overflow-hidden`}
                  role="group"
                  aria-roledescription="slide"
                  aria-label="2 of 2: Our Mission Statement"
                >
                  <span
                    className="material-symbols-outlined text-primary-container absolute top-6 right-6 text-6xl opacity-10 pointer-events-none"
                    aria-hidden="true"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    diversity_3
                  </span>
                  <div className="relative z-10 mb-8">
                    <span className="inline-block font-label-caps text-primary-container text-xs mb-3 tracking-widest">
                      GUIDING PRINCIPLES
                    </span>
                    <h3 className="font-h2 text-h2 mb-4">Our Mission Statement</h3>
                    <p className="text-zinc-300 text-base leading-relaxed">
                      We exist to honour senior volunteers across the Northern Territory and inspire others through
                      the power of community service, dignity, and lifelong contribution.
                    </p>
                  </div>
                  <div className="relative z-10 space-y-6">
                    {[
                      'Encourage and support all Senior Citizens wherever they are in the NT, to improve their quality of life through positive attitudes, good communication and sound values.',
                      'Urge Seniors to put to good use the valuable life skills they have attained throughout their lives in assisting others less fortunate than themselves.',
                      'By way of example, encourage other Seniors to aspire to achievement and accomplish goals to the advantage of themselves and others.',
                      'Share a common wealth of ideas and expertise through this program that encourages Seniors to recognise the value of achievement and self esteem that comes through community service, volunteering and other significant ways.',
                    ].map((text, i) => (
                      <div key={i} className="flex gap-4">
                        <span className="shrink-0 font-bold text-primary-container text-sm mt-0.5">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <p className="text-zinc-200 text-base leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="shrink-0 z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg border border-zinc-900/10 bg-white text-on-surface hover:border-primary-container hover:text-primary transition-colors disabled:opacity-40 disabled:pointer-events-none"
                aria-label="Next slide"
                disabled={current === 1}
                onClick={() => goTo(current + 1)}
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-container">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="font-h2 text-h2 text-black mb-4">Know a Senior Who Deserves Recognition?</h2>
          <p className="text-on-primary-container font-body-lg text-body-lg mb-8 max-w-xl mx-auto">
            Nominations for the 2026 Awards are open. Help us celebrate the unsung heroes of the Northern Territory.
          </p>
          <Link
            to="/nominate"
            className="inline-block bg-black text-white font-bold font-label-caps px-10 py-4 rounded-lg hover:bg-zinc-800 transition-all"
          >
            Nominate a Senior
          </Link>
        </div>
      </section>
    </>
  );
}
