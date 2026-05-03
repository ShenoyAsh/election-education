# Election Process Education Platform

A comprehensive, interactive web application built with Next.js that helps users understand the election process, timelines, and steps in an engaging and easy-to-follow way.

## 🚀 Features

- **Interactive Election Process Guide**: Step-by-step breakdown of the electoral process
- **Dynamic Timeline**: Visual timeline showing key election events and milestones
- **FAQ Section**: Common questions about voting and elections
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Animations**: Smooth transitions, hover effects, and micro-interactions
- **Beautiful UI**: Gradient backgrounds, card-based layouts, and modern design patterns

## 🛠 Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI
- **Deployment**: Docker, Vercel ready

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd election
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🐳 Docker Deployment

Using Docker Compose (recommended):
```bash
docker-compose up -d
```

Using Docker directly:
```bash
docker build -t election-app .
docker run -p 3000:3000 election-app
```

## 🌐 Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

Or use the Vercel CLI:
```bash
npm install -g vercel
vercel
```

## 📱 Features Overview

### Election Process
- 5 key stages with detailed explanations
- Timeline information for each stage
- Priority indicators for importance
- Interactive cards with hover effects

### Timeline View
- Chronological display of election events
- Status indicators (completed, current, upcoming)
- Smooth animations and transitions
- Responsive layout

### FAQ Section
- Common questions about voting
- Clear, concise answers
- Expandable cards with hover effects
- Categorized by topic

## 🎨 Design Highlights

- **Gradient Backgrounds**: Beautiful color transitions throughout
- **Card-Based Layout**: Clean, organized content presentation
- **Micro-interactions**: Hover states, scale effects, and smooth transitions
- **Responsive Grid**: Adapts to all screen sizes
- **Modern Typography**: Clean, readable fonts with proper hierarchy
- **Color-Coded Elements**: Visual indicators for different states and priorities

## 🔧 Configuration

The application includes:
- Docker configuration for containerized deployment
- Vercel configuration for serverless deployment
- TypeScript for type safety
- ESLint for code quality
- Tailwind CSS for styling

## 📄 API Endpoints

- `/api/election-process` - Election process data
- `/api/timeline` - Timeline events and dates
- `/api/faq` - Frequently asked questions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Purpose

This platform aims to:
- Educate citizens about the democratic process
- Increase voter participation through knowledge
- Provide accessible information about elections
- Promote civic engagement and understanding
