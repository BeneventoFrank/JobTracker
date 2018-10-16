import React from 'react';
import Styled from 'styled-components';

class NewNote extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data:props.data,
            showNewNote:this.props.dropComplete
        }

        
    }

    handleAddNewNoteClick = event =>{
        this.setState({showNewNote:true})
    }
    DragStart = event =>{
        console.log('I AM DRAGGGGGGGGGGING ON')
        event.dataTransfer.setData("text", event.target.id);
        
    }
    GetId(){
        return Date.now();
    }
    render(){
        let addNewNote = null;

        
        if (this.state.showNewNote ){

            
            let myDiv = document.createElement('div',);
                myDiv.setAttribute('id',this.GetId())
                myDiv.setAttribute('draggable','true')
                myDiv.addEventListener('dragstart',this.DragStart)
            let newNoteSection = document.createElement('div')
                newNoteSection.className = 'newNoteSection'
            
            let header = document.createElement('div')
                header.className = 'header'
            
            let txtArea = document.createElement('textarea')
                txtArea.className = 'txtArea'
                txtArea.setAttribute('rows','5')
                txtArea.setAttribute('cols','40')
            
            newNoteSection.appendChild(header)
            newNoteSection.appendChild(txtArea)
            myDiv.appendChild(newNoteSection)
        
            let parent = document.getElementById('test');
            parent.appendChild(myDiv);
        } 

        console.log('if thats the case, what is ' , addNewNote)
        return(
            <div id='test'>
                <button onClick={this.handleAddNewNoteClick}>Add New Note!</button>
            </div>
        )
    }

}


export default NewNote;

const Header = Styled.div`
`
const NewNoteSection = Styled.div`
`
const TextArea = Styled.textarea`
`