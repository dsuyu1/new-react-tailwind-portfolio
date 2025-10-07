import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import Blog from "./pages/Blog";
import TPOTArticle from "./pages/blog/tpot-writeup";
import BBBBloatArticle from "./pages/blog/bbbbloat-writeup";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="articles" element={<ArticlesPage />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/tpot-writeup" element={<TPOTArticle />} />
          <Route path="blog/bbbbloat-writeup" element={<BBBBloatArticle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
