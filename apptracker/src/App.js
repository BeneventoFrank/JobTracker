import React from 'react';
import './static/css/index.css';
import HistoryContainer from './components/historyContainer'
import FormContainer from './components/formContainer'










class Container extends React.Component {

addNewCompany = (newCompanyData) => {
   console.log(newCompanyData)
    this.setState(prevState => ({ 
                                dataSet: prevState.dataSet.concat(newCompanyData)
                                }
                               )
               );
}
        state = {
    dataSet: [
      {CompanyName: "Google",DateContacted:"1/1/2018"},
      {CompanyName: "Netflix",DateContacted:"2/2/2018"}
    ]
};
render(){
  return(
  <section>
    <section className='mainContainer'>
      <FormContainer onSubmit={this.addNewCompany} />
      <HistoryContainer data = {this.state.dataSet} />
    </section>
  </section>
  )
}
}


export default Container;