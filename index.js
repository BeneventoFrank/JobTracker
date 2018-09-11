class Form extends React.Component {
    state = {
      companyName:'',
    dateContacted:''
  };
    handleSubmit = (event) => {
      event.preventDefault();
    this.props.onSubmit(
                                            {
                            CompanyName: this.state.companyName,
                          DateContacted: this.state.dateContacted
                        }
                       );
    this.state.companyName = ''
    this.state.dateContacted = ''
  };
  render(){
    return(
      <form onSubmit={this.handleSubmit} className="frmAddJobApplication">
          <input
          value = {this.state.companyName}
          onChange = {(event)=> this.setState({ companyName: event.target.value})}
          type='text' placeholder='Company Name' />
          
          <input
          value = {this.state.dateContacted}
          onChange = {(event) => this.setState({dateContacted: event.target.value})}
          type='text' placeholder='Date Contacted' />
          <button className='btnSubmit' type='submit'> Add Company </button>
      </form>
      )
  }            
}
      const Job = (props) => {
  return(
      <div>
          {props.CompanyName} {props.DateContacted}  
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
        {CompanyName: "Google",DateContacted:"1/1/2018"},
        {CompanyName: "Netflix",DateContacted:"2/2/2018"}
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