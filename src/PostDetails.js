import {useState,useEffect} from 'react'
import './App.css';


function PostDetails({match}) {
    useEffect(() => {
        fetchPost();
        fetchUser();
        console.log(match);
    } , [] )
    const  [post,setPost]=useState({});
    const  [User,setUser]=useState({});
    const fetchPost=async()=>{
const fetchPost=await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
const post=await fetchPost.json();
console.log(post)
setPost(post);
    }
    const fetchUser=async()=>{
const fetchUser=await fetch(`https://jsonplaceholder.typicode.com/users/${match.params.userId}`)
const User=await fetchUser.json();
console.log(User)
setUser(User);
    }


  return (
    <div className="App">
         <h1>username</h1>
        <p>{User.username}</p>
        <h1>title</h1>
        <p>{post.title}</p>
        <h1>body</h1>
        <p>{post.body}</p>
       
    </div>
  );
}

export default PostDetails;
