'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import '../styles/custom.css';
import VisszaGomb from '@/components/VisszaGomb';
import Link from 'next/link';

const bubbles = [
  { text: 'Az MI, vagyis mesterséges intelligencia olyan program, ami tanul és válaszol.' },
  { text: 'Képes felismerni képeket, beszélgetni, zenét írni vagy segíteni a tanulásban.' },
  { text: 'Telefonban, játékban, neten – sok helyen segít nekünk.' },
  { text: 'Segít gyorsabban megérteni dolgokat, de fontos, hogy okosan használjuk.' },
  { text: 'Nem tud érezni, álmodni vagy dönteni helyetted – csak példákból tanul.' },
  { text: 'Az MI nem varázslat, hanem sok adatból tanuló számítógépes program.' },
  { text: 'Fontos, hogy kérdezzünk és gondolkodjunk, ne csak elfogadjuk, amit mond.' },
];

export default function AiPage() {
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    const lastDelay = 1 + (bubbles.length - 1) * 1.2; // utolsó buborék animáció kezdete
    const buffer = 1.5; // extra idő, amíg teljesen megjelenik
    const totalDelay = lastDelay + buffer;

    const timer = setTimeout(() => setShowBackButton(true), totalDelay * 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-sky-600 text-center">🤖 Mi az MI?</h2>
      <div className="flex justify-center mb-6">
        <Image
          src="/pictures/avatar.png"
          alt="Robot avatar"
          width={80}
          height={80}
          className="rounded-full shadow-md"
        />
      </div>
      <div className="flex flex-col gap-4">
        {bubbles.map((bub, i) => (
          <div
            key={i}
            className="kerdeskartya dubble-delay bg-sky-100"
            style={{ animationDelay: `${1 + i * 1.2}s` }}
          >
            <p>{bub.text}</p>
          </div>
        ))}
      </div>

      {/* A link csak akkor jelenik meg, ha az utolsó buborék is látszik */}
      {showBackButton && (
        <div className="mt-10 flex items-end justify-end">
          <Link href="/ai/tobb" className="flex items-end gap-3 hover:scale-105 transition-all">
            <div className="bg-white p-3 rounded-xl shadow-md max-w-xs text-sm text-slate-700">
              Szeretnél többet megtudni rólam? 🤖
            </div>
            <Image
              src="/pictures/avatar.png"
              alt="Mini avatar"
              width={50}
              height={50}
              className="rounded-full shadow-md"
            />
          </Link>
        </div>
      )}

      {showBackButton && <VisszaGomb />}
    </div>
  );
}