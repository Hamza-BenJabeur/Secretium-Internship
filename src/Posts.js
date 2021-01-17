import {useState,useEffect} from 'react'
import './App.css';
import {Link} from 'react-router-dom'
import Search from './Search';

function Posts() {
    const  [posts,setPosts]=useState([]);
  const [searchedData,setSearchedData]=useState([]);

    useEffect(()=>{
        fetchPosts();
    },[])
    const Onchange=(event)=> {
      let arr = posts.filter((element) =>
        element.title.includes(event.target.value)
      );
      setSearchedData(arr)
    }
    const fetchPosts=async ()=>{
        const data=await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts=await data.json()
        console.log('posts=======>',posts)
        setPosts(posts)

    }
  return (
    <div>
    <div className="search-bar">
  <Search Onchange={Onchange}/>
  </div>
    <div className="container">

  {searchedData.length===0?
  posts.map(post=>(
      <div className="box">
      <h1 className="box-title">{post.title}</h1>
      <button className="button button1">
      <Link to={`/post/${post.id}/${post.userId}`} className="link" >
         more details +
        </Link>
        </button>
      <p class="box-index">post {post.id}</p>
     </div>

  )):searchedData.map(post=>(
  <div className="box">
  <h1 className="box-title">{post.title}</h1>
  <button className="button button1">
  <Link to={`/post/${post.id}/${post.userId}`} className="link" >
     more details +
    </Link>
    </button>
  <p class="box-index">post {post.id}</p>
 </div>
  ))}

   
  
  </div>
  </div>
);
}

export default Posts;


