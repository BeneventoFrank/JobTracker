import React from 'react';
import Styled from 'styled-components'
import CompanyInfo from '../CompanyInfo/CompanyInfo'
import NewNote from '../NewNote/NewNote'


class JobContact extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            dropComplete:''
        }
    }
    DropEvent = event =>{
        if(event.target.id){
            event.preventDefault();
            let el = document.getElementById(`${event.target.id}`);
            el.classList.remove('dragHover')

            var data = event.dataTransfer.getData("text");
            event.target.appendChild(document.getElementById(data));
            this.setState({dropComplete:true})
        }
    }
    DragEnter = event =>{
        if(event.target.id)
        {
            let el = document.getElementById(`${event.target.id}`);
            el.classList.add('dragHover')        
        }
    }
    AllowDrop = event => {
        event.preventDefault();
    }
    DragLeave = event => {
        if(event.target.id)
        {
            let el = document.getElementById(`${event.target.id}`);
            el.classList.remove('dragHover')
        }
    }
    render(){
            return(

                    <JobContactContainer>

                        <HorizontalLineContainer> 
                            <HorizontalBottomLinedDiv>&nbsp;</HorizontalBottomLinedDiv><HorizontalSpacerDiv>&nbsp;</HorizontalSpacerDiv>
                        </HorizontalLineContainer>

                        <MiddleSection>

                            <VerticalLineContainer>
                                <VerticalLeftLinedDiv>
                                &nbsp;
                                </VerticalLeftLinedDiv>
                                <VerticalSpacerDiv>
                                &nbsp;
                                </VerticalSpacerDiv>
                            </VerticalLineContainer>
                    
                            <ContentContainer>
                                <DataAndNewNoteSection>
                                    <CompanyInfo data={this.props.data}/>
                                    <NewNote dropComplete={this.state.dropComplete}/>
                                </DataAndNewNoteSection> 
                                <DropZoneSection>
                                    <DropZone id='dz1' onDrop={this.DropEvent} onDragOver={this.AllowDrop} onDragEnter={this.DragEnter} onDragLeave={this.DragLeave}></DropZone>                     
                                    <DropZone id='dz2' onDrop={this.DropEvent} onDragOver={this.AllowDrop} onDragEnter={this.DragEnter} onDragLeave={this.DragLeave}></DropZone>                     
                                    <DropZone id='dz3' onDrop={this.DropEvent} onDragOver={this.AllowDrop} onDragEnter={this.DragEnter} onDragLeave={this.DragLeave}></DropZone>                     
                                </DropZoneSection>  
                            </ContentContainer>

                            <VerticalLineContainer>
                                <VerticalSpacerDiv>
                                &nbsp;
                                </VerticalSpacerDiv>
                                <VerticalRightLinedDiv>
                                &nbsp;
                                </VerticalRightLinedDiv>
                            </VerticalLineContainer>

                        </MiddleSection>

                        <HorizontalLineContainer> 
                            <HorizontalSpacerDiv>&nbsp;</HorizontalSpacerDiv><HorizontalTopLinedDiv>&nbsp;</HorizontalTopLinedDiv>
                        </HorizontalLineContainer>

                    </JobContactContainer>        
            )
    }
}


const DropZone = Styled.div`
    background-color:grey;
    min-height:200px;
    min-width:33.3%;
    border:1px solid blue;
`
const DropZoneSection = Styled.div`
    display:flex;
    width:75%;
    min-height:500px;
`
const DataAndNewNoteSection = Styled.div`
    width:25%;
    height:auto;
`
const ContentContainer = Styled.div`
  width:100%;
  height:100%;
  display:flex;
  padding:10px;
  margin:0 auto;
` 
const VerticalLineContainer = Styled.div`
  display:flex;
  flex-direction:column;
`
const MiddleSection = Styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:row;
`
const HorizontalSpacerDiv=Styled.div`
  width:50%;
`
const VerticalSpacerDiv = Styled.div`
  height:50%;
`
const HorizontalBottomLinedDiv = Styled.div`
  border-bottom:1px solid red;
  width:50%;
`
const HorizontalTopLinedDiv = Styled.div`
  border-top:1px solid red;
  width:50%;
`
const VerticalLeftLinedDiv = Styled.div`
  border-left:1px solid red;
  height:50%;
`
const VerticalRightLinedDiv = Styled.div`
  border-right:1px solid red;
  height:50%;
`
const HorizontalLineContainer = Styled.div`
  width:100%;
  display:flex;
`
const JobContactContainer = Styled.div`
  height:100%;
  display:flex;
  flex-direction:column;
`


export default JobContact
