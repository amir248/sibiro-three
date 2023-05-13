// import React, { Component } from 'react';

import './article.css';

// import Cart from '../images/boxOne.png';
import CartOne from './imgCart/livingRoom.png';
import CartTwo from './imgCart/bTwo.png';
import CartThre from './imgCart/bThree.png';
import CartFour from './imgCart/boxThree2.png';
import CartFive from './imgCart/boxTwo2.png';

import Kitchen from './cards/kitchen';
import TwoOpenCard from './cards/twoOpenCard';
import ThreeOpenCard from './cards/threeOpenCard';
import FourOpenCard from './cards/fourOpenCard';
import FiveOpenCard from './cards/fiveOpenCard';





const windOne=()=>{
  if(window.innerWidth>1210){
    let append= document.querySelector('div.cart:nth-child(2) > img:nth-child(1)');
    document.querySelector('.cart').append(append);
  }
}

const windTwo=()=>{
  if(window.innerWidth>1210){
    let append2= document.querySelector('div.cart:nth-child(4) > img:nth-child(1)');
    document.querySelector('div.cart:nth-child(4)').append(append2);
  }
}

const windThre=()=>{
  if(window.innerWidth>1210){
    let append8= document.querySelector('div.cart:nth-child(6) > img:nth-child(1)');
    document.querySelector('div.cart:nth-child(6)').append(append8);
  }
}


function Article(){

    return (
      <>
      <h2 id="first">Корпусная мебель:</h2>
      <div className="cart" id="kitchn">
        <img src={CartTwo} alt="Кухни под заказ" title="Кухни под заказ" />
        <div className="boxCart">
          <h3>Кухни под заказ</h3>
          <span style={{color:"green",fontSize:"15px"}}>Примерная стоимость</span>
          <strong>~73 000 - 103 000 руб.</strong>
          <p>Для кухни важно ежедневный комфорт. Вместительная и функциональная кухня по неповторимому дизайну.</p>
          <Kitchen />


          <strong style={{padding: "3%", background: "rgba(255, 255, 255, 0.3)", borderRadius: "10px", fontSize: "14px", marginTop: "30%", marginBottom: "15%"}}>Заказать <a href="tel:+79137870404" style={{color:"maroon"}}>+79137870404</a> </strong>
        </div>
      </div>
      <div className="cart">
        <img src={CartThre} alt="Корпусная мебель под заказ" title="Корпусная мебель под заказ" onLoad={windTwo}/>
        <div className="boxCart">
        <h3>Модули с уникальными размерами.</h3>
          <p>Корпусная мебель по индивидуальным размерам: кухни, шкафы купе, прихожие, гостиные, детские и многое другое...</p>
          <TwoOpenCard/>



            <strong style={{padding: "3%", background: "rgba(255, 255, 255, 0.3)", borderRadius: "10px", fontSize: "14px", marginTop: "30%", marginBottom: "15%"}}>Заказать <a href="tel:+79137870404" style={{color:"maroon"}}>+79137870404</a> </strong>
        </div>
      </div>
      <div className="cart">
        <img src={CartFour} alt="Заказать торговое оборудование" title="Заказать торговое оборудование" />
        <div className="boxCart">
          <h3>Торговое оборудование</h3>
          <p>Барные стойки, ресепшены, витрины.</p>
          <ThreeOpenCard/>



          <strong style={{padding: "3%", background: "rgba(255, 255, 255, 0.3)", borderRadius: "10px", fontSize: "14px", marginTop: "30%", marginBottom: "15%"}}>Заказать <a href="tel:+79137870404" style={{color:"maroon"}}>+79137870404</a> </strong>
        </div>
      </div>
      <div className="cart">
        <img src={CartFive} alt="Современные прихожие, шкафы купе" title="Современные прихожие, шкафы купе" onLoad={windThre}/>
        <div className="boxCart">
          <h3>Прихожие</h3>
          <p>Современные модели оригинальных, эргономичных, максимально лаконичных гарнитуров для прихожей. По персональным размерам.</p>
          <FourOpenCard/>



          <strong style={{padding: "3%", background: "rgba(255, 255, 255, 0.3)", borderRadius: "10px", fontSize: "14px", marginTop: "30%", marginBottom: "15%"}}>Заказать <a href="tel:+79137870404" style={{color:"maroon"}}>+79137870404</a> </strong>
        </div>
      </div>
      <div className="cart">
        <img src={CartOne} alt="Гостиные" title="Гостиные" onLoad={windOne}/>
        <div className="boxCart">
          <h3>Гостиные</h3>
            <strong>От: 19 000 руб.</strong>
            <p>Мебель по индивидуальным размерам, авторский дизайн разработаный в гармонии интерьера. Пространство квартиры используется максимально эффиктивно.</p>
            <FiveOpenCard/>



            <strong style={{padding: "3%", background: "rgba(255, 255, 255, 0.3)", borderRadius: "10px", fontSize: "14px", marginTop: "30%", marginBottom: "15%"}}>Заказать <a href="tel:+79137870404" style={{color:"maroon"}}>+79137870404</a> </strong>
        </div>
      </div>
      </>
    );

}

export default Article;
