import React from 'react';



class AddTours extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            tours:[],
            newTour:{
                id:0,
                tourName:'',
                cost:0
            }
        }
    }


    componentDidMount(){

        const url ='http://localhost:4000/summerTours';

        fetch(url).then(resp=>resp.json()).then(data =>{
            this.setState({tours:data})
        });

    }

    handleSubmit = (event)=>{

        event.preventDefault();
       console.log(this.state.newTour);

       const url = 'http://localhost:4000/summerTours';

       fetch(url,{
           method:'POST',
           body:JSON.stringify(this.state.newTour),
           headers:{'Content-Type':'application/json'}
       }).then(resp=>resp.json()).then(resp => {

        const {tours} = this.state;
        tours.push(resp);
        this.setState({tours});
         console.log(resp);
    });

    }

    handleChange = (event) =>{

        const name = event.target.name;
        const value = event.target.value;

        this.setState( prevState => ({ newTour : 
            {...prevState.newTour, [name]: value  }}));
        
                }

    render() {
        return (
            <div className='col-md-6'>

            <div>
            {
                this.state.tours.map(eachtour =>{
                    return(
                        <li key={eachtour.id}>{eachtour.tourName}</li>
                    )
                })
            }
            </div>
            <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                   <label htmlFor="id">Id</label>
                    <input type="text" name='id' 
                    value={this.state.newTour.id} 
                      onChange={this.handleChange} 
                      className='form-control'/>
                </div>
                <div className='formGroup'>
                   <label htmlFor="tourName">Tour Name</label>
                   <input type="text" name='tourName' value={this.state.newTour.tourName}
                    onChange={this.handleChange} className='form-control'/>
                 </div>
                <div className='formGroup'>
                    <label htmlFor="cost">Cost</label>
                    <input type="text" name='cost' value={this.state.newTour.cost} 
                    onChange={this.handleChange} className='form-control'/>
                 </div>
                <div className='formGroup'>
                      <input type="submit" value='Add' className='button button-primary'/></div>
            </form>
            </div>
        );
    }
}

export default AddTours;