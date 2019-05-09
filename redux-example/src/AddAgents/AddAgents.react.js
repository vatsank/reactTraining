import React from 'react';

import {Field,reduxForm} from 'redux-form';
import myvalidator from '../validate/validate.react';
import {} from 'redux-form'
export const renderField = 
 ({ input, label, type, meta: { touched, error, warning } }) =>{

    return(
    <div>
        <label>{label}</label>
      <input {...input} type={type}/>

      {touched && ((error && 
     <span className="text-danger">{error}</span>) )}

       </div>
    )
    
}
export const AddAgents = (props) => {

    console.log(props);
    const {handleSubmit} = props;
   
    return (
        <div >

        <form onSubmit={handleSubmit}>
        
         <Field component={renderField} type='text' name='id' label='Id'></Field>
      
        <Field component={renderField} type='text' name='name' label="UserName"></Field>

        <Field component={renderField} type='text' name='phoneNumber' label='Phone Number'></Field>

        <button type='submit'>Submit</button>
        
        </form>

        </div>
    );

}
// Decorating our AddAgent component with redux-form
// to expose the props and action from redux-form

 export default reduxForm({
     form:'addAgentForm',
     validate:myvalidator
 })(AddAgents);

 