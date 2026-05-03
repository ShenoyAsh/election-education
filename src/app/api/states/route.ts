import { NextResponse } from 'next/server';
import { statesData } from '@/lib/mock-data/states';

export async function GET() {
  return NextResponse.json(Object.values(statesData));
}
