import { useNavigate } from "react-router-dom";
import { URLs } from "./urls";

const COLORS = [
  "#D72638", // Crimson Red
  "#F46036", // Warm Orange
  "#FFD23F", // Bold Gold
  "#44AF69", // Jungle Green
  "#1985A1", // Deep Teal Blue
  "#564787", // Indigo Purple
  "#6C2DC7", // Vivid Violet
];

// const rainbow =
//   "bg-gradient-to-r from-[#F4A0A2] via-10% via-[#F4C17C] via-20% via-[#F4E39C] via-30% via-[#B3DE8A] via-10% via-[#85D5DC] to-[#85D5DC]";
// const rainbowText =
//   "text-transparent bg-clip-text bg-gradient-to-r from-[#D72638] via-20% via-[#FFD23F] via-30% via-[#44AF69] via-20% via-[#1985A1] to-[#6C2DC7]";
// const rainbowHover =
//   "hover:bg-gradient-to-r from-[#D72638] via-10% via-[#F46036] via-10% via-[#FFD23F] via-10% via-[#44AF69] via-10% via-[#1985A1] via-10% via-[#564787] to-[#6C2DC7]";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F4F6F8] dark:bg-[#222222] font-sans flex w-screen flex-col">
      <div className="hidden">
        {/* this component is strictly for pre-rendering dynamic tailwind classes */}
        <div className="hidden to-[#D72638]" />
        <div className="hidden to-[#F46036]" />
        <div className="hidden to-[#FFD23F]" />
        <div className="hidden to-[#44AF69]" />
        <div className="hidden to-[#1985A1]" />
        <div className="hidden to-[#564787]" />
        <div className="hidden to-[#6C2DC7]" />
      </div>
      
      <section className="theme-gradient text-center py-20 px-6  text-white flex flex-col items-center">
        <h2 className="text-4xl font-bold text-shadow-lg underline decoration-[#222222] mb-10">
          Your Dev Team Shouldn't Be Interviewing.
        </h2>
        <p className="max-w-2xl mb-10 text-shadow-lg text-2xl">
          Take your dev team out of interviews and let Skill IQ deliver
          signal-rich, fraud-proof evaluations—customized for your stack, your
          industry, and your standards.
        </p>

        <div className="flex flex-col items-center md:flex-row justify-center gap-4">
          <button className="w-70 md:w-64 cursor-pointer border-2 border-white bg-[#222222] hover:bg-[#3B3B3B] text-white px-6 py-3 rounded-3xl font-semibold hover:bg-skilliq-teal">
            Request a Demo
          </button>
          <button onClick={()=> navigate(URLs.code)} className="w-70 md:w-64 cursor-pointer border-2 border-white bg-[#222222] hover:bg-[#3B3B3B] text-white px-6 py-3 rounded-3xl font-semibold hover:bg-skilliq-green">
            See How It Works
          </button>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F4F6F8] dark:bg-[#222222] text-[#222222] dark:text-white">
        <h3 className="text-2xl font-bold text-center mb-12">
          What Skill IQ Does
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "Structured Challenges",
              desc: "Customizable coding problem sets.",
            },
            {
              title: "Live Coding",
              desc: "Real-time interviews with feedback tools.",
            },
            {
              title: "AI Fraud Detection",
              desc: "Prevents impersonation & LLM cheating.",
            },
            {
              title: "Bias-Resistant Scoring",
              desc: "Standardized and fair assessments.",
            },
          ].map(({ title, desc }, index) => (
            <div
              key={title}
              className={`cursor-pointer bg-white border-white border-2 p-6 rounded-3xl shadow dark:bg-[#222222] 
                active:bg-gradient-to-r hover:bg-gradient-to-r from-white dark:from-[#222222] to-[${COLORS[index]}] text-[#031543] dark:text-white`}
            >
              <h4 className="text-xl font-bold mb-2">{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white dark:bg-[#3B3B3B] text-[#222222] dark:text-white py-16 px-6 text-center border-b-2 border-t-2 border-white">
        <p className="text-lg max-w-4xl mx-auto mb-8">
          At Skill IQ, we believe great hiring starts with trust. Our platform
          takes the burden of technical interviews off your development team,
          allowing them to stay focused on what they do best—delivering quality
          software. We manage the full technical vetting process through
          customizable interview formats including take-home challenges,
          recorded submissions, live sessions with our expert engineers, and
          panel interviews led by experienced industry professionals.
        </p>{" "}
        <p className="text-lg max-w-4xl mx-auto mb-8">
          Every assessment can be tailored to your business domain, ensuring
          relevance to real-world scenarios your team faces. With built-in
          protection against AI-generated content and impersonation, Skill IQ
          gives you the confidence to make hiring decisions based on real skill,
          not guesswork.
        </p>
        <h3 className="text-2xl font-bold text-[#222222] dark:text-white mb-6">
          Ready to engineer your techincal hiring process?
        </h3>
        <button className="cursor-pointer border-white border-2 text-white px-8 py-3 rounded-3xl font-semibold bg-[#222222] hover:bg-[#3B3B3B]">
          Request a Demo
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-[#222222] text-white text-sm text-center py-4">
        © {new Date().getFullYear()} Skill IQ. All rights reserved.
      </footer>
    </div>
  );
}
