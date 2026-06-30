
import React, { useContext, useState } from 'react';
import { LanguageContext } from '../App';

const socials = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/mahdi-mosavi-802690229' },
  { name: 'GitHub', url: 'https://github.com/mahdi475' },
];

const contactEmail = 'mahdi.mosavi.work@gmail.com';

const Contact: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const [message, setMessage] = useState<string>('');
  const [isError, setIsError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setMessage('');

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const formMessage = String(formData.get('message') || '').trim();

    const subject = encodeURIComponent(`Portfolio contact from ${name || 'website visitor'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${formMessage}`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setIsError(false);
    setMessage(t.contact.success || '');
    setIsSending(false);
    setTimeout(() => setMessage(''), 5000);
  };

  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24 transition-colors duration-500">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-950 dark:text-white transition-colors duration-500">{t.contact.title}</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-slate-950 dark:text-white uppercase tracking-wider text-sm mb-1 transition-colors duration-500">{t.contact.call}</h3>
                <p className="text-blue-700 dark:text-blue-300 font-medium transition-colors duration-500">+46760458391</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-950 dark:text-white uppercase tracking-wider text-sm mb-1 transition-colors duration-500">{t.contact.write}</h3>
                <p className="break-all text-blue-700 dark:text-blue-300 font-medium transition-colors duration-500">{contactEmail}</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-950 dark:text-white uppercase tracking-wider text-sm mb-1 transition-colors duration-500">{t.contact.follow}</h3>
                <div className="flex space-x-4 pt-2">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg bg-slate-100 px-3 py-2 text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-300"
                    >
                      <span className="text-sm font-semibold">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              required
              placeholder={t.contact.name} 
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition-all placeholder:text-slate-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
            />
            <input 
              type="email" 
              name="email"
              required
              placeholder={t.contact.email} 
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition-all placeholder:text-slate-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
            />
            <textarea 
              rows={4} 
              name="message"
              required
              placeholder={t.contact.message} 
              className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition-all placeholder:text-slate-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
            ></textarea>
            <button
              disabled={isSending}
              className="w-full rounded-xl bg-blue-600 py-4 font-bold text-white transition-colors hover:bg-blue-700 disabled:opacity-60"
            >
              {isSending ? t.contact.sending : t.contact.send}
            </button>

            {message && (
              <div className={`text-sm font-semibold ${isError ? 'text-red-500' : 'text-emerald-500'}`}>
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
