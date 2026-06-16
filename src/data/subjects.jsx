import { PiMathOperationsFill } from "react-icons/pi";
import { GiWheat } from "react-icons/gi";
import { TbWorldQuestion } from "react-icons/tb";
import { FaComputer } from "react-icons/fa6";

const subjects = [
  {
    name: "Mathematics",
    icon: <PiMathOperationsFill />,
    difficulty: "Hard",
    xp: "60 XP earned",
    progress: "60%",
    slug: "math",
  },
  {
    name: "Environmental Science",
    icon: <GiWheat />,
    difficulty: "Medium",
    xp: "Not started",
    progress: 0,
    slug: "evs",
  },
  {
    name: "General Knowledge",
    icon: <TbWorldQuestion />,
    difficulty: "Medium",
    xp: "100 XP earned",
    progress: "100%",
    slug: "gk",
  },
  {
    name: "Digital Literacy",
    icon: <FaComputer />,
    difficulty: "Easy",
    xp: "Not started",
    progress: 0,
    slug: "digital",
  },
];

export default subjects;
