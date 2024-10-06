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
  const [orbitalDistance, setOrbitalDistance] = useState('all')
  const [planetRadius, setPlanetRadius] = useState('all')
  const [planetMass, setPlanetMass] = useState('all')
  const [equilibriumTemp, setEquilibriumTemp] = useState('all')

  const filteredExoplanets = exoplanets.filter((planet) => {
    const matchesDiscoveryYear = discoveryYear === 'all' || planet.disc_year === parseInt(discoveryYear);
    const matchesSearchTerm = planet.pl_name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesOrbitalDistance = orbitalDistance ==='all'|| planet.pl_orbsmax <= parseFloat(orbitalDistance) ;
    const matchesPlanetRadius = planetRadius === 'all' || planet.pl_rade <= parseFloat(planetRadius) ;
    const matchesPlanetMass = planetMass === 'all' || planet.pl_bmasse <= parseFloat(planetMass);
    const matchesEquilibriumTemp = equilibriumTemp === 'all' || planet.pl_eqt <= parseFloat(equilibriumTemp);
    return matchesDiscoveryYear && matchesSearchTerm && matchesEquilibriumTemp && matchesOrbitalDistance && matchesPlanetRadius && matchesPlanetMass;
  });

  return (
    <>
      <div className="w-[30rem] my-5 flex gap-5 pl-[3rem]">
        <Input 
          placeholder="search by name..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
          className="py-2 px-3 w-[30rem]" 
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
        <Select onValueChange={setPlanetMass}>
          <SelectTrigger>
            <SelectValue placeholder="Planet Mass" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Mass</SelectItem>
            {Array.from(new Set(exoplanets.map((planet) => planet.pl_bmasse)))
              .filter((mass) => mass !== null && mass !== undefined) // Filter out null/undefined values
              .sort((a, b) => a - b) // Optional: Sort in numerical order
              .map((mass) => (
                <SelectItem key={mass} value={mass.toString()}>
                  {mass}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setOrbitalDistance}>
          <SelectTrigger>
            <SelectValue placeholder="Orbital Distance (AU)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Distances</SelectItem>
            {Array.from(new Set(exoplanets.map((planet) => planet.pl_orbsmax)))
              .filter((distance) => distance !== null)
              .sort((a, b) => a - b)
              .map((distance) => (
                <SelectItem key={distance} value={distance.toString()}>
                  {distance}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setPlanetRadius}>
          <SelectTrigger>
            <SelectValue placeholder="Planet Radius (Earth radii)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Radii</SelectItem>
            {Array.from(new Set(exoplanets.map((planet) => planet.pl_rade)))
              .filter((radius) => radius !== null)
              .sort((a, b) => a - b)
              .map((radius) => (
                <SelectItem key={radius} value={radius.toString()}>
                  {radius}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setEquilibriumTemp}>
          <SelectTrigger>
            <SelectValue placeholder="Equilibrium Temp (K)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Temperatures</SelectItem>
            {Array.from(new Set(exoplanets.map((planet) => planet.pl_eqt)))
              .filter((temp) => temp !== null)
              .sort((a, b) => a - b)
              .map((temp) => (
                <SelectItem key={temp} value={temp.toString()}>
                  {temp}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
        </div>


        
      

      <div className="flex flex-wrap gap-6 bg-black h-fit pl-[3rem]">
        {filteredExoplanets.map((planet) => (
          <ExoCard key={planet.pl_name} planet={planet} />
        ))}
      </div>
    </>
  );
};

export default ExoplanetFilter;
