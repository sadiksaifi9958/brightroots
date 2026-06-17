import subjects from "../data/subjects";
import badges from "../data/badges";
import { useNavigate } from "react-router-dom";
import { GiPlantRoots } from "react-icons/gi";
import { motion } from "framer-motion";

function Home() {
  const stats = [
    { heading: "4", subtitle: "Subjects" },
    { heading: "40", subtitle: "Questions" },
    { heading: "4", subtitle: "Badges" },
    { heading: "100%", subtitle: "Free" },
  ];

  const working = [
    {
      num: "1",
      title: "Choose a subject",
      subtitle:
        "Pick from Math, EVS, GK, or Digital Literacy and start your quiz journey.",
    },
    {
      num: "2",
      title: "Answer questions",
      subtitle:
        "Answer 10 questions with a timer. Every correct answer earns you XP points.",
    },
    {
      num: "3",
      title: "Earn XP and badges",
      subtitle:
        "Score high to unlock special badges and climb the leaderboard rankings.",
    },
  ];

  const leaderboard = [
    {
      rank: "🥇",
      avatar: "RK",
      name: "Ravi Kumar",
      completed: "4 subjects completed",
      xp: "380 XP",
      avatarbg: "#FF6B00",
    },
    {
      rank: "🥈",
      avatar: "PM",
      name: "Priya Meena",
      completed: "3 subjects completed",
      xp: "310 XP",
      avatarbg: "#00BCD4",
    },
    {
      rank: "🥉",
      avatar: "AS",
      name: "Arjun Singh",
      completed: "2 subjects completed",
      xp: "220 XP",
      avatarbg: "#888888",
    },
  ];

  const navigate = useNavigate();

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="bg-[#FF6B00] py-20 sm:py-36 flex flex-col gap-4 items-center w-full">
        <span className="text-6xl text-white">
          <GiPlantRoots />
        </span>
        <div className="flex items-center my-2 text-[#FFF8F2] text-3xl sm:text-5xl font-bold gap-2">
          <div>Learn.</div>
          <div>Play.</div>
          <div>Grow.</div>
        </div>
        <div className="text-[#FFF8F2] text-center max-w-md text-md px-4 sm:px-0">
          A gamified learning platform for rural students. Earn XP, unlock
          badges, and become a champion!
        </div>
        <div className="flex items-center gap-4">
          <button
            className="px-2 py-1 text-md text-[#FFF8F2] rounded-lg border border-[#cc5500] cursor-pointer font-bold active:translate-y-0.5 hover:shadow-md transition-all duration-200"
            onClick={() => navigate("/subjects")}
          >
            Start Learning
          </button>
          <button
            className="px-2 py-1 text-md text-[#FFF8F2] rounded-lg border border-[#cc5500] cursor-pointer active:translate-y-0.5 hover:shadow-md transition-all duration-200"
            onClick={() =>
              document
                .getElementById("how-it-works")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            How it works
          </button>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-0">
        {stats.map((stat) => (
          <div className="flex flex-col items-center gap-3 border-r-2 border-b-2 border-[#FFD9B3] py-8 sm:py-16">
            <h1 className="text-4xl text-[#FF6B00] font-bold">
              {stat.heading}
            </h1>
            <span className="text-md text-[#888888]">{stat.subtitle}</span>
          </div>
        ))}
      </div>
      <div className="w-full bg-[#FFF8F2] pt-2">
        <div className="w-full flex flex-col gap-2 mt-12 px-4">
          <h1 className="text-xl text-[#1A1A1A] font-bold pl-4">
            Choose a subject
          </h1>
          <p className="text-sm text-[#888888] pl-4">
            Pick any subject and start your quest
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-1 w-full items-center justify-center p-4">
            {subjects.map((card) => (
              <motion.div
                className="w-full py-6 sm:py-10 flex flex-col gap-2 items-start justify-center border border-[#FFD9B3] rounded-xl pl-4 sm:pl-8 bg-white hover:shadow-md transition-shadow duration-200"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-5xl text-[#FF6B00]">{card.icon}</span>
                <h1 className="text-xl text-[#1A1A1A] font-bold">
                  {card.name}
                </h1>
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
              </motion.div>
            ))}
          </div>
        </div>

        <div
          className="w-full flex flex-col gap-2 px-8 mt-10"
          id="how-it-works"
        >
          <h1 className="text-xl text-[#1A1A1A] font-bold">How it works</h1>
          <p className="text-sm text-[#888888]">
            3 simple steps to start learning
          </p>
          {working.map((work) => (
            <div className="flex gap-4 items-start mt-5">
              <div className="text-lg font-bold text-[#FFF8F2] bg-[#FF6B00] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                {work.num}
              </div>
              <div className="flex flex-col gap-1 items-start">
                <h1 className="text-[#1A1A1A] text-lg font-bold">
                  {work.title}
                </h1>
                <p className="text-sm text-[#888888]">{work.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col gap-2 px-8 mt-12">
          <h1 className="text-xl text-[#1A1A1A] font-bold">Badges to unlock</h1>
          <p className="text-sm text-[#888888]">
            Complete quizzes to earn these rewards
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center mt-5 w-full overflow-hidden">
            {badges.map((badge) => (
              <div
                className={`flex flex-col items-center p-4 sm:p-16 border border-[#FFD9B3] rounded-xl shadow-sm hover:shadow-md bg-white w-full transition-shadow duration-200 ${badge.unlocked ? "opacity-100" : "opacity-40"}`}
              >
                <span className="text-4xl text-[#FF6B00]">{badge.icon}</span>
                <h1 className="text-lg text-[#1A1A1A] font-bold">
                  {badge.title}
                </h1>
                <p className="text-sm text-[#888888]">{badge.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 px-8 mt-12 mb-6">
          <h1 className="text-xl text-[#1A1A1A] font-bold">Leaderboard</h1>
          <p className="text-sm text-[#888888]">Top learners this week</p>
          <div className="flex flex-col gap-4 mt-4">
            {leaderboard.map((player) => (
              <div className="w-full border border-[#FFD9B3] rounded-xl p-4 flex gap-4 bg-white py-6 items-center justify-between">
                <div className="flex gap-3 items-center">
                  <div className="text-xl">{player.rank}</div>
                  <div
                    style={{ backgroundColor: player.avatarbg }}
                    className="w-12 h-12 flex items-center justify-center text-[#FFF8F2] text-lg font-bold rounded-full"
                  >
                    {player.avatar}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <h1 className="text-lg font-bold text-[#1A1A1A]">
                      {player.name}
                    </h1>
                    <p className="text-sm text-[#888888]">{player.completed}</p>
                  </div>
                </div>
                <p className="text-lg sm:text-2xl text-[#FF6B00] font-bold pr-2 sm:pr-8">
                  {player.xp}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
