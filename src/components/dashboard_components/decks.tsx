import React from "react";
import DeckCard from "./deck_card";
import { useLayoutContext } from "@/context/LayoutContext";

export default function Decks() {
  // const [selectedDeck, setSelectedDeck] = useState<{
  //   id: number;
  //   title: string;
  //   description: string;
  //   cardCount: number;
  // } | null>(null);

  const decks = [
    {
      id: 1,
      title: "Deck 1",
      description:
        "Introduction to React and the basics of building user interfaces.",
      cardCount: 20,
    },
    {
      id: 2,
      title: "Deck 2",
      description:
        "Advanced React concepts including Context API and Render Props.",
      cardCount: 15,
    },
    {
      id: 3,
      title: "Deck 3",
      description:
        "Mastering React Hooks such as useState, useEffect, and useReducer.",
      cardCount: 30,
    },
    {
      id: 4,
      title: "Deck 4",
      description:
        "Understanding Redux for state management in React applications.",
      cardCount: 25,
    },
    {
      id: 5,
      title: "Deck 5",
      description:
        "Building reusable components and design systems using React.",
      cardCount: 18,
    },
    {
      id: 6,
      title: "Deck 6",
      description:
        "React Router for dynamic routing and creating multi-page apps.",
      cardCount: 22,
    },
    {
      id: 7,
      title: "Deck 7",
      description:
        "Server-side rendering with Next.js for better performance and SEO.",
      cardCount: 28,
    },
    {
      id: 8,
      title: "Deck 8",
      description:
        "Integrating APIs in React apps using Axios and the Fetch API.",
      cardCount: 35,
    },
    {
      id: 9,
      title: "Deck 9",
      description:
        "Optimizing React apps with memoization, lazy loading, and Suspense.",
      cardCount: 12,
    },
    {
      id: 10,
      title: "Deck 10",
      description:
        "Testing React components using Jest and React Testing Library.",
      cardCount: 17,
    },
    {
      id: 11,
      title: "Deck 11",
      description:
        "Introduction to TypeScript in React for type safety and robust applications.",
      cardCount: 20,
    },
    {
      id: 12,
      title: "Deck 12",
      description:
        "Exploring Material-UI for building styled components in React.",
      cardCount: 15,
    },
    {
      id: 13,
      title: "Deck 13",
      description:
        "Optimizing performance with React's PureComponent and React.memo.",
      cardCount: 19,
    },
    {
      id: 14,
      title: "Deck 14",
      description: "Using Styled Components for CSS-in-JS in React.",
      cardCount: 16,
    },
    {
      id: 15,
      title: "Deck 15",
      description:
        "Advanced React Patterns such as compound components and higher-order components (HOCs).",
      cardCount: 23,
    },
    {
      id: 16,
      title: "Deck 16",
      description: "Building Progressive Web Apps (PWA) with React.",
      cardCount: 14,
    },
    {
      id: 17,
      title: "Deck 17",
      description:
        "Using GraphQL with React for querying and manipulating data.",
      cardCount: 21,
    },
    {
      id: 18,
      title: "Deck 18",
      description: "Understanding Webpack and Babel in React applications.",
      cardCount: 26,
    },
    {
      id: 19,
      title: "Deck 19",
      description:
        "Integrating third-party libraries like Leaflet for maps and D3.js for data visualization.",
      cardCount: 24,
    },
    {
      id: 20,
      title: "Deck 20",
      description: "Advanced State Management with Zustand and Recoil.",
      cardCount: 29,
    },
    {
      id: 21,
      title: "Deck 21",
      description: "Building a full-stack app with React and Node.js.",
      cardCount: 32,
    },
    {
      id: 22,
      title: "Deck 22",
      description:
        "Handling forms and validation in React using Formik and React Hook Form.",
      cardCount: 20,
    },
    {
      id: 23,
      title: "Deck 23",
      description: "Serverless React with AWS Lambda and DynamoDB.",
      cardCount: 18,
    },
    {
      id: 24,
      title: "Deck 24",
      description: "Creating a chat application with React and WebSockets.",
      cardCount: 27,
    },
    {
      id: 25,
      title: "Deck 25",
      description:
        "Handling authentication in React apps with Firebase and Auth0.",
      cardCount: 22,
    },
    {
      id: 26,
      title: "Deck 26",
      description: "Styling React components with Tailwind CSS.",
      cardCount: 20,
    },
    {
      id: 27,
      title: "Deck 27",
      description: "Managing global state with React Context API and hooks.",
      cardCount: 23,
    },
    {
      id: 28,
      title: "Deck 28",
      description:
        "Unit and integration testing React components with Cypress.",
      cardCount: 16,
    },
    {
      id: 29,
      title: "Deck 29",
      description: "Building real-time applications with React and Firebase.",
      cardCount: 30,
    },
    {
      id: 30,
      title: "Deck 30",
      description: "Creating custom React Hooks to encapsulate reusable logic.",
      cardCount: 21,
    },
  ];

  const { isGridLayout } = useLayoutContext();

  // const handleDeckClick = (deck: typeof decks[0]) => {
  //   console.log(deck);
  //   setSelectedDeck(deck);
  //   setOpen(true);
  // }

  // console.log(selectedDeck);

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
