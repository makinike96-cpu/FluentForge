export interface Lead {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  email: string;
  answers: Record<string, string>;
}