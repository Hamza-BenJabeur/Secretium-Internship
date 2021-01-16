import {useState,useEffect} from 'react'
import './App.css';
import {Link} from 'react-router-dom'

function Posts() {
    const  [posts,setPosts]=useState([]);
    useEffect(()=>{
        fetchPosts();
    },[])
    const fetchPosts=async ()=>{
        const data=await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts=await data.json()
        console.log(posts)
        setPosts(posts)

    }
  return (
    // <div className="App">
    //   {posts.map(post=>(
    //     <div>
    //     <h1 key={post.id} >
    //           <Link to={`/post/${post.id}/${post.userId}`}className="link">
    //           {post.title}
    //             </Link>
    //           </h1>
    //           <h1>{post.body}</h1>
    //           </div>
              
    //           ))}
    // </div>
    <div class="container">
  {posts.map(post=>(
      <div class="box">
      <h1 class="box-title">{post.title}</h1>
      {/* <p class="box-p">{post.title}</p> */}
      <button className="button button1">
      <Link to={`/post/${post.id}/${post.userId}`}className="link">
         more details +
        </Link>
        </button>
      <p class="box-index">post {post.id}</p>
     </div>

  ))}

   
  
  </div>
);
}

export default Posts;


