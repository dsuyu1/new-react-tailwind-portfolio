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
            <h1 className="text-4xl font-bold mb-2 text-center">Articles & Blog</h1>
            <p className="text-center text-muted-foreground mb-8">Here you'll find writeups, walkthroughs, and all the things I like talking about!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center relative z-10">
              {articles.map((article) => (
                <a
                  key={article.id}
                  href={`#article-${article.id}`}
                  className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover transition duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="w-full h-40 flex-shrink-0 overflow-hidden bg-gray-200 flex items-center justify-center">
                    <img
                      src="public/articles/tpot_thumbnail.png"
                      alt="TPOT Thumbnail"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <a
                      href={`/articles/${article.id}`}
                      className="text-xl font-semibold mb-2 text-primary hover:underline"
                    >
                      {article.title}
                    </a>
                    <p className="text-xs text-muted-foreground mb-4">{article.date}</p>
                    <p className="text-foreground text-sm mb-2">{article.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
