import React from 'react';
import {connect} from 'react-redux';
import {getAllAgents} from '../restStore';

class ShowAgents extends React.Component {
   

    render() {
        return (
            <div >
            <div>
              <ul>
               {
                this.props.agentList.map((eachAgent)=>{

                    return(
                        <li key={eachAgent.id}>{eachAgent.name}</li>
                    );
                })   
               }
              </ul>
            </div>
<button onClick={this.props.getAll}>Show Agents</button>
            </div>
        );
    }
}

const mapStateToProps = (state ) => {

    console.log(state);
    return {
        
        agentList: state.agentList
    }
}

const  mapDispatchToProps = (dispatch) => {
    return {
        getAll: () => {
            dispatch(getAllAgents())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowAgents);