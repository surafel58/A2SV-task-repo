"use client";
import {useParams, useRouter  } from 'next/navigation';
import styles from "./editform.module.css";
import { useState } from "react";

const fetchBlog = async (id) => {
  const response = await fetch('http://localhost:8000/blogs/' + id , {cache: "no-cache"});
  const data = await response.json();
  return data
}

const EdtForm = async() => {


  const {current_title, current_content} = await fetchBlog(params.id);

  const [title, setTitle] = useState(current_title);
  const [content, setContent] = useState(current_content);


  const editBlog = async (data) => {
    fetch('http://localhost:8000/blogs/'+params.id, {
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