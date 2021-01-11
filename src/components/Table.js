import React from 'react';
import Item from './Item';

export default class Table extends React.Component{

    constructor (){
        super();
        this.state = {count:0};
    }
    componentDidMount(){
        this.setState({
            count: this.props.data.filter(x=> x.Select).length
        });
    }
    onCheck = (action,index) =>{
        if(action)
        {
            this.setState({
                count: ++this.state.count
            })
            this.props.onCheck("check",index);
        }
        else
        {
            this.setState({
                count: --this.state.count
            })
            this.props.onCheck("uncheck",index);
        }
    }
    render(){
        return(
           <table class="table table-hover">
               <thead>
                <tr>
                    <th>SELECT</th>
                    <th style={{textAlign: 'left'}}>PLAYER NAME</th>
                    <th>LEVEL</th>
                    <th>AVATAR</th>
                    <th>BET</th>
                    <th>WINS</th>
                    <th>LOST</th>
                    <th>PRICE</th>
                </tr>
               </thead>
               <tbody>
                {
                    this.props.data.map((ele,index) => {
                        return(
                            <Item person={ele} key={index} index={index} onCheck={this.onCheck} count={this.state.count}/>
                        )
                    })
                }
               </tbody>
           </table> 
        );
    }
}
