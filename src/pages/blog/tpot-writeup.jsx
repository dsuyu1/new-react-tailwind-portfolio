import React from "react";
import { Navbar } from "../../components/Navbar";
import { StarBackground } from "@/components/StarBackground";

export default function TPOTArticle() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <Navbar />
      <main>
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-lg shadow p-8 relative z-10 mt-12">
            <h1 className="text-3xl font-bold mb-6">Getting Started with T-Pot: A Honeypot for Threat Analysis</h1>
              <img src="/articles/tpot_thumbnail.png" alt="TPOT Thumbnail" className="object-cover w-full max-w-xl h-56 rounded-md mb-8 mx-auto" />
            <div className="prose dark:prose-invert max-w-none">
              {/* Write your TPOT article content here! */}
              <p>Hello! This is a work in progress. Stay tuned! :)</p>
              <p></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
