// src/app/[locale]/(auth)/chat/exo/page.tsx (Server component)

import ExoplanetFilter from '@/components/ExoplanetFilter';
import { pacifico } from '@/components/Home/Land';

// Fetching data directly in the Server Component
const fetchExoplanets = async () => {
  const res = await fetch(
    'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=SELECT+pl_name,hostname,pl_orbsmax,pl_rade,pl_bmasse,pl_eqt,disc_year+FROM+pscomppars+WHERE+pl_name+IS+NOT+NULL&format=json'
  );
  if (!res.ok) {
    throw new Error('Failed to fetch exoplanets');
  }
  return res.json();
};

const ExoplanetsPage = async () => {
  // Fetch exoplanets on the server-side
  const exoplanets = await fetchExoplanets();

  return (
    <section className="bg-black text-primary h-screen">
      <div className={`${pacifico.className} flex flex-col pt-[3rem] ml-[3rem] mb-[3rem] left-6`}>
        <p className="text-5xl font-bold">
          Let's Chat with <span className={`purple-gradient`}>Exoplanets</span>
        </p>
        <p className="text-lg font-bold mt-4">
          Exoplanets hold some of the greatest mysteries of the universe
        </p>
      </div>
      
      {/* Pass fetched data to the client component */}
      <ExoplanetFilter exoplanets={exoplanets} />
    </section>
  );
};

export default ExoplanetsPage;
