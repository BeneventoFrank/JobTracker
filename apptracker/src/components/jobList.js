import React from 'react';
import Job from './job';

const JobList = (props) => {
    return(
        <section>
            {
                props.dataSet.sort((a,b) =>{
                    return a.jobId < b.jobId
                }).map((element)=>{
                    return(
                        <Job dataSet={element} />
                    )
                })
            }
        </section> 
    )
  }


  export default JobList;