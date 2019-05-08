import React from 'react';
import Tour from '../Tour/Tour.react';
import Agent from '../Agent/Agent.react';


class TourManager extends React.Component {
    constructor(props) {
        super(props);
        this.state ={ 
            tours:[],
            agents:[]
        }
     }
    

    componentDidMount(){

        const urls =[ 'http://localhost:4000/summerTours',
        
        'http://localhost:4000/agents'];


        urls.map( (url,idx) => {

            fetch(url).then(resp => resp.json()).then(data => {
               if(idx ===0){
             this.setState({tours:data})}
             else {
                 this.setState({agents:data})
             }
            } );
        });
        
    }

    render() {
        return (
            <div className='row'>
            
            <div className='col-md-6'>
            <h1>Popular Packages</h1>
            {
                this.state.tours.map( (eachTour) =>{

                 return (  
                     <Tour key={eachTour.id} 
                          tourName={eachTour.tourName} 
                           cost ={eachTour.cost}>
                     </Tour>
                 )
                })
            }
            </div>
            <div className='col-md-6'>
            <h1>Our Sales Executives</h1>

            {
                this.state.agents.map(eachAgent =>{
  
                  return(
  
                      <Agent key={eachAgent.id} name={eachAgent.name} phoneNumber={eachAgent.phoneNumber}></Agent>
                  )
                })
              }
            </div>
            
            
            </div>
            
        )
    }
}

export default TourManager;