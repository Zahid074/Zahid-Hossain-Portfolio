import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact({ contact }) {
  if (!contact?.email && !contact?.message) return null;

  return (
    <section id="contact" className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-extrabold underline-accent">
          <span className="gradient-text">{contact.heading}</span>
        </h2>

        <div data-reveal className="section-card mt-12 rounded-xl2 border-l-4 border-[rgb(var(--accent-rgb))] p-8 shadow-sm sm:p-10">
          {contact.message && <p className="text-soft leading-relaxed">{contact.message}</p>}

          <div className="mt-8 flex flex-col items-center gap-4">
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="btn-primary flex w-full max-w-sm items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold sm:w-auto"
              >
                <FaEnvelope /> {contact.email}
              </a>
            )}
            {contact.whatsapp && (
              <a
                href={`https://wa.me/${contact.whatsapp.replace(/[^\d]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="flex w-full max-w-sm items-center justify-center gap-2 rounded-lg border-1.5 border-green-600 px-5 py-3 text-sm font-semibold text-green-600 transition hover:bg-green-600/10 sm:w-auto"
              >
                <FaWhatsapp /> {contact.whatsapp}
              </a>
            )}
          </div>

          {contact.location && (
            <p className="mt-6 flex items-center justify-center gap-2 text-sm text-soft">
              <FaMapMarkerAlt className="text-[rgb(var(--accent-rgb))]" /> {contact.location}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
