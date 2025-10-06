import React from "react";

export default function ReactBasics() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6 text-primary">Getting Started with React</h1>
      <div className="mb-4 flex gap-2 flex-wrap">
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">React</span>
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">Beginner</span>
      </div>
      <p className="text-foreground/80 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.</p>
      <div className="prose max-w-none">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.</p>
      </div>
    </div>
  );
}
