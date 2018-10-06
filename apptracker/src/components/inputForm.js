import React from 'react';
import Modal from './modal';



class InputForm extends React.Component{
  constructor(props){
    super(props)

  }
  render(){
    console.log(this.props)
    const modal = this.props.showModal ? ( 
      <Modal>
        <div className='modal'>
        <form onSubmit={this.props.addNewCompany} className="frmAddJobApplication">
            <input
              onChange={this.props.handleInputFormChanges}
              value={this.props.jobData.companyName}
              className='formPadding'
              id='companyName'
              type="text"
              placeholder="Company Name"
            />
            <input
              onChange={this.props.handleInputFormChanges}
              value={this.props.jobData.dateContacted}
              id='dateContacted'
              className='formPadding'
              type="text"
              placeholder="Date Contacted"
            />
    
            <select
              id='jobSource'
              value={this.props.jobData.jobSource}
              onChange={this.props.handleInputFormChanges}
              className='selectBorder formPadding'
            >
              <option value="-1">---Select Job Source---</option>
              <option value="Monster">Monster</option>
              <option value="Indeed">Indeed</option>
              <option value="Dice">Dice</option>
            </select>
    
            <select
              id='methodOfContact'
              value={this.props.jobData.methodOfContact}
              onChange={this.props.handleInputFormChanges}
              className='selectBorder formPadding'
            >
              <option value="-1">---Select Method Of Contact---</option>
              <option value="Emailed">Emailed</option>
              <option value="Mailed">Mailed</option>
              <option value="Called">Called</option>
            </select>
    
            <input
              id='followUpDate'
              value = {this.props.jobData.followUpDate}
              onChange={this.props.handleInputFormChanges}
              className='formPadding'
              type="text"
              placeholder="Follow Up Date"
            />
            <textarea value={this.props.jobData.txtLiked} onChange={this.props.handleInputFormChanges} className='formPadding' id='txtLiked' rows="4" cols="50" placeholder="What did you like about this company?">
            </textarea>
            <textarea value={this.props.jobData.txtDisLiked} onChange={this.props.handleInputFormChanges} className='formPadding' id='txtDisLiked' rows="4" cols="50" placeholder="What did you dislike about this company?">
            </textarea>      
            <textarea value={this.props.jobData.txtNote} onChange={this.props.handleInputFormChanges} className='formPadding' id='txtNote' rows="20" cols="50" placeholder="Notes"></textarea>
            <div className='formButtons'>
              <button onClick={this.props.cancelNewContact} className="btnCancel" type="submit">Cancel</button>
              <button className="btnSubmit" type="submit">Add Company</button>
            </div>
          </form>
        </div>
      </Modal>
    ):null;
    return (
      <section>
        <div className='new-contact-container'>
          <div><img onClick={this.props.addNewContact} id='imgNew' className='img-add-new-contact' alt='New Contact' src={require('../static/img/plus.png')}></img></div>
          <div><p id='txtNewContact' onClick={this.props.handleDisplayModal}>New Contact</p></div>
          <div><img onClick={this.props.cancelNewContact} id='imgCancel' className='img-cancel-contact hidden' alt='New Contact' src={require('../static/img/minus.png')}></img></div>
          <div><p className='hidden' id='txtCancel' onClick={this.props.cancelNewContact}>Cancel</p></div>
        </div>
        <div id='modalRoot'>
          {modal}
        </div>


      </section>
    );
  }
}

           


export default InputForm;