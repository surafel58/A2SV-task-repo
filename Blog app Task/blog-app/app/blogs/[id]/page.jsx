"use client";
import Link from "next/link";
import styles from "./blogdetail.module.css";
import { usePathname, useRouter, useParams } from "next/navigation";

const fetchBlog = async (id) => {
  const response = await fetch("http://localhost:8000/blogs/" + id, {
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
};

const deleteBlogs = async (id) => {
  const response = await fetch("http://localhost:8000/blogs/" + id, {
    method: "delete",
  });
  return response.status;
};

const BlogDetail = async ({ params }) => {
  const router = useRouter();
  const blog = await fetchBlog(params.id);

  return (
    <div className={styles.blog_detail}>
      {blog && (
        <>
          <h2>{blog.title}</h2>
          <p>Date: {blog.date}</p>
          <p>{blog.content}</p>
          <Link
            href={{
              pathname: `${params.id}/edit`,
              query: { id: params.id },
            }}
          >
            <button>Edit</button>
          </Link>
          <button
            onClick={(e) => {
              deleteBlogs(params.id);
              router.replace("/");
            }}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default BlogDetail;
