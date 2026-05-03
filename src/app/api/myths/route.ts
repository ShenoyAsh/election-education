import { NextResponse } from 'next/server';
import { electionMyths } from '@/lib/mock-data/myths';

export async function GET() {
  return NextResponse.json(electionMyths);
}
