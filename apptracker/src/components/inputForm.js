import React, { Component } from 'react';


class InputForm extends React.Component {
  

    state = {
        companyName: "",
        dateContacted: "",
        jobSource: "",
        methodOfContact: "",
        followUpDate: "",
        txtLiked:"",
        txtDisLiked:"",
        txtNote:""

    };
    AddNewContact = (event) =>{
      document.querySelector('.frmAddJobApplication').classList.remove('hidden');
      document.querySelector('#txtNewContact').classList.add('hidden');
      document.querySelector('#imgNew').classList.add('hidden');
      document.querySelector('#txtCancel').classList.remove('hidden');
      document.querySelector('#imgCancel').classList.remove('hidden');
      document.querySelector('#txtCompanyName').focus();
      document.querySelector('#jobSpacer').classList.add('hidden');
    }
    CancelNewContact = (event) =>{
      this.state.companyName = "";
      this.state.dateContacted = "";
      this.state.jobSource = "";
      this.state.methodOfContact = "";
      this.state.followUpDate = "";
      this.state.txtLiked = "";
      this.state.txtDisLiked = "";
      this.state.txtNote = "";
      document.querySelector('#txtNewContact').classList.remove('hidden');
      document.querySelector('#imgNew').classList.remove('hidden');
      document.querySelector('#txtCancel').classList.add('hidden');
      document.querySelector('#imgCancel').classList.add('hidden');
      document.querySelector('.frmAddJobApplication').classList.add('hidden');
      document.querySelector('#jobSpacer').classList.remove('hidden');
    }
    
    
    handleSubmit = (event) => {
    
        event.preventDefault();
        this.props.onSubmit(
            {
                CompanyName: this.state.companyName,
                DateContacted: this.state.dateContacted,
                JobSource: this.state.jobSource,
                MethodOfContact: this.state.methodOfContact,
                FollowUpDate: this.state.followUpDate,
                txtLiked:this.state.txtLiked,
                txtDisLiked:this.state.txtDisLiked,
                txtNote:this.state.txtNote
            }
        );
        this.state.companyName = "";
        this.state.dateContacted = "";
        this.state.jobSource = "";
        this.state.methodOfContact = "";
        this.state.followUpDate = "";
        this.state.txtLiked = "";
        this.state.txtDisLiked = "";
        this.state.txtNote = "";
  
    };

    render(){
        return (
            
            <section>
              
              <div className='new-contact-container'>
                <div><img onClick={this.AddNewContact} id='imgNew' className='img-add-new-contact' alt='New Contact' src={require('../static/img/plus.png')}></img></div>
                <div><p id='txtNewContact' onClick={this.AddNewContact}>New Contact</p></div>
                <div><img onClick={this.CancelNewContact} id='imgCancel' className='img-cancel-contact hidden' alt='New Contact' src={require('../static/img/minus.png')}></img></div>
                <div><p className='hidden' id='txtCancel' onClick={this.CancelNewContact}>Cancel</p></div>
              </div>

              <form onSubmit={this.handleSubmit} className="frmAddJobApplication hidden">
                  <input
                    id='txtCompanyName'
                    value={this.state.companyName}
                    onChange={event => this.setState({ companyName: event.target.value })}
                    type="text"
                    placeholder="Company Name"
                  />
                  <input
                    value={this.state.dateContacted}
                    onChange={event =>
                      this.setState({ dateContacted: event.target.value })
                    }
                    type="text"
                    placeholder="Date Contacted"
                  />
          
                  <select
                    className='selectBorder'
                    onChange={event => this.setState({ jobSource: event.target.value })}
                  >
                    <option value="-1">---Select Job Source---</option>
                    <option value="Monster">Monster</option>
                    <option value="Indeed">Indeed</option>
                    <option value="Dice">Dice</option>
                  </select>
          
                  <select
                    className='selectBorder'
                    onChange={event =>
                      this.setState({ methodOfContact: event.target.value })
                    }
                  >
                    <option value="-1">---Select Method Of Contact---</option>
                    <option value="Emailed">Emailed</option>
                    <option value="Mailed">Mailed</option>
                    <option value="Called">Called</option>
                  </select>
          
                  <input
                    value={this.state.followUpDate}
                    onChange={event =>
                      this.setState({ followUpDate: event.target.value })
                    }
                    type="text"
                    placeholder="Follow Up Date"
                  />
                  <textarea id='txtLiked' rows="4" cols="50" placeholder="What did you like about this company?">
                  </textarea>
                  <textarea id='txtDisLiked' rows="4" cols="50" placeholder="What did you dislike about this company?">
                  </textarea>      
                  <textarea id='txtNote' rows="20" cols="50" placeholder="Notes"></textarea>
                  <div className='formButtons'>
                    <button onClick={this.CancelNewContact} className="btnCancel" type="submit">Cancel</button>
                    <button className="btnSubmit" type="submit">Add Company</button>
                  </div>
                </form>

            </section>
          );
    }            
}

export default InputForm;