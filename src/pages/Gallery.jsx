import { useEffect, useRef, useState } from 'react';
import PageHero from '../components/PageHero';

const VIDEO_ITEMS = [
  {
    poster: '/assets/gallery/video-opening-ceremony.png',
    title: 'Opening Ceremony 2025',
    duration: '12:34',
    description: 'A full recording of the official opening ceremony.',
    alt: 'Opening Ceremony 2025',
  },
  {
    poster: '/assets/gallery/video-winner-highlights.png',
    title: 'Winner Highlights',
    duration: '8:15',
    description: 'Celebrating our award recipients and their achievements.',
    alt: 'Winner Highlights',
  },
  {
    poster: '/assets/gallery/video-community-stories.png',
    title: 'Community Stories',
    duration: '15:42',
    description: 'Personal stories from seniors making a difference across the NT.',
    alt: 'Community Stories',
  },
  {
    poster: '/assets/gallery/video-tea-party-recap.png',
    title: 'Tea Party Recap',
    duration: '6:28',
    description: 'Highlights from the Spring Garden Tea Party at Government House.',
    alt: 'Tea Party Recap',
  },
  {
    poster: '/assets/gallery/video-nominee-interviews.png',
    title: 'Nominee Interviews',
    duration: '22:10',
    description: 'In-depth conversations with our 2026 award nominees.',
    alt: 'Nominee Interviews',
  },
  {
    poster: '/assets/gallery/video-volunteer-spotlight.png',
    title: 'Volunteer Spotlight',
    duration: '9:05',
    description: 'Recognising the volunteers who support our seniors program.',
    alt: 'Volunteer Spotlight',
  },
];

const PHOTO_ALBUMS = [
  {
    src: '/assets/gallery/album-awards-night-2025.png',
    alt: 'Awards Night 2025 ceremony',
    count: '32 photos',
    title: 'Awards Night 2025',
    meta: 'November 2025 · Darwin Convention Centre',
  },
  {
    src: '/assets/gallery/album-government-house-tea.png',
    alt: 'Government House Tea Party',
    count: '18 photos',
    title: 'Government House Tea',
    meta: 'May 2026 · Government House Gardens',
  },
  {
    src: '/assets/gallery/album-community-picnic.png',
    alt: 'Community Picnic',
    count: '24 photos',
    title: 'Community Picnic',
    meta: 'March 2026 · Bicentennial Park',
  },
  {
    src: '/assets/gallery/album-nominee-portraits.png',
    alt: 'Nominee Portraits',
    count: '12 photos',
    title: 'Nominee Portraits',
    meta: '2026 Awards Round',
  },
  {
    src: '/assets/gallery/album-reach-out-campaign.png',
    alt: 'Reach Out Campaign',
    count: '15 photos',
    title: 'Reach Out Campaign',
    meta: 'February 2026 · Community Hubs',
  },
  {
    src: '/assets/gallery/album-volunteer-celebration.png',
    alt: 'Volunteer Celebration',
    count: '20 photos',
    title: 'Volunteer Celebration',
    meta: 'January 2026 · Excellence Plaza',
  },
];

export default function Gallery() {
  const [tab, setTab] = useState('photos');
  const [modalVideo, setModalVideo] = useState(null);
  const lastTriggerRef = useRef(null);
  const videoCloseRef = useRef(null);

  useEffect(() => {
    document.title = 'Gallery – Seniors of Excellence NT';
  }, []);

  useEffect(() => {
    if (modalVideo) {
      videoCloseRef.current?.focus();
    }
  }, [modalVideo]);

  useEffect(() => {
    if (window.location.hash === '#videos') {
      setTab('videos');
    }
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape' && modalVideo) {
        setModalVideo(null);
        document.body.style.overflow = '';
        lastTriggerRef.current?.focus();
        lastTriggerRef.current = null;
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [modalVideo]);

  useEffect(() => {
    if (modalVideo) {
      document.body.style.overflow = 'hidden';
    }
  }, [modalVideo]);

  function openVideo(v, trigger) {
    lastTriggerRef.current = trigger;
    setModalVideo(v);
  }

  function closeVideo() {
    setModalVideo(null);
    document.body.style.overflow = '';
    lastTriggerRef.current?.focus();
    lastTriggerRef.current = null;
  }

  const photosActiveClasses = tab === 'photos';
  const tabPhotosClass = photosActiveClasses
    ? 'px-6 py-3 rounded-lg font-label-caps text-sm font-bold transition-all bg-primary-container text-on-primary-fixed border-transparent'
    : 'px-6 py-3 rounded-lg font-label-caps text-sm font-bold transition-all border border-zinc-900/10 text-on-surface hover:border-primary-container';
  const tabVideosClass =
    tab === 'videos'
      ? 'px-6 py-3 rounded-lg font-label-caps text-sm font-bold transition-all bg-primary-container text-on-primary-fixed border-transparent'
      : 'px-6 py-3 rounded-lg font-label-caps text-sm font-bold transition-all border border-zinc-900/10 text-on-surface hover:border-primary-container';

  return (
    <>
      <PageHero eyebrow="MEDIA GALLERY" title="Gallery of Excellence">
        <p className="font-body-lg text-body-lg text-zinc-300 leading-relaxed max-w-2xl">
          Browse photo albums from our ceremonies and community events, or watch highlights from across the Seniors of Excellence NT program.
        </p>
      </PageHero>

      <section className="py-12 bg-white border-b border-zinc-900/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <p className="font-body-md text-secondary max-w-xl">Select a category to explore our visual archive.</p>
            <div className="flex gap-2" role="tablist" aria-label="Gallery categories">
              <button
                type="button"
                id="tab-photos"
                className={`gallery-tab ${tabPhotosClass}`}
                role="tab"
                aria-selected={tab === 'photos'}
                aria-controls="gallery-photos"
                onClick={() => setTab('photos')}
              >
                Photos
              </button>
              <button
                type="button"
                id="tab-videos"
                className={`gallery-tab ${tabVideosClass}`}
                role="tab"
                aria-selected={tab === 'videos'}
                aria-controls="gallery-videos"
                onClick={() => setTab('videos')}
              >
                Videos
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="gallery-photos"
        className={`py-24 bg-surface-container-low ${tab === 'photos' ? '' : 'hidden'}`}
        role="tabpanel"
        aria-labelledby="tab-photos"
        {...(tab === 'photos' ? {} : { hidden: true })}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-12">
            <h2 className="font-h2 text-h2 mb-4">Photo Albums</h2>
            <p className="font-body-md text-body-md text-secondary max-w-2xl">
              Collections from awards nights, community gatherings, and campaign events across the Northern Territory.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PHOTO_ALBUMS.map((a) => (
              <article
                key={a.title}
                className="bg-white rounded-lg overflow-hidden border border-zinc-900/10 group cursor-default"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={a.src} alt={a.alt} />
                  <span className="absolute bottom-3 left-3 bg-black/80 text-white text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded">
                    {a.count}
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="font-h3 text-h3 mb-2">{a.title}</h3>
                  <p className="text-secondary text-sm">{a.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="gallery-videos"
        className={`py-24 bg-surface-container-low ${tab === 'videos' ? '' : 'hidden'}`}
        role="tabpanel"
        aria-labelledby="tab-videos"
        {...(tab === 'videos' ? {} : { hidden: true })}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-12">
            <h2 className="font-h2 text-h2 mb-4">Video Highlights</h2>
            <p className="font-body-md text-body-md text-secondary max-w-2xl">
              Watch ceremonies, winner moments, and community stories from across our program.
            </p>
          </div>
          <h3 className="font-label-caps text-sm text-on-surface-variant tracking-widest mb-6">All Videos</h3>
          <div className="flex flex-col gap-8" role="list" aria-label="All videos">
            {VIDEO_ITEMS.map((v) => (
              <article
                key={v.title}
                className="bg-white rounded-lg border border-zinc-900/10 flex flex-col sm:flex-row overflow-hidden shadow-sm"
                role="listitem"
              >
                <div className="relative sm:w-72 shrink-0 aspect-video sm:aspect-auto sm:min-h-[12rem] bg-zinc-900">
                  <img
                    className="w-full h-full object-cover min-h-[12rem] sm:min-h-0"
                    src={v.poster}
                    alt={v.alt}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <button
                      type="button"
                      className="video-watch-trigger w-16 h-16 rounded-full bg-primary-container text-on-primary-fixed flex items-center justify-center hover:brightness-110 transition-all"
                      aria-label={`Watch ${v.title}`}
                      onClick={(e) => openVideo(v, e.currentTarget)}
                    >
                      <span className="material-symbols-outlined text-4xl ml-1">play_arrow</span>
                    </button>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center gap-4 flex-1">
                  <h3 className="font-h3 text-h3">{v.title}</h3>
                  <p className="font-body-md text-secondary">{v.description}</p>
                  <p className="text-secondary text-sm">Length: {v.duration}</p>
                  <button
                    type="button"
                    className="video-watch-trigger self-start inline-flex items-center gap-2 bg-primary-container text-on-primary-fixed font-bold px-6 py-3 rounded-lg hover:brightness-110 transition-all"
                    onClick={(e) => openVideo(v, e.currentTarget)}
                  >
                    <span className="material-symbols-outlined">play_circle</span> Watch Video
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div
        id="video-modal"
        className={`fixed inset-0 z-[100] ${modalVideo ? '' : 'hidden'}`}
        aria-hidden={modalVideo ? 'false' : 'true'}
      >
        <div id="video-modal-overlay" className="absolute inset-0 bg-black/60" onClick={closeVideo} />
        <div className="relative z-10 flex min-h-full items-center justify-center p-4 pointer-events-none">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-2xl border border-zinc-200 pointer-events-auto"
          >
            <button
              ref={videoCloseRef}
              type="button"
              id="video-modal-close"
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black transition-colors"
              aria-label="Close"
              onClick={closeVideo}
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            {modalVideo ? (
              <>
                <div className="relative aspect-video bg-zinc-900 rounded-t-lg overflow-hidden">
                  <img
                    id="video-modal-poster"
                    className="w-full h-full object-cover"
                    src={modalVideo.poster}
                    alt={modalVideo.alt || modalVideo.title}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none">
                    <span className="material-symbols-outlined text-white text-6xl opacity-90">play_circle</span>
                  </div>
                </div>
                <div className="p-8">
                  <span
                    id="video-modal-duration"
                    className="inline-block bg-black text-white text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded"
                  >
                    {modalVideo.duration ? `Length: ${modalVideo.duration}` : ''}
                  </span>
                  <h2 id="video-modal-title" className="font-h3 text-h3 mt-5 mb-4 text-on-surface">
                    {modalVideo.title}
                  </h2>
                  <p id="video-modal-description" className="text-xl leading-relaxed text-secondary">
                    {modalVideo.description}
                  </p>
                  <p className="mt-6 text-secondary text-sm">Video playback will be available when this recording is linked.</p>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
