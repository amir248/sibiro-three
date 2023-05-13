// import React, { Component } from 'react';
// import './openCard.css';
import NewsImg from './images/img.jpg';
import {
  Link,
  Outlet
} from "react-router-dom";

function titleRename(){
  document.querySelector('head > title').innerHTML=`nodejs porgrammer Amir!!!`;
  document.querySelector('head > meta:nth-child(5)').setAttribute('content','web deweloper nodejs')
}

export default function Kitchen() {
  return (
    <>
      <div onLoad={titleRename()}>
        <h1>React Router Contacts</h1>
        <Link to={`/`}>home</Link>
      </div>
      <Outlet/>
    </>
  );
}
