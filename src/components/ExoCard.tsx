import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import Link from 'next/link';
import { Button } from './ui/button';

const ExoCard = ({ planet }:any) => {
  const { pl_name, hostname, pl_orbsmax, pl_rade, pl_bmasse, pl_eqt, disc_year } = planet;

  return (
    <div className="text-primary bg-black">
      <Card className="bg-black text-primary w-[20rem]">
        <CardHeader>
          <CardTitle>{pl_name}</CardTitle>
          <CardDescription>Host Star: {hostname}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            <strong >Orbital Distance:</strong> {pl_orbsmax ? `${pl_orbsmax} AU` : 'N/A'}
          </p>
          <p>
            <strong>Planet Radius:</strong> {pl_rade ? `${pl_rade} Earth radii` : 'N/A'}
          </p>
          <p>
            <strong>Planet Mass:</strong> {pl_bmasse ? `${pl_bmasse} Earth masses` : 'N/A'}
          </p>
          <p>
            <strong>Equilibrium Temp:</strong> {pl_eqt ? `${pl_eqt} K` : 'N/A'}
          </p>
          <p>
            <strong>Discovery Year:</strong> {disc_year}
          </p>
        </CardContent>
        <CardFooter>
          <Link href={`/chat/exo/${pl_name}`}>
            <Button className="bg-purple text-primary">Start Chat</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ExoCard;
