'use client';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b">
      <div className="max-w-5xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-primary" />
          <span className="text-2xl font-bold text-dark">FluentPath</span>
        </div>
        <nav className="flex gap-8 text-lg">
          <Link href="/" className="hover:text-primary transition">Главная</Link>
          <Link href="/privacy" className="hover:text-primary transition">Политика конфиденциальности</Link>
        </nav>
      </div>
    </header>
  );
}