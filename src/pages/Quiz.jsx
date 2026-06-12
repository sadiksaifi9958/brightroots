import { useParams } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { FaRegClock } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import mathQuestions from "../data/math";
import evsQuestions from "../data/evs";
import gkQuestions from "../data/gk";
import digitalLiteracyQuestions from "../data/digital";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";

function Quiz() {
  const { subjects } = useParams();
  const navigate = useNavigate();
  const { setScore, setXpEarned, setSubjectProgress } = useContext(QuizContext);
  const optionsLabel = ["A", "B", "C", "D"];

  const subjectNames = {
    math: "Mathematics",
    evs: "EVS",
    gk: "General Knowledge",
    digital: "Digital Literacy",
  };

  const displayName = subjectNames[subjects];

  const questionMap = {
    math: mathQuestions,
    evs: evsQuestions,
    gk: gkQuestions,
    digital: digitalLiteracyQuestions,
  };

  const questions = questionMap[subjects];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const firstQuestion = questions[currentQuestionIndex];

  const [selectedOption, setSelectedOption] = useState();

  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          setSelectedOption(null);
          setCurrentQuestionIndex((i) => {
            if (i < questions.length - 1) {
              return i + 1;
            } else {
              showResult();
              return i;
            }
          });
          return 30;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentQuestionIndex, questions.length]);

  const showResult = () => {
    navigate("/result");
  };

  const handleNext = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore((prev) => {
        const newScore = prev + 1;
        const updatedXp = newScore * 10;
        setXpEarned(updatedXp);
        setSubjectProgress((prev) => ({
          ...prev,
          [subjects]: updatedXp,
        }));
        return newScore;
      });
    }
    setCurrentQuestionIndex((index) => {
      if (index < questions.length - 1) {
        return index + 1;
      } else {
        showResult();
        return index;
      }
    });
    setSelectedOption(null);
  };

  return (
    <div className="w-full">
      <div className="w-full py-10 flex justify-between px-4">
        <button className="p-4 text-[#888888] text-lg border border-[#FFD9B3] rounded-xl hover:not-only:bg-white w-fit cursor-pointer active:scale-95 transition-all duration-200">
          <RxCross1 />
        </button>
        <div className="text-[#1A1A1A] font-bold">{displayName}</div>
        <div className="px-4 h-8 flex items-center font-bold text-[#FF6B00] border border-[#FFD9B3] rounded-full text-center">
          +10 XP
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="w-full bg-[#FFD9B3] h-2">
          <div
            className="bg-[#FF6B00] h-2"
            style={{
              width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="flex justify-between items-center py-6 w-70/100">
          <div className="text-[#FFD9B3] text-sm">{`Question ${currentQuestionIndex + 1} of 10`}</div>
          <div className="text-[#FFD9B3] text-sm">{`${((currentQuestionIndex + 1) / questions.length) * 100}% done`}</div>
        </div>
        <div className="px-12 py-10 border border-[#FFD9B3] rounded-2xl flex flex-col gap-4 items-center mb-4 w-70/100 bg-[#FFF3E8]">
          <div className="flex gap-3 items-center justify-center">
            <div className="text-[#FF6B00] text-lg">
              <FaRegClock />
            </div>
            <div className="text-[#FF6B00] text-xl">Remaining Time:</div>
            <div className="text-[#FF6B00] text-4xl font-bold">{timeLeft}s</div>
          </div>

          <div className="w-full bg-[#FFD9B3] h-3 rounded-full">
            <div
              className="bg-[#FF6B00] h-3 rounded-full transition-all duration-400"
              style={{ width: `${(timeLeft / 30) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="py-6 px-8 bg-[#FF6B00] rounded-2xl mb-4 w-70/100">
          <div className="text-[#FFD9B3] text-sm uppercase mb-1">
            Question 3
          </div>
          <h1 className="text-[#FFF8F2] text-2xl font-bold">
            {firstQuestion.question}
          </h1>
        </div>
        <div className="flex flex-col gap-4 w-70/100">
          {firstQuestion.options.map((option, index) => (
            <button
              className={`px-6 py-6 border rounded-2xl flex items-center gap-4 mb-4 cursor-pointer active:translate-y-1 transition-transform duration-150 ${option === firstQuestion.answer && selectedOption ? "bg-[#E0F7FA] border-[#00BCD4] text-[#00838F]" : option === selectedOption && option !== firstQuestion.answer ? "bg-[#FFEBEE] border-[#E57373] text-[#C62828]" : "bg-[#FFF3E8] border-[#FFD9B3] text-[#1A1A1A]"} ${
                selectedOption &&
                option !== firstQuestion.answer &&
                option !== selectedOption
                  ? "opacity-50"
                  : "opacity-100"
              }`}
              onClick={() => setSelectedOption(option)}
              disabled={!!selectedOption}
            >
              <div className="text-lg text-[#FFD9B3] font-bold">
                {optionsLabel[index]}
              </div>
              <div className="text-[#1A1A1A] text-lg">{option}</div>
            </button>
          ))}
        </div>
        {selectedOption && (
          <div className="w-70/100 bg-sky-100 border border-sky-200 rounded-xl px-6 py-4 flex flex-col gap-2 mb-4">
            <div className="flex gap-4 text-[#00BCD4] items-center">
              <div className="text-xl">
                <HiOutlineLightBulb />
              </div>
              <div className="text-lg">Explanation</div>
            </div>
            <div className="text-[#00BCD4] text-md">
              {firstQuestion.explanation}
            </div>
          </div>
        )}
        {selectedOption && (
          <button
            className="py-3 border border-[#00BCD4] text-[#1A1A1A] text-lg w-70/100 rounded-xl mb-6 cursor-pointer font-bold flex gap-3 justify-center items-center active:scale-95 active:bg-[#00BCD4]/20 transition-all duration-150"
            onClick={handleNext}
          >
            Next Question <FaArrowRight />
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
