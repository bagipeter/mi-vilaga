'use client';
import { useState } from 'react';
import Image from 'next/image';
import VisszaGomb from '@/components/VisszaGomb';
import '../../styles/custom.css';

const topics = [
  { title: 'Erős jelszavak használata', content: 'Használjunk hosszú, egyedi jelszavakat, és ne osszuk meg őket senkivel. A gyerekeknek tanítsuk meg, hogy a jelszó olyan, mint a lakáskulcs: csak az használhatja, akiben megbízunk.' },
  { title: 'Adathalászat felismerése', content: 'Tanítsuk meg a gyerekeknek, hogy ne kattintsanak gyanús e-mailekre vagy linkekre. Ha egy üzenet túl szép ahhoz, hogy igaz legyen, valószínűleg átverés.' },
  { title: 'Online zaklatás jelei', content: 'Ha a gyerek szomorú, visszahúzódó vagy nem akar online lenni, lehet, hogy zaklatás áldozata. Kérdezzünk nyíltan, ítélkezés nélkül.' },
  { title: 'Szexting megelőzése', content: 'Beszéljünk nyíltan arról, hogy soha ne küldjenek intim képet senkinek. A bizalom nem egyenlő a biztonsággal.' },
  { title: 'Digitális lábnyom', content: 'Minden, amit online megosztunk, nyomot hagy. Tanítsuk meg a gyerekeknek, hogy gondolják át, mit posztolnak.' },
  { title: 'Képernyőidő szabályozása', content: 'Állítsunk be napi időkorlátokat, és beszéljünk arról, miért fontos a pihenés és a mozgás.' },
  { title: 'Közösségi média beállítások', content: 'Kapcsoljuk ki a helymegosztást, állítsuk privátra a profilt, és tiltsuk le az ismeretlen üzenetküldést.' },
  { title: 'TikTok biztonsági beállítások', content: 'A TikTokban beállítható privát fiók, komment szűrés, és képernyőidő korlát. Nézzük át együtt a gyerekkel.' },
  { title: 'Instagram adatvédelem', content: 'Privát fiók, történetmegosztás korlátozása, ismeretlenek blokkolása – mind segít a biztonságban.' },
  { title: 'Messenger üzenetszűrés', content: 'Kapcsoljuk ki az ismeretlenek üzeneteit, és állítsuk be, ki láthatja a gyerek profilját.' },
  { title: 'Online játékok biztonsága', content: 'Beszéljünk arról, hogy a játékban is lehet zaklatás. Ha valaki durva, ne válaszolj, szólj egy felnőttnek.' },
  { title: 'Streamelés és videók megosztása', content: 'Ne engedjük, hogy a gyerek élőben közvetítsen vagy személyes videókat osszon meg felügyelet nélkül.' },
  { title: 'Deepfake felismerése', content: 'Magyarázzuk el, hogy vannak hamis videók, amik valódinak tűnnek. Ne higgyenek el mindent, amit látnak.' },
  { title: 'Álhírek terjedése', content: 'Tanítsuk meg, hogyan ellenőrizhetik az információkat. Használjunk megbízható forrásokat.' },
  { title: 'Digitális függőség jelei', content: 'Ha a gyerek nem tud elszakadni a képernyőtől, ingerlékeny vagy szorong, érdemes beszélni róla.' },
  { title: 'Online vásárlás veszélyei', content: 'Ne adjunk meg bankkártyaadatokat gyerekeknek, és tanítsuk meg, hogy csak megbízható oldalról vásároljanak.' },
  { title: 'Nyílt kommunikáció', content: 'A bizalom a legfontosabb. Kérdezzünk rendszeresen, hallgassuk meg őket ítélkezés nélkül.' },
  { title: 'Szülői felügyeleti eszközök', content: 'Google Family Link, Microsoft Family Safety, Apple Screen Time – segítenek szabályozni a használatot.' },
  { title: 'Online identitás', content: 'Tanítsuk meg, hogy az online név ne legyen túl személyes, és ne áruljon el adatokat.' },
  { title: 'Profilkép kiválasztása', content: 'Ne legyen túl személyes vagy árulkodó. Inkább rajzolt vagy semleges kép legyen.' },
  { title: 'Kamu nyereményjátékok', content: 'Ha valami túl szép, hogy igaz legyen, valószínűleg nem igaz. Tanítsuk meg a gyerekeknek, hogy ne adják meg adataikat ilyen játékokban.' },
{ title: 'Trollkodás és provokáció', content: 'Ha valaki direkt idegesít vagy provokál online, az trollkodás. A legjobb válasz: figyelmen kívül hagyni és jelenteni.' },
{ title: 'Kijelentkezés fontossága', content: 'Tanítsuk meg, hogy mindig jelentkezzenek ki, főleg ha nem saját eszközt használnak.' },
{ title: 'Személyes adatok védelme', content: 'Ne osszanak meg címet, iskolát, telefonszámot vagy más érzékeny adatot idegenekkel.' },
{ title: 'Szülői példamutatás', content: 'A gyerekek azt követik, amit látnak. Ha mi is tudatosan használjuk az internetet, ők is azt tanulják meg.' },
{ title: 'Digitális udvariasság', content: 'Tanítsuk meg, hogy az interneten is érvényesek az udvariassági szabályok: ne bántsunk másokat, ne írjunk durván.' },
{ title: 'Online viselkedési szabályok', content: 'Beszéljük át, mit szabad és mit nem online: hogyan írjunk, mit osszunk meg, hogyan reagáljunk másokra.' },
{ title: 'Gyerekek online barátai', content: 'Ismerjük meg, kikkel beszélget a gyerek online. Ne tiltsuk, hanem érdeklődjünk és figyeljünk.' },
{ title: 'Online kihívások veszélyei', content: 'Egyes kihívások veszélyesek lehetnek. Beszéljünk róla, hogy nem kell mindent kipróbálni, amit mások csinálnak.' },
{ title: 'Képek megosztása', content: 'Mielőtt képet osztanak meg, kérdezzék meg maguktól: „Büszke lennék erre később is?”' },
{ title: 'Képernyőkép készítése', content: 'Bárki készíthet képet arról, amit írsz. Ezért fontos, hogy mit és hogyan kommunikálunk online.' },
{ title: 'Nyilvános Wi-Fi használata', content: 'Tanítsuk meg, hogy nyilvános hálózaton ne jelentkezzenek be fontos fiókokba.' },
{ title: 'Kétlépcsős azonosítás', content: 'Ez extra védelmet nyújt a fiókokhoz. Állítsuk be, ahol csak lehet.' },
{ title: 'Ismeretlen linkek', content: 'Ne kattintsanak olyan linkre, amit nem ismernek. Lehet, hogy vírus vagy átverés.' },
{ title: 'Online barátok valósága', content: 'Nem mindenki az, akinek mondja magát. Beszéljünk arról, hogy az online ismeretség nem mindig biztonságos.' },
{ title: 'Online kihívások és trendek', content: 'Egyes trendek veszélyesek lehetnek. Kérdezzük meg, mit látnak a gyerekek, és beszéljünk róla.' },
{ title: 'Digitális önvédelem', content: 'Tanítsuk meg, hogyan blokkoljanak, jelentsenek, és mikor kérjenek segítséget.' },
{ title: 'Online játékos nevek', content: 'Ne használjanak olyan nevet, ami elárulja a valódi nevüket, életkorukat vagy helyüket.' },
{ title: 'Kamera használat szabályai', content: 'Csak akkor kapcsolják be, ha biztonságos. Ne mutassanak olyat, amit megbánnának.' },
{ title: 'Hanghívások online', content: 'Ha valaki hívja őket, gondolják meg, hogy válaszolnak-e. Nem mindig az, akinek mondja magát.' },
{ title: 'Online tanulás biztonsága', content: 'A tanulási platformokon is lehet adatvédelmi kockázat. Ellenőrizzük a beállításokat.' },
{ title: 'Kéretlen tartalmak szűrése', content: 'Használjunk tartalomszűrőket, hogy a gyerekek ne találkozzanak erőszakos vagy felnőtt tartalommal.' },
{ title: 'Helymegosztás kikapcsolása', content: 'A legtöbb appban kikapcsolható a helymegosztás. Ez alapvető biztonsági lépés.' },
{ title: 'Digitális örökség', content: 'Beszéljünk arról, hogy az online tartalmak hosszú ideig elérhetők maradnak.' },
{ title: 'Online kihívások jelentése', content: 'Tanítsuk meg, hogy ha valami veszélyeset látnak, szóljanak – akár névtelenül is.' },
{ title: 'Iskolai szabályok az internethasználatra', content: 'Ismerjük meg az iskola digitális házirendjét, és beszéljük át a gyerekkel.' },
{ title: 'Digitális stressz', content: 'Az állandó online jelenlét fárasztó lehet. Segítsünk egyensúlyt találni.' },
{ title: 'Online identitáslopás', content: 'Ha valaki más nevében ír vagy posztol, az bűncselekmény is lehet. Tanítsuk meg, hogyan védekezzenek.' },
{ title: 'Képek újraküldése', content: 'Soha ne küldjenek tovább másról készült képet engedély nélkül.' },
{ title: 'Online közösségek', content: 'Beszéljünk arról, hogy milyen közösségekhez csatlakoznak, és mit osztanak meg ott.' },
{ title: 'Digitális szokások kialakítása', content: 'Segítsünk egészséges szokásokat kialakítani: mikor, mennyit, hogyan használják az internetet.' },
{ title: 'Online kihívások és humor', content: 'Nem minden viccesnek szánt tartalom ártalmatlan. Beszéljünk a határokról.' },
{ title: 'Képek manipulálása', content: 'Mutassuk meg, hogy képeket könnyű szerkeszteni – nem minden igaz, amit látunk.' },
{ title: 'Online közösségi nyomás', content: 'A gyerekek gyakran érzik, hogy „muszáj” posztolni. Segítsünk nekik nemet mondani.' },
{ title: 'Digitális bántalmazás hatásai', content: 'A zaklatás online is fáj. Figyeljünk a jelekre, és vegyük komolyan.' },
{ title: 'Online kihívások jelentése', content: 'Ha veszélyes kihívást látnak, tanítsuk meg, hogyan jelentsék a platformon vagy egy felnőttnek.' },
{ title: 'Online ismerkedés veszélyei', content: 'A gyerekek könnyen kerülhetnek kapcsolatba idegenekkel. Beszéljünk a határokról és a gyanús jelekről.' },
{ title: 'Digitális önkép', content: 'A közösségi média torzíthatja az önképet. Segítsünk reálisan látni önmagukat.' },
{ title: 'Online kihívások és influenszerek', content: 'Nem minden influenszer jó példa. Beszéljük meg, kiket követnek és miért.' },
{ title: 'Digitális pihenőidő', content: 'Fontos, hogy legyenek képernyőmentes időszakok. Közösen is tarthatunk ilyen szüneteket.' },
{ title: 'Online barátságok kezelése', content: 'Segítsünk megérteni, hogy az online barátságok is lehetnek értékesek – de veszélyesek is.' },
{ title: 'Digitális szülői jelenlét', content: 'Ne csak szabályozzunk – legyünk jelen, érdeklődjünk, játsszunk együtt a gyerekkel az online térben is.' },
];

export default function SzuloknekPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-red-600 text-center">👨‍👩‍👧‍👦 Digitális biztonság szülőknek</h2>
      <div className="flex items-center gap-4 mb-8 justify-center">
        <Image src="/pictures/avatar.png" alt="Avatar" width={70} height={70} className="rounded-full shadow-md" />
        <div className="bg-white p-4 rounded-xl shadow-md max-w-xl">
          <p className="text-slate-700">
            Kattintson az alábbi témákra, hogy részletesen megismerje, hogyan védheti meg gyermekét az online térben.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {topics.map((topic, i) => (
          <div key={i} className="bg-red-50 p-4 rounded-xl shadow-md">
            <button
              onClick={() => toggle(i)}
              className="w-full text-left font-bold text-red-700 text-lg hover:underline"
            >
              {topic.title}
            </button>
            {openIndex === i && (
              <div className="mt-3 text-slate-800 whitespace-pre-line">{topic.content}</div>
            )}
          </div>
        ))}
      </div>
      <div className="mb-6">
        <VisszaGomb />
      </div>

    </div>
  );
}