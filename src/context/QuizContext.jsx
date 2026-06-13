/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [score, setScore] = useState(0);
  const [currentQues, setCurrentQues] = useState(0);
  const [xpEarned, setXpEarned] = useState(0);
  const [badgesUnlocked, setBadgesUnlocked] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [lastResult, setLastResult] = useState(null);
  const [subjectProgress, setSubjectProgress] = useState({
    math: 0,
    gk: 0,
    digital: 0,
    evs: 0,
  });

  const resetQuiz = () => {
    setScore(0);
    setCurrentQues(0);
    setAnswers([]);
  };

  return (
    <QuizContext.Provider
      value={{
        selectedSubject,
        setSelectedSubject,
        score,
        setScore,
        currentQues,
        setCurrentQues,
        xpEarned,
        setXpEarned,
        badgesUnlocked,
        setBadgesUnlocked,
        answers,
        setAnswers,
        subjectProgress,
        setSubjectProgress,
        resetQuiz,
        lastResult,
        setLastResult,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export default useQuiz;
