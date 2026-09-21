import { useState } from 'react';
import { initialSnippets } from './data/mockSnippets';
import { SnippetCard } from './components/SnippetCard';

export default function App() {
  const [snippets, setSnippets] = useState(initialSnippets);

  // When a card calls onToggleFavorite(id), we flip that specific snippet's isFavorite
  const handleToggleFavorite = (id: string) => {
    setSnippets((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">DevShelf</h1>
          <p className="text-zinc-400 text-sm mt-1">
            Personal snippet vault & developer bookmark engine.
          </p>
        </header>

        {/* The Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {snippets.map((snippet) => (
            <SnippetCard
              key={snippet.id}
              snippet={snippet}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      </div>
    </main>
  );
}