"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { pacifico } from "@/components/Home/Land";

const AppleCardsCarouselDemo = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20 bg-black text-primary">
      <h2 className={`${pacifico.className} max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold  font-sans`}>
      Test Your <span className="purple-gradient">Exoplanet</span> Knowledge!
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-black text-primary p-8 md:p-14 rounded-3xl mb-4"
          >
           

            <p className=" text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold ">
              Test your knowledge of the incredible universe of exoplanets! 
              </span>{" "}
              Whether you're just starting or 
              looking to challenge yourself with advanced concepts, this quiz will take you on a journey through 
              the discovery, classification, and exploration of planets beyond our solar system. 
              Dive deep into the latest scientific breakthroughs 
              and challenge your understanding of the fascinating worlds orbiting distant stars.
            </p>
        
          </div>
        );
      })}
    </>
  );
};


const data = [
  {
    id:1,
    category: "New to the world of exoplanets? Start here!",
    title: "Exoplanet 101: The Basics",
    src: "https://i.pinimg.com/736x/37/4b/e8/374be8d321af2a06af4a870878097722.jpg",
    content: <DummyContent />,
    href: '/quiz/beginner',
    button:'Beginner'
  },
  {
    id:2,
    category: "Take your understanding of exoplanets to the next level!",
    title: "Exoplanet Explorer: Beyond the Basics",
    src: "https://i.pinimg.com/564x/83/6c/24/836c24504913627df5046f4ccd93ba1d.jpg",
    content: <DummyContent />,
    href:'/quiz/intermidate',
    button:'Intermidate'
  },
  {
    id:3,
    category: "Ready for a challenge? Dive deep into the latest research and Discovery methods",
    title: "Exoplanet Expert: The Science Frontier",
    src: "https://i.pinimg.com/564x/ae/80/72/ae80722a08bae7100ea9960117b65db8.jpg",
    content: <DummyContent />,
    href:'/quiz/advanced',
    button:'Advanced'
  },

  {
    category: "Explore the biggest mysteries surrounding exoplanets",
    title: "Exoplanet Mysteries: Unsolved Questions",
    src: "https://i.pinimg.com/564x/75/e0/4e/75e04e261b5418a13286f192a41bad73.jpg",
    content: <DummyContent />,
    href:'/quiz/hard',
    button:'Hard'
  },
];

export default AppleCardsCarouselDemo