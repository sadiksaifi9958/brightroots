import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useQuiz } from "../context/QuizContext";
import badges from "../data/badges";
import { useNavigate } from "react-router-dom";

function Result() {
  const { score, xpEarned, selectedSubject, answers, resetQuiz } = useQuiz();
  const earnedBadges = badges.filter((badge) => score >= badge.minScore);
  const subjectNames = {
    math: "Mathematics",
    evs: "EVS",
    gk: "General Knowledge",
    digital: "Digital Literacy",
  };

  const displayName = subjectNames[selectedSubject];
  const navigate = useNavigate();
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
          {`${displayName} · You answered ${score} out of 10 correctly`}
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 py-6 bg-white w-fit m-auto rounded-2xl border border-[#FFD9B3] px-12 -mt-20">
        <div className="flex flex-col gap-1">
          <div className="flex items-end mx-auto">
            <div className="text-6xl text-[#FF6B00] font-semibold">{score}</div>
            <div className="text-[#888888] text-3xl font-semibold">/ 10</div>
          </div>
          <div className="text-md text-[#888888]">Your Score</div>
        </div>
        <div className="w-5xl bg-[#FFD9B3] h-3 rounded-full">
          <div
            className="bg-[#FF6B00] h-3 rounded-full transition-all duration-400"
            style={{ width: `${(score / 10) * 100}%` }}
          ></div>
        </div>
        <div className="grid grid-cols-3 gap-5 items-center justify-center w-full">
          <div className="py-6 flex flex-col gap-2 items-center bg-[#FFF8F2] rounded-2xl">
            <div className="text-[#FF6B00] text-4xl font-bold">{`${xpEarned} XP`}</div>
            <div className="text-md text-[#888888]">XP Earned</div>
          </div>
          <div className="py-6 flex flex-col gap-2 items-center bg-[#FFF8F2] rounded-2xl">
            <div className="text-[#FF6B00] text-4xl font-bold">{score}</div>
            <div className="text-md text-[#888888]">Correct</div>
          </div>
          <div className="py-6 flex flex-col gap-2 items-center bg-[#FFF8F2] rounded-2xl">
            <div className="text-[#FF6B00] text-4xl font-bold">
              {10 - score}
            </div>
            <div className="text-md text-[#888888]">Wrong</div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 px-12 items-start mt-8">
        <div className="font-bold text-xl text-[#1A1A1A]">Badge unlocked</div>
        <div className="grid grid-cols-4 gap-4 w-full px-12">
          {earnedBadges.map((badge) => (
            <div className="flex flex-col items-center p-16 border border-[#FFD9B3] rounded-xl shadow-sm hover:shadow-md bg-white w-full transition-shadow duration-200">
              <span className="text-4xl">{badge.icon}</span>
              <h1 className="text-lg text-[#1A1A1A] font-bold">
                {badge.title}
              </h1>
              <p className="text-sm text-[#888888]">{badge.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 px-12 items-start mt-8 mb-8">
        <div className="font-bold text-xl text-[#1A1A1A]">Answer summary</div>
        <div className="flex flex-col gap-3 w-full">
          {answers.map((answer, index) => (
            <div
              key={index}
              className={`w-full border rounded-2xl py-6 px-8 flex flex-col gap-2 ${answer.isCorrect ? "bg-[#E0F7FA] border-[#00BCD4]" : "bg-[#FFEBEE] border-[#E57373]"}`}
            >
              <div
                className={`text-xl font-bold ${answer.isCorrect ? "text-[#00838F]" : "text-[#C62828]"}`}
              >
                {answer.isCorrect ? "✅" : "❌"} {answer.question}
              </div>
              <div className="text-sm text-[#888888]">
                Your answer: {answer.userAnswer}
              </div>
              <div className="text-sm text-[#00838F]">
                Correct answer: {answer.correctAnswer}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full gap-4 px-12 mb-8">
        <button
          className="py-3 border border-[#00BCD4] text-[#1A1A1A] text-lg w-full rounded-xl cursor-pointer font-bold flex gap-3 justify-center items-center active:scale-95 active:bg-[#00BCD4]/20 transition-all duration-150"
          onClick={() => (resetQuiz(), navigate(`/quiz/${selectedSubject}`))}
        >
          Play Again <FaArrowRight />
        </button>
        <button
          className="py-3 border border-[#00BCD4] text-[#1A1A1A] text-lg w-full rounded-xl cursor-pointer font-bold flex gap-3 justify-center items-center active:scale-95 active:bg-[#00BCD4]/20 transition-all duration-150"
          onClick={() => (resetQuiz(), navigate("/subjects"))}
        >
          <FaArrowLeft /> Choose Different Subject
        </button>
      </div>
    </div>
  );
}

export default Result;
