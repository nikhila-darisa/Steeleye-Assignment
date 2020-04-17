import React from 'react';
import SomeListComponent from './text'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [
        { text: "apple" },
        { text: "banana" },
        { text: "orange" }
      ],
    }
  }
  onClick=(index)=>{
    alert(index)
  }
  render() {
    return (
      <SomeListComponent items={this.state.items} onClick={this.onClick} />
    )
  }
}

export default App;
