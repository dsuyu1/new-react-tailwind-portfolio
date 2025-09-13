import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Defensive
  {
    name: "Wireshark",
    tags: ["Packet Analysis", "Network Forensics"],
    category: "Defensive",
  },
  {
    name: "Elastic",
    tags: ["SIEM", "Log Management"],
    category: "Defensive",
  },
  {
    name: "Wazuh",
    tags: ["SIEM", "Endpoint Security"],
    category: "Defensive",
  },
  {
    name: "Tines",
    tags: ["SOAR", "Automation"],
    category: "Defensive",
  },
  {
    name: "LimaCharlie",
    tags: ["EDR", "Detection & Response"],
    category: "Defensive",
  },

  // Offensive
  {
    name: "Empire",
    tags: ["C2 Framework", "Post-Exploitation"],
    category: "Offensive",
  },
];

const categories = ["all", "Defensive", "Offensive", "Other"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <h3 className="font-semibold text-lg mb-3">{skill.name}</h3>

              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs bg-secondary/70 rounded-full text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
