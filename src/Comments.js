import react from 'react'

function Comment(props){
  
    const extractName=(str)=>{
        var name="";
        for(var i =0;i<str.length;i++){
        var h=str[i];
          if (h!=="@"){
            name+=h;
          }
          else if(h==="@"){
            break;
          }
        }
          return name;
        }


        console.log('yoyoy',props.data)
        return( 
        <div>
           {props.data?props.data.map(comment=>(
             <div>
                 <div>
                 <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="avatar" className="avatar"/>
                 <span>{extractName(comment.email)}</span>
                 </div>
                 <p>{comment.body}</p>
             </div>
           )):null}
            {/* <div style={{display:'block'}}>
            <span style={{color:'red'}}>{this.props.data.name}</span>
                <span>{this.props.data.body}</span>¨
                <span>{this.props.data.email}</span>
            </div> */}
           
        </div>
        )
    }



export default Comment