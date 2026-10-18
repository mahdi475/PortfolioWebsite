import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const About: React.FC = () => {
  const { lang, t } = useContext(LanguageContext);

  return (
    <section id="about" className="scroll-mt-20 px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl space-y-4 *:max-w-3xl leading-relaxed text-slate-700 dark:text-slate-300">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {t.about}
        </h2>

        {lang === 'en' ? (
          <>
            <p>
              My program at University West focuses on programming and network technology. Next to the courses I like to
              build my own projects, like the ones above.
            </p>
            <p>
              I speak Swedish, English and Persian, Norwegian quite well and some Spanish. I have the Cisco CCNA1
              certificate (Introduction to Networks).
            </p>
            <p>Outside of tech I play football and chess and go to the gym.</p>
          </>
        ) : (
          <>
            <p>
              Min utbildning på Högskolan Väst har inriktning mot programmering och nätverksteknik. Vid sidan av
              kurserna bygger jag gärna egna projekt, som de ovan.
            </p>
            <p>
              Jag pratar svenska, engelska och persiska, ganska bra norska och lite spanska. Jag har Cisco-certifikatet
              CCNA1 (Introduction to Networks).
            </p>
            <p>Utanför tekniken spelar jag fotboll och schack och tränar på gym.</p>
          </>
        )}
      </div>
    </section>
  );
};

export default About;
