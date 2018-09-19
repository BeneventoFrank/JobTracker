import React, { Component } from 'react';

class InputForm extends React.Component {

    state = {
        companyName: "",
        dateContacted: "",
        jobSource: "",
        methodOfContact: "",
        followUpDate: ""
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(
            {
                CompanyName: this.state.companyName,
                DateContacted: this.state.dateContacted,
                JobSource: this.state.jobSource,
                MethodOfContact: this.state.methodOfContact,
                FollowUpDate: this.state.followUpDate                
            }
        );
        this.state.companyName = "";
        this.state.dateContacted = "";
        this.state.jobSource = "";
        this.state.methodOfContact = "";
        this.state.followUpDate = "";
    };

    render(){
        return (
            <form onSubmit={this.handleSubmit} className="frmAddJobApplication">
              <input
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
                onChange={event => this.setState({ jobSource: event.target.value })}
              >
                <option value="-1">---Select Job Source---</option>
                <option value="Monster">Monster</option>
                <option value="Indeed">Indeed</option>
                <option value="Dice">Dice</option>
              </select>
      
              <select
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
              <button className="btnSubmit" type="submit">
                {" "}
                Add Company{" "}
              </button>
            </form>
          );
    }            
}

export default InputForm;