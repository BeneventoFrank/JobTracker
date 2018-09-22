import React from 'react';
import Job from './job';

const JobList = (props) => {
    return(


        <section>
            {props.data.map(job => <Job {...job}/>)}
        </section> 


    )
  }


  export default JobList;