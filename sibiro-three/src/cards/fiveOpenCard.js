import React, { Component } from 'react';
import './openCard.css';
import FiveImg from './images/gost.jpg';


class FiveOpenCard extends Component {

  handleClickFive(){
    // console.log("Клил this: ", this);
    let New = document.createElement('div');
    // New.innerHTML="oooK";
    document.querySelector('#fiveEl').append(New);
    document.querySelector('#fiveEl').style.cssText=`
      display:flex;
      justify-content:center;
      align-items:center;
      position:fixed;
      top:1px;
      flex-direction:column;
      width:100%;
      max-width:100%;`

    document.querySelector('#ClosedFive').style.cssText=`
      color:firebrick;
      font-size:30px;
    `;
    document.querySelector('body').style.cssText=`overflow:hidden`;
    document.querySelectorAll('.boxCart')[4].style.cssText=`width:100%;

    `
    // document.querySelector('#newEl').setAttribute('id','Closed');
        document.querySelector('#ClosedFive').addEventListener('click',()=>{
          New.remove();
          document.querySelector('body').style.cssText=`overflow:auto;`
          document.querySelector('#fiveEl').style.cssText=`display:none;
        `;
        document.querySelectorAll('.boxCart')[4].style.cssText=`
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
      <p id="fiveEl">
        <img src={FiveImg} alt="img"/>
        <p style={{margin:'3%',fontSize:"20px",maxWidth:'100%',width:"900px"}}>Мебель для гостиной на заказ</p>
        <p style={{margin:'3%',fontSize:"20px",maxWidth:'100%',width:"900px"}}>Гостиные от эконом до премиум класса! Свое производство. Фурнитура из Европы. Можем пригласить на производство. Посмотрите видео о производстве.</p>
        <span id='ClosedFive'>X</span>
      </p>
        <button onClick={()=>this.handleClickFive()}>Описание</button>

      </React.Fragment>
    );
  }
}

export default FiveOpenCard;
