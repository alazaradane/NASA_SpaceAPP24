import Link from 'next/link';

export const DemoBanner = () => (
  <div className="sticky top-0 z-50 bg-black px-4 py-2 text-center text-lg font-semibold text-gray-100 [&_a]:text-indigo-500 [&_a:hover]:text-primary">
    Ultimatum 369 -
    {' '}
    <Link href="/news-letter">More Comming Soon🚀...</Link>
  </div>
);
