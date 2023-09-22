import React from "react";

/*
JSX -> 
state(trang thai): cos ther bij thay doi

*/

class ChildComponent extends React.Component {
  
  render() { 
    return (
      <>
         <div>Child Component: {this.props.name}
        </div>

      </>
    );
  }
}

export default ChildComponent;
