import React from 'react';
import NewsCard from '../components/NewsCard';

// Mock news data
const NEWS = [
  {
    title: "Community Market Brings Color to High Street",
    date: "2025-07-09",
    summary: "Local vendors and artists came together for a vibrant market this Saturday, attracting hundreds of visitors.",
    author: "Jane Doe"
  },
  {
    title: "New Park Opening Ceremony a Success",
    date: "2025-07-08",
    summary: "Families enjoyed sunshine, games, and street food at the opening of Riverside Park downtown.",
    author: "Dan Evans"
  },
  {
    title: "Students Win Regional Robotics Competition",
    date: "2025-07-07",
    summary: "The London Technical College robotics team claimed 1st place, making the city proud.",
    author: "Tim Brown"
  }
];

export default function Home() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Latest Local News</h1>
      <div>
        {NEWS.map(item => <NewsCard key={item.title} news={item} />)}
      </div>
    </section>
  );
}
