import React from 'react';
export default class SideBar extends React.Component{
    render(){
        let data = this.props.data.filter((ele,index)=> this.props.selectedIndexes.includes(index));
        return(
            <div>
            <div style={{marginTop: 160}}>
               {
                   data.map((ele,index)=>(
                       <div style={{padding: 25}}>
                           <div>
                            <img style={{width:50,height:50, borderRadius: 5}} src={ele.ProfileImage}></img>
                            <span>{ele.Name}</span>
                           </div>
                       </div>
                   ))
               }
               </div>
               <div className="footer">
                    <button style={{backgroundColor: 'blue', width: 200,color: 'white', float: 'left',marginLeft: 50, marginBottom: 10,borderRadius: 5}} onClick={()=>{
                        if(this.props.selectedIndexes.length==9)
                            this.props.onStart(true);
                        else
                            alert("Select all 9 players");
                        }}> START </button>
               </div>
                    
            </div>
        );
    }
}