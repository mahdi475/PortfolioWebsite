import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const LinkedInPost: React.FC = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section id="linkedin-post" className="scroll-mt-24 px-6 py-16 transition-colors duration-500">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
              Outreach
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
              {t.linkedinPost.title}
            </h2>
            {t.linkedinPost.intro && (
              <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                {t.linkedinPost.intro}
              </p>
            )}
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <img
                src="/linkedin-madrid-post.png"
                alt="LinkedIn post visual: From Sweden to Madrid"
                className="w-full object-cover"
              />
            </div>
          </div>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950 md:p-7">
            <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-relaxed text-slate-800 dark:text-slate-200">
              {t.linkedinPost.body}
            </pre>
          </article>
        </div>
      </div>
    </section>
  );
};

export default LinkedInPost;
