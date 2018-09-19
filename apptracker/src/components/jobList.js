import React from 'react';
import Job from './job';

const JobList = (props) => {
    return(

        <section>
            <section className='companyName'>
                {props.data.map(job => <Job {...job}/>)}
            </section> 

        </section>

    )
  }


  export default JobList;