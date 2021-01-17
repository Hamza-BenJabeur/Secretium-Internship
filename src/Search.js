
function Search(props){
console.log('ye haaamza prooops',props);
        return (
       
            <div className="searching">
            <input type="text" id="input" onChange={props.change} onChange={props.Onchange} placeholder="search by title ..." />
          </div>
             )
}
export default Search