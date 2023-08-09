import Link from "next/link";
import styles from "./bloglist.module.css";

const fetchBlogs = async () => {
  const response = await fetch('http://localhost:8000/blogs/', {cache: "no-cache"});
  const data = await response.json();
  return data
}

const BlogList = async () => {
    const blogs = await fetchBlogs();
    
    return (
        <div className="blog_list">
        {blogs.map(blog => (
          <Link href={`/blogs/${blog.id}`} className={styles.blog_link}>
            <div className={styles.blog_preview} key={blog.id}> 
              <h2>{ blog.title }</h2>
              <p>Date:  {blog.date }</p>
            </div>
          </Link>
        ))}
        </div>
    );
}
 
export default BlogList;