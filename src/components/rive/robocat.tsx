"use client"
import { useRive } from '@rive-app/react-canvas';

const Robocat = () => {
  const { RiveComponent } = useRive({
    src: '/animations/robocat.riv', // Path to your .riv file
    autoplay: true, // This will auto-start the animation
  });

  return (
    <div>
      <RiveComponent style={{ width: '500px', height: '500px' }} />
    </div>
  );
};

export default Robocat;
