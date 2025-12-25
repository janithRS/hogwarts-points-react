import React from 'react';
import { usePoints } from '@/context/PointsContext';
import { ArrowDown, Database } from 'lucide-react';

export const ContextDiagram: React.FC = () => {
  const { points, lastAction } = usePoints();

  const totalPoints = Object.values(points).reduce((a, b) => a + b, 0);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Provider Box */}
      <div className="magical-border rounded-2xl p-8 bg-gradient-to-b from-secondary/30 to-background relative">
        {/* Provider Header */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary rounded-full">
          <span className="font-display text-sm font-bold text-primary-foreground">
            PointsContext.Provider
          </span>
        </div>

        {/* State Display */}
        <div className="mt-4 mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Database className="text-primary" size={24} />
            <span className="font-display text-lg text-foreground">Context State</span>
          </div>
          
          <div className="bg-card/50 rounded-xl p-4 magical-border">
            <pre className="text-sm font-mono text-muted-foreground overflow-x-auto">
              <code>{`{
  points: {
    gryffindor: ${points.gryffindor},
    slytherin: ${points.slytherin},
    ravenclaw: ${points.ravenclaw},
    hufflepuff: ${points.hufflepuff}
  },
  total: ${totalPoints}
}`}</code>
            </pre>
          </div>
        </div>

        {/* Data Flow Arrows */}
        <div className="flex justify-center gap-8 mb-6">
          {['gryffindor', 'slytherin', 'ravenclaw', 'hufflepuff'].map((house, index) => (
            <div
              key={house}
              className={`flex flex-col items-center ${
                lastAction?.house === house ? 'animate-flow' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ArrowDown
                className={`${
                  lastAction?.house === house
                    ? 'text-primary animate-sparkle'
                    : 'text-muted-foreground'
                } transition-colors duration-300`}
                size={24}
              />
              <span className="text-xs text-muted-foreground mt-1 font-display capitalize">
                {house.slice(0, 4)}
              </span>
            </div>
          ))}
        </div>

        {/* Consumer Label */}
        <div className="text-center">
          <span className="inline-block px-4 py-1 bg-secondary rounded-full text-sm text-muted-foreground font-display">
            usePoints() → Consumer Components
          </span>
        </div>
      </div>

      {/* Last Action Indicator */}
      {lastAction && (
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center animate-fade-in">
          <div className={`
            inline-flex items-center gap-2 px-4 py-2 rounded-full
            ${lastAction.type === 'add' ? 'bg-primary/20 text-primary' : 'bg-destructive/20 text-destructive'}
            magical-border
          `}>
            <span className="font-display text-sm">
              {lastAction.type === 'add' ? '+' : '-'}{lastAction.amount} points to{' '}
              <span className="capitalize font-bold">{lastAction.house}</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
