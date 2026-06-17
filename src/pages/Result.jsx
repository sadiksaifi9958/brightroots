import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useQuiz } from "../context/QuizContext";
import badges from "../data/badges";
import { useNavigate } from "react-router-dom";
import { GiPlantRoots } from "react-icons/gi";
import { MdCelebration } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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

  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayScore((prev) => {
        if (prev >= score) {
          clearInterval(intervalId);
          return prev;
        }
        return prev + 1;
      });
    }, 150);
  });

  if (answers.length === 0) {
    return (
      <motion.div
        className="w-full flex flex-col items-center justify-center gap-6 py-24 px-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="text-7xl text-[#FF6B00]">
          <GiPlantRoots />
        </div>
        <h1 className="text-2xl font-bold text-[#1A1A1A]">No results yet!</h1>
        <p className="text-[#888888] text-md">
          Play your first quiz to see your score, badges and progress here.
        </p>
        <button
          onClick={() => navigate("/subjects")}
          className="bg-[#FF6B00] text-white font-bold px-8 py-3 rounded-full cursor-pointer flex gap-2 items-center"
        >
          Start Your First Quiz
          <div className="text-2xl">
            <MdRocketLaunch />
          </div>
        </button>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        className="w-full bg-[#FFF8F2]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="h-16 py-4 px-4 w-full font-bold text-lg text-[#1A1A1A]">
          Quiz Complete!
        </div>
        <div className="w-full sm:py-24 py-16 flex flex-col items-center gap-2 bg-[#FF6B00]">
          <div className="text-7xl text-white">
            <MdCelebration />
          </div>
          <div className="text-[#FFF8F2] sm:text-3xl text-xl font-bold">
            Great job, keep it up!
          </div>
          <div className="text-center text-md text-[#FFF8F2] px-16">
            {`${displayName} · You answered ${score} out of 10 correctly`}
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 py-6 bg-white w-11/12 sm:w-auto m-auto rounded-2xl border border-[#FFD9B3] sm:px-12 px-4 sm:-mt-20 -mt-10">
          <div className="flex flex-col gap-1">
            <div className="flex items-end mx-auto">
              <div className="text-6xl text-[#FF6B00] font-semibold">
                {displayScore}
              </div>
              <div className="text-[#888888] text-3xl font-semibold">/ 10</div>
            </div>
            <div className="text-md text-[#888888]">Your Score</div>
          </div>
          <div className="w-full bg-[#FFD9B3] h-3 rounded-full">
            <div
              className="bg-[#FF6B00] h-3 rounded-full transition-all duration-400"
              style={{ width: `${(score / 10) * 100}%` }}
            ></div>
          </div>
          <div className="grid grid-cols-3 gap-5 items-center justify-center w-full">
            <div className="sm:py-6 py-4 flex flex-col gap-2 items-center bg-[#FFF8F2] rounded-2xl">
              <div className="text-[#FF6B00] text-2xl sm:text-4xl font-bold">{`${xpEarned} XP`}</div>
              <div className="text-md text-[#888888]">XP Earned</div>
            </div>
            <div className="sm:py-6 py-4 flex flex-col gap-2 items-center bg-[#FFF8F2] rounded-2xl">
              <div className="text-[#FF6B00] text-4xl font-bold">{score}</div>
              <div className="text-md text-[#888888]">Correct</div>
            </div>
            <div className="sm:py-6 py-4 flex flex-col gap-2 items-center bg-[#FFF8F2] rounded-2xl">
              <div className="text-[#FF6B00] text-4xl font-bold">
                {10 - score}
              </div>
              <div className="text-md text-[#888888]">Wrong</div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 px-4 sm:px-12 items-start mt-8">
          <div className="font-bold text-xl text-[#1A1A1A]">Badge unlocked</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full px-4 sm:px-12">
            {earnedBadges.map((badge, index) => (
              <motion.div
                className="flex flex-col items-center p-4 sm:p-16 border border-[#FFD9B3] rounded-xl shadow-sm hover:shadow-md bg-white w-full transition-shadow duration-200"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 12,
                  delay: index * 0.15,
                }}
              >
                <span className="text-4xl text-[#FF6B00]">{badge.icon}</span>
                <h1 className="text-lg text-[#1A1A1A] font-bold">
                  {badge.title}
                </h1>
                <p className="text-sm text-[#888888]">{badge.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 px-4 sm:px-12 items-start mt-8 mb-8">
          <div className="font-bold text-xl text-[#1A1A1A]">Answer summary</div>
          <div className="flex flex-col gap-3 w-full">
            {answers.map((answer, index) => (
              <div
                key={index}
                className={`w-full border rounded-2xl py-6 px-4 sm:px-8 flex flex-col gap-2 ${answer.isCorrect ? "bg-[#E0F7FA] border-[#00BCD4]" : "bg-[#FFEBEE] border-[#E57373]"}`}
              >
                <div
                  className={`text-base sm:text-xl font-bold flex gap-2 items-center ${answer.isCorrect ? "text-[#00838F]" : "text-[#C62828]"}`}
                >
                  <div>{answer.isCorrect ? <FaCheck /> : <ImCross />} </div>
                  <div>{answer.question}</div>
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
        <div className="flex flex-col w-full gap-4 px-4 sm:px-12 mb-8">
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
      </motion.div>
    );
  }
}

export default Result;
