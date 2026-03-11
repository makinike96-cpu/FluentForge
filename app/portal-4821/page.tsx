'use client';
import { useState, useEffect } from 'react';
import AdminLogin from '@/components/AdminLogin';
import LeadsTable from '@/components/LeadsTable';

export default function AdminPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Проверка куки при загрузке
  useEffect(() => {
    if (document.cookie.includes('admin_auth=true')) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    document.cookie = "admin_auth=true; path=/; max-age=86400"; // 24 часа
    setIsAuthenticated(true);
  };

  const logout = () => {
    document.cookie = "admin_auth=; path=/; max-age=0";
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <AdminLogin onLogin={handleLoginSuccess} />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">Список лидов</h1>
        <button onClick={logout} className="text-red-500 hover:underline">Выйти</button>
      </div>
      <LeadsTable />
    </div>
  );
}