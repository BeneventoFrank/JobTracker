  import React from 'react';
  import './static/css/index.css';
  import HistoryContainer from './components/historyContainer';
  import FormContainer from './components/formContainer';
  import HeroHeader from './components/pageHeader.js';
  

  

  class Container extends React.Component {
    constructor(){
      super()
      let ds = JSON.parse(localStorage.getItem('dataSet'));
      this.state = {
        dataSet: ds?ds:[],
        jobData:{
                  companyName: "",
                  dateContacted: "",
                  jobSource: "",
                  methodOfContact: "",
                  followUpDate: "",
                  txtLiked:"",
                  txtDisLiked:"",
                  txtNote:""
                }
      };
    }
    SaveData(){
      let data = JSON.stringify(this.state.dataSet);
      localStorage.setItem('dataSet',data);
    }            
    addNewCompany = event => {
      event.preventDefault();
      let newCompany = Object.assign({},this.state.jobData);
      let data = [...this.state.dataSet,newCompany];
      this.setState({dataSet: data},this.SaveData)
      this.ClearFormFields();
    }
    UpdateState(fieldname,data){
      let tmpObj = Object.assign({},this.state.jobData);
      tmpObj[fieldname] = data
      this.setState({'jobData': tmpObj})
    }
    ClearFormFields(){
      let tmpObj = {
        companyName: "",
        dateContacted: "",
        jobSource: "-1",
        methodOfContact: "-1",
        followUpDate: "",
        txtLiked:"",
        txtDisLiked:"",
        txtNote:""      
      }
      this.setState({'jobData': tmpObj})
    }
    AddNewContact = (event) =>{
      document.querySelector('.frmAddJobApplication').classList.remove('hidden');
      document.querySelector('#txtNewContact').classList.add('hidden');
      document.querySelector('#imgNew').classList.add('hidden');
      document.querySelector('#txtCancel').classList.remove('hidden');
      document.querySelector('#imgCancel').classList.remove('hidden');
      document.querySelector('#companyName').focus();
    }
    handleInputFormChanges = event =>{
      this.UpdateState(event.target.id,event.target.value)
    }
    CancelNewContact = (event) =>{
      this.ClearFormFields();
      document.querySelector('#txtNewContact').classList.remove('hidden');
      document.querySelector('#imgNew').classList.remove('hidden');
      document.querySelector('#txtCancel').classList.add('hidden');
      document.querySelector('#imgCancel').classList.add('hidden');
      document.querySelector('.frmAddJobApplication').classList.add('hidden');

    }
    render(){
            return(
                  <section className='appContainer'>
                      <HeroHeader />
                      <section className='mainContainer'>
                          <FormContainer handleInputFormChanges={this.handleInputFormChanges} 
                                         jobData={this.state.jobData} 
                                         addNewCompany={this.addNewCompany} 
                                         addNewContact ={this.AddNewContact} 
                                         cancelNewContact={this.CancelNewContact} />
                          <HistoryContainer dataSet = {this.state.dataSet} />
                      </section>
                  </section>
                  )
            }
  }


  export default Container;