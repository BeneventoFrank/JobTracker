import React from 'react';
import Job from './job';

const JobList = (props) => {
    console.log(props)
    return(
        <section>
            {
                props.dataSet.sort((a,b) =>{
                    return a.jobId < b.jobId
                }).map((element,index)=>{
                    return(
                        <Job key={index} dataSet={element} handleDeleteJobClick = {props.handleDeleteJobClick} />
                    )
                })
            }
        </section> 
    )
  }


  export default JobList;