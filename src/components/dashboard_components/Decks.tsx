import React from "react";
import DeckCard from "./DeckCard";
import { useLayoutContext } from "@/context/LayoutContext";

export default function Decks() {
  const decks = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      description:
        "Learn the basics of JavaScript, including syntax, variables, and functions.",
      cardCount: 25,
    },
    {
      id: 2,
      title: "React Essentials",
      description:
        "A beginner's guide to building dynamic user interfaces with React.",
      cardCount: 18,
    },
    {
      id: 3,
      title: "CSS Mastery",
      description:
        "Advanced techniques for creating responsive and visually appealing designs.",
      cardCount: 22,
    },
    {
      id: 4,
      title: "Data Structures in Python",
      description:
        "Explore fundamental data structures such as arrays, linked lists, and trees.",
      cardCount: 20,
    },
    {
      id: 5,
      title: "Machine Learning Basics",
      description:
        "An introduction to supervised and unsupervised learning with Python.",
      cardCount: 30,
    },
    {
      id: 6,
      title: "Introduction to SQL",
      description:
        "Learn how to write SQL queries to manage and retrieve data from databases.",
      cardCount: 28,
    },
    {
      id: 7,
      title: "Web Accessibility",
      description: "Make your websites inclusive and accessible for all users.",
      cardCount: 15,
    },
    {
      id: 8,
      title: "Git and Version Control",
      description: "Master Git commands for version control and collaboration.",
      cardCount: 18,
    },
    {
      id: 9,
      title: "GraphQL APIs",
      description:
        "Build and query efficient APIs with GraphQL for modern applications.",
      cardCount: 24,
    },
    {
      id: 10,
      title: "UI/UX Design Principles",
      description:
        "Understand the principles of user-centered design and prototyping.",
      cardCount: 20,
    },
    {
      id: 11,
      title: "Python for Data Analysis",
      description:
        "Analyze datasets and create visualizations using pandas and Matplotlib.",
      cardCount: 35,
    },
    {
      id: 12,
      title: "Kotlin for Android Development",
      description:
        "Develop Android apps with Kotlin's concise and expressive syntax.",
      cardCount: 27,
    },
    {
      id: 13,
      title: "TypeScript for Developers",
      description: "Add type safety to your JavaScript code with TypeScript.",
      cardCount: 21,
    },
    {
      id: 14,
      title: "Cybersecurity Basics",
      description:
        "Learn the fundamentals of securing systems and protecting data.",
      cardCount: 23,
    },
    {
      id: 15,
      title: "Node.js and Express",
      description:
        "Create backend applications and APIs with Node.js and Express.",
      cardCount: 26,
    },
    {
      id: 16,
      title: "RESTful API Design",
      description:
        "Design robust and scalable RESTful APIs for web applications.",
      cardCount: 20,
    },
    {
      id: 17,
      title: "Algorithms and Complexity",
      description:
        "Understand algorithm design and analyze time and space complexity.",
      cardCount: 22,
    },
    {
      id: 18,
      title: "Blockchain Basics",
      description:
        "Explore how blockchain works and its applications in the modern world.",
      cardCount: 19,
    },
    {
      id: 19,
      title: "DevOps Fundamentals",
      description:
        "Learn the basics of CI/CD, containerization, and infrastructure as code.",
      cardCount: 25,
    },
    {
      id: 20,
      title: "Docker for Beginners",
      description:
        "Containerize applications and streamline deployment workflows with Docker.",
      cardCount: 17,
    },
  ];

  const { isGridLayout } = useLayoutContext();

  return (
    <div
      className={`transition-all duration-500 ease-in-out ${
        isGridLayout
          ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          : "flex flex-col gap-4"
      }`}
    >
      {decks.map((deck) => (
        <DeckCard
          key={deck.id}
          deckTitle={deck.title}
          deckDescription={deck.description}
          cardCount={deck.cardCount}
        />
      ))}
    </div>
  );
}
