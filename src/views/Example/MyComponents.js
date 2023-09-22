import React from "react";
// eslint-disable-next-line no-unused-vars
import ChildComponent from "./ChildComponent";
class MyComponents extends React.Component {
  state = {
    firstName: '',
    lastName: ''
  }
  handleChangeFirstName = (event) =>{
    this.setState({
        firstName: event.target.value
    })
  }
  handleChangeLastName = (event) =>{
    this.setState({
        lastName: event.target.value
    })
  }
  render() { 
    return (
      <>

        <form>
          <label htmlFor="fname">First name:</label><br />          
          <input type="text" id="fname" value={this.state.firstName} 
            onChange={(event) => this.handleChangeFirstName(event)}
          
          /><br />          
          <label htmlFor="lname">Last name:</label><br />          
          <input type="text" id="lname" value={this.state.lastName} 
          onChange={(event) => this.handleChangeLastName(event)}
          /><br /><br />                  
          <input type="submit" value="Submit" />
        </form>

        <ChildComponent name={'child one'} />
        <ChildComponent name={'child two'} />
        <ChildComponent name={'child three'} />
      </>
    );
  }
}

export default MyComponents;
