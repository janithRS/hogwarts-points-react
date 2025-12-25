import React, { useState, useEffect } from 'react';
import { usePoints, House } from '@/context/PointsContext';
import { Plus, Minus } from 'lucide-react';

interface HouseCardProps {
  house: House;
  icon: string;
  motto: string;
}

const houseStyles: Record<House, { gradient: string; border: string; glow: string }> = {
  gryffindor: {
    gradient: 'from-gryffindor/20 to-gryffindor/5',
    border: 'border-gryffindor/50 hover:border-gryffindor',
    glow: 'hover:shadow-[0_0_30px_hsl(0_72%_45%/0.3)]',
  },
  slytherin: {
    gradient: 'from-slytherin/20 to-slytherin/5',
    border: 'border-slytherin/50 hover:border-slytherin',
    glow: 'hover:shadow-[0_0_30px_hsl(145_50%_32%/0.3)]',
  },
  ravenclaw: {
    gradient: 'from-ravenclaw/20 to-ravenclaw/5',
    border: 'border-ravenclaw/50 hover:border-ravenclaw',
    glow: 'hover:shadow-[0_0_30px_hsl(215_70%_45%/0.3)]',
  },
  hufflepuff: {
    gradient: 'from-hufflepuff/20 to-hufflepuff/5',
    border: 'border-hufflepuff/50 hover:border-hufflepuff',
    glow: 'hover:shadow-[0_0_30px_hsl(45_90%_50%/0.3)]',
  },
};

const houseColors: Record<House, string> = {
  gryffindor: 'text-gryffindor',
  slytherin: 'text-slytherin',
  ravenclaw: 'text-ravenclaw',
  hufflepuff: 'text-hufflepuff',
};

const buttonColors: Record<House, string> = {
  gryffindor: 'bg-gryffindor hover:bg-gryffindor/80',
  slytherin: 'bg-slytherin hover:bg-slytherin/80',
  ravenclaw: 'bg-ravenclaw hover:bg-ravenclaw/80',
  hufflepuff: 'bg-hufflepuff hover:bg-hufflepuff/80',
};

export const HouseCard: React.FC<HouseCardProps> = ({ house, icon, motto }) => {
  const { points, addPoints, removePoints, lastAction } = usePoints();
  const [isAnimating, setIsAnimating] = useState(false);
  const styles = houseStyles[house];

  useEffect(() => {
    if (lastAction?.house === house) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [lastAction, house]);

  const houseName = house.charAt(0).toUpperCase() + house.slice(1);

  return (
    <div
      className={`
        relative rounded-xl p-6 bg-gradient-to-b ${styles.gradient}
        border-2 ${styles.border} ${styles.glow}
        transition-all duration-300 transform hover:-translate-y-1
        backdrop-blur-sm
      `}
    >
      {/* House Icon */}
      <div className="text-5xl mb-4 text-center">{icon}</div>

      {/* House Name */}
      <h3 className={`font-display text-2xl font-bold text-center mb-1 ${houseColors[house]}`}>
        {houseName}
      </h3>

      {/* Motto */}
      <p className="text-muted-foreground text-sm text-center italic mb-6">{motto}</p>

      {/* Points Display */}
      <div className="text-center mb-6">
        <div
          className={`
            font-display text-5xl font-bold ${houseColors[house]}
            ${isAnimating ? 'animate-point-change' : ''}
            transition-all duration-200
          `}
        >
          {points[house]}
        </div>
        <p className="text-muted-foreground text-sm mt-1">points</p>
      </div>

      {/* Control Buttons */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => removePoints(house, 10)}
          className={`
            w-12 h-12 rounded-full flex items-center justify-center
            bg-secondary/50 hover:bg-destructive/80
            border border-border hover:border-destructive
            transition-all duration-200 transform hover:scale-110
            text-foreground
          `}
          aria-label={`Remove 10 points from ${houseName}`}
        >
          <Minus size={20} />
        </button>
        <button
          onClick={() => addPoints(house, 10)}
          className={`
            w-12 h-12 rounded-full flex items-center justify-center
            ${buttonColors[house]}
            border border-transparent
            transition-all duration-200 transform hover:scale-110
            text-primary-foreground
          `}
          aria-label={`Add 10 points to ${houseName}`}
        >
          <Plus size={20} />
        </button>
      </div>

      {/* Decorative corners */}
      <div className={`absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 ${styles.border} rounded-tl-lg opacity-50`} />
      <div className={`absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 ${styles.border} rounded-tr-lg opacity-50`} />
      <div className={`absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 ${styles.border} rounded-bl-lg opacity-50`} />
      <div className={`absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 ${styles.border} rounded-br-lg opacity-50`} />
    </div>
  );
};
