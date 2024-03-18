import axios from "axios";
import React, { Component } from 'react';


// const [appList, setAppList] = useState('');

// axios.get('/api/application/test')
//         .then(response => {
//             console.log(response);
//             setAppList(response.data)
//         })
// const Application: React.FC = () => {    
//     return (
//         <div>
//             sdsdsdsdssdsdsd

//         </div>
//     )
// };

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
        // return(
        //     {
        //         this.state.appList.map(r=>{
        //             return <h1>dsd</h1>
        //         })
        //     }
        // );
        return (
            
            <div>{this.state.appList.map((r:any)=>{
                return <h1>{r.appName}</h1>
            }) }</div>
        )
                  
    }
}
  
export default Application;