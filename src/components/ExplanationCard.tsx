import React from 'react';
import { BookOpen, Wand2, Users, Sparkles } from 'lucide-react';

export const ExplanationCard: React.FC = () => {
  const concepts = [
    {
      icon: <Wand2 className="text-primary" size={24} />,
      title: 'createContext',
      description: 'Like establishing the house points system at Hogwarts. It creates a magical container for shared data.',
    },
    {
      icon: <BookOpen className="text-ravenclaw" size={24} />,
      title: 'Provider',
      description: 'The Great Hall where all houses can see and interact with the points. It wraps components that need access.',
    },
    {
      icon: <Users className="text-slytherin" size={24} />,
      title: 'useContext',
      description: 'Like prefects updating points. Any component can read and modify the shared state without prop drilling.',
    },
    {
      icon: <Sparkles className="text-hufflepuff" size={24} />,
      title: 'Live Updates',
      description: 'When points change, all watching components update instantly—like the hourglasses in the Great Hall!',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
      {concepts.map((concept, index) => (
        <div
          key={concept.title}
          className="magical-border rounded-xl p-5 bg-card/30 hover:bg-card/50 transition-all duration-300 animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-start gap-4">
            <div className="p-2 bg-secondary/50 rounded-lg shrink-0">
              {concept.icon}
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold text-foreground mb-1">
                {concept.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {concept.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
