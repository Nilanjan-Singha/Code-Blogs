import './App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from "react-router-dom"
import Home from './pages/Home';
import BlogPage from './pages/Blogpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
      </Routes>
    </Router>
  );

}

export default App
