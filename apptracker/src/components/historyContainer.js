import React from 'react';
import JobList from './jobList'

const HistoryContainer = (props) => {
    console.log(props)
    return(
        <section className='historyContainer'>
            <JobList dataSet = {props.dataSet}></JobList>
        </section>
  )
  }

  export default HistoryContainer;