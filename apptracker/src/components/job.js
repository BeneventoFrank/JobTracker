import React from 'react';
import Moment from 'moment';

const Job = (props) => {
    
    let shortDateContacted = Moment(props.dataSet.dateContacted).format('MM DD YYYY');
    let shortFollowUpDate = Moment(props.dataSet.followUpDate).format('MM DD YYYY');

    return(
        
      <section className='job-card-container'>
            <div className="job-spacer" id='jobSpacer'>
                <br />
                <br />
            </div>
            <div className='job-card-company'>
                <div>
                    <p>{props.dataSet.companyName}</p>
                </div>
                <div className='job-card-actions'>
                    <p id={props.dataSet.jobId} onClick={props.handleDeleteJobClick} className='job-card-action-delete'>Delete</p>
                </div>

            </div>
            <div className='job-card-details'>
                <div className='job-text-data'>
                    <div className='job-detail'>
                        <div><p className='job-text-header'>Contacted:&nbsp;</p></div>                        
                        <div><p className='job-text'>{shortDateContacted}</p></div>
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
                        <div><p className='job-text'>{shortFollowUpDate}</p></div>
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