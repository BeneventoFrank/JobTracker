import React from 'react';
import JobList from './jobList'
import Styled from 'styled-components';

const Section = Styled.section`
    width: 70%;

    @media @mobile {
    width: 100%;
    }
`

const HistoryContainer = (props) => {
    return(
        <Section className='historyContainer'>
            <JobList dataSet = {props.dataSet} handleDeleteJobClick = {props.handleDeleteJobClick}></JobList>
        </Section>
  )
  }

  export default HistoryContainer;