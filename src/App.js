import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";

import About from "./components/pages/About";
import ArticleList from "./components/pages/ArticleList";
import Article from "./components/pages/Article";
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <Router>
    <Navbar />
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles-list" element={<ArticleList />} />
          <Route path="/article/:name" element={<Article />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
