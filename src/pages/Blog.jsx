export default function Articles() {
  const articleLinks = [
    { title: "Featured: How I Built My Portfolio", link: "/blog/featured-article" },
    { title: "Getting Started with React", link: "/blog/react-basics" },
    { title: "Styling with Tailwind CSS", link: "/blog/tailwind-tips" },
    { title: "Deploying with Vite", link: "/blog/vite-deploy" }
  ];
  return (
    <>
      <Navbar />
      <div className="container mx-auto pt-24 px-4">
        <h1 className="text-3xl font-bold mb-8 text-primary">Articles</h1>
        <ul className="space-y-4">
          {articleLinks.map(article => (
            <li key={article.title}>
              <a href={article.link} className="text-lg text-primary hover:underline">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
