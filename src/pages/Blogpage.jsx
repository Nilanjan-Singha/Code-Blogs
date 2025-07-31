import { codeBlogs } from '../assets/blogs'
import Markdownfetch from '../components/markdownfetch'
import { useParams } from 'react-router-dom'

const BlogPage = () => {

    const { slug } = useParams();
  const blog = codeBlogs.find(b => b.slug === slug);
     if (!blog) return <div>Blog not found</div>;
    return (
    <div className="blog-page">
      <h1>{blog.title}</h1>
      <Markdownfetch file={blog.content} />
     </div>
  );

}

export default BlogPage
