'use client';
import VisszaGomb from '@/components/VisszaGomb';
import { useState } from 'react';

export default function KerdesValasz() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

const askGemini = async () => {
  try {
    setLoading(true);
    setAnswer('');

    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    });

    if (!res.ok) {
      throw new Error(`Hiba: ${res.status}`);
    }

    const data = await res.json();
    console.log('Gemini válasz:', data);

    setAnswer(data.reply || 'Hoppá, nem sikerült választ kapni.');
  } catch (error) {
    console.error('Gemini API hiba:', error);
    setAnswer('Hiba történt a kérdés feldolgozása közben.');
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">❓ Kérdezz–felelek</h2>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        placeholder="Írd be a kérdésed..."
      />
      <button
        onClick={askGemini}
        className="px-4 py-2 bg-blue-500 text-white rounded"
        disabled={loading}
      >
        {loading ? 'Válasz készül...' : 'Kérdezz'}
      </button>
      {answer && (
  <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded shadow-sm text-gray-800">
    <p>{answer}</p>
  </div>
)}

   <div className="mb-6">
      <VisszaGomb />
    </div>
</div>
    
    
  );
}