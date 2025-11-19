'use client';
import { useState } from 'react';
import Image from 'next/image';
import VisszaGomb from '@/components/VisszaGomb';
import '../../styles/custom.css';

const items = [
  {
    question: 'Mi az MI?',
    answer: 'Olyan program, ami tanul és segít dönteni adatok alapján.',
  },
  {
    question: 'Tud az MI beszélgetni?',
    answer: 'Igen, chatbotként válaszol kérdésekre, mint én most neked.',
  },
  {
    question: 'Tud az MI képeket felismerni?',
    answer: 'Igen, például arcfelismerés a telefonban vagy tárgyak felismerése.',
  },
  {
    question: 'Tud az MI álmodni?',
    answer: 'Nem, mert nincs tudata vagy érzései – csak adatokat dolgoz fel.',
  },
  {
    question: 'Hol találkozol MI-vel?',
    answer: 'Telefonban, játékban, YouTube-on, keresőkben, tanuló appokban.',
  },
  {
    question: 'Tud az MI zenét írni?',
    answer: 'Igen, ha példák alapján megtanítják rá – nem érzelemből alkot.',
  },
  {
    question: 'Miért fontos az MI-t ismerni?',
    answer: 'Hogy okosan és biztonságosan használjuk, és ne hagyjuk, hogy félreinformáljon.',
  },
];

export default function TobbInfoPage() {
  const [current, setCurrent] = useState(0);
  const [revealed, setRevealed] = useState(Array(items.length).fill(false));

  const handleReveal = (index: number) => {
    const updated = [...revealed];
    updated[index] = true;
    setRevealed(updated);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-pink-600 text-center">📚 Tudj meg többet a mesterséges intelligenciáról</h2>

      {/* Avatar + bevezető buborék */}
      <div className="flex items-center gap-4 mb-6">
        <Image src="/pictures/avatar.png" alt="Avatar" width={70} height={70} className="rounded-full shadow-md" />
        <div className="bg-white p-4 rounded-xl shadow-md max-w-xl">
          <p className="text-slate-700">
            Szia! Lapozz végig 7 kérdést, és kattints, ha kíváncsi vagy a válaszra. 🤖
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setCurrent((prev) => (prev > 0 ? prev - 1 : prev))}
          className="px-4 py-2 bg-sky-200 rounded hover:bg-sky-300 transition-all"
        >
          ⬅️
        </button>

        <div className="flex-1 mx-4 bg-white p-6 rounded-xl shadow-md transform transition duration-500 hover:scale-105">
          <p className="text-lg font-semibold mb-4 text-sky-700">{items[current].question}</p>
          {!revealed[current] ? (
            <button
              onClick={() => handleReveal(current)}
              className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition-all"
            >
              Mutasd a választ
            </button>
          ) : (
            <p className="mt-4 text-slate-800">{items[current].answer}</p>
          )}
        </div>

        <button
          onClick={() => setCurrent((prev) => (prev < items.length - 1 ? prev + 1 : prev))}
          className="px-4 py-2 bg-sky-200 rounded hover:bg-sky-300 transition-all"
        >
          ➡️
        </button>
      </div>

      {/* Vissza gomb */}
      <div className="mt-10">
        <VisszaGomb />
      </div>
    </div>
  );
}