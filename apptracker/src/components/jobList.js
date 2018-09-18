import React from 'react';
import Job from './job';
import X from './jobHeader';

const JobList = (props) => {
    return(

        <section>

            <X />            
            <section className='companyName'>
                {props.data.map(job => <Job {...job}/>)}
            </section> 

        </section>

    )
  }


  export default JobList;