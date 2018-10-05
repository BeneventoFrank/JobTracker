import React from 'react';

const Job = (props) => {

    return(
      <section className='job-card-container'>
            <div className="job-spacer" id='jobSpacer'>
                <br />
                <br />
            </div>
            <div className='job-card-company'>
                <p>{props.dataSet.companyName}</p>
            </div>
            <div className='job-card-details'>
                <div className='job-text-data'>
                    <div className='job-detail'>
                        <div><p className='job-text-header'>Contacted:&nbsp;</p></div>                        
                        <div><p className='job-text'>{props.dataSet.dateContacted}</p></div>
                    </div>
                    <div className='job-detail'>
                        <div><p className='job-text-header'>Source:&nbsp;</p></div>                        
                        <div><p className='job-text'>{props.dataSet.jobSource}</p></div>
                    </div>
                    <div className='job-detail'>
                        <div><p className='job-text-header'>Method Of Contact:&nbsp;</p></div>                        
                        <div><p className='job-text'>{props.dataSet.methodOfContact}</p></div>
                    </div>
                    <div className='job-detail'>
                        <div><p className='job-text-header'>Follow Up Date:&nbsp;</p></div>                        
                        <div><p className='job-text'>{props.dataSet.followUpDate}</p></div>
                    </div>
                </div>
                <div className='job-card-text-area'>
                    <div>   
                        <div><p className='job-text-header'>What you liked about the company:&nbsp;</p></div>                        
                        <div className='job-card-text-boxes'>
                            <p className='job-text'>{props.dataSet.txtLiked}</p>
                        </div>
                    </div>
                    <br />
                    <div>   
                        <div><p className='job-text-header'>What you disliked about the company:&nbsp;</p></div>                        
                        <div className='job-card-text-boxes'><p className='job-text'>{props.dataSet.txtDisLiked}</p></div>
                    </div>
                    <br />
                    <div>   
                        <div><p className='job-text-header'>Notes:&nbsp;</p></div>                        
                        <div className='job-card-text-boxes'><p className='job-text'>{props.dataSet.txtNote}</p></div>
                    </div>
                </div>
            </div>
      </section>
    )
}

export default Job