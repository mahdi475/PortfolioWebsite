
import React, { useContext, useState } from 'react';
import { LanguageContext } from '../App';

const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mahdi-mousavi-802690229/' },
  { name: 'GitHub', url: 'https://github.com/mahdi475' },
  { name: 'Instagram', url: 'https://www.instagram.com/mahdi.mouusavi4/' },
];

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

    try {
      const res = await fetch('https://formspree.io/f/xyzdwnkl', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setIsError(false);
        setMessage(t.contact.success || '');
        e.currentTarget.reset();
      } else {
        setIsError(true);
        setMessage(t.contact.error || '');
      }
    } catch (err) {
      setIsError(true);
      setMessage(t.contact.error || '');
    } finally {
      setIsSending(false);
      setTimeout(() => setMessage(''), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-black dark:text-white transition-colors duration-500">{t.contact.title}</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-black dark:text-white uppercase tracking-wider text-sm mb-1 transition-colors duration-500">{t.contact.call}</h3>
                <p className="text-blue-700 dark:text-blue-400 font-medium transition-colors duration-500">+46760458391</p>
              </div>
              <div>
                <h3 className="font-bold text-black dark:text-white uppercase tracking-wider text-sm mb-1 transition-colors duration-500">{t.contact.write}</h3>
                <p className="text-blue-700 dark:text-blue-400 font-medium transition-colors duration-500">mahdimousavi8909@icloud.com</p>
              </div>
              <div>
                <h3 className="font-bold text-black dark:text-white uppercase tracking-wider text-sm mb-1 transition-colors duration-500">{t.contact.follow}</h3>
                <div className="flex space-x-4 pt-2">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
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
              className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
            />
            <input 
              type="email" 
              name="email"
              required
              placeholder={t.contact.email} 
              className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
            />
            <textarea 
              rows={4} 
              name="message"
              required
              placeholder={t.contact.message} 
              className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none dark:text-white"
            ></textarea>
            <button
              disabled={isSending}
              className="w-full py-4 bg-slate-900 dark:bg-blue-600 text-white font-bold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60"
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
