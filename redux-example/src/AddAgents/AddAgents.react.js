import React from 'react';

import {Field,reduxForm} from 'redux-form';

export const AddAgents = (props) => {

    console.log(props);
    const {handleSubmit} = props;
   
    return (
        <div >

        <form onSubmit={handleSubmit}>
        
        <label>ID</label>
         <Field component='input' type='text' name='id'></Field>
      
        <label>Name</label>
        <Field component='input' type='text' name='name'></Field>

        <label>PhoneNumber</label>
        <Field component='input' type='text' name='phoneNumber'></Field>

        <button type='submit'>Submit</button>
        
        </form>

        </div>
    );

}
// Decorating our AddAgent component with redux-form
// to expose the props and action from redux-form

 export default reduxForm({
     form:'addAgentForm'
 })(AddAgents);

 