import { useState } from "react";
import { Info } from "lucide-react";

const InfoPage = () => {
  const [showAppInfo, setShowAppInfo] = useState(true);
  return (
    <div className='min-h-screen bg-zinc-900 text-zinc-100 px-6 py-16'>
      <div
        className=' rounded   font-bold  mb-3 flex items-center justify-center'
        onClick={() => setShowAppInfo(!showAppInfo)}
      >
        <button
          aria-label='About MY CALI TRACK'
          className='flex items-center rounded gap-2 p-1 md:p-2 bg-blue-600 px-4 hover:bg-blue-500 transition'
        >
          <Info size={14} />
          {showAppInfo ? "Learn About Calisthenics" : "Learn About this App"}
        </button>
      </div>

      {showAppInfo ? (
        <div className='space-y-4  leading-relaxed'>
          <p>
            <strong className='text-white'>MY CALI TRACK</strong> is a fitness
            tracking app built for calisthenics athletes and anyone training
            with bodyweight exercises.
          </p>

          <p>
            Track your workouts, log exercises, earn points, and progress
            through physical ranks — all without the need for a gym.
          </p>

          <p className='italic text-cyan-400 border-l-2 border-cyan-500 pl-3'>
            Where there is a floor, there is a gym.
            <br />
            Your only limit is you.
          </p>

          <p className='text-xs text-zinc-500'>
            Designed for consistency, discipline, and real progress using
            nothing but your body.
          </p>
        </div>
      ) : (
        <div className='max-w-4xl mx-auto space-y-20 mt-6'>
          {/* Hero */}
          <header className='text-center space-y-4'>
            <h1 className='text-3xl md:text-5xl font-extrabold tracking-tight'>
              CALISTHENICS
            </h1>
            <p className='text-zinc-400 uppercase md:text-2xl tracking-widest'>
              Strength · Control · Freedom
            </p>
          </header>

          {/* What Is Calisthenics */}
          <section className='space-y-4'>
            <h2 className=' text-xl md:text-3xl font-bold border-l-4 border-zinc-600 pl-4'>
              What Is Calisthenics?
            </h2>
            <p className='text-zinc-300 leading-relaxed'>
              Calisthenics is the art of building strength using your own body
              as resistance. No machines. No heavy equipment. No dependence on a
              gym.
            </p>
            <p className='text-zinc-300 leading-relaxed'>
              Your body, gravity, and the floor are enough. Calisthenics focuses
              on bodyweight strength, full-body control, balance, coordination,
              mobility, and skill-based movement.
            </p>
            <p className='text-zinc-400 italic'>
              Push-ups, pull-ups, squats, planks, and handstands are not basic —
              they are foundations of mastery.
            </p>
          </section>

          {/* Floor Is Your Gym */}
          <section className='space-y-4'>
            <h2 className='text-xl md:text-3xl font-bold border-l-4 border-zinc-600 pl-4'>
              The Floor Is Your Gym
            </h2>
            <p className='text-zinc-300 leading-relaxed'>
              In calisthenics, the floor is not a limitation — it is a tool. If
              you can get on the ground, you can train. Your room, a park,
              concrete, or grass — it doesn&apos;t matter.
            </p>
            <p className='text-zinc-400 font-semibold'>
              The floor doesn&apos;t care about excuses. Gravity never takes a
              day off.
            </p>
          </section>

          {/* Philosophy */}
          <section className='space-y-6'>
            <h2 className='text-xl md:text-3xl font-bold border-l-4 border-zinc-600 pl-4'>
              The Philosophy
            </h2>
            <ul className='grid sm:grid-cols-2 gap-4 text-zinc-300'>
              <li className='bg-zinc-800/60 p-4 rounded-lg'>
                <span className='font-semibold'>Minimalism</span> — less
                equipment, more discipline
              </li>
              <li className='bg-zinc-800/60 p-4 rounded-lg'>
                <span className='font-semibold'>Consistency</span> — daily
                effort beats intensity
              </li>
              <li className='bg-zinc-800/60 p-4 rounded-lg'>
                <span className='font-semibold'>Self-reliance</span> — progress
                depends on you
              </li>
              <li className='bg-zinc-800/60 p-4 rounded-lg'>
                <span className='font-semibold'>Patience</span> — control before
                power
              </li>
            </ul>
            <p className='text-zinc-400 italic'>
              Every rep builds awareness. Every hold builds mental strength.
            </p>
          </section>

          {/* Motivation */}
          <section className='space-y-4'>
            <h2 className='text-3xl font-bold border-l-4 border-zinc-600 pl-4'>
              Motivation
            </h2>
            <p className='text-zinc-300 leading-relaxed'>
              You start calisthenics because it looks impressive. You stay
              because it changes how you see yourself.
            </p>
            <p className='text-zinc-400'>
              Progress is slow — but undeniable. Every clean rep is proof of
              discipline.
            </p>
          </section>

          {/* Quotes */}
          <section className='space-y-6'>
            <h2 className='text-xl md:text-3xl font-bold border-l-4 border-zinc-600 pl-4'>
              Quotes & Mantras
            </h2>
            <div className='space-y-4'>
              {[
                "The floor is your gym.",
                "Your body is the weight.",
                "Master your body before adding weight.",
                "Anywhere is a gym if your mindset is right.",
                "Control first. Power later.",
              ].map((quote, i) => (
                <blockquote
                  key={i}
                  className='border border-zinc-700 rounded-lg p-4 text-zinc-300 italic bg-zinc-800/40'
                >
                  “{quote}”
                </blockquote>
              ))}
            </div>
          </section>

          {/* Progress */}
          <section className='space-y-4'>
            <h2 className='text-xl md:text-3xl font-bold border-l-4 border-zinc-600 pl-4'>
              Progress
            </h2>
            <p className='text-zinc-300'>
              Progress isn&apos;t just reps. It&apos;s cleaner form, longer
              holds, better balance, and calm control.
            </p>
            <p className='text-zinc-400 italic'>
              You don&apos;t rush progress — you respect it.
            </p>
          </section>

          {/* Footer */}
          <footer className='pt-12 border-t border-zinc-700 space-y-4'>
            <h2 className='text-2xl font-bold'>Final Message</h2>
            <p className='text-zinc-300'>
              Calisthenics strips training down to truth. No shortcuts. No
              noise. Just you versus gravity.
            </p>
            <p className='text-zinc-400 font-semibold'>
              The floor is waiting. Your body is ready.
            </p>
          </footer>
        </div>
      )}
    </div>
  );
};

export default InfoPage;
