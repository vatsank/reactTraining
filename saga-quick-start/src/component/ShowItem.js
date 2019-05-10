import React from 'react';
import {connect} from 'react-redux';
const ShowItem = (props) => (

        <div>
        <button onClick={props.increment}>+</button>
        
        <h2>{props.itemCount}</h2>

        <button onClick={props.decrement} >-</button>
        
    </div>

);



const mapStateToProps = (state) => {
    return {
        itemCount: state.itemCount
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch({type:'ADD_ITEM',value:1})
        },
        decrement:()=>{
            dispatch({type:'SUB_ITEM',value:1})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowItem)