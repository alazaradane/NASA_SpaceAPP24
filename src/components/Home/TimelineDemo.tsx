import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { astro, astronomer, bubble, community, glassastro, llm, mtele, neon, nept, saturn, teledark, telescope, uranus } from "@/public/assets/images";
import { Button } from "../ui/button";
import Link from "next/link";
import ChatExo1 from "../rive/chatexo1";
import Robocat from "../rive/robocat";
import { pacifico } from "./Land";

export function TimelineDemo() {
  const data = [
    {
      title: "Chat with Exoplanets",
      content: (
        <div className="bg-black">
          <div className=" flex flex-col ap-3">
            <p className="text-primary dark:text-neutral-200 text-md font-semibold mb-8">
                Connect with symbolic exoplanets, ask questions, and uncover their unique stories—bringing the wonders of distant worlds to life through interactive conversations         
            </p>
            <Link href={'/chat/exo'}>
              <Button className="w-[10rem] bg-purple text-primary">Chat Exoplanets</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex gap-3 items-center">
              <p className={`${pacifico.className} text-6xl font-bold`}>To the <span  className="purple-gradient">Moon.</span>🌙 and Back!</p>
              <ChatExo1/>
            </div>
            <div className="flex gap-3 items-center">
             <Robocat/>
             <p className={`${pacifico.className} text-6xl font-bold`}>Enjoy the <span  className="purple-gradient">Science.</span></p>
            </div>
            
          </div>
        </div>
      ),
    },
    {
      title: "View the Universe in Real-Time ",
      content: (
        <div>
          <p className="text-primary dark:text-neutral-200 text-md  font-normal mb-8">
              Utilize the Aladin API to visualize exoplanets and their surroundings, unlocking stunning imagery and data to enhance your cosmic exploration
          </p>
          <p className="text-primary dark:text-neutral-200 text-md font-normal mb-8">
            With interactive maps and detailed information at your fingertips, your journey through the cosmos becomes an unforgettable adventure.
          </p>
          <div className="my-[3rem]">
            <Link href={'/view'}>
              <Button className="bg-purple text-primary">View Exoplanets</Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={saturn}
              alt="hero template"
              width={200}
              height={200}
              className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={nept}
              alt="feature template"
              width={200}
              height={200}
              className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={astro}
              alt="bento template"
              width={200}
              height={200}
              className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={uranus}
              alt="cards template"
              width={200}
              height={200}
              className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Test Your Knowledge",
      content: (
        <div>
          <p className="text-primary text-md  mb-4">
          Engage in interactive challenges that put your understanding of exoplanets to the test.
          </p>
          <Link href={'/quiz'}>
            <Button className="bg-purple text-primary my-4">Start Challanges</Button>
          </Link>
         
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={telescope}
              alt="hero template"
              width={200}
              height={200}
              className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={bubble}
              alt="feature template"
              width={400}
              height={400}
              className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={neon}
              alt="bento template"
              width={200}
              height={200}
              className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={teledark}
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Join The Ultimatum Community 🚀",
      content: (
        <div>
          <p className="text-primary text-md  mb-4">
          Discuss with other exoplanet study enthusiast, host events, connect with students, and ask experts about exoplanets.
          </p>
          <Link href={'/community'}>
            <Button className="bg-purple text-primary my-4">Join Community</Button>
          </Link>
         
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={mtele}
              alt="hero template"
              width={400}
              height={400}
              className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={astronomer}
              alt="feature template"
              width={400}
              height={400}
              className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={glassastro}
              alt="bento template"
              width={400}
              height={400}
              className="rounded-lg object-cover  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={community}
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
