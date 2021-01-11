import React from 'react';

export default class Header extends React.Component{
    render(){
        return(
            <div align='left' style={{paddingBottom: 40}}>
                <h4 style={{paddingBottom: 40}} >Select Playing9</h4>
                <input type='text' placeholder='Search Players' style={{borderTop: 0, borderLeft: 0, borderRight: 0,backgroundColor: '#efefef'}}></input>
            </div>
        );
    }
}