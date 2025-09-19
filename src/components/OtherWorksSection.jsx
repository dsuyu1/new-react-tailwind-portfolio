import React from "react";
import { Linkedin } from "lucide-react";

const otherWorks = [
  {
    title: "Conference: Empire C2 implants, IoCs, and Detections",
    description: "Presented on Empire C2 implants, analyzed how they work, identified their indicators of compromise (IoCs), and built real-world detections at the 6th Annual BSides RGV Cybersecurity Conference.",
    articleId: "1",
    date: "May 2025",
    demoUrl: "https://lnkd.in/p/g3bX7d_W",
  },
  {
    title: "Research: Zero-Trust Edge Camera for Privacy-Preserving Surveillance",
    description: "The goal of our research is to find a more modern solution to CCTV that enables privacy-preserving surveillance that aligns with GDPR/HIPAA principles while staying real-time and scalable for smart cities, healthcare, and consumer security.",
    articleId: "2",
    date: "September 2025",
    demoUrl: "https://lnkd.in/p/gc3B7utk",
  },
];

export const OtherWorksSection = () => {
  return (
    <section id="other-works" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center">
          Other <span className="text-primary">Works</span>
        </h3>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Additional projects, presentations, and contributions.
        </p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
          {otherWorks.map((work) => (
            <div
              key={work.articleId}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="p-6 flex flex-col justify-between w-full max-w-xl">
                <h3 className="text-xl font-semibold mb-2 text-primary text-foreground text-center">
                  {work.title}
                </h3>
                    {work.date && (
                      <div className="text-xs text-muted-foreground mb-2 text-center w-full">
                        {work.date}
                      </div>
                    )}
                    <p className="mb-4 text-muted-foreground text-center">
                      {work.description}
                    </p>
                    <div className="flex justify-start">
                      <a
                        href={work.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Linkedin size={20} />
                      </a>
                    </div>
                    {/*
                    <a
                      href={`/articles#article-${work.articleId}`}
                      className="text-blue-600 hover:underline self-end text-sm"
                    >
                      Read more
                    </a>
                    */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
