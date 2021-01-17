import react from 'react'

class Comment extends react.Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log('yoyoy',this.props)
        return <>
            <div style={{display:'block'}}>
            <span style={{color:'red'}}>{this.props.data.name}</span>
                <span>{this.props.data.body}</span>¨
                <span>{this.props.data.email}</span>
            </div>
        </>
    }
}


export default Comment