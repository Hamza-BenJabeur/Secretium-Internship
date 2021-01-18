import {useState,useEffect} from 'react'
import './App.css';
import Comment from './Comments'


function PostDetails({match}) {
console.log(match);
    useEffect(() => {
        fetchPost();
        fetchComments();
        fetchUser();
        console.log(match);
    } , [] )

    const  [post,setPost]=useState({});

    const  [User,setUser]=useState({});

    const  [comments,setComments]=useState([]);
/** fetching a specefic post from api using params that is provided by Link */
    const fetchPost=async()=>{

const fetchPost=await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)

const post=await fetchPost.json();

console.log(post)

setPost(post);
    }
/** fetching  comments for a specefic post from api using params */

    const fetchComments=async()=>{

const fetchComments=await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${match.params.id}`)

const comments=await fetchComments.json();

console.log(comments)

setComments(comments);
    }
    /** fetching a specefic user from api using params */
    const fetchUser=async()=>{

const fetchUser=await fetch(`https://jsonplaceholder.typicode.com/users/${match.params.userId}`)

const User=await fetchUser.json();

console.log(User)

setUser(User);

    }


  return (

    <div>
        <div className="container">
        <div className="box-informations">
          <div className="box-info1">
            <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="" className="box-img"/>
            <h1 className="box-name">{User.name}</h1>
          </div>
          <div className="container">
            <div className="box-info2">
              <h3 className="box-text-title">{post.title} </h3>
              <p>{post.body}</p>
          </div>
            </div>
        </div>
        </div>
     
          <Comment data={comments} />
      

     </div>
  );
}

export default PostDetails;
