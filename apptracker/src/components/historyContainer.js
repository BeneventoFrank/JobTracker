import React from 'react';
import JobList from './jobList'

const HistoryContainer = (props) => {
    return(
        <section className='historyContainer'>
            <JobList data = {props.data}></JobList>
        </section>
  )
  }

  export default HistoryContainer;