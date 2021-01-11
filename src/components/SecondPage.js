import React from 'react';
import Tile from './Tile';
class SecondPage extends React.Component {

    constructor() {
        super();
        this.state = { RandomNumber: 0 };
    }

    render() {
        let data = this.props.data.filter((ele,index)=> this.props.selectedIndexes.includes(index));
        return (
            <div style={{paddingTop: 20}}>
                
                <Tile number={this.props.RandomNumber} user={data[0]}></Tile>
                <Tile number={this.props.RandomNumber} user={data[1]}></Tile>
                <Tile number={this.props.RandomNumber} user={data[2]}></Tile>
                <Tile number={this.props.RandomNumber} user={data[3]}></Tile>
                <Tile number={this.props.RandomNumber} user={data[4]}></Tile>
                <h1>{this.props.RandomNumber}</h1>
                <Tile number={this.props.RandomNumber} user={data[5]}></Tile>
                <Tile number={this.props.RandomNumber} user={data[6]}></Tile>
                <Tile number={this.props.RandomNumber} user={data[7]}></Tile>
                <Tile number={this.props.RandomNumber} user={data[8]}></Tile>
                <div>
                {/* {
                    
                    data.map((ele,index)=>(
                        index == 5 ?  
                            <span> <Tile number={this.state.RandomNumber} user={ele}>
                                
                            </Tile></span>:
                        <Tile number={this.state.RandomNumber} user={ele}>
                            
                        </Tile>
                    ))
                } */}
                </div>
                <div align='left'>
                <button className="shadow" style={{width:100,backgroundColor: 'black', color:'gold', borderRadius: 5}} onClick={()=>{this.props.onBack(false);}}> Back </button>
                </div>
                
            </div>
        );
    }
}

export default SecondPage;