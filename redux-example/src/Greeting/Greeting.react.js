import React from 'react';
import Greeter from '../Greeter/Greeter.react';
import store from '../store';
import {showBirthDay} from '../action'
import {showWeddingDay} from '../action'
import {connect} from 'react-redux';

class Greeting extends React.Component {
   
    
    birthDayGreet = ()=>{
       
        store.dispatch(showBirthDay("Wish You a Happy Birthday"))
    }

    weddingDayGreet = ()=>{

        store.dispatch(showWeddingDay("Happy Anniversary"));

    }
    render() {
        return (
            <div >
            <h2>{this.props.text}</h2>
           <Greeter action={this.birthDayGreet} label={'Birthday'}></Greeter>
           <Greeter action={this.weddingDayGreet} label={'WeddingDay'}></Greeter>
           
           </div>
        );
    }
}

const  mapStateToProps = (state) => {
    return {
        text: state.text
    }
}

export default connect(mapStateToProps)(Greeting);