import axios from "axios";
import React from 'react';


class Application extends React.Component{
    state = {
        appList:[]
    }
    constructor(props:any){
        super(props);
    }
    componentDidMount(){
        axios.get('/api/application/test')
        .then(response => {
            console.log(response);
            this.setState({
                appList: response.data
            });
        })
    }
    render(){
        return (
            <div>{this.state.appList.map((r:any)=>{
                return <h1>{r.appName}</h1>
            }) }</div>
        )
                  
    }
}
  
export default Application;