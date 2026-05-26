export default function PageHero({ eyebrow, title, children }) {
  return (
    <section className="bg-zinc-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        {eyebrow ? (
          <span className="inline-block text-primary-container font-label-caps mb-4 tracking-widest text-xs">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="font-h1 text-h1 mb-6 max-w-3xl">{title}</h1>
        {children}
      </div>
    </section>
  );
}
