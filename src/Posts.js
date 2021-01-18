import {useState,useEffect} from 'react'
import './App.css';
import {Link} from 'react-router-dom'
import {SearchPosts} from './Search';

function Posts() {
    const  [posts,setPosts]=useState([]);
  const [searchedData,setSearchedData]=useState([]);

    useEffect(()=>{
        fetchPosts();
    },[])
  /* function that can handle any changes when you are typing in the search bar  */
    const Onchange=(event)=> {
      let arr = posts.filter((element) =>
        element.title.includes(event.target.value)
      );
      setSearchedData(arr)
    }
    /** fetching all the posts from the api */
    const fetchPosts=async ()=>{
        const data=await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts=await data.json()
      
        setPosts(posts)

    }
  return (
    <div>
    <div className="search-bar">
  <SearchPosts Onchange={Onchange}/>
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
      <p class="box-index">post n° {post.id}</p>
     </div>

  )):searchedData.map(post=>(
  <div className="box">
  <h1 className="box-title">{post.title}</h1>
  <button className="button button1">
  <Link to={`/post/${post.id}/${post.userId}`} className="link" >
     more details +
    </Link>
    </button>
  <p class="box-index">post n° {post.id}</p>
 </div>
  ))}

   
  
  </div>
  </div>
);
}

export default Posts;


