import { useMemo } from 'react';
import Book from './components/Book';
import rawPages from './data/pages.json';
import type { PageData } from './components/ContentPage';
import './App.css';

export default function App() {
  const sortedPages = useMemo<PageData[]>(
    () => [...(rawPages as PageData[])].sort((a, b) => a.page - b.page),
    []
  );

  return (
    <main className="app">
      <Book pages={sortedPages} />
    </main>
  );
}
