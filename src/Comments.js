import react from 'react'

function Comment(props){
  /* function that can extract the name of the person who wrote the comment */
    const extractName=(str)=>{
        var name="";
        for(var i =0;i<str.length;i++){
            var h=str[i];
                    if (h==="@"){
                         break;
                      }
                       else if(h==="."){
                             name+=" "
                       }
                       else if(h==="_"){
                             name+=" ";
                      }
                         else if (h==="-"){
                              name+=" "
                             }
            else{name+=h;}
                     }
             return name;
        }
        return( 
    <div className="container">
         {props.data?props.data.map(comment=>(
        <div className="box-comment">
            <div className="box-details">
                <div className="box-detail-img">
                    <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="" className="box-image"/>
                </div>
                <div className="box-detail-name-comment">
                    <span>{extractName(comment.email)}</span>
                    <p className="box-detail-comment">{comment.body}</p>
                </div>
            </div>

        </div>
        )):null}
    </div>
        )
    }



export default Comment