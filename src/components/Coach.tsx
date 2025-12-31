import { Users, MessageSquare } from "lucide-react";
import { useState } from "react";

// import { getAIFitnessAdvice } from './services/gemini';

const Coach = () => {
  const [aiPrompt, setAiPrompt] = useState("");
  //   const [aiResponse, setAiResponse] = useState("");
  //   const [aiLoading, setAiLoading] = useState(false);
  // /
  return (
    <div className='text-white mt-8'>
      <div className='space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto'>
        <div className='text-center'>
          <div className='inline-flex items-center justify-center p-5 bg-cyan-600/10 rounded-3xl mb-5 text-cyan-500 border border-cyan-500/20'>
            <Users className='w-12 h-12' />
          </div>
          <h2 className='text-4xl font-black mb-2 italic uppercase tracking-tighter text-white'>
            Ask Your Coach
          </h2>
          <p className='text-zinc-500 text-xs uppercase font-bold tracking-[0.2em]'>
            Simple guidance for your fitness journey
          </p>
        </div>

        <div className='space-y-6'>
          <div className='bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl relative overflow-hidden'>
            <div className='relative z-10 flex flex-col gap-4'>
              <div className='flex items-center justify-between border-b border-zinc-800 pb-3'>
                <h3 className='text-xs font-black text-white uppercase tracking-tighter flex items-center gap-2'>
                  <MessageSquare size={14} className='text-cyan-500' /> Training
                  Question
                </h3>
              </div>

              <textarea
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                placeholder='Example: How do I improve my pull-ups? or What is good form for a push-up?'
                className='w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-5 text-sm text-white focus:border-cyan-500 outline-none min-h-[140px] transition-all resize-none placeholder:text-zinc-700 font-medium'
              />

              <button
                // onClick={askCoach}

                className='bg-cyan-600 hover:bg-cyan-500 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 transition-all disabled:opacity-50 uppercase tracking-widest text-xs'
              >
                {/* {aiLoading ? (
                  <Timer className='animate-spin w-4 h-4' />
                ) : (
                  <Mic size={16} />
                )}
                {aiLoading ? "Thinking..." : "Get Advice"} */}
              </button>
            </div>
          </div>

          {/* {aiResponse && (
            <div className='p-8 bg-zinc-900 rounded-3xl border border-zinc-800 animate-in fade-in duration-700'>
              <div className='flex items-center gap-3 mb-4 border-b border-zinc-800 pb-3'>
                <CheckCircle className='text-emerald-500 w-5 h-5' />
                <h4 className='text-[10px] font-black text-emerald-500 uppercase tracking-widest'>
                  Coach's Guidance
                </h4>
              </div>
              <div className='prose prose-invert max-w-none text-zinc-300 whitespace-pre-line text-sm leading-relaxed'>
                {aiResponse}
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Coach;
