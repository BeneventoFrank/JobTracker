import React from 'react';
import InputForm from './inputForm';


const FormContainer = (props) =>{
    return(
        <section className='formContainer'>
            <InputForm onSubmit={props.onSubmit} />
        </section>
    )
}

  
  export default FormContainer