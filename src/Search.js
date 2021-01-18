
export  default  function SearchImages(props){
        return (
       
            <div className="searching">
            <input type="text" id="input" onChange={props.change} placeholder="search by title ..." />
          </div>
             )
}


export   function SearchPosts(props){
        return (
       
            <div className="searching">
            <input type="text" id="input" onChange={props.Onchange} placeholder="search by title ..." />
          </div>
             )
}
