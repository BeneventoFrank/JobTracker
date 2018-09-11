const Form = (props) =>{
    return(
      <form className="frmAddJobApplication">
          <input type='text' placeholder='Company Name' />
          <input type='text' placeholder='Date Contacted' />
          <button className='btnSubmit' type='submit'> Add Company </button>
      </form>
      )
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
        const FormContainer = (props) => {
          return(
              <section className='formContainer'>
                  <Form />
              </section>
      )
  }
        const Container = (props) => {
    return(
    <section>
      <section className='mainContainer'>
          <FormContainer />
        <HistoryContainer data = {props.data} />
      </section>
    </section>
    )
  }

  let dataSet = [
    {CompanyName: "Google",},
    {CompanyName: "Netflix"}
  ]
  
  
  
  const App = (props) => {
    return(
        <Container data = {props.data}/>
    )
  }
  ReactDOM.render(<App data={dataSet} />,mountNode)