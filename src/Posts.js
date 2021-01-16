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
    <div className="App">
      {posts.map(post=>(
          <h1 key={post.id} >
              <Link to={`/post/${post.id}/${post.userId}`}className="link">
              {post.title}
                </Link>
              </h1>
      ))}
    </div>
  );
}

export default Posts;
