import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import ScrollToTop from '../components/ScrollToTop.jsx';
import { submitToGoogleSheet, sheetFormTimestamp } from '../lib/sheetForm.js';

export default function Nominate() {
  const [status, setStatus] = useState({ hidden: true, message: '', isError: false });
  const [submitLabel, setSubmitLabel] = useState('Submit Nomination');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = 'Nominate – Seniors of Excellence NT';
  }, []);

  function showStatus(message, isError) {
    setStatus({ hidden: false, message, isError });
  }

  function fieldTrim(formData, name) {
    const v = formData.get(name);
    return v != null ? String(v).trim() : '';
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const fd = new FormData(form);
    const row = [
      sheetFormTimestamp(),
      fieldTrim(fd, 'nominationDate'),
      fieldTrim(fd, 'nomineeName'),
      fieldTrim(fd, 'nomineeDob'),
      fieldTrim(fd, 'nomineePhone'),
      fieldTrim(fd, 'nomineeAddress'),
      fieldTrim(fd, 'nomineePostcode'),
      fieldTrim(fd, 'nomineeEmail'),
      fieldTrim(fd, 'biography'),
      fieldTrim(fd, 'nominatorName'),
      fieldTrim(fd, 'nominatorEmail'),
      fieldTrim(fd, 'nominatorMobile'),
      fieldTrim(fd, 'nominatorPhone'),
      fieldTrim(fd, 'nominatorAddress'),
      fieldTrim(fd, 'seconderName'),
      fieldTrim(fd, 'seconderEmail'),
      fieldTrim(fd, 'seconderMobile'),
      fieldTrim(fd, 'seconderPhone'),
      fieldTrim(fd, 'seconderAddress'),
      fieldTrim(fd, 'seconderPostcode'),
    ];

    setSubmitting(true);
    setSubmitLabel('Submitting…');
    setStatus((s) => ({ ...s, hidden: true }));

    try {
      await submitToGoogleSheet('Nominations', row);
      form.reset();
      showStatus('Thank you — your nomination has been submitted successfully.', false);
      setSubmitLabel('Submitted');
      const top = form.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: 'smooth' });
      window.setTimeout(() => {
        setSubmitLabel('Submit Nomination');
        setSubmitting(false);
      }, 5000);
    } catch {
      showStatus('Something went wrong. Please contact seniorsofexcellencent@gmail.com for assistance.', true);
      setSubmitLabel('Submit Nomination');
      setSubmitting(false);
    }
  }

  const statusCls = status.hidden
    ? 'hidden text-sm font-semibold mb-6 rounded-lg px-4 py-3'
    : `text-sm font-semibold mb-6 rounded-lg px-4 py-3 ${status.isError ? 'bg-red-100 text-red-900 border border-red-200' : 'bg-green-100 text-green-900 border border-green-200'}`;

  return (
    <>
      <ScrollToTop />
      <Header variant="nominate" />
      <div className="pt-20 font-body-md bg-surface-container-low antialiased min-h-screen">
        <div className="bg-zinc-900 text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
            <span className="inline-block font-sans text-primary-container text-xs font-bold tracking-[0.15em] uppercase mb-4">
              2026 Awards Round
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Award Nomination Form</h1>
            <p className="text-zinc-400 text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
              Recognising exceptional voluntary contributions of Northern Territory seniors. Please read all instructions carefully before completing your nomination.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-white/10 border border-white/15 rounded-lg px-4 py-3">
                <span className="material-symbols-outlined text-primary-container text-lg">event</span>
                <div>
                  <p className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">Nominations Close</p>
                  <p className="text-white font-bold text-sm">COB 20th July 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 border border-white/15 rounded-lg px-4 py-3">
                <span
                  className="material-symbols-outlined text-primary-container text-lg"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  workspace_premium
                </span>
                <div>
                  <p className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">Seniors of Excellence NT Inc Awards 2026</p>
                  <p className="text-white font-bold text-sm">Sunday 31 August 2026 · 2:30 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
          <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 items-start">
            <aside className="w-full lg:w-[300px] xl:w-[320px] shrink-0 lg:sticky lg:top-24">
              <div className="bg-white border border-zinc-200 rounded-xl p-7 mb-6">
                <span className="material-symbols-outlined text-primary-container text-4xl mb-3 block" style={{ fontVariationSettings: "'FILL' 1" }}>
                  emoji_events
                </span>
                <h2 className="font-serif text-xl font-bold mb-3">About the Award</h2>
                <p className="text-secondary text-sm leading-relaxed">
                  Your nomination should be based on the significant{' '}
                  <strong className="text-on-surface">voluntary activities</strong> the nominee has undertaken within the NT community —
                  including service organisations, charities, welfare work, acts of valor or humanitarianism, across all years of their life.
                </p>
              </div>

              <div className="bg-zinc-900 text-white rounded-xl p-7 mb-6">
                <h2 className="font-serif text-base font-bold mb-5 text-primary-container uppercase tracking-wider text-xs">Principal Requirements</h2>
                <ul className="space-y-4">
                  {[
                    <>Nominee must be <strong className="text-white">65 years or older</strong> at time of nominations closing. Date of birth is mandatory.</>,
                    <>Nomination must be based on <strong className="text-white">voluntary work</strong> contributed to the NT community.</>,
                    <>
                      A <strong className="text-white">seconder is mandatory.</strong> Addresses, emails and phone numbers required.
                    </>,
                    <>
                      Attach any <strong className="text-white">supporting documents.</strong> The more detail provided, the easier it is to assess validity.
                    </>,
                  ].map((text, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed">
                      <span className="material-symbols-outlined text-primary-container text-base mt-0.5 shrink-0">check_circle</span>
                      <span className="text-zinc-300">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-zinc-200 rounded-xl p-7">
                <p className="font-sans text-xs font-bold uppercase tracking-wider text-secondary mb-5">Form Sections</p>
                <ol className="space-y-2 list-none p-0 m-0">
                  {[
                    ['#section-nominee', '01', 'Nominee Details', true],
                    ['#section-biography', '02', 'Community Biography', false],
                    ['#section-nominator', '03', 'Nominator Details', false],
                    ['#section-seconder', '04', 'Seconder Details', false],
                  ].map(([href, num, label, active]) => (
                    <li key={href} className="list-none">
                      <a
                        href={href}
                        className={`step-item flex items-center gap-4 no-underline rounded-lg px-2 py-2 -mx-2 text-left transition-colors hover:bg-surface-container/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 ${active ? 'active' : ''}`}
                      >
                        <span
                          className={`step-num w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center shrink-0 ${active ? 'bg-primary-container text-on-primary-fixed' : 'bg-surface-container text-secondary'}`}
                        >
                          {num}
                        </span>
                        <span className={`text-sm ${active ? 'font-semibold text-on-surface' : 'text-secondary'}`}>{label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            <div className="flex-1 min-w-0">
              <p className="text-sm text-secondary mb-4">
                Fields marked <span className="text-error font-bold">*</span> are required.
              </p>
              <p id="nomination-form-status" className={statusCls} role="status" aria-live="polite">
                {!status.hidden ? status.message : null}
              </p>

              <form id="nomination-form" className="space-y-6" noValidate onSubmit={handleSubmit}>
                <div id="section-nominee" className="scroll-mt-28 bg-white border border-zinc-200 rounded-xl overflow-hidden">
                  <div className="px-8 py-6 border-b border-zinc-100 flex items-center gap-5">
                    <span className="text-4xl font-serif font-bold text-primary-container/30 leading-none select-none">01</span>
                    <div>
                      <h2 className="font-serif text-2xl font-bold">Nominee Details</h2>
                      <p className="text-sm text-secondary mt-1">The person you are nominating for the award.</p>
                    </div>
                  </div>
                  <div className="px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                      <label className="block">
                        <span className="block text-xs font-bold uppercase tracking-widest text-secondary mb-1">
                          Date of this Nomination <span className="text-error">*</span>
                        </span>
                        <input className="field-input" type="date" name="nominationDate" required />
                      </label>
                      <label className="block">
                        <span className="block text-xs font-bold uppercase tracking-widest text-secondary mb-1">
                          Full Name of Person Nominated <span className="text-error">*</span>
                        </span>
                        <input className="field-input" type="text" name="nomineeName" placeholder="e.g. Margaret A. Thompson" required />
                      </label>
                      <label className="block">
                        <span className="block text-xs font-bold uppercase tracking-widest text-secondary mb-1">
                          Nominee&apos;s Date of Birth <span className="text-error">*</span>
                        </span>
                        <input className="field-input" type="date" name="nomineeDob" required />
                      </label>
                      <label className="block">
                        <span className="block text-xs font-bold uppercase tracking-widest text-secondary mb-1">Nominee&apos;s Mobile Phone</span>
                        <input className="field-input" type="tel" name="nomineePhone" placeholder="04XX XXX XXX" />
                      </label>
                      <label className="block md:col-span-2">
                        <span className="block text-xs font-bold uppercase tracking-widest text-secondary mb-1">Postal Address</span>
                        <input className="field-input" type="text" name="nomineeAddress" placeholder="Street address, suburb" />
                      </label>
                      <label className="block">
                        <span className="block text-xs font-bold uppercase tracking-widest text-secondary mb-1">Postal Code</span>
                        <input className="field-input" type="text" name="nomineePostcode" placeholder="0800" />
                      </label>
                      <label className="block">
                        <span className="block text-xs font-bold uppercase tracking-widest text-secondary mb-1">Email Address of Nominee</span>
                        <input className="field-input" type="email" name="nomineeEmail" placeholder="nominee@example.com" />
                      </label>
                    </div>
                  </div>
                </div>

                <div id="section-biography" className="scroll-mt-28 bg-white border border-zinc-200 rounded-xl overflow-hidden">
                  <div className="px-8 py-6 border-b border-zinc-100 flex items-center gap-5">
                    <span className="text-4xl font-serif font-bold text-primary-container/30 leading-none select-none">02</span>
                    <div>
                      <h2 className="font-serif text-2xl font-bold">Community Biography</h2>
                      <p className="text-sm text-secondary mt-1">The heart of your nomination — provide as much detail as possible.</p>
                    </div>
                  </div>
                  <div className="px-8 py-8 bg-surface-container-low/40">
                    <label className="block">
                      <span className="block text-xs font-bold uppercase tracking-widest text-secondary mb-1">
                        Biography of Nominee&apos;s Voluntary Work in the NT Community <span className="text-error">*</span>
                      </span>
                      <span className="block text-sm text-secondary mb-4 leading-relaxed">
                        Describe the voluntary work the nominee has contributed through the years of their life to the Northern Territory community in which they reside or have resided. Include approximate years and dates of activities.
                      </span>
                      <textarea
                        className="field-input"
                        name="biography"
                        rows={10}
                        placeholder={`Begin writing the biography here…\n\nExample: Since 1985, Margaret has volunteered at the Darwin Community Food Bank every Saturday morning, co-ordinating more than 200 volunteers over the years…`}
                        required
                      />
                    </label>
                    <p className="text-xs text-secondary mt-3">The more information you provide, the easier it is for us to determine the validity of your nomination.</p>
                  </div>
                </div>

                <div id="section-nominator" className="scroll-mt-28 bg-white border border-zinc-200 rounded-xl overflow-hidden">
                  <div className="px-8 py-6 border-b border-zinc-100 flex items-center gap-5">
                    <span className="text-4xl font-serif font-bold text-primary-container/30 leading-none select-none">03</span>
                    <div>
                      <h2 className="font-serif text-2xl font-bold">Nominator Details</h2>
                      <p className="text-sm text-secondary mt-1">Your contact information as the person submitting this nomination.</p>
                    </div>
                  </div>
                  <div className="px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                      <label className="block md:col-span-2">
                        <span className="block text-xs font-bold uppercase tracking-widest text-secondary mb-1">
                          Your Full Name <span className="text-error">*</span>
                        </span>
                        <input className="field-input" type="text" name="nominatorName" placeholder="e.g. John B. Smith" required />
                      </label>
                      <label className="block">
                        <span className="block text-xs font-bold uppercase tracking-widest text-secondary mb-1">
                          Email Address <span className="text-error">*</span>
                        </span>
                        <input className="field-input" type="email" name="nominatorEmail" placeholder="you@example.com" required />
                      </label>
                      <label className="block">
                        <span className="block text-xs font-bold uppercase tracking-widest text-secondary mb-1">Mobile Phone Number</span>
                        <input className="field-input" type="tel" name="nominatorMobile" placeholder="04XX XXX XXX" />
                      </label>
                      <label className="block">
                        <span className="block text-xs font-bold uppercase tracking-widest text-secondary mb-1">Telephone Number</span>
                        <input className="field-input" type="tel" name="nominatorPhone" placeholder="(08) XXXX XXXX" />
                      </label>
                      <label className="block">
                        <span className="block text-xs font-bold uppercase tracking-widest text-secondary mb-1">Postal Address</span>
                        <input className="field-input" type="text" name="nominatorAddress" placeholder="Street address, suburb" />
                      </label>
                    </div>
                  </div>
                </div>

                <div id="section-seconder" className="scroll-mt-28 bg-white border border-zinc-200 rounded-xl overflow-hidden">
                  <div className="px-8 py-6 border-b border-zinc-100 flex items-center gap-5">
                    <span className="text-4xl font-serif font-bold text-primary-container/30 leading-none select-none">04</span>
                    <div>
                      <h2 className="font-serif text-2xl font-bold">Seconder Details</h2>
                      <p className="text-sm text-secondary mt-1">A seconder to your nomination is mandatory.</p>
                    </div>
                  </div>
                  <div className="px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                      <label className="block md:col-span-2">
                        <span className="block text-xs font-bold uppercase tracking-widest text-secondary mb-1">
                          Full Name of Seconder <span className="text-error">*</span>
                        </span>
                        <input className="field-input" type="text" name="seconderName" placeholder="e.g. Helen R. Davies" required />
                      </label>
                      <label className="block">
                        <span className="block text-xs font-bold uppercase tracking-widest text-secondary mb-1">Email Address</span>
                        <input className="field-input" type="email" name="seconderEmail" placeholder="seconder@example.com" />
                      </label>
                      <label className="block">
                        <span className="block text-xs font-bold uppercase tracking-widest text-secondary mb-1">Mobile Number</span>
                        <input className="field-input" type="tel" name="seconderMobile" placeholder="04XX XXX XXX" />
                      </label>
                      <label className="block">
                        <span className="block text-xs font-bold uppercase tracking-widest text-secondary mb-1">Telephone Number</span>
                        <input className="field-input" type="tel" name="seconderPhone" placeholder="(08) XXXX XXXX" />
                      </label>
                      <label className="block">
                        <span className="block text-xs font-bold uppercase tracking-widest text-secondary mb-1">Postal Address</span>
                        <input className="field-input" type="text" name="seconderAddress" placeholder="Street address, suburb" />
                      </label>
                      <label className="block">
                        <span className="block text-xs font-bold uppercase tracking-widest text-secondary mb-1">Post Code</span>
                        <input className="field-input" type="text" name="seconderPostcode" placeholder="0800" />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-zinc-200 rounded-xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-on-surface">Ready to submit?</p>
                    <p className="text-xs text-secondary mt-1">Review your details, then submit your nomination below.</p>
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="shrink-0 bg-primary-container text-on-primary-fixed font-bold text-sm uppercase tracking-widest px-10 py-4 rounded-lg hover:brightness-110 active:opacity-80 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitLabel}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>

        <footer className="bg-zinc-900 border-t border-white/5 py-10 mt-8">
          <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
            <span className="font-serif font-bold text-white">Seniors of Excellence NT</span>
            <span>© 2026 Seniors of Excellence NT. Honoring Wisdom and Vitality.</span>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <Link to="/contact" className="text-zinc-400 hover:text-white transition-colors">
                Contact Us
              </Link>
              <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Return to main site
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
