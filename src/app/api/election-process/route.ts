import { NextResponse } from 'next/server';

export async function GET() {
  const electionProcess = [
    {
      id: 1,
      title: "Voter Registration",
      description: "Eligible citizens register to vote and verify their information",
      timeline: "6-12 months before election",
      steps: [
        "Check eligibility requirements",
        "Complete registration form",
        "Submit required documents",
        "Receive voter ID card"
      ],
      importance: "High - Cannot vote without registration"
    },
    {
      id: 2,
      title: "Candidate Nomination",
      description: "Political parties and independent candidates file their nominations",
      timeline: "2-3 months before election",
      steps: [
        "Party selects candidates",
        "Submit nomination papers",
        "Pay security deposit",
        "Scrutiny of nominations"
      ],
      importance: "High - Determines who can contest"
    },
    {
      id: 3,
      title: "Campaign Period",
      description: "Candidates campaign and present their platforms to voters",
      timeline: "2-4 weeks before election",
      steps: [
        "Public rallies and meetings",
        "Door-to-door campaigning",
        "Media advertisements",
        "Debates and discussions"
      ],
      importance: "Medium - Informs voter decisions"
    },
    {
      id: 4,
      title: "Election Day",
      description: "Voters cast their ballots at designated polling stations",
      timeline: "Single day",
      steps: [
        "Visit polling station",
        "Verify identity",
        "Receive ballot paper/EVM",
        "Cast vote secretly"
      ],
      importance: "Critical - Main voting event"
    },
    {
      id: 5,
      title: "Counting & Results",
      description: "Votes are counted and results are declared",
      timeline: "1-3 days after election",
      steps: [
        "Secure ballot boxes",
        "Count votes in presence of agents",
        "Announce constituency results",
        "Declare overall winner"
      ],
      importance: "Critical - Determines outcome"
    }
  ];

  return NextResponse.json(electionProcess);
}
