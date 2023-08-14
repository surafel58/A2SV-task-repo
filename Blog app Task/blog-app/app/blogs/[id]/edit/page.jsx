"use client";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./editform.module.css";
import { useEffect, useRef, useState } from "react";

const fetchBlog = async (id) => {
  const response = await fetch("http://localhost:8000/blogs/" + id, {
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
};

const editBlog = async (data, id, router) => {
  fetch("http://localhost:8000/blogs/" + id, {
    method: "PUT",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  router.push("/");
};

const EdtForm = async () => {
  const params = useSearchParams();
  const id = params.get("id");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const titleRef = useRef();

  useEffect(() => {
    let blog;
    fetchBlog(id).then((data) => {
      blog = data;
      setTitle(blog.title);
      setContent(blog.content);
    });
  }, []);

  return (
    <form
      method="put"
      className={styles.blog_form}
      onSubmit={async (e) => {
        e.preventDefault();
        await editBlog(
          {
            id: new Date().getMilliseconds().toString(),
            title,
            content,
            date:
              new Date().getDate().toString() +
              "/" +
              new Date().getMonth().toString() +
              "/" +
              new Date().getFullYear(),
          },
          id,
          router
        );
      }}
    >
      <div className={styles.blog_form_inputs}>
        <label>Blog title: </label>{" "}
        <input
          ref={titleRef}
          required
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Blog body: </label>{" "}
        <textarea
          required
          cols={10}
          rows={10}
          name="content"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </div>
      <button type="submit">Edit Blog</button>
    </form>
  );
};

export default EdtForm;
