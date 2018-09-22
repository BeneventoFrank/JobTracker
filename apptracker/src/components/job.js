import React from 'react';

const Job = (props) => {
    return(

      <section className='job-card-container'>

            <div className='job-card-company'>
                <p>{props.CompanyName}</p>
            </div>
            <div className='job-card-details'>
                <div className='job-text-data'>
                    <div className='job-detail'>
                        <div><p className='job-text-header'>Contacted:&nbsp;</p></div>                        
                        <div><p className='job-text'>{props.DateContacted}</p></div>
                    </div>
                    <div className='job-detail'>
                        <div><p className='job-text-header'>Source:&nbsp;</p></div>                        
                        <div><p className='job-text'>{props.JobSource}</p></div>
                    </div>
                    <div className='job-detail'>
                        <div><p className='job-text-header'>Method Of Contact:&nbsp;</p></div>                        
                        <div><p className='job-text'>{props.MethodOfContact}</p></div>
                    </div>
                    <div className='job-detail'>
                        <div><p className='job-text-header'>Follow Up Date:&nbsp;</p></div>                        
                        <div><p className='job-text'>{props.FollowUpDate}</p></div>
                    </div>
                </div>
                <div className='job-card-text-area'>
                    <div>   
                        <div><p className='job-text-header'>What you liked about the company:&nbsp;</p></div>                        
                        <div className='job-card-text-boxes'>
                            <p className='job-text'>{props.txtLiked}</p>
                        </div>
                    </div>
                    <br />
                    <div>   
                        <div><p className='job-text-header'>What you disliked about the company:&nbsp;</p></div>                        
                        <div className='job-card-text-boxes'><p className='job-text'>{props.txtDisLiked}</p></div>
                    </div>
                    <br />
                    <div>   
                        <div><p className='job-text-header'>Notes:&nbsp;</p></div>                        
                        <div className='job-card-text-boxes'><p className='job-text'>{props.txtNotes}</p></div>
                    </div>
                </div>
            </div>
      </section>
    )
}

export default Job