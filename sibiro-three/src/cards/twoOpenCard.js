import React, { Component } from 'react';
import './openCard.css';
import TwoImg from './images/mod.JPG';


class TwoOpenCard extends Component {

  handleClickTwo(){
    // console.log("Клил this: ", this);
    let New = document.createElement('div');
    // New.innerHTML="oooK";
    document.querySelector('#twoEl').append(New);
    document.querySelector('#twoEl').style.cssText=`
      display:flex;
      justify-content:center;
      align-items:center;
      position:fixed;
      top:1px;
      flex-direction:column;
      width:100%;
      max-width:100%;`

    document.querySelector('#ClosedTwo').style.cssText=`
      color:firebrick;
      font-size:30px;
    `;
    document.querySelector('body').style.cssText=`overflow:hidden`;
    document.querySelectorAll('.boxCart')[1].style.cssText=`width:100%;

    `
    // document.querySelector('#newEl').setAttribute('id','Closed');
        document.querySelector('#ClosedTwo').addEventListener('click',()=>{
          New.remove();
          document.querySelector('body').style.cssText=`overflow:auto;`
          document.querySelector('#twoEl').style.cssText=`display:none;
        `;
        document.querySelectorAll('.boxCart')[1].style.cssText=`
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
  }
  render() {
    return (
      <React.Fragment>
      <p id="twoEl">
        <img src={TwoImg} alt="img"/>
        <p style={{margin:'3%',fontSize:"20px"}}>Дополнительные компоненты мебели, для разнообразных планировок.</p>
        <p style={{margin:'3%',fontSize:"20px"}}>Обустройство балконов, ниш с различной планировкой.</p>
        <span id='ClosedTwo'>X</span>
      </p>
        <button onClick={()=>this.handleClickTwo()}>Описание</button>

      </React.Fragment>
    );
  }
}

export default TwoOpenCard;
