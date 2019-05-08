import React, {Component} from 'react';

interface State{
   userName:string;
}

interface Data{

}
export default class DashBoard 
extends Component<Data,State> {
   
    constructor(props:Data){
      super(props);
      this.state ={
          userName:'ramesh',
      }
    }

    handleClick = (event:React.MouseEvent<HTMLElement>)=>{
          console.log('click event fired')
    }
    handleChange = (event:React.FormEvent<HTMLInputElement>)=>{

        console.log(event.currentTarget.value);
    }
    
    render() {
        return (
            <div>
                <h2>{this.state.userName}</h2>
           <input type='text' name='name' onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>Change</button>
                </div>
        );
    }
}