'use client';
import { useState } from 'react';

interface Props {
  onLogin: () => void;
}

export default function AdminLogin({ onLogin }: Props) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/admin-login', {
      method: 'POST',
      body: JSON.stringify({ login, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      onLogin();
    } else {
      setError('Неверный логин или пароль');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-10 rounded-3xl shadow-xl">
      <h2 className="text-3xl font-bold mb-8 text-center">Вход в админ-панель</h2>
      <input type="text" placeholder="Логин" className="input mb-4" value={login} onChange={e => setLogin(e.target.value)} required />
      <input type="password" placeholder="Пароль" className="input mb-6" value={password} onChange={e => setPassword(e.target.value)} required />
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button type="submit" className="btn-primary w-full">Войти</button>
    </form>
  );
}