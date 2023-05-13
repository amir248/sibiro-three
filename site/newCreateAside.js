let pageList=`<a href="#" style="margin:1%">Верх<span style="font-size:30px;">👆</span></a><a href="https://sibiro.ru" style="margin:1%"><span style="font-size:30px;">🏡</span>главная</a>
<a href="https://sibiro.ru/design.html" style="margin:1%">DESIGN</a>
<a href="https://sibiro.ru/footprint.html" style="margin:1%">FOOTPRINT</a>
<a href="https://sibiro.ru/made.html" style="margin:1%">MADE</a>
<a href="https://sibiro.ru/wood.html" style="margin:1%">WOOD</a>
<a href="https://sibiro.ru/maps.html" style="margin:1%">Map</a>
`;
if(window.innerWidth>1100){
  console.log(">1100");
  let aside=document.createElement('aside');
  let main=document.querySelector('main');
  main.append(aside);
  // document.querySelector('aside > a').style.cssText=`
  // margin:1%;
  // color:green;
  // `;
  document.querySelector('aside').style.cssText=`
  display:flex;
  position:sticky;
  justify-content: flex-start;
  align-items: center;
  width:200px;
  // background: rgba(0,255,0,0.3);
  height:150px;
  max-width: 100%;
  top:0;
  flex-direction:column;
  `;

  document.querySelector('aside').innerHTML=`${pageList}`;
  // document.querySelectorAll('a:hover').style.cssText=`
  // color:orange;
  // background:red;
  // margin:1%;
  // `;
// document.querySelector('aside a').addEventListener('mouseover',()=>{
//   document.querySelector('aside a').style.cssText=`
//   // color:orange;
//   background:red;
//   margin:1%;
//   `
// });
// document.querySelector('aside a').addEventListener('mouseout',()=>{
//   document.querySelector('aside a').style.cssText=`
//   // color:blue;
//   background:none;
//   margin:1%;
//   `
// });s
}else if(window.innerWidth<1100){
  console.log('<1100');
}else{
  console.log("else");
}

setTimeout(()=>{
  // document.querySelector('#gChatFrame').style.cssText=`background:green;`;
  // console.log(document.querySelector('#gChatFrame').childNodes);
  // console.log(document.querySelector('#gChatFrame').HTMLCollection);

// let frame=document.querySelector('#gChatFrame');
// // let htmlO=frame.querySelector('#gChatFrame html');
// // let bodyO=frame.querySelector('#gChatFrame body');
// // htmlO.append(bodyO);
// // bodyO.append(frame);
// let chatCon;
// // frame.append(chatCon);
// chatCon=document.querySelector('.chatContainer');
// document.querySelector('.chatContainer').style.cssText=`
// font-family: Arial;
// background: none !important;
// right: 0px;
// bottom: 0px;
// padding: 0px;
// border:none !important;
// overflow: hidden;
// position: relative;
// margin: 5px;
// border-radius: 5px;
// `;
// // frame.appendChild(chatCon);
// frame.insertAdjacentHTML('beforeBegin',chatCon);
},3900);
