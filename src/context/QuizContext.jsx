/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [score, setScore] = useState(0);
  const [currentQues, setCurrentQues] = useState(0);
  const [xpEarned, setXpEarned] = useState(0);
  const [badgesUnlocked, setBadgesUnlocked] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [subjectProgress, setSubjectProgress] = useState({
    math: 0,
    gk: 0,
    digital: 0,
    evs: 0,
  });

  const resetQuiz = () => {
    setScore(0);
    setCurrentQues(0);
    setAnswer([]);
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
        answer,
        setAnswer,
        subjectProgress,
        setSubjectProgress,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export default useQuiz;
