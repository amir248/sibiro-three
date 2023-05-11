import React, { Component } from 'react';
import './header.css';


if(window.innerWidth>700){
// console.log("Экран больше 700");
}

const Anotation=()=><div in='anotation' style={{background:"rgba(100,100,100,0.3)",color:"white",width:"1440px",maxWidth:"100%"}}><h1 style={{margin:"1%",textShadow:"1px 1px 1px black",textAlign:"center"}}>Мебель, созданная для того, чтобы жить в гармонии, создавая характерные и не<wbr/>подвластные времени пространства.</h1></div>;

let numberClick=+0;
function clickMenu(){
    numberClick++;

    if(numberClick===1){
      document.querySelector('#menu').style.cssText=`
      display:flex;
      // justify-content:center;
      // align-items:center;
      // flex-direction:column;
      width:100%;
      // background:rgba(255,255,255,0.7);
      // position:absolute;
      height:100vh;
      transition:all 3s ease-out;
      `
      document.querySelector("#title").style.cssText=`display:none`;
      document.querySelector("#lineOne").style.cssText=`display:none`;
      document.querySelector("#lineTwo").style.cssText=`display:none`;
      document.querySelector("#lineThree").style.cssText=`display:none`;
      document.querySelector('body').style.cssText="overflow:hidden";
      document.querySelector('#list').innerHTML=`
      <!-- <a href="#first">outbreak</a> -->
      <a href="#gallery">Gallery</a>
      <a href="tel:+79137870404">+79137870404</a>
      <a href="tel:+79137870404">+9528807647</a>
      <!-- <a href="#footer">Контакты</a> -->
      `;
    }else if(numberClick===2){
      numberClick=0;
      document.querySelector('#menu').style.cssText=`color:red;`
      document.querySelector("#title").style.cssText=`margin-right:10%;font-size:30px;font-weight:bold;`;
      document.querySelector("#lineOne").style.cssText=`display:block`;
      document.querySelector("#lineTwo").style.cssText=`display:block`;
      document.querySelector("#lineThree").style.cssText=`display:block`;
      document.querySelector('body').style.cssText="overflow:auto";
      document.querySelector('#list').innerHTML=``;
    }
}
class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      count:+0
    }
  }

  render() {
    return (
      <React.Fragment>
      <nav>
      <p id="menu" onClick={()=>clickMenu()}><span  id="lineOne"></span><span id="lineTwo"></span><span id="lineThree"></span><span id="list"></span></p>
      <span id='title' style={{marginRight:"10%",fontSize:"30px",fontWeight:"bold"}}>Мебель Sibiro</span>
      </nav>
      <Anotation />
      <span></span>

      </React.Fragment>
    );
  }
}

export default Header;
