import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'S. Premchand — Computer Science Student & Developer',
  description: 'S. Premchand is a Computer Science student at SR University building software, practicing DSA, and working on AI/ML projects.',
  keywords: ['S. Premchand', 'Computer Science', 'Python', 'DSA', 'AI', 'Machine Learning', 'Software Development'],
  openGraph: {
    title: 'S. Premchand — Developer Portfolio',
    description: 'Projects, problem solving, experiments, certifications, and engineering journey.',
    type: 'website',
  },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
