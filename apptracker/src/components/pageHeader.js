import React from 'react';
import TweenMax from "gsap/TweenMax";


class HeroHeader extends React.Component{


    render(){
        return(
            <section className='heroHeader'>
                <button onClick={this.handleSubmit}>click me </button>
            </section>
        )
    }
    handleSubmit(){
      console.log('here..')
      let element = document.querySelector('.historyContainer')
      TweenMax.to(element,1.5,{left:600,onComplete(){console.log('completed moving - ', element)}});
    }
}


export default HeroHeader;



