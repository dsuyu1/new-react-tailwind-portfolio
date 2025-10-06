import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ArticlesPage } from "./pages/Articles";
import { Toaster } from "@/components/ui/toaster";
import Blog from "./pages/Blog";
import FeaturedArticle from "./pages/blog/featured-article";
import ReactBasics from "./pages/blog/react-basics";
import TailwindTips from "./pages/blog/tailwind-tips";
import ViteDeploy from "./pages/blog/vite-deploy";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="articles" element={<ArticlesPage />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/featured-article" element={<FeaturedArticle />} />
          <Route path="blog/react-basics" element={<ReactBasics />} />
          <Route path="blog/tailwind-tips" element={<TailwindTips />} />
          <Route path="blog/vite-deploy" element={<ViteDeploy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
