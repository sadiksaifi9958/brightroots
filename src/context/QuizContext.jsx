import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [selectedSubject, setSelectedSubject] = useState();
  const [score, setScore] = useState();
  const [currentQues, setCurrentQues] = useState();
  const [xpEarned, setXpEarned] = useState();
  const [badgesUnlocked, setBadgesUnlocked] = useState();
  const [answers, setAnswers] = useState([]);
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
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
