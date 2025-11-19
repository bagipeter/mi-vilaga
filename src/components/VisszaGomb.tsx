'use client';
import { useRouter } from 'next/navigation';

export default function VisszaGomb() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/')}
      className="mt-8 px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition-all"
    >
      ⬅️ Vissza az opciókhoz
    </button>
  );
}