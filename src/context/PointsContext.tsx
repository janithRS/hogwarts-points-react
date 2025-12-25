import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type House = 'gryffindor' | 'slytherin' | 'ravenclaw' | 'hufflepuff';

interface HousePoints {
  gryffindor: number;
  slytherin: number;
  ravenclaw: number;
  hufflepuff: number;
}

interface PointsContextType {
  points: HousePoints;
  addPoints: (house: House, amount: number) => void;
  removePoints: (house: House, amount: number) => void;
  lastAction: { house: House; type: 'add' | 'remove'; amount: number } | null;
}

const PointsContext = createContext<PointsContextType | undefined>(undefined);

interface PointsProviderProps {
  children: ReactNode;
}

export const PointsProvider: React.FC<PointsProviderProps> = ({ children }) => {
  const [points, setPoints] = useState<HousePoints>({
    gryffindor: 150,
    slytherin: 120,
    ravenclaw: 180,
    hufflepuff: 100,
  });

  const [lastAction, setLastAction] = useState<{ house: House; type: 'add' | 'remove'; amount: number } | null>(null);

  const addPoints = useCallback((house: House, amount: number) => {
    setPoints(prev => ({
      ...prev,
      [house]: prev[house] + amount,
    }));
    setLastAction({ house, type: 'add', amount });
  }, []);

  const removePoints = useCallback((house: House, amount: number) => {
    setPoints(prev => ({
      ...prev,
      [house]: Math.max(0, prev[house] - amount),
    }));
    setLastAction({ house, type: 'remove', amount });
  }, []);

  return (
    <PointsContext.Provider value={{ points, addPoints, removePoints, lastAction }}>
      {children}
    </PointsContext.Provider>
  );
};

export const usePoints = (): PointsContextType => {
  const context = useContext(PointsContext);
  if (context === undefined) {
    throw new Error('usePoints must be used within a PointsProvider');
  }
  return context;
};
