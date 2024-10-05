// src/components/ExoplanetFilter.tsx (Client component)
'use client'; // Make this a Client Component

import { useState } from 'react';
import ExoCard from '@/components/ExoCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ExoplanetFilter = ({ exoplanets }: { exoplanets: any[] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [discoveryYear, setDiscoveryYear] = useState('all');

  const filteredExoplanets = exoplanets.filter((planet) => {
    const matchesDiscoveryYear = discoveryYear === 'all' || planet.disc_year === parseInt(discoveryYear);
    const matchesSearchTerm = planet.pl_name.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesDiscoveryYear && matchesSearchTerm;
  });

  return (
    <>
      <div className="w-[30rem] my-5 flex gap-5">
        <Input 
          placeholder="search by name..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
          className="py-2 px-3" 
        />
        <Select onValueChange={setDiscoveryYear}>
          <SelectTrigger>
            <SelectValue placeholder="Discovery Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Years</SelectItem>
            {Array.from(new Set(exoplanets.map((planet) => planet.disc_year)))
              .sort()
              .map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
        <Button className="bg-purple text-primary">Go 🚀</Button>
      </div>

      <div className="flex flex-wrap gap-6 bg-black h-screen">
        {filteredExoplanets.map((planet) => (
          <ExoCard key={planet.pl_name} planet={planet} />
        ))}
      </div>
    </>
  );
};

export default ExoplanetFilter;
