"use client";
import { useRouter  } from 'next/navigation';
import styles from "./blogform.module.css";
import { useState } from "react";


const BlogForm = () => {
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const {push} = useRouter();

  const addBlog = async (data) => {
    fetch('http://localhost:8000/blogs/', {
     method: "POST",
     cache: "no-cache",
     headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(data)
      }
  );

    push('/');

 // const handleSubmit = async (event) => {
  
 //     const data = {
 //       first: event.target.title.value,
 //       last: event.target.content.value,
 //     }
  
 //     const JSONdata = JSON.stringify(data)
  
 //     // Form the request for sending data to the server.
 //     const options = {
 //       method: 'POST',
 //       headers: {
 //         'Content-Type': 'application/json',
 //       },
 //       body: JSONdata,
 //     }
  
 //     const response = await fetch('http://localhost:8000/blogs/', options);
 //     return redirect('/');
 //   }
 
  }

    return ( 
        <form method="post" className={styles.blog_form} onSubmit={async (e) => {
          e.preventDefault();
          await addBlog({id: new Date().getMilliseconds().toString(), title, content, date: new Date().getDate().toString() + "/" + new Date().getMonth().toString() + "/" + new Date().getFullYear()});
        }}> 
            <div className={styles.blog_form_inputs}>
                <label>Blog title: </label> <input required type="text" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                <label>Blog body: </label> <textarea required cols={10} rows={10} name="content" value={content} onChange={(e) => {setContent(e.target.value)}}/>
                {/* <span hidden name="date">{new Date().getDate().toString() + "/" + new Date().getMonth().toString() + "/" + new Date().getFullYear()}</span> */}
            </div>
            <button type="submit">Add Blog</button>
        </form>
     );
}
 
export default BlogForm;