// import { useParams } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { FaRegClock } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";

function Quiz() {
  // const { subjects } = useParams();
  const options = [
    { span: "A", content: "30 apples" },
    { span: "B", content: "25 apples" },
    { span: "C", content: "35 apples" },
    { span: "D", content: "40 apples" },
  ];
  return (
    <div className="w-full">
      <div className="w-full py-10 flex justify-between px-4">
        <button className="p-4 text-[#888888] text-lg border border-[#FFD9B3] rounded-xl hover:not-only:bg-white w-fit cursor-pointer active:scale-95 transition-all duration-200">
          <RxCross1 />
        </button>
        <div className="text-[#1A1A1A] font-bold">Mathematics</div>
        <div className="px-4 h-8 flex items-center font-bold text-[#FF6B00] border border-[#FFD9B3] rounded-full text-center">
          +10 XP
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="w-full bg-[#FFD9B3] h-2">
          <div className="bg-[#FF6B00] w-100 h-2"></div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="flex justify-between items-center py-6 w-70/100">
          <div className="text-[#FFD9B3] text-sm">Question 3 of 10</div>
          <div className="text-[#FFD9B3] text-sm">30% done</div>
        </div>
        <div className="px-12 py-12 border border-[#FFD9B3] rounded-2xl flex gap-4 items-center mb-4 w-70/100 bg-[#FFF3E8]">
          <div className="text-[#FF6B00] text-xl">
            <FaRegClock />
          </div>
          <div className="text-[#FF6B00] text-2xl">Time Left:</div>
          <div className="text-[#FF6B00] text-4xl font-bold">15s</div>
          <div className="flex flex-col gap-8 flex-1">
            <div className="w-full bg-[#FFD9B3] h-3 rounded-full">
              <div className="bg-[#FF6B00] w-100 h-3 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="py-6 px-8 bg-[#FF6B00] rounded-2xl mb-4 w-70/100">
          <div className="text-[#FFD9B3] text-sm uppercase mb-1">
            Question 3
          </div>
          <h1 className="text-[#FFF8F2] text-2xl font-bold">
            If a farmer has 240 apples and divides them equally into 8 bags, how
            many apples are in each bag?
          </h1>
        </div>
        <div className="flex flex-col gap-4 w-70/100">
          {options.map((option) => (
            <div className="px-6 py-6 border border-[#FFD9B3] bg-[#FFF3E8] rounded-2xl flex items-center gap-4 mb-4">
              <div className="text-lg text-[#FFD9B3] font-bold">
                {option.span}
              </div>
              <div className="text-[#1A1A1A] text-lg">{option.content}</div>
            </div>
          ))}
        </div>
        <div className="w-70/100 bg-sky-100 border border-sky-200 rounded-xl px-6 py-4 flex flex-col gap-2 mb-4">
          <div className="flex gap-4 text-[#00BCD4] items-center">
            <div className="text-xl">
              <HiOutlineLightBulb />
            </div>
            <div className="text-lg">Explanation</div>
          </div>
          <div className="text-[#00BCD4] text-md">
            240 ÷ 8 = 30. Division helps farmers divide crops, seeds, and
            resources equally among workers or bags.{" "}
          </div>
        </div>
        <div className="py-3 border border-[#00BCD4] text-[#1A1A1A] text-lg w-70/100 rounded-xl mb-6 cursor-pointer font-bold flex gap-3 justify-center items-center active:scale-95 active:bg-[#00BCD4]/20 transition-all duration-150">
          Next Question <FaArrowRight />
        </div>
      </div>
    </div>
  );
}

export default Quiz;
