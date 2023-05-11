import React, { Component } from 'react';
import './openCard.css';
import FourImg from './images/shk.JPG';


class FourOpenCard extends Component {

  handleClickFour(){
    // console.log("Клил this: ", this);
    let New = document.createElement('div');
    // New.innerHTML="oooK";
    document.querySelector('#fourEl').append(New);
    document.querySelector('#fourEl').style.cssText=`
      display:flex;
      justify-content:center;
      align-items:center;
      position:fixed;
      top:1px;
      flex-direction:column;
      width:100%;
      max-width:100%;`

    document.querySelector('#ClosedFour').style.cssText=`
      color:firebrick;
      font-size:30px;
    `;
    document.querySelector('body').style.cssText=`overflow:hidden`;
    document.querySelectorAll('.boxCart')[3].style.cssText=`width:100%;

    `
    // document.querySelector('#newEl').setAttribute('id','Closed');
        document.querySelector('#ClosedFour').addEventListener('click',()=>{
          New.remove();
          document.querySelector('body').style.cssText=`overflow:auto;`
          document.querySelector('#fourEl').style.cssText=`display:none;
        `;
        document.querySelectorAll('.boxCart')[3].style.cssText=`
        width:240px;
        display: flex;
            -ms-flex-pack: center;
            justify-content: center;
            -ms-flex-align: center;
            align-items: center;
            width: 240px;
            max-width: 100%;
            -ms-flex-direction: column;
            flex-direction: column;
            color: white;
            text-shadow: 1px 1px black;
        `
      });
    // document.querySelector('#newEl').addEventListener('click',()=>{
    //   New.remove();
    //   document.querySelector('body').style.cssText=`overflow:auto;`
    //   document.querySelector('#newEl').style.cssText=`display:none;
    // `;
    // });
  }
  render() {
    return (
      <React.Fragment>
      <p id="fourEl">
        <img src={FourImg} alt="img"/>
        <p style={{margin:'3%',fontSize:"20px"}}>Прихожие</p>
        <p style={{margin:'3%',fontSize:"20px"}}>Шкафы купе, вешалки.</p>
        <span id='ClosedFour'>X</span>
      </p>
        <button onClick={()=>this.handleClickFour()}>Описание</button>

      </React.Fragment>
    );
  }
}

export default FourOpenCard;
