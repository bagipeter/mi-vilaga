import { NextResponse } from 'next/server';

// Ez az útvonal fogadja a kérdést a kliens oldaltól, és választ kér a Gemini AI-tól
export async function POST(req) {
  try {
    // A kérdés kiolvasása a beérkező JSON-ből
    const { question } = await req.json();

    // Gemini 2.0 Flash modell meghívása a Google AI Studio kulccsal
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Te egy kedves, türelmes tanár vagy, aki 8–12 éves gyerekeknek magyaráz el dolgokat.
Mindig egyszerű, érthető nyelvezetet használsz, példákkal és játékos hasonlatokkal.
Soha nem adsz félelmetes, durva vagy felnőtteknek szóló tartalmat.
Mindig bátorítod a gyereket, hogy kérdezzen többet.
Kérdés: ${question}`
                }
              ]
            }
          ]
        })
      }
    );

    // A válasz feldolgozása
    const data = await response.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Hoppá, nem sikerült választ kapni.';

    // A válasz visszaküldése a kliensnek
    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Gemini API hiba:', error);
    return NextResponse.json({ reply: 'Hiba történt a válasz lekérésekor.' }, { status: 500 });
  }
}