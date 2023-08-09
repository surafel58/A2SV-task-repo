"use client";
import styles from "./blogdetail.module.css";

const fetchBlog = async (id) => {
    const response = await fetch('http://localhost:8000/blogs/' + id, {cache: "no-cache"});
    const data = await response.json();
    return data
}

const deleteBlogs = async (id) => {
    const response = await fetch('http://localhost:8000/blogs/' + id, {method: "post"});
    return response.status;
}

const BlogDetail = async ({params}) => {

    const blog = await fetchBlog(params.id);
    return ( 
        
        <div className={styles.blog_detail}>
            {blog && 
            <>
                <h2>{blog.title}</h2>
                <p>Date: {blog.date}</p>
                <p>{blog.content}</p>
                <button >Edit</button>
                <form action={"http://localhost:8000/blogs/3"} method="delete">
                    <button>Delete</button>
                </form>
            </>}  
        </div>
        );
}
 
export default BlogDetail;