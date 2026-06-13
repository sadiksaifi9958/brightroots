import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function Result() {
  return (
    <div className="w-full bg-[#FFF8F2]">
      <div className="h-16 py-4 px-4 w-full font-bold text-lg text-[#1A1A1A]">
        Quiz Complete!
      </div>
      <div className="w-full py-24 flex flex-col items-center gap-2 bg-[#FF6B00]">
        <div className="text-7xl">🎉</div>
        <div className="text-[#FFF8F2] text-3xl font-bold">
          Great job, keep it up!
        </div>
        <div className="text-center text-md text-[#FFF8F2]">
          Mathematics &#183; You answered 7 out of 10 correctly
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 py-6 bg-white w-fit m-auto rounded-2xl border border-[#FFD9B3] px-12 -translate-y-20">
        <div className="flex flex-col gap-1">
          <div className="flex items-end mx-auto">
            <div className="text-6xl text-[#FF6B00] font-semibold">7</div>
            <div className="text-[#888888] text-3xl font-semibold">/ 10</div>
          </div>
          <div className="text-md text-[#888888]">Your Score</div>
        </div>
        <div className="w-5xl bg-[#FFD9B3] h-3 rounded-full">
          <div
            className="bg-[#FF6B00] h-3 rounded-full transition-all duration-400"
            style={{ width: 60 }}
          ></div>
        </div>
        <div className="grid grid-cols-3 gap-5 items-center justify-center w-full mb-4">
          <div className="py-6 flex flex-col gap-2 items-center bg-[#FFF8F2] rounded-2xl">
            <div className="text-[#FF6B00] text-4xl font-bold">70 XP</div>
            <div className="text-md text-[#888888]">XP Earned</div>
          </div>
          <div className="py-6 flex flex-col gap-2 items-center bg-[#FFF8F2] rounded-2xl">
            <div className="text-[#FF6B00] text-4xl font-bold">7</div>
            <div className="text-md text-[#888888]">Correct</div>
          </div>
          <div className="py-6 flex flex-col gap-2 items-center bg-[#FFF8F2] rounded-2xl">
            <div className="text-[#FF6B00] text-4xl font-bold">3</div>
            <div className="text-md text-[#888888]">Wrong</div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 px-12 items-start mb-8">
        <div className="font-bold text-xl text-[#1A1A1A]">Badge unlocked</div>
        <div className="w-full py-14 border border-[#FF6B00] rounded-2xl bg-white flex items-center justify-start px-8 gap-4">
          <div className="text-6xl">🔥</div>
          <div>
            <div className="text-xl font-bold text-[#FF6B00]">On Fire!</div>
            <div className="text-md text-[#888888]">
              Scored 7 or more in a quiz
            </div>
            <div className="px-2.5 py-0.5 bg-[#FF6B00] text-[#FFF8F2] font-bold text-sm w-fit rounded-2xl">
              NEW
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-5 px-12 items-start mb-8">
        <div className="font-bold text-xl text-[#1A1A1A]">Answer summary</div>
        <div className="flex flex-col gap-3 w-full">
          <div className="bg-[#E0F7FA] border-[#00BCD4] text-[#00838F] text-xl w-full border rounded-2xl py-6 px-8">
            ✅ What is 15 × 8?
          </div>
          <div className="bg-[#FFEBEE] border-[#E57373] text-[#C62828] text-xl w-full border rounded-2xl py-6 px-8">
            ❌ What is 25% of 200?
          </div>
          <div className="bg-[#E0F7FA] border-[#00BCD4] text-[#00838F] text-xl w-full border rounded-2xl py-6 px-8">
            ✅Area of rectangle 10cm × 5cm?
          </div>
          <div className="bg-[#E0F7FA] border-[#00BCD4] text-[#00838F] text-xl w-full border rounded-2xl py-6 px-8">
            ✅ What is the value of 2³?
          </div>
          <div className="bg-[#FFEBEE] border-[#E57373] text-[#C62828] text-xl w-full border rounded-2xl py-6 px-8">
            ❌ Farmer with 240 apples, 8 bags?
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4 px-12 mb-8">
        <button className="py-3 border border-[#00BCD4] text-[#1A1A1A] text-lg w-full rounded-xl cursor-pointer font-bold flex gap-3 justify-center items-center active:scale-95 active:bg-[#00BCD4]/20 transition-all duration-150">
          Play Again <FaArrowRight />
        </button>
        <button className="py-3 border border-[#00BCD4] text-[#1A1A1A] text-lg w-full rounded-xl cursor-pointer font-bold flex gap-3 justify-center items-center active:scale-95 active:bg-[#00BCD4]/20 transition-all duration-150">
          <FaArrowLeft /> Choose Different Subject
        </button>
      </div>
    </div>
  );
}

export default Result;
