import React from "react";

const otherWorks = [
  {
    title: "Conference Presentation",
    description: "Presented at XYZ Conference on cybersecurity trends.",
    articleId: "presentation-xyz",
  },
  {
    title: "Guest Lecture",
    description: "Gave a guest lecture at ABC University about cloud security.",
    articleId: "guest-lecture-abc",
  },
];

export const OtherWorksSection = () => {
  return (
    <section id="other-works" className="py-16 px-4 bg-secondary/10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 text-center">
          <h3 className="text-xl font-semibold text-primary mb-1">Other Works</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Additional projects, presentations, and contributions.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {otherWorks.map((work) => (
            <div
              key={work.articleId}
              className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 flex flex-col justify-between transition-colors duration-300"
            >
              {/* Image placeholder */}
              <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-400 dark:text-gray-500">Image Placeholder</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                <p className="mb-4">{work.description}</p>
              </div>
              <a
                href={`/articles#article-${work.articleId}`}
                className="mt-4 text-blue-600 hover:underline self-end"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
