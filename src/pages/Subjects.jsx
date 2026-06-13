import { BsArrowLeft } from "react-icons/bs";
import subjects from "../data/subjects";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";
import { useContext } from "react";

function Subjects() {
  const navigate = useNavigate();
  const { subjectProgress } = useContext(QuizContext);

  return (
    <div className="w-full flex flex-col gap-8 bg-[#FFF8F2] p-4">
      <button
        className="p-4 text-[#888888] text-lg border border-[#FFD9B3] rounded-xl hover:not-only:bg-white w-fit cursor-pointer active:scale-95 transition-all duration-200"
        onClick={() => navigate(-1)}
      >
        <BsArrowLeft />
      </button>
      <h1 className="text-xl text-[#1A1A1A] font-bold pl-4">
        Choose a subject
      </h1>
      <div className="w-full py-12 flex flex-col gap-2 bg-[#FF6B00] items-center">
        <h1 className="text-3xl text-[#FFF8F2] font-bold">
          What do you want to learn today?
        </h1>
        <p className="text-md text-[#FFF8F2]">
          Each subject has 10 questions · Earn up to 100 XP
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 items-center justify-center w-full px-6">
        {subjects.map((card) => (
          <div
            className="w-full py-10 flex flex-col gap-2 items-start justify-center border border-[#FFD9B3] rounded-xl pl-8 bg-white hover:shadow-md transition-shadow duration-200 cursor-pointer"
            onClick={() => navigate(`/quiz/${card.slug}`)}
          >
            <span className="text-5xl">{card.icon}</span>
            <h1 className="text-xl text-[#1A1A1A] font-bold">{card.name}</h1>
            <p className="flex gap-2 text-[#888888]">
              <span>10 Question</span> &#183; <span>Class 6th - 8th</span>
            </p>
            <div
              className={
                card.difficulty === "Hard"
                  ? "px-3 py-1 bg-[#FFEBEE] text-[#C62828] rounded-2xl text-sm"
                  : card.difficulty === "Medium"
                    ? "px-3 py-1 bg-[#FFF3E8] text-[#E65100] rounded-2xl text-sm"
                    : "px-3 py-1 bg-[#E0F7FA] text-[#00838F] rounded-2xl text-sm"
              }
            >
              {card.difficulty}
            </div>
            <div className="flex flex-col items-start w-full pr-8 mt-2 gap-0.5">
              <div className="h-2 bg-[#FFF3E8] rounded-full w-full">
                <div
                  className="h-2 bg-[#FF6B00] rounded-full"
                  style={{ width: `${subjectProgress[card.slug]}%` }}
                ></div>
              </div>
              <div className="text-[#888888] text-sm">
                {subjectProgress[card.slug]} XP Earned
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full rounded-xl py-8 px-8 bg-sky-100 text-[#00838F] text-sm flex gap-2 items-center mb-4">
        <div className="text-2xl">💡</div>
        <div>
          Tip: Answer all 10 questions correctly to earn a perfect score badge
          and maximum XP!
        </div>
      </div>
    </div>
  );
}

export default Subjects;
