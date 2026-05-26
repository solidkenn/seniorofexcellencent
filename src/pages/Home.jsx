import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HERO_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC7DG4AgsYIWjyOQYSkv9zurtPTCBaRvh5GmTIg7QmxqRj_6IfYsf5FJHuhTGdq0RXCSc0bEF322Lk8N9tw_GXJof2T6InEThqIYjVDiRzw96n7WZTpRSFR6YITxNVFt2_MZLHxptM_TGPSqfuJic5EVRhwlHGrquudvLMACDXUjjCTplkqblLcH1Kb7TzeAoOT7WGZY2vQkUnbAUTkF22UoKSSAQxvYdOGSAVTjHt1M3QuWnW_jsMWax8n9BpxA39pbFxqze0W7q6E';

const TEA_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDBzvVlD8lQlGr1myOqVCbvJ_Tf4lpIUKpKbPKdXAW0tAZORYYJ3S7KOeU1yLf5e_1QHstrAvovdDg4WbkqjnldYHfj0RzQyh3Z1ar_qnzKYUdn_s9qaiErD1bdEH3h8sB3Mk4jV0AW4bu7SAGGtQQ4tsfFZci-YJOKGUv88r0FsfTxHACjEYlp25YqNxDv3sS7_urGun2zde9rQhrkes6Ijf8I4DjKljZtj2utOsXX9F4DWI3pazBRxMbDHy6gPusO4iEff-rFK2XX';

export default function Home() {
  useEffect(() => {
    document.title = 'Seniors of Excellence NT';
  }, []);

  return (
    <>
      <section className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[600px] lg:min-h-[700px] xl:h-[870px] flex items-center justify-center bg-black overflow-hidden py-12 md:py-0">
        <div className="absolute inset-0 opacity-40">
          <img
            className="w-full h-full object-cover"
            alt="A senior volunteer smiling warmly in a sun-drenched garden, representing wisdom and community service"
            src={HERO_IMG}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-8 w-full z-10">
          <div className="max-w-2xl">
            <span className="inline-block text-primary-container font-label-caps mb-4 tracking-widest">
              HONORING WISDOM &amp; VITALITY
            </span>
            <h1 className="font-h1 text-3xl sm:text-4xl md:text-h1 text-white mb-6">
              Celebrating the Remarkable Impact of our Senior Volunteers
            </h1>
            <p className="font-body-lg text-body-lg text-zinc-300 mb-10 leading-relaxed">
              Recognizing the exceptional contributions of Northern Territory seniors who dedicate their
              lives to community service and voluntary excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                className="bg-primary-container text-black font-bold px-8 py-4 rounded-lg font-label-caps hover:brightness-110 transition-all"
                to="/nominate"
              >
                Nominate A Senior
              </Link>
              <a
                className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg font-label-caps hover:bg-white hover:text-black transition-all"
                href="#criteria"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface" id="about">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-container/20 -z-10" />
                <img
                  className="rounded-lg shadow-2xl border-2 border-zinc-900/10 w-full object-cover"
                  src="/assets/what-we-do.png"
                  alt="Seniors and community members gathered at a community event"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-h2 text-h2 mb-6">What We Do</h2>
              <p className="font-body-md text-body-md text-secondary mb-6">
                Seniors of Excellence NT is a prestigious recognition program dedicated to identifying
                and celebrating seniors in the Northern Territory who demonstrate extraordinary commitment to
                their communities.
              </p>
              <p className="font-body-md text-body-md text-secondary mb-8">
                The award serves as a testament to the fact that age is merely a number, and the wisdom
                accumulated over decades remains one of our society&apos;s most valuable assets. We honor those
                who go above and beyond in voluntary service, mentoring, and community leadership.
              </p>
              <div className="flex items-center gap-4 text-primary font-bold">
                <span
                  className="material-symbols-outlined text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  workspace_premium
                </span>
                <span className="font-label-caps uppercase">Awarding Excellence Since 2012</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" id="criteria">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-h2 text-h2 mb-4">Nomination Criteria</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
              Ensuring our recipients represent the highest standard of community contribution and dedication.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-container p-12 rounded-lg border border-orange-600 text-black flex flex-col gap-6 relative overflow-hidden transition-all duration-300 ease-out motion-safe:hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-900/20 hover:border-primary">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-black text-white font-bold text-2xl shrink-0 relative z-10">
                01
              </span>
              <h3 className="font-h2 text-h2 leading-snug relative z-10">Age 65+</h3>
              <p className="text-on-primary-fixed text-xl leading-relaxed font-medium relative z-10">
                Nominees must be at least <strong>65 years of age</strong> at the time of nomination,
                reflecting our focus on senior contributions.
              </p>
              <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
                <span className="material-symbols-outlined text-black" aria-hidden="true" style={{ fontSize: 200 }}>
                  elderly
                </span>
              </div>
            </div>
            <div className="bg-zinc-900 p-12 rounded-lg border border-zinc-800 text-white flex flex-col gap-6 relative overflow-hidden transition-all duration-300 ease-out motion-safe:hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/45 hover:border-zinc-600">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-container text-black font-bold text-2xl shrink-0 relative z-10">
                02
              </span>
              <h3 className="font-h2 text-h2 leading-snug relative z-10">Voluntary Service</h3>
              <p className="text-zinc-200 text-xl leading-relaxed relative z-10">
                The core of the award is <strong className="text-white">selfless service</strong>. Nominees must
                have a significant history of unpaid contributions to community organizations, clubs, or
                individual advocacy.
              </p>
              <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
                <span className="material-symbols-outlined text-white" style={{ fontSize: 200 }}>
                  favorite
                </span>
              </div>
            </div>
            <div className="bg-zinc-900 p-12 rounded-lg border border-zinc-800 text-white flex flex-col gap-6 relative overflow-hidden transition-all duration-300 ease-out motion-safe:hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/45 hover:border-zinc-600">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-container text-black font-bold text-2xl shrink-0 relative z-10">
                03
              </span>
              <h3 className="font-h2 text-h2 leading-snug relative z-10">Detailed Biography</h3>
              <p className="text-zinc-200 text-xl leading-relaxed relative z-10">
                A comprehensive account of the nominee&apos;s{' '}
                <strong className="text-white">achievements, character, and specific impact</strong> on the
                Northern Territory community.
              </p>
              <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
                <span className="material-symbols-outlined text-white" aria-hidden="true" style={{ fontSize: 200 }}>
                  description
                </span>
              </div>
            </div>
            <div className="bg-primary-container p-12 rounded-lg border border-orange-600 text-black flex flex-col gap-6 relative overflow-hidden transition-all duration-300 ease-out motion-safe:hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-900/20 hover:border-primary">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-black text-white font-bold text-2xl shrink-0 relative z-10">
                04
              </span>
              <h3 className="font-h2 text-h2 leading-snug relative z-10">NT Resident</h3>
              <p className="text-on-primary-fixed text-xl leading-relaxed font-medium relative z-10">
                Nominees must be <strong>current residents of the Northern Territory</strong>, having
                contributed specifically to our local landscape.
              </p>
              <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
                <span className="material-symbols-outlined text-black" aria-hidden="true" style={{ fontSize: 200 }}>
                  location_on
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low" id="events">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-h2 text-h2 mb-4">Upcoming Events</h2>
              <p className="font-body-md text-body-md text-secondary max-w-xl">
                Join us in celebrating our community members at these prestigious annual gatherings.
              </p>
            </div>
            <Link
              className="text-primary-container font-bold font-label-caps border-b-2 border-primary-container pb-1 hover:text-primary transition-colors"
              to="/events"
            >
              View All Events
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg flex flex-col md:flex-row overflow-hidden group">
              <div className="md:w-1/2 overflow-hidden h-64 md:h-auto">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Garden tea gathering"
                  src={TEA_IMG}
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <span className="bg-black text-white text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded">
                    MAY 24, 2026
                  </span>
                  <h3 className="font-h3 text-h3 mt-4 mb-2">Spring Garden Tea Party</h3>
                  <p className="text-secondary font-body-md text-sm leading-relaxed mb-6">
                    A social gathering in the historic Government House gardens to celebrate our nominees.
                  </p>
                </div>
                <Link
                  className="flex items-center gap-2 text-primary font-bold text-sm cursor-pointer hover:underline"
                  to="/events#spring-garden-tea-party"
                >
                  <span>See Details</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg flex flex-col md:flex-row overflow-hidden group">
              <div className="md:w-1/2 overflow-hidden h-64 md:h-auto">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/assets/awards-2026.png"
                  alt="Seniors of Excellence NT award trophies on display"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <span className="bg-black text-white text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded">
                    OCT 12, 2026
                  </span>
                  <h3 className="font-h3 text-h3 mt-4 mb-2">Seniors of Excellence NT Inc Awards 2026</h3>
                  <p className="text-secondary font-body-md text-sm leading-relaxed mb-6">
                    Our flagship annual gala where the Seniors of Excellence NT recipients are formally
                    announced.
                  </p>
                </div>
                <Link
                  className="flex items-center gap-2 text-primary font-bold text-sm cursor-pointer hover:underline"
                  to="/events#awards-ceremony"
                >
                  <span>See Details</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" id="gallery">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div className="text-center md:text-left w-full md:w-auto">
              <h2 className="font-h2 text-h2 mb-4">Gallery of Excellence</h2>
              <p className="font-body-md text-body-md text-secondary max-w-xl mx-auto md:mx-0">
                A visual tribute to our past winners and community impact.
              </p>
            </div>
            <Link
              className="inline-block text-primary-container font-bold font-label-caps border-b-2 border-primary-container pb-1 hover:text-primary transition-colors shrink-0 self-center md:self-end"
              to="/gallery"
            >
              View Gallery
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            <div className="col-span-2 row-span-2 overflow-hidden rounded-lg group">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                src="/assets/gallery-formal-portrait.png"
                alt="Honoree or guest in formal dress at an awards-related event"
              />
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden rounded-lg group">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                src="/assets/gallery-audience-couple.png"
                alt="Community members seated at an event"
              />
            </div>
            <div className="col-span-1 row-span-2 overflow-hidden rounded-lg group">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                src="/assets/gallery-audience-wide.png"
                alt="Audience at a community ceremony or presentation"
              />
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden rounded-lg group">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                src="/assets/gallery-conversation.png"
                alt="Two people talking at a community event"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="mb-12">
            <span className="material-symbols-outlined text-primary-container text-6xl mb-6">mail</span>
            <h2 className="font-h2 text-h2 mb-4">Stay Informed</h2>
            <p className="font-body-md text-zinc-400">
              Join our weekly bulletin to receive updates on award nominations, upcoming events, and stories of
              community excellence.
            </p>
          </div>
          <form
            className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex-grow">
              <label className="font-label-caps text-xs uppercase mb-2 block text-left text-zinc-500">
                EMAIL ADDRESS
              </label>
              <input
                className="w-full bg-transparent border-0 border-b-2 border-zinc-700 focus:border-primary-container focus:ring-0 text-white px-0 py-3 text-lg placeholder:text-zinc-700"
                placeholder="john@example.com"
                type="email"
              />
            </div>
            <button
              className="bg-primary-container text-black font-bold px-10 py-4 rounded-lg font-label-caps mt-4 md:mt-0 hover:brightness-110 transition-all self-end"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section className="py-24 bg-surface" id="sponsors">
        <div className="max-w-7xl mx-auto px-8">
          <p className="font-label-caps text-center text-zinc-500 mb-12 tracking-[0.2em] uppercase">
            Proudly Supported By
          </p>
          <div className="flex flex-col items-center gap-10">
            <img
              src="/assets/bendigo-bank-nightcliff.png"
              alt="Community Bank Nightcliff, Bendigo Bank — Principal Sponsor"
              className="h-32 sm:h-36 md:h-44 w-auto max-w-[min(420px,92vw)] object-contain rounded-sm shadow-md"
              width={420}
              height={176}
            />
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
              <div className="bg-white border border-zinc-200 rounded-lg px-5 py-3 shadow-sm flex items-center justify-center">
                <img
                  src="/assets/nt-government.png"
                  alt="Northern Territory Government"
                  className="h-11 md:h-12 w-auto max-w-[240px] object-contain brightness-0"
                  width={240}
                  height={52}
                />
              </div>
              <img
                src="/assets/national-flags.png"
                alt="National Flags — The Top Flag Company in Australia"
                className="h-12 md:h-14 w-auto max-w-[200px] object-contain opacity-90"
                width={200}
                height={56}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
