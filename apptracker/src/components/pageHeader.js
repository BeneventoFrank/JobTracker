import React from 'react';
import Modal from './modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Styled from 'styled-components';

const ModalForm = Styled.div`
    width:600px;
`

const FormHeader = Styled.p`
    font-size:1.6rem;
    font-weight:bold;
    display:inline;
    width:160px;
    
`
const FieldContainer = Styled.div`
    display:flex;
    align-items:center;
`
const Input = Styled.input`
    height:35px;
    width:323px;
`

const Select = Styled.select`
    width:200px;
`
const ModalContainer = Styled.div`
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
`
const ModalHeader = Styled.div`
    height:35px;
    color:white;
    background-color:#38ABAC;
    width:600px;
`
const FormActions = Styled.div`
    display: flex;
    justify-content: space-between;
`


class HeroHeader extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const modal = this.props.showModal ? ( 
            <Modal>
              <ModalContainer>
                <ModalHeader></ModalHeader>              
                <ModalForm>
                <form onSubmit={this.props.addNewCompany} className="frmAddJobApplication">
                    <FieldContainer>
                        <FormHeader>Company Name</FormHeader> 
                        <Input onChange={this.props.handleInputFormChanges} value={this.props.jobData.companyName} id='companyName' type="text" placeholder="Company Name"/>
                    </FieldContainer>
                    <FieldContainer>
                        <FormHeader>Date Contacted</FormHeader> 
                        <DatePicker autocomplete="new-password" id='dateContacted' placeholder='select date' selected={this.props.jobData.dateContacted} onChange={this.props.HandleDatePickerChange} />
                    </FieldContainer>
                    <FieldContainer>
                        <FormHeader>Source</FormHeader> 
                        <Select
                            id='jobSource'
                            value={this.props.jobData.jobSource}
                            onChange={this.props.handleInputFormChanges}
                            className='selectBorder'
                        >
                            <option value="-1">---Select Job Source---</option>
                            <option value="Monster">Monster</option>
                            <option value="Indeed">Indeed</option>
                            <option value="Dice">Dice</option>
                        </Select>
                    </FieldContainer>
            
                    <FieldContainer>
                        <FormHeader>Method Of Contact</FormHeader>
                        <Select
                            id='methodOfContact'
                            value={this.props.jobData.methodOfContact}
                            onChange={this.props.handleInputFormChanges}
                            className='selectBorder'
                        >
                            <option value="-1">---Select Method Of Contact---</option>
                            <option value="Emailed">Emailed</option>
                            <option value="Mailed">Mailed</option>
                            <option value="Called">Called</option>
                        </Select>

                    </FieldContainer>
                    <FieldContainer>
                        <FormHeader>Follow Up Date</FormHeader>
                        <DatePicker id='followUpDate' placeholder='select date' selected={this.props.jobData.followUpDate} onChange={this.props.HandleFollowUpDatePickerChange} />
                    </FieldContainer>
                    <FieldContainer>
                        <FormHeader>What did you Like?</FormHeader>
                        <textarea value={this.props.jobData.txtLiked} onChange={this.props.handleInputFormChanges} id='txtLiked' rows="4" cols="50" placeholder="jot down some notes on what you liked"></textarea>
                    </FieldContainer>
                    <FieldContainer>
                        <FormHeader>What didn't you Like?</FormHeader>
                        <textarea value={this.props.jobData.txtDisLiked} onChange={this.props.handleInputFormChanges} id='txtDisLiked' rows="4" cols="50" placeholder="what didn't you like?"></textarea>          
                    </FieldContainer>                    
                    <FieldContainer>
                        <FormHeader>Notes</FormHeader>
                        <textarea value={this.props.jobData.txtNote} onChange={this.props.handleInputFormChanges} id='txtNote' rows="10" cols="50" placeholder="notes"></textarea>
                    </FieldContainer>
                    <FormActions>
                        <button onClick={this.props.CancelNewContact} className="btnCancel" type="submit">Cancel</button>
                        <button className="btnSubmit" type="submit">Add Company</button>
                    </FormActions>
                    </form>
                </ModalForm>
              </ModalContainer>
            </Modal>
          ):null;
          return (
            <section className='heroHeader'>
                <div className='hero-container'>
                    <div className='hero-add-new'>
                        <section className='hero-add-new-button'>
                            <div><img className='new-contact-button' onClick={this.props.handleDisplayModal} id='imgNew' alt='New Contact' src={require('../static/img/Icons/add.png')}></img></div>
                            <div><p className='new-contact-text' id='txtNewContact' onClick={this.props.handleDisplayModal}>New Contact</p></div>
                        </section>
                        <div id='modalRoot'>
                            {modal}
                        </div>
                    </div>
                </div>
            </section>
          );

    }
}


export default HeroHeader;



