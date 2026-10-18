import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const Experience: React.FC = () => {
  const { lang, t } = useContext(LanguageContext);

  return (
    <section id="experience">
      <h2>{t.experience}</h2>

      {lang === 'en' ? (
        <>
          <h3>
            IT Application Manager, Crew 4 You Sweden AB <span className="year">(March–July 2026)</span>
          </h3>
          <p>
            Crew 4 You is a staffing agency with more than 1,600 employees. I set up and managed Google Business
            Profiles for their offices, took care of the company website and helped plan a new internal app together
            with the team.
          </p>

          <h3>
            Freelance web developer <span className="year">(since March 2026)</span>
          </h3>
          <p>I build websites, landing pages and small AI-assisted prototypes for small businesses and other clients.</p>

          <p>
            Next to my studies I have also worked part-time for five years, for example as an event technician, a youth
            boxing coach and in elderly care.
          </p>
        </>
      ) : (
        <>
          <h3>
            IT Application Manager, Crew 4 You Sweden AB <span className="year">(mars–juli 2026)</span>
          </h3>
          <p>
            Crew 4 You är ett bemanningsföretag med över 1 600 anställda. Jag satte upp och skötte Google
            Business-profiler för deras kontor, tog hand om företagets webbplats och var med och planerade en ny intern
            app tillsammans med teamet.
          </p>

          <h3>
            Frilansande webbutvecklare <span className="year">(sedan mars 2026)</span>
          </h3>
          <p>Jag bygger webbplatser, landningssidor och små AI-stödda prototyper åt småföretag och andra kunder.</p>

          <p>
            Vid sidan av studierna har jag också jobbat extra i fem år, till exempel som eventtekniker, boxningstränare
            för ungdomar och inom äldreomsorgen.
          </p>
        </>
      )}
    </section>
  );
};

export default Experience;
