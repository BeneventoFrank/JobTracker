import React from 'react';

const JobHeader = (props) => {
    return(

      <section className='job-container'>
        <div className='job-header'>
            <div className='job-category'>
                <p>Company Name</p>
            </div>
            <div className='job-category'>
                <p>Date Contactedssss</p>
            </div>
            <div className='job-category'>
                <p>Job Source</p>
            </div>
            <div className='job-category'>
                <p>Contact Method</p>
            </div>
            <div className='job-category'>
                <p>Follow Up Date</p>
            </div>
        </div>
      </section>



    )
}

export default JobHeader;