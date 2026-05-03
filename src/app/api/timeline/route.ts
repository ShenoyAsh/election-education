import { NextResponse } from 'next/server';

export async function GET() {
  const timelineData = [
    {
      date: "January-February",
      year: "2024",
      events: [
        "Election Commission announces schedule",
        "Model Code of Conduct comes into effect",
        "Political parties begin preparations"
      ],
      status: "completed"
    },
    {
      date: "March",
      year: "2024",
      events: [
        "Last date for voter registration",
        "Filing of nominations begins",
        "Publication of electoral rolls"
      ],
      status: "completed"
    },
    {
      date: "April",
      year: "2024",
      events: [
        "Scrutiny of nominations",
        "Last date for withdrawal of candidature",
        "Campaigning intensifies"
      ],
      status: "completed"
    },
    {
      date: "May",
      year: "2024",
      events: [
        "Campaigning ends 48 hours before polling",
        "Voting day(s)",
        "Peaceful polling monitored"
      ],
      status: "current"
    },
    {
      date: "June",
      year: "2024",
      events: [
        "Counting of votes",
        "Results declaration",
        "Formation of new government"
      ],
      status: "upcoming"
    }
  ];

  return NextResponse.json(timelineData);
}
