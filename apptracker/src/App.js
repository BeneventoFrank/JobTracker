  import React from 'react';
  import './static/css/index.css';
  import HistoryContainer from './components/historyContainer';
  import HeroHeader from './components/pageHeader.js';
  import Moment from 'moment';
 

  class Container extends React.Component {
    constructor(){
      super()
      let ds = false;
      try{
        ds = JSON.parse(localStorage.getItem('dataSet'));
      }
      catch(error){
        ds=[];        
      }

      this.state = {
        showModal:false,
        dataSet: ds?ds:[],
        jobData:{
                  jobId:Date.now(),
                  companyName: "",
                  dateContacted: Moment(),
                  jobSource: "",
                  methodOfContact: "",
                  followUpDate:'',
                  txtLiked:"",
                  txtDisLiked:"",
                  txtNote:""
                }
      };

    }
    handleDeleteJobClick = event =>{
      let data = this.state.dataSet.filter(element =>{
        if(Number(element.jobId)!==Number(event.target.id)){
          return element;
        }
      })
      this.setState({dataSet:data},this.SaveData);

    }
    handleDisplayModal= event =>{
      this.setState({showModal:true})
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
      this.HideInputFields();
      this.setState({showModal:false})
    }
    UpdateState(fieldname,data){
      let tmpObj = Object.assign({},this.state.jobData);
      tmpObj[fieldname] = data
      this.setState({'jobData': tmpObj})
    }
    ClearFormFields(){
      let tmpObj = {
        jobId: Date.now(),
        companyName: "",
        dateContacted: Moment(),
        jobSource: "-1",
        methodOfContact: "-1",
        followUpDate:'',
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
      this.HideInputFields();
      this.setState({showModal: false})
    }
    HideInputFields(){
      document.querySelector('#txtNewContact').classList.remove('hidden');
      document.querySelector('#imgNew').classList.remove('hidden');
      document.querySelector('.frmAddJobApplication').classList.add('hidden');
    }
    
    
    HandleDatePickerChange = (data) =>{
      this.UpdateState('dateContacted',data)
    }
    HandleFollowUpDatePickerChange = (data) =>{
      this.UpdateState('followUpDate',data)
    }
    render(){
            return(
                  <section className='appContainer'>
                      <HeroHeader 
                        jobData={this.state.jobData} 
                        handleInputFormChanges={this.handleInputFormChanges} 
                        handleDisplayModal={this.handleDisplayModal}
                        showModal={this.state.showModal}
                        HandleDatePickerChange ={this.HandleDatePickerChange}
                        HandleFollowUpDatePickerChange = {this.HandleFollowUpDatePickerChange}
                        addNewCompany={this.addNewCompany} 
                        addNewContact ={this.AddNewContact}
                        CancelNewContact = {this.CancelNewContact} 
                      />
                      <section className='mainContainer'>
                          <HistoryContainer dataSet = {this.state.dataSet} 
                                            handleDeleteJobClick={this.handleDeleteJobClick}/>
                      </section>
                  </section>
                  )
            }
  }


  export default Container;