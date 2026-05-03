import { NextResponse } from 'next/server';
import { quizQuestions } from '@/lib/mock-data/quiz-questions';

export async function GET() {
  return NextResponse.json(quizQuestions);
}
