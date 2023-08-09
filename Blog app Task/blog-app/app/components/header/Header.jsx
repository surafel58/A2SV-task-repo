import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
    return ( 
      <header>
          <nav className={styles.navbar}>
            <h1>Blogopedia</h1>
            <div className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/blogs/create" style={{
                color: 'white',
                backgroundColor: '#f1356d',
                borderRadius: '8px'
              }}>New Blog</Link>
            </div>
          </nav>
      </header>
     );
}
 
export default Header;