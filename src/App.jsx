import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import BlogPostsPage from "./Pages/BlogPostsPage";
import IndividualPostPage from "./Pages/IndividualPostPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<BlogPostsPage />} />
          <Route path="/post/:id" element={<IndividualPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;