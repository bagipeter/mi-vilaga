'use client';
import { useState } from 'react';
import Image from 'next/image';
import VisszaGomb from '@/components/VisszaGomb';
import '../styles/custom.css';

const items = [
  { title: 'Informatika', text: 'Az információk feldolgozásával, tárolásával és továbbításával foglalkozó tudomány.' },
  { title: 'Információ', text: 'Olyan adat, ami számunkra hasznos, új vagy érdekes.' },
  { title: 'Adat', text: 'Az információ rögzített formája: szám, szöveg, kép vagy hang.' },
  { title: 'Algoritmus', text: 'Lépésről lépésre leírt utasítások, amik megoldanak egy problémát.' },
  { title: 'Operációs rendszer', text: 'A számítógép „főnöke”, ami irányítja a működését és kezeli a programokat.' },
  { title: 'Hardver', text: 'A számítógép kézzel fogható részei, mint a billentyűzet vagy monitor.' },
  { title: 'Szoftver', text: 'A programok, amik a gépen futnak, például játékok vagy szövegszerkesztők.' },
  { title: 'Internet', text: 'Egy hatalmas hálózat, ami összeköti a világ számítógépeit.' },
  { title: 'Keresőmotor', text: 'Olyan program, mint a Google, ami segít megtalálni dolgokat az interneten.' },
  { title: 'Fájl', text: 'Egy digitális „doboz”, amiben adatokat tárolunk, például képet vagy szöveget.' },
  { title: 'Programozás', text: 'Olyan nyelv, amivel utasításokat adunk a számítógépnek.' },
  { title: 'Digitális lábnyom', text: 'Az összes nyom, amit az interneten hagyunk magunk után (pl. keresések, posztok).' },
  { title: 'Hálózat', text: 'Számítógépek összekapcsolása, hogy adatokat tudjanak cserélni egymással.' },
  { title: 'Böngésző', text: 'Olyan program, amivel weboldalakat nézhetünk meg (pl. Chrome, Firefox).' },
  { title: 'Adatvédelem', text: 'Az adatok biztonságos kezelése, hogy ne kerüljenek illetéktelen kezekbe.' },
  { title: 'Jelszó', text: 'Titkos kód, amivel megvédhetjük fiókjainkat és adataikat.' },
  { title: 'Robotika', text: 'Olyan terület, ahol gépeket (robotokat) terveznek és programoznak.' },
  { title: 'MI (Mesterséges Intelligencia)', text: 'Olyan program, ami tanul példákból és segít dönteni vagy válaszolni.' },
  { title: 'Adatbázis', text: 'Olyan rendszer, ahol sok adatot tárolnak és gyorsan keresnek bennük.' },
  { title: 'Kód', text: 'A programozás során használt utasítások, amiket a gép értelmezni tud.' },
];

export default function InformatikaPage() {
  const [current, setCurrent] = useState(0);
  const [revealed, setRevealed] = useState(Array(items.length).fill(false));

  const handleReveal = (index: number) => {
    const updated = [...revealed];
    updated[index] = true;
    setRevealed(updated);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Vissza gomb felül */}
      <div className="mb-6">
        <VisszaGomb />
      </div>

      {/* Cím + avatar */}
      <h2 className="text-2xl font-bold mb-6 text-green-600 text-center">💻 Informatika alapfogalmak</h2>
      <div className="flex items-center gap-4 mb-6 justify-center">
        <Image src="/pictures/avatar.png" alt="Avatar" width={70} height={70} className="rounded-full shadow-md" />
        <div className="bg-white p-4 rounded-xl shadow-md max-w-xl">
          <p className="text-slate-700">
            Lapozz végig 20 informatika fogalmat, és kattints, ha kíváncsi vagy a magyarázatra! 💡
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setCurrent((prev) => (prev > 0 ? prev - 1 : prev))}
          className="px-4 py-2 bg-green-200 rounded hover:bg-green-300 transition-all"
        >
          ⬅️
        </button>

        <div className="flex-1 mx-4 bg-white p-6 rounded-xl shadow-md transform transition duration-500 hover:scale-105">
          <p className="text-lg font-semibold mb-4 text-green-700">{items[current].title}</p>
          {!revealed[current] ? (
            <button
              onClick={() => handleReveal(current)}
              className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition-all"
            >
              Mutasd a magyarázatot
            </button>
          ) : (
            <p className="mt-4 text-slate-800">{items[current].text}</p>
          )}
        </div>

        <button
          onClick={() => setCurrent((prev) => (prev < items.length - 1 ? prev + 1 : prev))}
          className="px-4 py-2 bg-green-200 rounded hover:bg-green-300 transition-all"
        >
          ➡️
        </button>
      </div>
    </div>
  );
}