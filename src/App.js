import React from 'react';
import './App.css';
import PhoneForm from './Components/PhoneForm';
import PhoneInfoList from './Components/PhoneInfoList';

class App extends React.Component {
  id = 2
  state = {
    information : [
      {
        id : 0,
        name : "정현중",
        phone : '01024428051'
      },
      {
        id : 1,
        name : "최승림",
        phone : '01065994659'
      },
      
    ]
  }
  handleCreate = data => {
    const {information} = this.state;
    this.setState({
      information : information.concat({id : this.id++, ...data})
    })
  }
  render(){
    const {information} = this.state;
    return (
      <div>
        <PhoneForm 
          onCreate = {this.handleCreate}
        />
        <PhoneInfoList data = {this.state.information}/>
      </div>
    );
  }
}

export default App;
