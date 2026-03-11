import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { login, password } = await request.json();

  if (login === process.env.ADMIN_LOGIN && password === process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ success: true });
  }
  return NextResponse.json({ success: false }, { status: 401 });
}