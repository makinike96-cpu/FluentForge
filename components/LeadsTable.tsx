'use client';
import { useEffect, useState } from 'react';
import { createServerClient } from '@/lib/supabase';
import { Lead } from '@/types/lead';

export default function LeadsTable() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    setLoading(true);
    const supabase = createServerClient();
    const { data } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });
    setLeads(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchLeads(); }, []);

  return (
    <div className="overflow-x-auto">
      <button onClick={fetchLeads} className="mb-6 btn-primary">Обновить список</button>
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4">Дата</th>
            <th className="p-4">Имя</th>
            <th className="p-4">Телефон</th>
            <th className="p-4">Email</th>
            <th className="p-4">Ответы</th>
          </tr>
        </thead>
        <tbody>
          {leads.map(lead => (
            <tr key={lead.id} className="border-b hover:bg-gray-50">
              <td className="p-4">{new Date(lead.created_at).toLocaleString('ru-RU')}</td>
              <td className="p-4 font-medium">{lead.name}</td>
              <td className="p-4">{lead.phone}</td>
              <td className="p-4">{lead.email}</td>
              <td className="p-4 text-sm">
                <pre className="whitespace-pre-wrap max-h-40 overflow-auto">{JSON.stringify(lead.answers, null, 2)}</pre>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {loading && <p className="text-center py-8">Загрузка...</p>}
    </div>
  );
}