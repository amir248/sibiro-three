// import React, { Component } from 'react';
import Image1 from './cardsLearnMore/FrameDesign.png';
import Image2 from './cardsLearnMore/FrameFootprint.png';
import Image3 from './cardsLearnMore/FrameMade.png';
import Image4 from './cardsLearnMore/FrameWood.png';
import './cardsLearnMore.css';

function LearnMore(){
    return (
      <>
      <h2>cards Learn more</h2>
      <div className="iconLineOk">
        <div className="boxStyle">
          <img src={Image1} alt='Design' />
          <h2>DESIGN</h2>
          <p style={{margin:"3%"}}>Создаем предметы мебели с индивидуальностью, призванные преобразить ваше пространство.</p>
          <a href="https://sibiro.ru/design.html"><p>Learn More about design</p></a>
        </div>
        <div className="boxStyle">
          <img src={Image2} alt='Footprint' />
          <h2>FOOTPRINT</h2>
          <p style={{margin:"3%"}}>С заботой о природе.</p>
          <a href="https://sibiro.ru/footprint.html"><p>Learn More about footprint</p></a>
        </div>
        <div className="boxStyle">
          <img src={Image3} alt='Made' />
          <h2>MADE</h2>
          <p style={{margin:"3%"}}>Местный дизайн и производство.</p>
          <a href="https://sibiro.ru/made.html"><p>Learn More about made</p></a>
        </div>
        <div className="boxStyle">
          <img src={Image4} alt='wood' />
          <h2>WOOD</h2>
          <p style={{margin:"3%"}}>Наш характерный и основной материал, а также его уникальные и неподвластные времени атрибуты.</p>
          <a href='https://sibiro.ru/wood.html'><p>Learn More about wood</p></a>
        </div>
      </div>

      </>
    );

}

export default LearnMore;
