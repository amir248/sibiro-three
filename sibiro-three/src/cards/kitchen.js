import React, { Component } from 'react';
import './openCard.css';
import NewsImg from './images/img.jpg';


class Kitchen extends Component {
  constructor(props){
    super(props);
    this.state={
      count:0
    };
  }
  handleClick(){
    // console.log("Клил this: ", this);
    let New = document.createElement('div');
    // New.innerHTML="oooK";
    document.querySelector('#newEl').append(New);
    document.querySelector('#newEl').style.cssText=`
      display:flex;
      justify-content:center;
      align-items:center;
      position:fixed;
      top:1px;
      flex-direction:column;
      width:100%;
      max-width:100%;`

    document.querySelector('#Closed').style.cssText=`
      color:firebrick;
      font-size:30px;
    `;
    document.querySelector('body').style.cssText=`overflow:hidden`;
    document.querySelector('.boxCart').style.cssText=`width:100%;

    `
    // document.querySelector('#newEl').setAttribute('id','Closed');
        document.querySelector('#Closed').addEventListener('click',()=>{
          New.remove();
          document.querySelector('body').style.cssText=`overflow:auto;`
          document.querySelector('#newEl').style.cssText=`display:none;
        `;
        document.querySelector('.boxCart').style.cssText=`
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
      <p id="newEl">
        <img src={NewsImg} alt="img"/>
        <p style={{margin:'3%',fontSize:"20px"}}>Встраиваемые кухни по индивидуальным размерам! Уникальная разметка, под планировку квартиры.</p>
        <p style={{margin:'3%',fontSize:"20px"}}>Качество, долговечность и функциональность мебели на заказ с использованием современных технологий. Грамотно организуем пространство. Любые площади используем с максимальной пользой.</p>
        <span id='Closed'>X</span>
      </p>
        <button onClick={()=>this.handleClick()}>Описание</button>

      </React.Fragment>
    );
  }
}

export default Kitchen;
