import React from 'react';

/*
JSX -> 
state(trang thai): cos ther bij thay doi

*/ 

class MyComponents extends React.Component{
    state = {
        name : "Minh tri",
        age: 16
    }
    render (){
        return(
            <>
            <div>
                xin chao react
            </div>
            <div>Hello, My name is {this.state.name} and {this.state.age} age</div>
            </>
            
        )
    }
}

export default MyComponents;
