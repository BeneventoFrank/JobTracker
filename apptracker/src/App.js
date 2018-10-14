  import React from 'react';
  import './static/css/index.css';
  import HeroHeader from './components/pageHeader.js';
  import Moment from 'moment';
  import Styled from 'styled-components';
 
  
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
                      <HistoryContainer>
                        <JobContact>

                            <HorizontalLineContainer> 
                              <HorizontalBottomLinedDiv>&nbsp;</HorizontalBottomLinedDiv><HorizontalSpacerDiv>&nbsp;</HorizontalSpacerDiv>
                            </HorizontalLineContainer>

                            <MiddleSection>

                              <VerticalLineContainer>
                                <VerticalLeftLinedDiv>
                                  &nbsp;
                                </VerticalLeftLinedDiv>
                                <VerticalSpacerDiv>
                                  &nbsp;
                                </VerticalSpacerDiv>
                              </VerticalLineContainer>
                              
                              <ContentContainer>
                                <MainContentSection>Main Content Section</MainContentSection>
                                <MainContentSection>Main Content Section</MainContentSection>
                                <MainContentSection>Main Content Section</MainContentSection>
                                <MainContentSection>Main Content Section</MainContentSection>
                                <MainContentSection>Main Content Section</MainContentSection>
                                <MainContentSection>Main Content Section</MainContentSection>
                                <MainContentSection>Main Content Section</MainContentSection>
                              </ContentContainer>

                              <VerticalLineContainer>
                                <VerticalSpacerDiv>
                                  &nbsp;
                                </VerticalSpacerDiv>
                                <VerticalRightLinedDiv>
                                  &nbsp;
                                </VerticalRightLinedDiv>
                              </VerticalLineContainer>

                            </MiddleSection>


                            <HorizontalLineContainer> 
                              <HorizontalSpacerDiv>&nbsp;</HorizontalSpacerDiv><HorizontalTopLinedDiv>&nbsp;</HorizontalTopLinedDiv>
                            </HorizontalLineContainer>

                        </JobContact>
                      </HistoryContainer>
                  </section>
                  )
            }
  }

const ContentContainer = Styled.div`
  width:100%;
  height:100%;
` 
const MainContentSection  = Styled.div`
  border:1px solid green;
  
  height:100%;
  width:100%;
`
const VerticalLineContainer = Styled.div`
  display:flex;
  flex-direction:column;
`

const MiddleSection = Styled.div`
  width:100%;
  height:100%;
  border:1px solid blue;
  display:flex;
  flex-direction:row;
`


const HorizontalSpacerDiv=Styled.div`
  width:50%;
`
const VerticalSpacerDiv = Styled.div`
  height:50%;
`
const HorizontalBottomLinedDiv = Styled.div`
  border-bottom:10px solid red;
  width:50%;
`
const HorizontalTopLinedDiv = Styled.div`
  border-top:10px solid red;
  width:50%;
`

const VerticalLeftLinedDiv = Styled.div`
  border-left:10px solid red;
  height:50%;
`
const VerticalRightLinedDiv = Styled.div`
  border-right:10px solid red;
  height:50%;
`


const HorizontalLineContainer = Styled.div`
  width:100%;
  display:flex;
`
const JobContact = Styled.div`
  height:100%;
  display:flex;
  flex-direction:column;
  padding-left:10px;
  padding-right:10px;
`
const HistoryContainer = Styled.section`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  margin-top:75px;
  flex-direction: column;
  border:1px solid blue;
`

  export default Container;