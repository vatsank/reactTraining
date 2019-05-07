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

            fetch(url).
          then(resp => resp.json()).
           then(data => {
               if(idx ==0){
             this.setState({tours:data})}
             else {
                 this.setState({agents:data})
             }
            } );
        });
        
    }

    render() {
        return (
            <div>
            {
                this.state.tours.map( (eachTour) =>{

                 return (  
                     <Tour id={eachTour.id} key={eachTour.id} 
                          tourName={eachTour.tourName} 
                           cost ={eachTour.cost}>
                     </Tour>
                 )
                })
            }
            {
              this.state.agents.map(eachAgent =>{

                return(

                    <Agent name={eachAgent.name} phoneNumber={eachAgent.phoneNumber}></Agent>
                )
              })
            }
            </div>
            
        )
    }
}

export default TourManager;