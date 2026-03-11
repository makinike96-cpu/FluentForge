'use client';
import { CheckCircle } from 'lucide-react';

export default function ThankYou() {
  return (
    <div className="text-center py-20 px-6">
      <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-8" />
      <h2 className="text-5xl font-bold mb-4">Спасибо!</h2>
      <p className="text-2xl text-gray-600 max-w-md mx-auto">Мы получили ваши ответы и свяжемся с вами в течение 24 часов для бесплатной консультации.</p>
      <button onClick={() => window.location.reload()} className="mt-12 btn-primary">
        Пройти опрос ещё раз
      </button>
    </div>
  );
}