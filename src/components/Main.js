import React from 'react';
import API from '../API';
import Table from './Table'; 
import SideBar from './SideBar';
import Header from './Header';
import SecondPage from './SecondPage'
class Main extends React.Component {

    constructor() {
        super();
        this.state = { Data: [], selectList:[], switchPage: false,RandomNumber: 0 };
    }
    getRandomNumber(){
        let newRandomNumber;
        while(true)
        {
            newRandomNumber = Math.floor(Math.random() * 9)+1;
            if(newRandomNumber!=this.state.RandomNumber) break;
        }
        this.state.RandomNumber = newRandomNumber;
        return newRandomNumber;
    }
    componentDidMount = async () =>{
        let data = await API.GetOpenAPIData();
        data = data.data;
        let newData = data.map(ele=>{
            return {Select: false,Name:ele.Name,Bet:ele.Bet,ProfileImage:ele["Profile Image"],Price:ele.Price,Wins:0,Loses:0, Level:0};
        });
        this.setState({
            Data: newData
        });
    }
    updateList = (action,index) =>{
        console.log("Update list called");
        let list = this.state.selectList;
        if(action == "check")
        {
            let list = this.state.selectList;
            list.push(index);
        }
        else
        {
            let deleteIndex = list.findIndex(x=>x===index);
            list.splice(deleteIndex,1);
        }
        console.log(list);
        this.setState({
            selectList: list
        })
    }

    switchPage = (val) =>{
        this.setState({
            switchPage: val
        });
    }

    render() {
        return (
            <div>
            {
                 this.state.switchPage ?
                  <SecondPage data={this.state.Data} RandomNumber={this.getRandomNumber()} selectedIndexes = {this.state.selectList} onBack={this.switchPage}/>
                 :
                 <div style={{display: 'flex', paddingTop: 20}}>
                <div align='left' className="sideBar" style={{width:'30%'}}>
                    <SideBar data={this.state.Data} selectedIndexes = {this.state.selectList} onStart={this.switchPage}></SideBar>
                </div>
                <div style={{width:'70%',paddingLeft:30}}>
                    <Header></Header>
                    <Table data={this.state.Data} onCheck={this.updateList}></Table>
                </div>
            </div>    
            }
            </div>
        );
    }
}

export default Main;