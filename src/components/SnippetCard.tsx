import { useState } from 'react';
import type { Snippet } from '../types';

// 1. Define what the parent (App.tsx) must pass into this card
interface SnippetCardProps {
  snippet: Snippet;
  onToggleFavorite: (id: string) => void;
}

export const SnippetCard = ({ snippet, onToggleFavorite }: SnippetCardProps) => {
  // 2. Local state: only this card needs to track if its copy button was clicked
  const [copied, setCopied] = useState(false);

  // 3. The copy handler: writes to clipboard, flips state, resets after 2s
  const handleCopy = async () => {
    await navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/90 p-5 shadow-lg transition-all hover:border-zinc-700">
      {/* Top Section */}
      <div>
        {/* Header: Title + Language badge + Star Button */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="inline-block rounded-md bg-zinc-800 px-2 py-0.5 text-xs font-medium uppercase tracking-wider text-zinc-400 mb-2">
              {snippet.language}
            </span>
            <h3 className="text-lg font-semibold text-zinc-100">{snippet.title}</h3>
          </div>

          {/* Favorite Toggle Button */}
          <button
            onClick={() => onToggleFavorite(snippet.id)}
            className="text-xl transition-transform active:scale-90 cursor-pointer"
            aria-label="Toggle Favorite"
          >
            {snippet.isFavorite ? (
              <span className="text-amber-400">★</span>
            ) : (
              <span className="text-zinc-600 hover:text-zinc-400">☆</span>
            )}
          </button>
        </div>

        {/* Description */}
        <p className="mt-2 text-sm text-zinc-400">{snippet.description}</p>

        {/* Code Snippet Box */}
        <div className="mt-4 rounded-lg bg-zinc-950 p-3.5 border border-zinc-800/80 overflow-x-auto">
          <pre className="font-mono text-xs text-zinc-300 leading-relaxed">
            <code>{snippet.code}</code>
          </pre>
        </div>
      </div>

      {/* Bottom Section: Tags & Copy Button */}
      <div className="mt-5 flex items-center justify-between gap-2 border-t border-zinc-800/80 pt-4">
        {/* Render tags as badges */}
        <div className="flex flex-wrap gap-1.5">
          {snippet.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-zinc-800/80 px-2 py-0.5 text-[11px] font-medium text-zinc-400"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className={`shrink-0 rounded-md px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
            copied
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
              : 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700 border border-zinc-700'
          }`}
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
    </div>
  );
};