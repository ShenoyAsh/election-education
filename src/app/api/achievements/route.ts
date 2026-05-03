import { NextResponse } from 'next/server';
import { achievements } from '@/lib/mock-data/achievements';

export async function GET() {
  return NextResponse.json(achievements);
}
