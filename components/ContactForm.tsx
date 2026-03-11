'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

interface Props {
  answers: Record<string, string>;
  onSuccess: () => void;
}

export default function ContactForm({ answers, onSuccess }: Props) {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return alert("Подтвердите согласие на обработку данных");

    setLoading(true);
    const { error } = await supabase
      .from('leads')
      .insert([{ 
        name: form.name, 
        phone: form.phone, 
        email: form.email, 
        answers 
      }]);

    if (!error) {
      onSuccess();
    } else {
      alert("Ошибка отправки. Попробуйте позже.");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto px-6 space-y-8">
      <input
        type="text"
        placeholder="Ваше имя"
        className="input"
        required
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="tel"
        placeholder="+7 (___) ___-__-__"
        className="input"
        required
        value={form.phone}
        onChange={e => setForm({ ...form, phone: e.target.value })}
      />
      <input
        type="email"
        placeholder="Ваш email"
        className="input"
        required
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
      />

      <label className="flex items-start gap-3 text-sm">
        <input
          type="checkbox"
          checked={consent}
          onChange={e => setConsent(e.target.checked)}
          className="mt-1 w-5 h-5 accent-primary"
          required
        />
        <span>Я согласен на обработку персональных данных в соответствии с <a href="/privacy" className="underline">Политикой конфиденциальности</a></span>
      </label>

      <button type="submit" disabled={loading} className="btn-primary w-full">
        {loading ? "Отправка..." : "Отправить и получить консультацию"}
      </button>
    </form>
  );
}