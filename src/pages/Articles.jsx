import React from "react";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "../components/Footer";

const articles = [
  {
    id: "tpot",
    title: "Getting Started with T-Pot: A Honeypot for Threat Analysis",
    date: "October 6, 2025",
    content: `In this series, I'll be using T-Pot, an open-source honeypot platform, to set up a honeypot environment for threat analysis. In this section, I'll cover installation, configuration, and how to analyze the data collected to understand attacker behavior and tactics.`,
    url: "/blog/tpot-writeup",
    image: "/articles/tpot_thumbnail.png",
    tags: ["T-Pot"],
    category: "Threat Intelligence",
  },
  {
    id: "bbbloat",
    title: "Walkthrough: PicoCTF 2022 #42 \"bbbloat\"",
    date: "October 6, 2025",
    content: `A step-by-step walkthrough of the PicoCTF 2022 challenge #42, 'bbbloat'. This writeup covers the challenge, solution, and key takeaways for malware and binary analysis beginners.`,
    url: "#", // Update with actual URL/page when available
    image: "/workspaces/new-react-tailwind-portfolio/public/articles/bbbbloat.png", // Use a placeholder or update with actual image
    tags: ["Ghidra", "Reverse Engineering"],
    category: "Malware & Low-LevSSel Analysis",
  },
];

export const ArticlesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <Navbar />
      <main>
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto relative z-10">
            <h1 className="text-4xl font-bold mb-2 text-center">Articles</h1>
            <p className="text-center text-muted-foreground mb-8">Here you'll find writeups, walkthroughs, projects, and all the things I like talking about!</p>
            <div className="space-y-16">
              {/* Malware & Low-Level Analysis Category */}
              <div>
                <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center text-primary">Malware & Low-Level Analysis</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center relative z-10">
                  {articles.filter(a => a.category === "Malware & Low-Level Analysis").map((article) => (
                    <a
                      key={article.id}
                      href={article.url}
                      className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover transition duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="w-full h-40 flex-shrink-0 overflow-hidden bg-gray-200 flex items-center justify-center">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <span
                          className="text-xl font-semibold mb-2 text-primary group-hover:underline cursor-pointer text-center"
                        >
                          {article.title}
                        </span>
                        <div className="flex flex-wrap gap-2 mb-4 justify-center">
                          {article.tags && article.tags.map(tag => (
                            <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground mb-4">{article.date}</p>
                        <p className="text-foreground text-sm mb-2">{article.content}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              {/* Threat Intelligence Category */}
              <div>
                <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center text-primary">Threat Intelligence</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center relative z-10">
                  {articles.filter(a => a.category === "Threat Intelligence").map((article) => (
                    <a
                      key={article.id}
                      href={article.url}
                      className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover transition duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="w-full h-40 flex-shrink-0 overflow-hidden bg-gray-200 flex items-center justify-center">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <span
                          className="text-xl font-semibold mb-2 text-primary group-hover:underline cursor-pointer text-center"
                        >
                          {article.title}
                        </span>
                        <div className="flex flex-wrap gap-2 mb-4 justify-center">
                          {article.tags && article.tags.map(tag => (
                            <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground mb-4">{article.date}</p>
                        <p className="text-foreground text-sm mb-2">{article.content}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
