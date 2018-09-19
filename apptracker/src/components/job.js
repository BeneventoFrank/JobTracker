import React from 'react';

const Job = (props) => {
    return(

      <section className='job-card-container'>
            <div className='job-card-description' >
                <p className='job-text-header'>{props.CompanyName}</p>
                <p className='job-text'>{props.DateContacted}</p>
                <p className='job-text'>{props.JobSource}</p>
                <p className='job-text'>{props.MethodOfContact}</p>
                <p className='job-text'>{props.FollowUpDate}</p>
            </div>
            <div className='job-card-textareas'>
                <div>What you liked about the company:</div>
                <div>{props.txtLiked}</div>
                <div>What you disliked about the company:</div>
                <div>{props.txtLiked}</div>                
                <div>Notes:</div>
                <div>{props.txtLiked}</div>                
            </div>
      </section>
    )
}

export default Job