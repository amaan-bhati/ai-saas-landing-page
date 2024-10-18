import React from 'react';
import { BentoGrid } from './components/BentoGrid';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BentoGrid />
    </main>
  );
}