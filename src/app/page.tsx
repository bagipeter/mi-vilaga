'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const visited = localStorage.getItem('mi-vilaga-visited');
    if (visited === 'true') {
      setShowIntro(false);
    }
  }, []);

  const handleStart = () => {
    localStorage.setItem('mi-vilaga-visited', 'true');
    setShowIntro(false);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-sky-50">
      {showIntro ? (
        <>
          <h1 className="text-3xl font-bold mb-4 text-sky-600">Üdv a MI Világában! 🤖</h1>
          <p className="mb-6 text-lg max-w-xl text-slate-700">
            Fedezd fel az informatika, a digitális világ és a mesterséges intelligencia titkait!
          </p>
          <button
            onClick={handleStart}
            className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
          >
            Kezdjük el!
          </button>
        </>
      ) : (
        <div className="flex flex-col gap-4 mt-6">
          <Link href="/informatika" className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600">
            💻 Informatika
          </Link>
          <Link href="/biztonsag" className="px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600">
            🔐 Digitális biztonság
          </Link>
          <Link href="/ai" className="px-6 py-3 bg-pink-500 text-white rounded hover:bg-pink-600">
            🤖 Mi az MI?
          </Link>
          <Link href="/kviz" className="px-6 py-3 bg-yellow-500 text-white rounded hover:bg-yellow-600">
            🧠 Mini kvíz
          </Link>
          <Link href="/kerdezz" className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
            🎤 Kérdezz-felelek
          </Link>
        </div>
      )}
    </main>
  );
}