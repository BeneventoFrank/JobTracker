class Form extends React.Component {
    state = {
      companyName:''
  };
    handleSubmit = (event) => {
      event.preventDefault();
    this.props.onSubmit({CompanyName: this.state.companyName});
    this.state.companyName = ''
  };
  render(){
    return(
      <form onSubmit={this.handleSubmit} className="frmAddJobApplication">
          <input
          value = {this.state.companyName}
          onChange = {(event)=> this.setState({ companyName: event.target.value})}
          type='text' placeholder='Company Name' />
          <input
          ref={(input) => this.DateContacted = input}
          type='text' placeholder='Date Contacted' />
          <button className='btnSubmit' type='submit'> Add Company </button>
      </form>
      )
  }            
}
      const Job = (props) => {
  return(
      <div>
          {props.CompanyName} 
      </div>
  )
}
const JobList = (props) => {
  return(
    <section className='companyName'>
      {props.data.map(job => <Job {...job}/>)}
    </section>
  )
}
      const HistoryContainer = (props) => {
        return(
            <section className='historyContainer'>
                <JobList data = {props.data}></JobList>
            </section>
    )
}

class FormContainer extends React.Component {
    render(){
        return(
            <section className='formContainer'>
                <Form onSubmit={this.props.onSubmit} />
            </section>
        )
    }
}


class Container extends React.Component {

  addNewCompany = (newCompanyData) => {
      this.setState(prevState => ({ 
                                                            dataSet: prevState.dataSet.concat(newCompanyData)
                                }
                               )
                 );
  }
          state = {
      dataSet: [
        {CompanyName: "Google",},
        {CompanyName: "Netflix"}
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


ReactDOM.render(<Container  />,mountNode)