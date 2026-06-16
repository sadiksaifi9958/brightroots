import { IoIosStar } from "react-icons/io";
import { AiFillFire } from "react-icons/ai";
import { FaTrophy } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";

const badges = [
  {
    icon: <IoIosStar />,
    title: "First Star",
    subtitle: "Complete first quiz",
    unlocked: true,
    minScore: 1,
  },
  {
    icon: <AiFillFire />,
    title: "On Fire",
    subtitle: "Score 8/10 or more",
    unlocked: true,
    minScore: 8,
  },
  {
    icon: <FaTrophy />,
    title: "Champion",
    subtitle: "Complete all 4 subjects",
    unlocked: false,
    minScore: 10,
  },
  {
    icon: <HiLightBulb />,
    title: "Genius",
    subtitle: "Score 10/10 perfect",
    unlocked: false,
    minScore: 10,
  },
];
export default badges;
