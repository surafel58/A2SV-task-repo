import BlogList from "./components/bloglist/BlogList";
import styles from "./page.module.css";

export default function HomePage() {
  
  return (
    <div className="home">
      <h1>All Blogs</h1>
        {/* {isPending && <p>Loading ...</p>} */}
        {/* {error && <p>{error}</p>} */}
        {/* {!error && blogs && <BlogList blogs={blogs} title={"All Blogs"}/>} */}
        {<BlogList/>}
    </div> 
  )
}
