import React from 'react';
import InputForm from './inputForm';

class FormContainer extends React.Component {
    render(){
        return(
            <section className='formContainer'>
                <InputForm onSubmit={this.props.onSubmit} />
            </section>
        )
    }
  }
  
  export default FormContainer