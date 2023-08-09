"use client";
import {useRouter  } from 'next/navigation';
import styles from "./editform.module.css";
import { useState } from "react";


const EdtForm = () => {

  const router = useRouter();
  const {query: {
    blog_title,
    blog_content,
    id
  }} = router;

  const props = {
    blog_title,
    blog_content,
    id
  }
  
  
  console.log(blog_title);
  const [title, setTitle] = useState(props.blog_title);
  const [content, setContent] = useState(props.blog_content);


  const editBlog = async (data) => {
    fetch('http://localhost:8000/blogs/', {
     method: "PUT",
     cache: "no-cache",
     headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(data)
      }
  );

    router.push('/');

  }

    return ( 
        <form method="put" className={styles.blog_form} onSubmit={async (e) => {
          e.preventDefault();
          await editBlog({id: new Date().getMilliseconds().toString(), title, content, date: new Date().getDate().toString() + "/" + new Date().getMonth().toString() + "/" + new Date().getFullYear()});
        }}> 
            <div className={styles.blog_form_inputs}>
                <label>Blog title: </label> <input required type="text" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                <label>Blog body: </label> <textarea required cols={10} rows={10} name="content" value={content} onChange={(e) => {setContent(e.target.value)}}/>
                {/* <span hidden name="date">{new Date().getDate().toString() + "/" + new Date().getMonth().toString() + "/" + new Date().getFullYear()}</span> */}
            </div>
            <button type="submit">Edit Blog</button>
        </form>
     );
}
 
export default EdtForm;