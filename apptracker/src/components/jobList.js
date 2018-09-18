import React from 'react';
import Job from './job';
import Header from './jobHeader';

const JobList = (props) => {
    return(

        <section>

            <Header />            
            <section className='companyName'>
                {props.data.map(job => <Job {...job}/>)}
            </section> 

        </section>

    )
  }


  export default JobList;