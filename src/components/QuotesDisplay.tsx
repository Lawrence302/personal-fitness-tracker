import { useEffect, useState } from "react";
import { quotes } from "../lib/quotes";

const getRandomIndex = (length: number) => {
  // console.log("length is ", length);
  return Math.floor(Math.random() * length);
};
const QuotesDisplay = () => {
  const [randomQuote, setRandomQuote] = useState<string>(
    () => quotes[getRandomIndex(quotes.length)],
  );
  const getRandomQuote = () => {
    const index = Math.floor(Math.random() * quotes.length);

    return index;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = getRandomQuote();
      // console.log(randomIndex);
      setRandomQuote(quotes[randomIndex]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='   mb-4 w-full flex justify-center '>
      <p className='bg-zinc-800 px-4 py-1 w-fit text-sm md:text-base rounded italic text-white font-semibold'>
        {randomQuote}
      </p>
    </div>
  );
};

export default QuotesDisplay;
