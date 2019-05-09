import React from 'react';


export const MyContext = React.createContext();

class MyProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            title:'Welcome to Context API'
        }
    }

    render() {
        return (
            <div >

            <MyContext.Provider value={this.state}>
              {this.props.children}
            </MyContext.Provider>
            </div>
        );
    }
}

export default MyProvider;