import React from 'react';
import { Code2 } from 'lucide-react';

export const CodeSnippet: React.FC = () => {
  const code = `// 1. Create the Context
const PointsContext = createContext();

// 2. Create a Provider with state
const PointsProvider = ({ children }) => {
  const [points, setPoints] = useState({
    gryffindor: 150,
    slytherin: 120,
    ...
  });

  return (
    <PointsContext.Provider value={{ points, addPoints }}>
      {children}
    </PointsContext.Provider>
  );
};

// 3. Use the context in any child component
const HouseCard = ({ house }) => {
  const { points, addPoints } = useContext(PointsContext);
  
  return (
    <button onClick={() => addPoints(house, 10)}>
      {points[house]} points
    </button>
  );
};`;

  return (
    <div className="max-w-4xl mx-auto magical-border rounded-2xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
        <Code2 className="text-primary" size={18} />
        <span className="font-display text-sm text-foreground">How It Works</span>
        <div className="flex gap-1.5 ml-auto">
          <div className="w-3 h-3 rounded-full bg-gryffindor/50" />
          <div className="w-3 h-3 rounded-full bg-hufflepuff/50" />
          <div className="w-3 h-3 rounded-full bg-slytherin/50" />
        </div>
      </div>
      <div className="p-6 bg-card/30">
        <pre className="text-sm font-mono text-muted-foreground overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};
