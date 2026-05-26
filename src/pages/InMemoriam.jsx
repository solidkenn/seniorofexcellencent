import { useEffect } from 'react';
import PageHero from '../components/PageHero';

const PLACEHOLDER_SVG = (
  <svg viewBox="0 0 200 200" width={128} height={128} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="100" cy="72" r="40" fill="#9ca3af" />
    <ellipse cx="100" cy="175" rx="60" ry="50" fill="#9ca3af" />
  </svg>
);

const MEMORIALS = [
  { name: 'Oliver David Pearson', dates: '26 September 1939 – 19 August 2022', aria: 'Portrait placeholder for Oliver David Pearson' },
  { name: 'Ms. Elizabeth (Liz) Mary Abotomey', dates: '2020', aria: 'Portrait placeholder for Ms. Elizabeth (Liz) Mary Abotomey' },
  { name: 'Michael (Mike) J Bowden', dates: '2019', aria: 'Portrait placeholder for Michael (Mike) J Bowden' },
  { name: 'Terence (Terry) Alfred Hine', dates: '15 March 1933 – 4 June 2016', aria: 'Portrait placeholder for Terence (Terry) Alfred Hine' },
  { name: 'Dr Valerie Asche AM', dates: '2016', aria: 'Portrait placeholder for Dr Valerie Asche AM' },
  { name: 'Mr Ronald Burridge', dates: '2016', aria: 'Portrait placeholder for Mr Ronald Burridge' },
];

export default function InMemoriam() {
  useEffect(() => {
    document.title = 'In Memoriam – Seniors of Excellence NT';
  }, []);

  return (
    <>
      <PageHero eyebrow="REMEMBERING OUR COMMUNITY" title="In Memoriam">
        <blockquote className="font-body-lg text-body-lg text-zinc-300 leading-relaxed max-w-2xl border-l-4 border-primary-container pl-6 not-italic">
          <p className="mb-3">To the world you may be one person; but to one person you may be the world.</p>
          <cite className="text-zinc-400 text-base not-italic">— Dr. Seuss</cite>
        </blockquote>
      </PageHero>

      <section className="py-24 bg-surface-container-low" aria-labelledby="memorial-list-heading">
        <div className="max-w-7xl mx-auto px-8">
          <h2 id="memorial-list-heading" className="sr-only">
            Memorial list
          </h2>
          <p className="font-body-md text-secondary text-center max-w-2xl mx-auto mb-14 leading-relaxed">
            We honour the memory of award recipients and friends of Seniors of Excellence NT who have passed away. Their service and spirit continue to inspire our community.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto list-none p-0 m-0">
            {MEMORIALS.map((m) => (
              <li key={m.name}>
                <article className="memorial-card bg-white rounded-lg border border-zinc-900/10 p-8 shadow-sm h-full flex flex-col items-center text-center">
                  <div
                    className="memorial-portrait w-32 h-32 rounded-full overflow-hidden border border-zinc-200 shrink-0 mb-5"
                    role="img"
                    aria-label={m.aria}
                  >
                    {PLACEHOLDER_SVG}
                  </div>
                  <h3 className="font-h3 text-h3 text-on-surface">{m.name}</h3>
                  <p className="font-label-caps text-secondary text-xs tracking-widest mt-2">{m.dates}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
