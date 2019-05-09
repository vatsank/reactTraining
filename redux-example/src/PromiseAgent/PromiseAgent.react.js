import React from 'react';
import {connect} from 'react-redux';
import {fetchAgents} from '../PromiseStore';

class PromiseAgent extends React.Component {

    render() {
        
        return (
            <div>
           
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        agentList: state.agentList.data
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAll: () => {
            dispatch(fetchAgents());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PromiseAgent)
