import React from 'react';
import { HouseCard } from './HouseCard';

const houses = [
  {
    house: 'gryffindor' as const,
    icon: '🦁',
    motto: 'Where dwell the brave at heart',
  },
  {
    house: 'slytherin' as const,
    icon: '🐍',
    motto: 'Those cunning folk use any means',
  },
  {
    house: 'ravenclaw' as const,
    icon: '🦅',
    motto: 'Where those of wit and learning',
  },
  {
    house: 'hufflepuff' as const,
    icon: '🦡',
    motto: 'Those patient and true',
  },
];

export const HousePointsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {houses.map((houseData, index) => (
        <div
          key={houseData.house}
          className="animate-scale-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <HouseCard {...houseData} />
        </div>
      ))}
    </div>
  );
};
