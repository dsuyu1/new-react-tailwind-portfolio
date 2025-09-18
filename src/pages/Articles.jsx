import React from "react";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "../components/Footer";

const articles = [
  {
    id: "presentation-xyz",
    title: "Conference Presentation: Cybersecurity Trends",
    date: "2025-08-10",
    content: `At the XYZ Conference, I presented on the latest trends in cybersecurity, focusing on threat intelligence, automation, and the future of SOC operations. The session included real-world case studies and actionable insights for security professionals.`,
  },
  {
    id: "guest-lecture-abc",
    title: "Guest Lecture: Cloud Security at ABC University",
    date: "2025-07-15",
    content: `I was invited to ABC University to deliver a guest lecture on cloud security. The talk covered best practices, common pitfalls, and the evolving landscape of cloud-based threats, with interactive Q&A from students and faculty.`,
  },
];

export const ArticlesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <Navbar />
      <main>
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Articles & Blog</h1>
            <div className="space-y-12">
              {articles.map((article) => (
                <article key={article.id} id={`article-${article.id}`} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                  <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
                  <p className="text-sm text-gray-500 mb-4">{article.date}</p>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>{article.content}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
