import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="mx-[1rem]">
        <h1 className="mt-[5rem] mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl grid justify-center items-center text-center">
          Welcome to Better Anki
        </h1>
        <div className="grid justify-center items-center">
          <p className="text-center max-w-lg">
            The smarter way to learn and retain knowledge. A powerful flashcard
            system built to enhance your learning efficiency. Whether you're
            stuyding for exams, learning a new language, or mastering a new skill,
            we've got you
          </p>
        </div>
        <div className="flex justify-center mt-[2rem]">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Get Started
          </button>
        </div>
        <div className="grid justify-center items-center mt-[5rem] mx-[2rem]">
          <ul className="">
            <li className="list-disc">Seamless Flashcard Creation</li>
            <li className="list-disc">Learn Anywhere, Anytime</li>
            <li className="list-disc">Advanced Spaced Repetition</li>
            <li className="list-disc">Customizable and Collaborative</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
