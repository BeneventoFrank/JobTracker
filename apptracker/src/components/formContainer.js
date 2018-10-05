import React from 'react';
import InputForm from './inputForm';


const FormContainer = (props) =>{
    return(
        <section className='formContainer'>
            <InputForm handleInputFormChanges={props.handleInputFormChanges} 
                       addNewCompany={props.addNewCompany} 
                       cancelNewContact={props.cancelNewContact} 
                       addNewContact={props.addNewContact} 
                       jobData={props.jobData} 
                       />
        </section>
    )
}

  
  export default FormContainer