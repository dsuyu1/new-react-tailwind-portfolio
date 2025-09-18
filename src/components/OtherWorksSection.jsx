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
          {/* Card 1: LinkedIn Embed */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 flex flex-col justify-between transition-colors duration-300">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Conference Presentation</h3>
              <p className="mb-4">Presented at XYZ Conference on cybersecurity trends.</p>
            </div>
            <div className="w-full flex justify-center mb-4">
              <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7329498458657095681" height="400" width="100%" frameBorder="0" allowFullScreen="" title="LinkedIn Post 1"></iframe>
            </div>
            <a
              href="/articles#article-presentation-xyz"
              className="mt-4 text-blue-600 hover:underline self-end"
            >
              Read more
            </a>
          </div>
          {/* Card 2: LinkedIn Embed */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 flex flex-col justify-between transition-colors duration-300">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Guest Lecture</h3>
              <p className="mb-4">Gave a guest lecture at ABC University about cloud security.</p>
            </div>
            <div className="w-full flex justify-center mb-4">
              <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7348057640855400452" height="400" width="100%" frameBorder="0" allowFullScreen="" title="LinkedIn Post 2"></iframe>
            </div>
            <a
              href="/articles#article-guest-lecture-abc"
              className="mt-4 text-blue-600 hover:underline self-end"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
