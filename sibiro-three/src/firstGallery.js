// import React, { Component } from 'react';

import OneImage from './images/1.png';
import TwoImage from './images/2.png';
import ThreeImage from './images/3.png';
import FourImage from './images/4.png';

import OneImager from './images/odynR.png';
import TwoImager from './images/dwaR.png';
import ThreeImager from './images/tryR.png';
import FourImager from './images/chet.png';

import './firstGallery.css';

function OkImage(){
  if(window.innerWidth<800){
    document.querySelector('#imgBox2').style.cssText=`display:none;`
    document.querySelector('#imgBox3').style.cssText=`display:none;`
    document.querySelector('#imgBox4').style.cssText=`display:none;`
  }
}
let Cl=+0;
let Cf;
const FC=()=>{
  if(window.innerWidth<800&&Cl===0&&Cf===undefined){
    let ClickFlipping = document.createElement('p');
    ClickFlipping.innerHTML="Click Flipping";
    document.querySelector('body > main > firstgallery > div:nth-child(2)').style.cssText=`flex-direction:column;text-align:center;`
    document.querySelector('body > main > firstgallery > div:nth-child(2)').append(ClickFlipping);
  }
}
const Clicker=()=>{
  if(window.innerWidth<800){
    // console.log("FC Click"+Cl);
    Cl++;
    if(Cl===1){
      document.querySelector('#imgBox1').setAttribute('src', TwoImager);
      // console.log(Cl);
    }else if(Cl===2){
      document.querySelector('#imgBox1').setAttribute('src', ThreeImager);
    }else if(Cl===3){
      document.querySelector('#imgBox1').setAttribute('src', FourImager);
    }else if(Cl===4){
      document.querySelector('#imgBox1').setAttribute('src', OneImager);
      Cl=0;
      Cf=true;
    }else{
  console.log("f");
    }
  }
}


function FirstGallery(){

    return (
      <>
      <div style={{display:"flex", justifyContent:"space-around",alignItems:"center",width:"1440px",maxWidth:"100%",minHeight:"170px",background:'white'}} onLoad={OkImage}>
        <p style={{display:'flex',minHeight:'87px',justifyContent:'space-between',minWidth:'70px',fontSize:'10px',textAlign:'center',background:'rgba(200,255,255,0.3)',borderRadius:'7px'}}><img src={TwoImage} alt="Изготовление мебели по индивидуальным эскизам" title="Дизайн мебели по Вашему проекту"/><span  style={{fontSize:'10px',textAlign:'center'}}>Дизайн</span></p>
        <p style={{display:'flex',minHeight:'87px',justifyContent:'space-around',minWidth:'70px',fontSize:'10px',textAlign:'center',background:'rgba(255,255,200,0.3)',borderRadius:'7px'}}><img src={OneImage} alt="Корпусная мебель под заказ с доставкой" title="Мебель с доставкой"/><span style={{fontSize:'10px',textAlign:'center'}}>Доставка</span></p>
        <p style={{display:'flex',minHeight:'87px',justifyContent:'space-between',minWidth:'70px',fontSize:'10px',textAlign:'center',background:'rgba(255,200,255,0.3)',borderRadius:'7px'}}><img src={ThreeImage} alt="Заказать мебель" title="с заботой о природе"/><span style={{fontSize:'10px',textAlign:'center'}}>Экологичный подход</span></p>
        <p style={{display:'flex',minHeight:'87px',justifyContent:'space-between',minWidth:'70px',fontSize:'10px',textAlign:'center',background:'rgba(255,200,200,0.3)',borderRadius:'7px'}}><img src={FourImage} alt="Современная корпусная мебель по зарубежным технологиям" title="Современные технологии"/><span style={{fontSize:'10px'}}>Зарубежные технологии</span></p>
      </div>

      <div style={{display:"flex", justifyContent:"center",alignItems:"center",width:"1440px",maxWidth:"100%",flexWrap:"wrap"}}>
        <img src={OneImager} alt="#" title="Click" onLoad={FC} onClick={Clicker} id="imgBox1"/>
        <img src={TwoImager} alt="#" title="#" id="imgBox2"/>
        <img src={ThreeImager} alt="#" title="#" id="imgBox3"/>
        <img src={FourImager} alt="#" title="#" id="imgBox4"/>
      </div>
      </>
    );
}

export default FirstGallery;
