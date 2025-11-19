'use client';
import Image from 'next/image';
import VisszaGomb from '@/components/VisszaGomb';
import '../styles/custom.css';
import Link from 'next/link';

const items = [
  { title: 'Jelszó', text: 'Titkos kód, ami megvédi a fiókodat. Ne oszd meg senkivel!' },
  { title: 'Felhasználónév', text: 'Online neved. Ne tartalmazza a teljes neved vagy születési dátumod.' },
  { title: 'Profilkép', text: 'Ne legyen túl személyes. Olyat válassz, ami nem árul el rólad sokat.' },
  { title: 'Közösségi média', text: 'Olyan oldalak, ahol emberek beszélgetnek, posztolnak. Légy óvatos, mit osztasz meg!' },
  { title: 'Internetes zaklatás', text: 'Ha valaki bánt vagy csúfol online, az zaklatás. Szólj egy felnőttnek!' },
  { title: 'Hamis profil', text: 'Vannak, akik másnak adják ki magukat. Ne bízz meg bárkiben az interneten!' },
  { title: 'Adatvédelem', text: 'Vigyázz a saját adataidra! Ne add meg bárkinek a címed vagy telefonszámod.' },
  { title: 'Képernyőidő', text: 'Fontos, hogy ne tölts túl sok időt a gép előtt. Mozogj, pihenj is!' },
  { title: 'Játék közbeni beszélgetés', text: 'Ha valaki durva játék közben, ne válaszolj, inkább szólj egy felnőttnek!' },
  { title: 'Szexting', text: 'Ha valaki intim képet kér, mindig utasítsd vissza! Ez veszélyes.' },
  { title: 'Helymegosztás', text: 'Ne oszd meg, hol vagy épp. Ez veszélyes lehet!' },
  { title: 'Digitális lábnyom', text: 'Minden, amit megosztasz, nyomot hagy. Gondold meg, mit írsz vagy posztolsz!' },
  { title: 'Spam', text: 'Kéretlen üzenetek, amik gyakran átverések. Ne kattints gyanús linkekre!' },
  { title: 'Vírus', text: 'Olyan program, ami kárt okozhat a gépeden. Ne tölts le ismeretlen fájlokat!' },
  { title: 'Frissítés', text: 'A programok frissítése segít megvédeni a gépedet a hibáktól és támadásoktól.' },
  { title: 'Képernyőkép', text: 'Bárki készíthet képet arról, amit írsz. Légy óvatos, mit küldesz el!' },
  { title: 'Nyilvános Wi-Fi', text: 'Ingyenes net veszélyes lehet. Ne jelentkezz be fontos fiókokba ilyenkor!' },
  { title: 'Kétlépcsős azonosítás', text: 'Plusz védelem a jelszavad mellett. Hasznos, ha elérhető!' },
  { title: 'Ismeretlen link', text: 'Ne kattints olyan linkre, amit nem ismersz. Lehet, hogy átverés!' },
  { title: 'Online barát', text: 'Lehet kedves, de nem biztos, hogy az, akinek mondja magát. Légy óvatos!' },
  { title: 'Játékos nevek', text: 'Ne használj olyan nevet, ami elárul rólad személyes adatot.' },
  { title: 'Kamera használat', text: 'Csak akkor kapcsold be, ha biztonságos! Ne mutass olyat, amit megbánnál.' },
  { title: 'Hanghívás online', text: 'Ha valaki hív, gondold meg, hogy válaszolsz-e. Nem mindig az, akinek mondja magát.' },
  { title: 'Online vásárlás', text: 'Ne adj meg bankkártyaadatokat felnőtt engedélye nélkül!' },
  { title: 'Jelszólopás', text: 'Ha valaki megszerzi a jelszavad, visszaélhet vele. Használj erős jelszót!' },
  { title: 'Kamu nyereményjáték', text: 'Ha valami túl szép, hogy igaz legyen, valószínűleg nem igaz.' },
  { title: 'Trollkodás', text: 'Ha valaki direkt idegesít másokat online, az trollkodás. Ne válaszolj rá!' },
  { title: 'Kijelentkezés', text: 'Ha végeztél, mindig jelentkezz ki, főleg más gépén!' },
  { title: 'Személyes adatok', text: 'Ne oszd meg a címed, iskolád, telefonszámod idegenekkel!' },
  { title: 'Szülői felügyelet', text: 'A szüleid segíthetnek biztonságban maradni. Beszélj velük bátran!' },
];

export default function BiztonsagPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Vissza gomb felül */}
      <div className="mb-6">
        <VisszaGomb />
      </div>

          <Link href="/biztonsag/szuloknek" className="flex items-end mx-3 gap-3">
            <div className="bg-white p-3  rounded-xl shadow-md max-w-xs text-lg text-red-700">
            A biztonságról szülöknek, kattints és tájékozódj!
            </div>
            </Link>


      {/* Cím + avatar */}
      <h2 className="text-2xl font-bold mb-6 text-orange-600 text-center">🔐 Digitális biztonság gyerekeknek</h2>
      <div className="flex items-center gap-4 mb-8 justify-center">
        <Image src="/pictures/avatar.png" alt="Avatar" width={70} height={70} className="rounded-full shadow-md" />
        <div className="bg-white p-4 rounded-xl shadow-md max-w-xl">
          <p className="text-slate-700">
            Nézd végig ezeket a fontos tudnivalókat, hogy biztonságban legyél az interneten! 🧠
          </p>
        </div>
      </div>
      {/* Kétoszlopos szövegdobozok */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <div key={i} className="bg-orange-100 p-4 rounded-xl shadow-md hover:scale-[1.02] transition-all">
            <p className="font-semibold text-orange-700 mb-2">{item.title}</p>
            <p className="text-slate-800">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}