import React from 'react';
import Styled from 'styled-components';


const CompanyInfo = props =>{
    return(
        <CompanyInfoContainer>
            <InfoHeader>Company Name:</InfoHeader><InfoText>{props.data.companyName}</InfoText><br />
            <InfoHeader>Date Contacted:</InfoHeader><InfoText>{props.data.dateContacted}</InfoText><br />
            <InfoHeader>Source:</InfoHeader><InfoText>{props.data.jobSource}</InfoText><br />
            <InfoHeader>Method Of Contact:</InfoHeader><InfoText>{props.data.methodOfContact}</InfoText><br />
            <InfoHeader>Follow Up Date</InfoHeader><InfoText>{props.data.followUpDate}</InfoText><br />
        </CompanyInfoContainer>
    )
}

export default CompanyInfo;

const InfoText = Styled.div`
    font-size:1.6rem;
`
const CompanyInfoContainer = Styled.div`
    display:flex;
    flex-wrap:wrap;
`
const InfoHeader = Styled.div`
    font-size:1.8rem;
`
