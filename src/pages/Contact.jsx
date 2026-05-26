import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { submitToGoogleSheet, sheetFormTimestamp } from '../lib/sheetForm.js';

export default function Contact() {
  const [status, setStatus] = useState({ hidden: true, message: '', isError: false });
  const [submitLabel, setSubmitLabel] = useState('Submit');
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    document.title = 'Contact Us – Seniors of Excellence NT';
  }, []);

  function showStatus(message, isError) {
    setStatus({ hidden: false, message, isError });
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
      String(fd.get('name') || '').trim(),
      String(fd.get('email') || '').trim(),
      String(fd.get('subject') || '').trim(),
      String(fd.get('message') || '').trim(),
    ];

    setDisabled(true);
    setSubmitLabel('Sending…');
    setStatus((s) => ({ ...s, hidden: true }));

    try {
      await submitToGoogleSheet('Contact', row);
      form.reset();
      showStatus('Thank you — your message has been sent. We will be in touch soon.', false);
      setSubmitLabel('Sent');
      window.setTimeout(() => {
        setSubmitLabel('Submit');
        setDisabled(false);
      }, 4000);
    } catch {
      showStatus(
        'Something went wrong. Please email seniorsofexcellencent@gmail.com directly.',
        true
      );
      setSubmitLabel('Submit');
      setDisabled(false);
    }
  }

  const statusClasses = status.hidden
    ? 'hidden'
    : `text-sm font-semibold mb-6 rounded-lg px-4 py-3 ${
        status.isError ? 'bg-red-100 text-red-900 border border-red-200' : 'bg-green-100 text-green-900 border border-green-200'
      }`;

  return (
    <>
      <PageHero eyebrow="CONTACT US" title="We'd Love to Hear from You">
        <p className="font-body-lg text-body-lg text-zinc-300 leading-relaxed max-w-2xl">
          Your feedback is invaluable to us. Whether you have thoughts on our Awards program, information to share,
          or simply want to join our mailing list, newsletter, or notification list, we want to hear from you.
        </p>
      </PageHero>

      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-h2 text-h2 mb-6">Get in Touch</h2>
              <p className="font-body-md text-secondary leading-relaxed mb-10">
                Please fill out the form or reach us directly using the details below. We welcome your questions,
                feedback, and interest in staying connected with Seniors of Excellence NT.
              </p>
              <ul className="space-y-8 list-none p-0 m-0">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-container text-3xl shrink-0" aria-hidden="true">
                    mail
                  </span>
                  <div>
                    <h3 className="font-h3 text-h3 mb-1">Email</h3>
                    <a
                      className="text-primary font-medium hover:underline"
                      href="mailto:seniorsofexcellencent@gmail.com"
                    >
                      seniorsofexcellencent@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-container text-3xl shrink-0" aria-hidden="true">
                    location_on
                  </span>
                  <div>
                    <h3 className="font-h3 text-h3 mb-1">Postal Address</h3>
                    <p className="text-secondary leading-relaxed">
                      P.O. Box 40561
                      <br />
                      Casuarina, NT 0811
                    </p>
                  </div>
                </li>
              </ul>
              <p className="mt-10 font-body-md text-secondary">
                <Link
                  className="text-primary font-bold hover:underline inline-flex items-center gap-1"
                  to="/#sponsors"
                >
                  View our sponsors
                  <span className="material-symbols-outlined text-base" aria-hidden="true">
                    arrow_forward
                  </span>
                </Link>
              </p>
            </div>
            <div className="bg-white rounded-lg border border-zinc-900/10 p-8 shadow-sm">
              <h2 className="font-h2 text-h2 mb-2">Send a Message</h2>
              <p className="text-secondary text-sm mb-4">Fill out the form below and we will get back to you as soon as we can.</p>
              <p id="contact-form-status" className={statusClasses} role="status" aria-live="polite">
                {status.hidden ? null : status.message}
              </p>
              <form id="contact-form" className="space-y-6" noValidate onSubmit={handleSubmit}>
                <label className="block">
                  <span className="font-label-caps text-xs uppercase tracking-widest text-secondary mb-2 block">
                    Your Name <span className="text-primary">*</span>
                  </span>
                  <input
                    className="contact-field"
                    type="text"
                    name="name"
                    placeholder="Full name"
                    required
                    autoComplete="name"
                  />
                </label>
                <label className="block">
                  <span className="font-label-caps text-xs uppercase tracking-widest text-secondary mb-2 block">
                    Email Address <span className="text-primary">*</span>
                  </span>
                  <input
                    className="contact-field"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                  />
                </label>
                <label className="block">
                  <span className="font-label-caps text-xs uppercase tracking-widest text-secondary mb-2 block">
                    Subject
                  </span>
                  <select className="contact-field" name="subject">
                    <option value="">Select a topic</option>
                    <option value="Awards program">Awards program</option>
                    <option value="Mailing list / newsletter">Mailing list / newsletter</option>
                    <option value="General enquiry">General enquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
                <label className="block">
                  <span className="font-label-caps text-xs uppercase tracking-widest text-secondary mb-2 block">
                    Message <span className="text-primary">*</span>
                  </span>
                  <textarea className="contact-field" name="message" rows={6} placeholder="Your message…" required />
                </label>
                <button
                  type="submit"
                  disabled={disabled}
                  className="w-full sm:w-auto bg-primary-container text-on-primary-fixed font-label-caps px-8 py-4 rounded-lg font-bold hover:brightness-110 active:opacity-80 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitLabel}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
