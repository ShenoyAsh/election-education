import { NextResponse } from 'next/server';

export async function GET() {
  const faqData = [
    {
      id: 1,
      question: "Who is eligible to vote in elections?",
      answer: "Citizens who are 18 years or older on the qualifying date, registered as voters, and possess a valid voter ID card are eligible to vote.",
      category: "Eligibility"
    },
    {
      id: 2,
      question: "How do I register to vote?",
      answer: "You can register online through the Election Commission's website, fill Form 6, submit required documents (age proof, address proof), and await verification.",
      category: "Registration"
    },
    {
      id: 3,
      question: "What is the Model Code of Conduct?",
      answer: "It's a set of guidelines for political parties and candidates to conduct during elections, ensuring fair play and preventing corrupt practices.",
      category: "Rules"
    },
    {
      id: 4,
      question: "Can I vote if I'm not in my home city?",
      answer: "Yes, you can vote at any polling station in your constituency. You can also apply for a postal ballot if unable to visit in person.",
      category: "Voting"
    },
    {
      id: 5,
      question: "How are votes counted?",
      answer: "Votes are counted electronically for EVMs or manually for paper ballots, in the presence of candidates' representatives and election officials.",
      category: "Process"
    },
    {
      id: 6,
      question: "What happens if results are tied?",
      answer: "In case of a tie, a recount is conducted. If still tied, the winner is decided by drawing lots as per election rules.",
      category: "Results"
    }
  ];

  return NextResponse.json(faqData);
}
