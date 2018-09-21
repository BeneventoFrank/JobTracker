  import React from 'react';
  import './static/css/index.css';
  import HistoryContainer from './components/historyContainer';
  import FormContainer from './components/formContainer';
  import HeroHeader from './components/pageHeader.js';
  


  class Container extends React.Component {

    addNewCompany = (newCompanyData) => {
      this.setState(prevState => ({ 
                      dataSet: prevState.dataSet.concat(newCompanyData)
                    }));
    }
    state = {
            dataSet: [
                        {
                          CompanyName: "Google",
                          DateContacted:"1/1/2018",
                          JobSource:"Monster",
                          MethodOfContact:"Emailed",
                          FollowUpDate:"2/2/2018",
                          txtLiked:"what i liked about google - stuff",
                          txtDisLiked:"i hate how they do some stuff",
                          txtNotes:"notes"
                        },
                        {
                          CompanyName: "Netflix",
                          DateContacted:"2/2/2018",
                          JobSource:"Monster",
                          MethodOfContact:"Emailed",
                          FollowUpDate:"2/2/2018",
                          txtLiked:"what i liked about netflix - stuff",
                          txtDisLiked:"i hate how they do some stuff",
                          txtNotes:"notes"

                        }
                      ]
            };
    render(){
            return(
                  <section className='appContainer'>
                      <HeroHeader />
                      <section className='mainContainer'>
                          <FormContainer onSubmit={this.addNewCompany} />
                          <HistoryContainer data = {this.state.dataSet} />
                      </section>
                  </section>
                  )
            }
  }


  export default Container;