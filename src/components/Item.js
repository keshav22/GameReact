import React from 'react';

export default class Item extends React.Component{
    render(){
        let person = this.props.person;
        return(
           <tr >
               <td align='center'><input type='checkbox'onChange={(event)=> {
                   if(this.props.count <9 || !event.target.checked)
                   {
                    this.props.onCheck(event.target.checked,this.props.index);
                    person.Select = event.target.checked;
                   }
                   else
                   {
                    alert('9 players selected');
                   }
                   }} checked={person.Select}/></td>
               <td style={{textAlign: 'left'}}>{person.Name}</td>
               <td>{person.Level}</td>
               <td><img style={{width:50,height:50}} src={person["ProfileImage"]}></img></td>
               <td>{person.Bet}</td>
               <td>{parseInt(person.Wins/2)}</td>
               <td>{parseInt(person.Loses/2)}</td>
               <td>{person.Price}</td>
           </tr>
        );
    }
}
