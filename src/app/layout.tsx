import './globals.css';
import './styles/custom.css'
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '700'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}