import React from 'react';

const Job = (props) => {
    return(

      <section className='job-container'>
        <div className='job-header'>
            <div>
                <p>{props.CompanyName}</p>
            </div>
            <div>
                <p>{props.DateContacted}</p>
            </div>
            <div>
                <p>{props.JobSource}</p>
            </div>
            <div>
                <p>{props.MethodOfContact}</p>
            </div>
            <div>
                <p>{props.FollowUpDate}</p>
            </div>
        </div>
      </section>



    )
}

export default Job