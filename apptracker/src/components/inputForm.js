import React from 'react';



const InputForm = props =>{
    console.log('props -', props)
        return (
            <section>
              <div className='new-contact-container'>
                <div><img onClick={props.addNewContact} id='imgNew' className='img-add-new-contact' alt='New Contact' src={require('../static/img/plus.png')}></img></div>
                <div><p id='txtNewContact' onClick={props.addNewContact}>New Contact</p></div>
                <div><img onClick={props.cancelNewContact} id='imgCancel' className='img-cancel-contact hidden' alt='New Contact' src={require('../static/img/minus.png')}></img></div>
                <div><p className='hidden' id='txtCancel' onClick={props.cancelNewContact}>Cancel</p></div>
              </div>
              <form onSubmit={props.addNewCompany} className="frmAddJobApplication hidden">
                  <input
                    onChange={props.handleInputFormChanges}
                    value={props.jobData.companyName}
                    className='formPadding'
                    id='companyName'
                    type="text"
                    placeholder="Company Name"
                  />
                  <input
                    onChange={props.handleInputFormChanges}
                    value={props.jobData.dateContacted}
                    id='dateContacted'
                    className='formPadding'
                    type="text"
                    placeholder="Date Contacted"
                  />
          
                  <select
                    id='jobSource'
                    value={props.jobData.jobSource}
                    onChange={props.handleInputFormChanges}
                    className='selectBorder formPadding'
                  >
                    <option value="-1">---Select Job Source---</option>
                    <option value="Monster">Monster</option>
                    <option value="Indeed">Indeed</option>
                    <option value="Dice">Dice</option>
                  </select>
          
                  <select
                    id='methodOfContact'
                    value={props.jobData.methodOfContact}
                    onChange={props.handleInputFormChanges}
                    className='selectBorder formPadding'
                  >
                    <option value="-1">---Select Method Of Contact---</option>
                    <option value="Emailed">Emailed</option>
                    <option value="Mailed">Mailed</option>
                    <option value="Called">Called</option>
                  </select>
          
                  <input
                    id='followUpDate'
                    value = {props.jobData.followUpDate}
                    onChange={props.handleInputFormChanges}
                    className='formPadding'
                    type="text"
                    placeholder="Follow Up Date"
                  />
                  <textarea value={props.jobData.txtLiked} onChange={props.handleInputFormChanges} className='formPadding' id='txtLiked' rows="4" cols="50" placeholder="What did you like about this company?">
                  </textarea>
                  <textarea value={props.jobData.txtDisLiked} onChange={props.handleInputFormChanges} className='formPadding' id='txtDisLiked' rows="4" cols="50" placeholder="What did you dislike about this company?">
                  </textarea>      
                  <textarea value={props.jobData.txtNote} onChange={props.handleInputFormChanges} className='formPadding' id='txtNote' rows="20" cols="50" placeholder="Notes"></textarea>
                  <div className='formButtons'>
                    <button onClick={props.cancelNewContact} className="btnCancel" type="submit">Cancel</button>
                    <button className="btnSubmit" type="submit">Add Company</button>
                  </div>
                </form>

            </section>
          );
    }            


export default InputForm;