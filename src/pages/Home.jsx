import Card from "../components/card";
import { useNavigate } from "react-router-dom";
import { codeBlogs } from "../assets/blogs";
import { useState } from "react";


const categories = [
    { value: "all", label: "All" },
  { value: "mern", label: "MERN stack" },
  { value: "python", label: "Python" },
  { value: "dsa", label: "DSA" },
  { value: "aiml", label: "AI & ML" },
  { value: "arduino", label: "Arduino" },
  { value: "robotics", label: "Robotics" },
  { value: "opensource", label: "OpenSource" },
  { value: "piracy", label: "Piracy" },
  { value: "homelabbing", label: "Homelabbing" },
  { value: "other", label: "Other" }
];

const Home = () => {
  const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("all");

    
  // Filter blogs based on selected category
  const filteredBlogs = selectedCategory === "all"
    ? codeBlogs
    : codeBlogs.filter(blog => blog.category === selectedCategory);


  return (
    <div className="container">
      <div className="header">
        <h1>CODE BLOGS BY NIL</h1>
        <p>Coding made easy</p>
      </div>
      <select id='category' value={selectedCategory}
        onChange={e => setSelectedCategory(e.target.value)}>
        {categories.map(cat => (
          <option key={cat.value} value={cat.value}>{cat.label}</option>
        ))}
      </select>
       {filteredBlogs.length === 0 ? (
          <p style={{ display: "flex", margin: "auto", padding: "2rem", textAlign: "center", color: "#888", fontSize:"25px", }}>
            No blogs found in this category.
          </p>
        ) : (
          <div className="card-grid">
            {filteredBlogs.map((blog, idx) => (
              <div key={idx} onClick={() => navigate(`/blog/${blog.slug}`)} style={{ cursor: "pointer" }}>
                <Card title={blog.title} shortdesc={blog.shortdesc}  />
              </div>
            ))}
          </div>
        )}
    </div>
  )
}

export default Home