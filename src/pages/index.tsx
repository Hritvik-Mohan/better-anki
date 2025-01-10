import Navbar from "@/components/landing_page_components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="py-6 px-[10%] xl:px-[20%]">
        <h1 className="pb-[2rem] font-semibold text-gray-800 text-[2rem] sm:text-[2.5rem] md:text-[4rem] xl:text-[6rem]">
          Master Your Learning with Better{" "}
          <span className="bg-[rgba(77,110,213,1)] text-white">Anki</span>
        </h1>
        <p className="font-normal text-gray-800 text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] xl:text-[2rem]">
          An enhanced flashcard experience designed to{" "}
          <span className="bg-yellow-400 text-white">supercharge</span> your{" "}
          <span className="bg-orange-500 text-white">memory</span>{" "}
          <span className="bg-green-500 text-white">retention</span> and make
          studying fun.
        </p>
        <Link href="/dashboard">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-[1.1rem] xl:text[1.2rem] px-5 py-2.5 my-[2rem] dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Get Started for Free
          </button>
        </Link>
        <section className="mt-[4rem]">
          <div className="my-[2rem]text-gray-800 font-semibold text-[2rem] sm:text-[2.5rem] md:text-[3rem] xl:text[3.5rem] 2xl:text-[4rem]">Intelligent Spaced Repetition</div>
          <p className="mb-[2rem] font-normal text-gray-800 text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] xl:text[1.75rem] 2xl:text-[2rem]">
            Boost your long-term memory retention with adaptive scheduling based
            on your learning pace.
          </p>
        </section>
        <section className="mt-[4rem]">
          <div className="my-[2rem]text-gray-800 font-semibold text-[2rem] sm:text-[2.5rem] md:text-[3rem] xl:text[3.5rem] 2xl:text-[4rem]">Intuitive and Modern Interface</div>
          <p className="mb-[2rem] font-normal text-gray-800 text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] xl:text[1.75rem] 2xl:text-[2rem]">
          Enjoy a clean, user-friendly design that makes creating and managing cards effortless.
          </p>
        </section>
        <section className="mt-[4rem]">
          <div className="my-[2rem]text-gray-800 font-semibold text-[2rem] sm:text-[2.5rem] md:text-[3rem] xl:text[3.5rem] 2xl:text-[4rem]">Advanced Customization Options</div>
          <p className="mb-[2rem] font-normal text-gray-800 text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] xl:text[1.75rem] 2xl:text-[2rem]">
          From rich-text formatting to media support, create flashcards that suit your learning style.
          </p>
        </section>
        <section className="mt-[4rem]">
          <div className="my-[2rem]text-gray-800 font-semibold text-[2rem] sm:text-[2.5rem] md:text-[3rem] xl:text[3.5rem] 2xl:text-[4rem]">Real-Time Collaboration</div>
          <p className="mb-[2rem] font-normal text-gray-800 text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] xl:text[1.75rem] 2xl:text-[2rem]">
          Study with friends or share decks seamlessly.
          </p>
        </section>
        <section className="mt-[4rem]">
          <div className="my-[2rem]text-gray-800 font-semibold text-[2rem] sm:text-[2.5rem] md:text-[3rem] xl:text[3.5rem] 2xl:text-[4rem]">How It Works</div>
          <p className="my-[1rem] font-normal text-gray-800 text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] xl:text[1.75rem] 2xl:text-[2rem]">
          <span className="font-extrabold">Step 1:</span> Create personalized flashcards in seconds.
          </p>
          <p className="mb-[1rem] font-normal text-gray-800 text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] xl:text[1.75rem] 2xl:text-[2rem]">
          <span className="font-extrabold">Step 2:</span> Study smarter with spaced repetition algorithms.
          </p>
          <p className="mb-[1rem] font-normal text-gray-800 text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] xl:text[1.75rem] 2xl:text-[2rem]">
          <span className="font-extrabold">Step 3:</span> Track your progress and keep improving.
          </p>
        </section>
        <section className="mt-[4rem]">
          <div className="my-[2rem]text-gray-800 font-semibold text-[2rem] sm:text-[2.5rem] md:text-[3rem] xl:text[3.5rem] 2xl:text-[4rem]">Why Better Anki?</div>
          <p className="mb-[2rem] font-normal text-gray-800 text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] xl:text[1.75rem] 2xl:text-[2rem]">
          Better Anki was built for students, professionals, and lifelong learners who want to optimize their study process. Whether you&apos;re learning a new language, preparing for exams, or mastering a skill, Better Anki is here to make it easier.
          </p>
        </section>
        <Link href="/dashboard">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-[1rem] xl:text[1.5rem] 2xl:text-[2rem] px-5 py-2.5 my-[2rem] dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Get Started for Free
          </button>
        </Link>
        <section className="mb-[10rem]">
        </section>
      </div>
    </div>
  );
}
