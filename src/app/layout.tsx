import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Arya Dahal | Portfolio',
  description: 'Portfolio of Arya Dahal, a Computer Engineering student specializing in AI/ML and full-stack development.',
  keywords: ['Arya Dahal', 'Full Stack Developer', 'AI Engineer', 'Computer Engineering', 'Portfolio', 'Nepal'],
  authors: [{ name: 'Arya Dahal' }],
  creator: 'Arya Dahal',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans min-h-screen bg-neutral-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}

