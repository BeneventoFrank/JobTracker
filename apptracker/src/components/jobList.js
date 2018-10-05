import React from 'react';
import Job from './job';

const JobList = (props) => {
    return(
        <section>
            {
                props.dataSet.map((element)=>{
                    return(
                        <Job dataSet={element} />
                    )
                })
            }
        </section> 
    )
  }


  export default JobList;