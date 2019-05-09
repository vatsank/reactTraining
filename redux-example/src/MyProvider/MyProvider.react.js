import React from 'react';



export const Contxt = React.createContext('heading');
class MyProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            title:'Hotels'
        }
    }

    render() {
        return (
            <div>
           <Contxt.Provider value={this.state}>
              {this.props.children}
            </Contxt.Provider>
            </div>
        );
    }
}

export default MyProvider;