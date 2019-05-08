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

        // using  es6 destructure
        // const {tours} = this.state;
        // using es5 
          const tours = this.state.tours;
        tours.push(resp);
        this.setState({tours});
       
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
            <div className="container">
              <div className='row'>
              <div className='col-md-6'>

                          <table className='table table-bordered'>
                          <thead>
                  <tr>
                   <th>Id</th>
                   <th>Tour Name</th>
                   <th>Cost</th>
                   
                  </tr>
                  </thead>
                  <tbody>
                  {
                  this.state.tours.map(eachtour =>{
                      return(

                          <tr key={eachtour.id}>
                          <td>{eachtour.id}</td>
                          <td>{eachtour.tourName}</td>
                          <td>{eachtour.cost}</td>
                          </tr>
                      )
                  })
                 
              }
              </tbody>
              </table>
  
              </div>
         
              <div className='col-md-6'>
              <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                   <label htmlFor="id" className='label label-info'>Id</label>
                    <input type="text" name='id' 
                    value={this.state.newTour.id} 
                      onChange={this.handleChange} 
                      className='form-control'/>
                </div>
                <div className='formGroup'>
                   <label htmlFor="tourName" className='label label-default'>Tour Name</label>
                   <input type="text" name='tourName' value={this.state.newTour.tourName}
                    onChange={this.handleChange} className='form-control'/>
                 </div>
                <div className='formGroup'>
                    <label htmlFor="cost" className='label label-info'>Cost</label>
                    <input type="text" name='cost' value={this.state.newTour.cost} 
                    onChange={this.handleChange} className='form-control'/>
                 </div>
                <div className='formGroup'>
                      <input type="submit" value='Add' className='btn btn-primary'/></div>
            </form>

              </div>
            </div>
              
            </div>
        );
    }
}

export default AddTours;