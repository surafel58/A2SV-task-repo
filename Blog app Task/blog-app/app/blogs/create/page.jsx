import styles from "./blogform.module.css";

const addBlog = async (data) => {
    //    fetch('http://localhost:8000/blogs/', {
    //     method: "POST",
    //     cache: "no-cache",
    //     body: JSON.stringify(data)
    //     }

    
    // );

    const handleSubmit = async (event) => {
     
        const data = {
          first: event.target.title.value,
          last: event.target.content.value,
        }
     
        const JSONdata = JSON.stringify(data)
     
        // Form the request for sending data to the server.
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSONdata,
        }
     
        const response = await fetch('http://localhost:8000/blogs/', options)
        const result = await response.json()
      }
    
}

const BlogForm = () => {
    return ( 
        <form method="post" className={styles.blog_form} action='http://localhost:8000/blogs/'> 
            <div className={styles.blog_form_inputs}>
                <label>Blog title: </label> <input type="text" name="title"/>
                <label>Blog body: </label> <textarea cols={10} rows={10} name="content"/>
                <span hidden name="date">{new Date().getDate().toString() + "/" + new Date().getMonth().toString() + "/" + new Date().getFullYear()}</span>
            </div>
            <button type="submit">Add Blog</button>
        </form>
     );
}
 
export default BlogForm;