import './App.css';
import {useEffect,useState} from 'react';
import SearchImages from './Search';
function Photo() {

  const [photos,setPhotos]=useState([]);
  const [searchedData,setSearchedData]=useState([]);
  useEffect(()=>{
    fetchPhotos()
    console.log(searchedData)
  },[])
  /* function that can handle any changes when you are typing in the search bar  */
  const change=(event)=> {
    let arr = photos.filter((element) =>
      element.title.includes(event.target.value)
    );
    setSearchedData(arr)
  }
  /** fetching all photos from the api */
  const fetchPhotos= async ()=>{
    const data= await fetch("https://jsonplaceholder.typicode.com/photos")
    const photos = await data.json();
    console.log(photos);
    setPhotos(photos);
  }
  return (
<div>
  <div className="search-bar">
<SearchImages change={change}/>
</div>
<div className="container">
 
  
 
 
{searchedData.length===0?
photos.map(photo=>(
  
  <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={photo.url} alt="img" className="image"/>
    </div>
    <div className="flip-card-back">
      <h1>Secretium</h1> 
      <p>{photo.title}</p> 
      <p>enjoy watching ...</p>
      <p className="index">{photo.id}</p>
    </div>
  </div>
  
  </div>



)):searchedData.map(photo=>(
  <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={photo.url} alt="img" className="image"/>
    </div>
    <div className="flip-card-back">
      <h1>Secretium</h1> 
      <p>{photo.title}</p> 
      <p>enjoy watching ...</p>
      <p className="index">{photo.id}</p>
    </div>
  </div>
  
  </div>
))}

</div>
</div>
  );
}

export default Photo;
