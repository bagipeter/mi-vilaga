'use client';
import { useState } from 'react';
import VisszaGomb from '@/components/VisszaGomb';

type Question = {
  question: string;
  options: string[];
  correct: number; // index of correct answer
};

const questions: Question[] = [
  { question: 'Mi az informatika?', options: ['Az információ feldolgozásának tudománya', 'Csak játék', 'Csak programozás', 'Csak számítógép-használat'], correct: 0 },
  { question: 'Mi az algoritmus?', options: ['Lépéssor egy probléma megoldására', 'Egy számítógép márkája', 'Csak játékprogram', 'Egy internetes oldal'], correct: 0 },
  { question: 'Mi az adat?', options: ['Információ rögzített formája', 'Csak számok', 'Csak képek', 'Csak hang'], correct: 0 },
  { question: 'Mi az operációs rendszer?', options: ['A számítógép főnöke', 'Egy játék', 'Csak böngésző', 'Csak hardver'], correct: 0 },
  { question: 'Mi a hardver?', options: ['A gép kézzel fogható részei', 'Programok', 'Csak internet', 'Csak játékok'], correct: 0 },
  { question: 'Mi a szoftver?', options: ['Programok a gépen', 'Billentyűzet', 'Monitor', 'Egér'], correct: 0 },
  { question: 'Mi az internet?', options: ['Világméretű hálózat', 'Csak játék', 'Csak telefon', 'Csak email'], correct: 0 },
  { question: 'Mi a keresőmotor?', options: ['Google például', 'Csak böngésző', 'Csak játék', 'Csak chat'], correct: 0 },
  { question: 'Mi a fájl?', options: ['Digitális doboz adatoknak', 'Csak kép', 'Csak hang', 'Csak szöveg'], correct: 0 },
  { question: 'Mi a programozás?', options: ['Utasítások adása a gépnek', 'Csak játék', 'Csak böngészés', 'Csak chat'], correct: 0 },
  { question: 'Mi a digitális lábnyom?', options: ['Nyom, amit online hagyunk', 'Csak játék', 'Csak email', 'Csak chat'], correct: 0 },
  { question: 'Mi a jelszó?', options: ['Titkos kód a védelemhez', 'Csak név', 'Csak email', 'Csak játék'], correct: 0 },
  { question: 'Mi az adathalászat?', options: ['Hamis üzenetek adatlopásra', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi az online zaklatás?', options: ['Bántás interneten', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi a szexting?', options: ['Intim képek küldése', 'Csak chat', 'Csak játék', 'Csak email'], correct: 0 },
  { question: 'Mi a képernyőidő?', options: ['Gép előtt töltött idő', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi a spam?', options: ['Kéretlen üzenetek', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi a vírus?', options: ['Kártékony program', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi a frissítés?', options: ['Programok javítása', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi a nyilvános Wi-Fi veszélye?', options: ['Adatlopás lehetősége', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi a kétlépcsős azonosítás?', options: ['Extra védelem jelszó mellett', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi a trollkodás?', options: ['Direkt idegesítés online', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi a digitális udvariasság?', options: ['Interneten is udvarias viselkedés', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi a profilkép?', options: ['Kép, ami téged jelöl online', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi a helymegosztás?', options: ['Pozíció megosztása online', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi a digitális függőség?', options: ['Túl sok géphasználat', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi az álhír?', options: ['Hamis információ online', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi a deepfake?', options: ['Hamis videó, ami valódinak tűnik', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi a digitális önvédelem?', options: ['Blokkolás, jelentés, segítségkérés', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi a digitális stressz?', options: ['Állandó online jelenlét fárasztó hatása', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi a digitális pihenőidő?', options: ['Képernyőmentes szünetek', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi a digitális önkép?', options: ['Online megjelenés hatása önmagunkra', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi a digitális örökség?', options: ['Online tartalmak hosszú ideig elérhetők', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi a digitális szokás?', options: ['Internethasználati rutinok', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi a digitális közösség?', options: ['Online csoportok, fórumok', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi a digitális bántalmazás?', options: ['Online zaklatás hatása', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi a digitális identitás?', options: ['Online név és profil', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi a digitális közösségi nyomás?', options: ['Érzés, hogy muszáj posztolni', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi a digitális kihívás veszélye?', options: ['Lehet veszélyes trend', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi a digitális barátság?', options: ['Online kapcsolatok', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi a digitális szülői jelenlét?', options: ['Szülők érdeklődése, támogatása', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi a digitális önvédelem eszköze?', options: ['Szülői felügyelet, blokkolás', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
  { question: 'Mi a digitális tanulás biztonsága?', options: ['Tanulási platformok biztonsága', 'Csak játék', 'Csak chat', 'Csak email'], correct: 0 },
];

export default function KvizPage() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswer = (index: number) => {
    setAnswers([...answers, index]);
    if (index === questions[current].correct) {
      setScore(score + 1);
    }
    setCurrent(current + 1);
  };

  const total = questions.length;
  const wrong = answers.length - score;
  const percent = Math.round((score / total) * 100);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="mb-6">
        <VisszaGomb />
      </div>

      {current < total ? (
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4">{questions[current].question}</h2>
          <div className="grid gap-2">
            {questions[current].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className="px-4 py-2 bg-sky-200 rounded hover:bg-sky-300 transition-all"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-green-100 p-6 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">🎉 Eredményed</h2>
          <p>Helyes válaszok: {score}</p>
          <p>Helytelen válaszok: {wrong}</p>
          <p>Százalék: {percent}%</p>
        </div>
      )}
    </div>
  );
}