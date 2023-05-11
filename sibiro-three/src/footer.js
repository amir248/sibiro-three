// import React, { Component } from 'react';
import IcoPng from './images/post-ico.png';

function Footer(){
    return (
      <>
      <div id="footer">
        <h3>По всем вопросам:</h3>
        <p><a href="tel:+79137870404">8 913 787 04 04</a></p>
        <strong>Адрес:</strong>
        <p>Новосибирск, ул. Мира 58A</p>
      </div>
      <div>
        <h3>Часы работы:</h3>
        <p>пн 9 : 00 - 18 : 00</p>
        <p>вт 9 : 00 - 18 : 00</p>
        <p>ср 9 : 00 - 18 : 00</p>
        <p>чт 9 : 00 - 18 : 00</p>
        <p>пт 9 : 00 - 18 : 00</p>
        <p>сб 9 : 00 - 17 : 00</p>
        <p>вс ___ <span style={{color:"red"}}>выходной</span></p>
      </div>
      <div style={{width:"400px"}}>
      <a href="mailto:nasoberu@nasobe.ru,prokuhni.tomsk@gmail.com,Daliashat@gmail.com">
        <button style={{background:"white",border:"1px solid black",width:"237px", height:"25px"}}>Написать</button>
        <div style={{display:"flex",justifyContent:"center",color:"green",maxWidth:"100%",width:"270px",flexDirection:"row"}}>
          <p>Sent a letter</p>
          <img src={IcoPng} alt="fiveStar"/>
        </div>
        </a>
      </div>
      </>
    );
}

export default Footer;
