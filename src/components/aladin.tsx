"use client"
import { useEffect, useRef } from 'react';

const AladinLiteViewer = () => {
  const aladinRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Dynamically load the Aladin Lite script
    const script = document.createElement('script');
    script.src = 'https://aladin.cds.unistra.fr/AladinLite/api/v3/latest/aladin.js';
    script.charset = 'utf-8';
    script.async = true;

    script.onload = () => {
      if (window.A) {
        // Wait for A.init to finish before initializing Aladin
        window.A.init.then(() => {
          // Initialize the Aladin viewer
          const aladin = window.A.aladin(aladinRef.current, { 
            fov: 1,               // Field of view
            target: 'M81',         // Example target (M81 galaxy)
            survey: 'P/DSS2/color' // Example survey
          });
        });
      }
    };

    // Append the script to the document
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      id="aladin-lite-div" 
      ref={aladinRef} 
      style={{ width: '100%', height: '500px' }} // Adjust the size as needed
    />
  );
};

export default AladinLiteViewer;
