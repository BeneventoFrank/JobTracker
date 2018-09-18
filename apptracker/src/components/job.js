import React from 'react';

const Job = (props) => {
    return(

      <section>
        <div className='job-row'>
            <div className='job-text'>
                <p>{props.CompanyName}</p>
            </div>
            <div className='job-text'>
                <p>{props.DateContacted}</p>
            </div>
            <div className='job-text'>
                <p>{props.JobSource}</p>
            </div>
            <div className='job-text'>
                <p>{props.MethodOfContact}</p>
            </div>
            <div className='job-text'>
                <p>{props.FollowUpDate}</p>
            </div>
        </div>
      </section>



    )
}

export default Job