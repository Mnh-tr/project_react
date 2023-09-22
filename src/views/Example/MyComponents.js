import React from "react";

/*
JSX -> 
state(trang thai): cos ther bij thay doi

*/

class MyComponents extends React.Component {
  // state = {
  //     name : "Minh tri",
  //     age: 16
  // }
  // clickButton = () =>{
  //     alert('click me');
  // }
  // handleOnChange = (event) =>{
  //     this.setState({
  //         name: event.target.value
  //     })
  // }
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
        {/* <div className='first'>
                xin chao react
            </div>
            <div className='second'>
                <input value={this.state.name} type='text'
                    onChange={(event) => this.handleOnChange(event)} 

                />
                Hello, My name is {this.state.name} and {this.state.age} age</div>
            <div className='third'>
                <button onClick={() => this.clickButton()}>Click Me</button>
            </div> */}

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
      </>
    );
  }
}

export default MyComponents;
