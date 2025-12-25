import React from 'react';
import { PointsProvider } from '@/context/PointsContext';
import { Header } from '@/components/Header';
import { ContextDiagram } from '@/components/ContextDiagram';
import { HousePointsGrid } from '@/components/HousePointsGrid';
import { ExplanationCard } from '@/components/ExplanationCard';
import { CodeSnippet } from '@/components/CodeSnippet';

const Index: React.FC = () => {
  return (
    <PointsProvider>
      <div className="min-h-screen pb-20">
        {/* Decorative background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-ravenclaw/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-slytherin/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="container mx-auto px-4 space-y-16">
            {/* Section: Live Diagram */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
                <span className="text-primary">Live</span> Context Data Flow
              </h2>
              <ContextDiagram />
            </section>

            {/* Section: House Points */}
            <section className="pt-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-2">
                Award & Deduct Points
              </h2>
              <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto">
                Each house card is a separate component using <code className="text-primary">usePoints()</code> hook 
                to access the shared context state.
              </p>
              <HousePointsGrid />
            </section>

            {/* Section: Explanation */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
                Understanding <span className="text-primary">Context</span>
              </h2>
              <ExplanationCard />
            </section>

            {/* Section: Code */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
                The <span className="text-primary">Magic</span> Behind It
              </h2>
              <CodeSnippet />
            </section>

            {/* Footer */}
            <footer className="text-center pt-8 pb-4">
              <p className="text-muted-foreground text-sm">
                Built with React Context API ✨ Inspired by Hogwarts
              </p>
            </footer>
          </main>
        </div>
      </div>
    </PointsProvider>
  );
};

export default Index;
