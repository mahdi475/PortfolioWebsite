import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { Language } from '../types';
import ExternalLink from './ExternalLink';

interface Project {
  id: string;
  title: Record<Language, string>;
  year: Record<Language, string>;
  image?: {
    src: string;
    width: number;
    height: number;
    alt: Record<Language, string>;
  };
  body: Record<Language, React.ReactNode>;
}

const projects: Project[] = [
  {
    id: 'chocolata',
    title: { en: 'Chocolata', sv: 'Chocolata' },
    year: { en: '2025–2026', sv: '2025–2026' },
    image: {
      src: '/oompaloompa2.png',
      width: 2795,
      height: 1524,
      alt: {
        en: 'The admin page in Chocolata, with the number of users, products and orders',
        sv: 'Adminsidan i Chocolata, med antal användare, produkter och ordrar',
      },
    },
    body: {
      en: (
        <>
          <p>
            A marketplace for chocolate that I built together with Firat Kaya. Buyers can browse and filter the
            catalog. Sellers apply to get verified and then manage their own products. An admin approves new sellers
            and keeps track of orders.
          </p>
          <p>
            The frontend is React and TypeScript. Supabase handles login, the PostgreSQL database and file uploads,
            and the main user flows are tested with Playwright.
          </p>
          <p>
            <ExternalLink href="https://chocolata-mvp-ksrb.vercel.app/catalog">Try the live catalog</ExternalLink> or{' '}
            <ExternalLink href="https://github.com/mahdi475/ChocolataMVP">read the code on GitHub</ExternalLink>.
          </p>
        </>
      ),
      sv: (
        <>
          <p>
            En marknadsplats för choklad som jag byggt tillsammans med Firat Kaya. Köpare kan bläddra och filtrera i
            katalogen. Säljare ansöker om att bli verifierade och sköter sedan sina egna produkter. En admin godkänner
            nya säljare och har koll på ordrarna.
          </p>
          <p>
            Frontend är byggd med React och TypeScript. Supabase sköter inloggning, PostgreSQL-databasen och
            filuppladdning, och de viktigaste flödena testas med Playwright.
          </p>
          <p>
            <ExternalLink href="https://chocolata-mvp-ksrb.vercel.app/catalog">Testa katalogen live</ExternalLink> eller{' '}
            <ExternalLink href="https://github.com/mahdi475/ChocolataMVP">läs koden på GitHub</ExternalLink>.
          </p>
        </>
      ),
    },
  },
  {
    id: 'job-mail-bot',
    title: { en: 'Telegram Job Mail Bot', sv: 'Telegram Job Mail Bot' },
    year: { en: '2026', sv: '2026' },
    body: {
      en: (
        <>
          <p>
            During my internship search I got around 100 emails a day, and going through all of them by hand took too
            long. So I wrote a Python bot that runs in the cloud twice a day. It reads my new emails, uses the Gemini
            API to pick out the important ones, like interview invitations, and sends those to my phone on Telegram.
          </p>
          <p>The code is in a private repository, but I'm happy to show it.</p>
        </>
      ),
      sv: (
        <>
          <p>
            Under min praktiksökning fick jag runt 100 mejl om dagen, och det tog för lång tid att gå igenom alla för
            hand. Så jag skrev en Python-bot som körs i molnet två gånger om dagen. Den läser mina nya mejl, använder
            Gemini API för att plocka ut de viktiga, till exempel intervjuinbjudningar, och skickar dem till min telefon
            via Telegram.
          </p>
          <p>Koden ligger i ett privat repo, men jag visar den gärna.</p>
        </>
      ),
    },
  },
  {
    id: 'fuel-efficiency',
    title: {
      en: 'Predicting fuel efficiency with machine learning',
      sv: 'Förutsäga bränsleeffektivitet med maskininlärning',
    },
    year: { en: '2025', sv: '2025' },
    body: {
      en: (
        <>
          <p>
            A project in the course AI and Machine Learning (TAM400) at University West, done together with Firat
            Kaya. We used the UCI Auto MPG dataset to predict how many miles per gallon a car gets from things like
            weight, horsepower and model year.
          </p>
          <p>
            We cleaned the data, compared four models and ended up with a random forest. On the test set it got an MAE
            of 1.58, an RMSE of 2.16 and an R² of 0.91. We used Python, pandas, scikit-learn and Jupyter.
          </p>
          <p>
            <ExternalLink href="https://github.com/mahdi475/Mahdi-Firat-vehical-efficiency-ai-model">
              Code and notebook on GitHub
            </ExternalLink>
            . My lab work from the course is in{' '}
            <ExternalLink href="https://github.com/mahdi475/ml-lab-course">another repository</ExternalLink>.
          </p>
        </>
      ),
      sv: (
        <>
          <p>
            Ett projekt i kursen AI och maskininlärning (TAM400) på Högskolan Väst, gjort tillsammans med Firat Kaya. Vi
            använde datasetet UCI Auto MPG för att förutsäga hur långt en bil går per gallon bensin utifrån till exempel
            vikt, hästkrafter och årsmodell.
          </p>
          <p>
            Vi rensade datan, jämförde fyra modeller och landade i en random forest. På testdatan fick den MAE 1,58, RMSE
            2,16 och R² 0,91. Vi använde Python, pandas, scikit-learn och Jupyter.
          </p>
          <p>
            <ExternalLink href="https://github.com/mahdi475/Mahdi-Firat-vehical-efficiency-ai-model">
              Kod och notebook på GitHub
            </ExternalLink>
            . Mina labbar från kursen finns i{' '}
            <ExternalLink href="https://github.com/mahdi475/ml-lab-course">ett eget repo</ExternalLink>.
          </p>
        </>
      ),
    },
  },
  {
    id: 'personal-server',
    title: { en: 'My own Linux server', sv: 'Egen Linux-server' },
    year: { en: '2026, ongoing', sv: '2026, pågående' },
    body: {
      en: (
        <>
          <p>
            To practice what I study in network technology, I'm setting up my own server. It runs Ubuntu Server in a
            virtual machine, with SSH, a UFW firewall and Nginx as a reverse proxy in front of a small FastAPI backend.
            I write down every step in the repository.
          </p>
          <p>
            Next I want to add PostgreSQL, Docker, HTTPS and CI/CD.{' '}
            <ExternalLink href="https://github.com/mahdi475/Personal-server">Repository on GitHub</ExternalLink>.
          </p>
        </>
      ),
      sv: (
        <>
          <p>
            För att öva på det jag läser inom nätverksteknik sätter jag upp en egen server. Den kör Ubuntu Server i en
            virtuell maskin, med SSH, UFW-brandvägg och Nginx som reverse proxy framför en liten FastAPI-backend. Jag
            skriver ner varje steg i repot.
          </p>
          <p>
            Nästa steg är PostgreSQL, Docker, HTTPS och CI/CD.{' '}
            <ExternalLink href="https://github.com/mahdi475/Personal-server">Repot på GitHub</ExternalLink>.
          </p>
        </>
      ),
    },
  },
  {
    id: 'uganda-football',
    title: { en: 'Website for a football academy in Uganda', sv: 'Webbplats för en fotbollsakademi i Uganda' },
    year: { en: '2026', sv: '2026' },
    body: {
      en: (
        <>
          <p>
            A free website for a youth football academy in Uganda that needed a way to reach people who could support
            them. I built it with Lovable and later added to it with Codex. The site has helped the club get donations.
          </p>
          <p>
            <ExternalLink href="https://ugandafootballacademy.lovable.app/">See the website</ExternalLink>.
          </p>
        </>
      ),
      sv: (
        <>
          <p>
            En gratis webbplats för en fotbollsakademi för ungdomar i Uganda som behövde nå ut till folk som kunde
            stötta dem. Jag byggde den med Lovable och byggde senare vidare med Codex. Sidan har hjälpt klubben att få
            in donationer.
          </p>
          <p>
            <ExternalLink href="https://ugandafootballacademy.lovable.app/">Se webbplatsen</ExternalLink>.
          </p>
        </>
      ),
    },
  },
];

const Projects: React.FC = () => {
  const { lang, t } = useContext(LanguageContext);

  return (
    <section id="projects">
      <h2>{t.projects}</h2>
      {projects.map((project) => (
        <article key={project.id}>
          <h3>
            {project.title[lang]} <span className="year">({project.year[lang]})</span>
          </h3>
          {project.image && (
            <img
              className="screenshot"
              src={project.image.src}
              width={project.image.width}
              height={project.image.height}
              alt={project.image.alt[lang]}
              loading="lazy"
            />
          )}
          {project.body[lang]}
        </article>
      ))}
    </section>
  );
};

export default Projects;
