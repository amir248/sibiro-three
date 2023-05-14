let article=document.createElement('article');
document.querySelector('main').append(article);

let box=document.createElement('div');
box.setAttribute('id','boxOne');
document.querySelector('article').append(box);

let boxTwo=document.createElement('div');
boxTwo.setAttribute('id','boxTwo');
document.querySelector('article').append(boxTwo);

let boxThree=document.createElement('div');
boxThree.setAttribute('id','boxThree');
document.querySelector('article').append(boxThree);

const path='image/gallery/';
const pathNewPic='image/gallery/newPic/';
const pathTula='image/gallery/tulaKitchen/';
const img=['aprl.jpg','aprl2.jpg','aprl3.jpg','aprl4.jpg','aprl7.jpg','aprl8.jpg','aprl9.jpg','aprl10.jpg','aprl11.jpg','aprl12.jpg','aprl13.jpg','aprl14.jpg','aprl15.jpg','aprl16.jpg','aprl17.jpg','one.jpg','one_1.jpg','one_2.jpg','one_3.jpg','one_4.jpg','one_5.jpg','one_6.jpg','one_7.jpg','one_8.jpg','one_9.jpg','one_10.jpg','one_11.jpg','one_12.jpg','one_13.jpg','one_14.jpg','one_15.jpg','one_16.jpg','one_17.jpg','oneDa.png','oneDan.png','oneDs.png','oneDsa.png','oneDt.png','oneDx.png','oneKuh.png','oneSgib.png','oneTwon.png','oneUs.png','oneUY.png','oneYl.png','oneYt.png','yr1.jpg','yr2.jpg','yr3.jpg','yr4.jpg','yr5.jpg','yr6.jpg','yr7.jpg','yr8.jpg'];
const newPic=['ska.jpg','skaf.jpg','skas.jpg','skav.jpg'];
const tula=['image0007.jpg','image0010.jpg','image0011.jpg','image0012.jpg','image0014.jpg','image0015.jpg','image0018.jpg','image0019.jpg','image0027.jpg','image0028.jpg','image0029.jpg'];
let count =tula.length+img.length+newPic.length;
let random= Math.floor(Math.random(3)*count);
function glavPhoto(){
  let h1=document.createElement('h1');
  h1.innerHTML='Заказать корпусную мебель';
  let photo=document.createElement('img');
  photo.setAttribute('src','ooo');
  photo.setAttribute('id','glav');
  photo.setAttribute('alt','заказать корпусную мебель по индивидуальным размерам');
  let glavnoe=document.createElement('div');
  glavnoe.setAttribute('id','ooK');
  document.querySelector('article').prepend(glavnoe);

  let picture=document.createElement('picture');
  document.querySelector('#ooK').prepend(picture);
  document.querySelector('#ooK').prepend(h1);
  document.querySelector('picture').append(photo);
  // console.log(random);
  let phot;
  function oki(){
    if(random<=53){
      phot=path+img[random];
    }else if(random>54&&random<58){
      let ra= Math.floor(Math.random()*newPic.length);
      phot=pathNewPic+newPic[ra];
      // console.log('yyyyyy');
    }else{
      let ran= Math.floor(Math.random()*tula.length);
      phot=pathTula+tula[ran];
      // console.log('BBByyy');
    }
    return phot;
  }

  document.querySelector('#glav').setAttribute('src',oki());
}
// console.log(count);
// console.log(img.length);
// console.log(newPic.length);
// console.log(tula.length);
//начинается с нуля потому что с верху главное большое фото тоже img
function countPhoto(){
  for(let oj=0;oj<img.length;oj++){
    let ok=document.createElement('img');
    ok.setAttribute('alt','заказать корпусную мебедь под заказ');
    document.querySelector('#boxOne').append(ok);
    document.querySelectorAll('img')[oj].setAttribute('src',path+`${img[oj]}`);
  }
  for(let oj=0;oj<img.length;oj++){
    let way=path+`${img[oj]}`;
    document.querySelectorAll('#boxOne > img')[oj].addEventListener('click',()=>{
      document.querySelector('#glav').setAttribute('src',way);
      window.location.href='#';
      fotot=oj;
    });
  }
  let title=document.createElement('h1');
  let br=document.createElement('br');
  title.innerHTML='Корпусная мебель под заказ!';
  document.querySelector('#boxOne').prepend(title);
}
countPhoto();
glavPhoto();// рандомное фото после певой выкладки галереи

function newsPic(){
  for(let oj=0;oj<newPic.length;oj++){
    let ok=document.createElement('img');
    document.querySelector('#boxTwo').append(ok);
    ok.setAttribute('alt','корпусная мебель под заказ');
    document.querySelectorAll('#boxTwo > img')[oj].setAttribute('src',pathNewPic+`${newPic[oj]}`);
    let way=pathNewPic+`${newPic[oj]}`;
    document.querySelectorAll('#boxTwo > img')[oj].addEventListener('click',()=>{
      document.querySelector('img').setAttribute('src',way);
      window.location.href='#';
      fotot=oj+img.length;
    });
  }
  let title=document.createElement('h2');
  let br=document.createElement('br');
  title.innerHTML='<p class="line">Прихожие под заказ</p>';
  document.querySelector('#boxTwo').prepend(title);
}
newsPic();

function tulula(){
  for(let oy=0;oy<tula.length;oy++){
    let oky=document.createElement('img');
    oky.setAttribute('alt','заказать кухню под заказ');
    document.querySelector('#boxThree').append(oky);
    document.querySelectorAll('#boxThree >  img')[oy].setAttribute('src',pathTula+`${tula[oy]}`);

    let way=pathTula+`${tula[oy]}`;
    document.querySelectorAll('#boxThree > img')[oy].addEventListener('click',()=>{
      document.querySelector('#glav').setAttribute('src',way);
      window.location.href='#';
      fotot=oj+img.length+newPic.length;
    });
  }
  let title=document.createElement('h2');
  let br=document.createElement('br');
  title.innerHTML='Кухни под заказ!';
  document.querySelector('#boxThree').prepend(title);

}
tulula();

let fotot=random;
function buttonsy(){
  let hr=document.createElement('hr');
  document.querySelector('#ooK').append(hr);
  function lol(){
    if(fotot<=53){
      if(fotot<=0){
        phot=path+img[fotot];
        fotot=count;
        // console.log('FOTOTS');
        return document.querySelector('#glav').setAttribute('src','sibiro-three/src/gallery/aprl2.jpg');
      }
      phot=path+img[fotot];
    }else if(fotot>54&&fotot<58){
      let fototTwo=0;
      if(fotot>54){
        fototTwo=fotot-54;
      }
      phot=pathNewPic+newPic[fototTwo];
      // console.log('yyyyyy');
    }else if(fotot>=count){
        fotot=0;
    }else{
      if(fotot>58){
        fototTwo=fotot-58;
      }
      if(fotot===count){
        fotot=0;
        fototTwo=fotot-58;
        // console.log('FOTOT_'+fototTwo);
        phot=pathTula+tula[fototTwo];
      }
      phot=pathTula+tula[fototTwo];
      // console.log('BBByyy');
    }
    return phot;
  }
  let left=document.createElement('span');
  left.innerHTML='<';
  left.className='left';
  document.querySelector('#ooK').append(left);
  document.querySelector('.left').addEventListener('click',()=>{
    fotot--;
    if(fotot===0){
      fotot=count-1;
      // console.log('11111111111111111111');
    }
    // console.log('oK_'+fotot+"_"+count+"_"+count);
    document.querySelector('#glav').setAttribute('src',lol());
  });
  let right=document.createElement('span');
  right.innerHTML='>';
  right.className='right';
  document.querySelector('#ooK').append(right);
  document.querySelector('.right').addEventListener('click',()=>{
    // console.log('LOL_'+fotot+"_"+count);
    fotot++;
    document.querySelector('#glav').setAttribute('src',lol());
  });
  document.querySelector('#glav').addEventListener('click',()=>{
    fotot++;
    document.querySelector('#glav').setAttribute('src',lol());
  });
}
buttonsy();

let width=window.innerWidth;
console.log(width);
if(width>1900){
  document.querySelector('article').style.cssText=`width:1799px;`;
  console.log(width);
}else if(width>1800){
  document.querySelector('article').style.cssText=`width:1699px;`;
  console.log(width);
}else if(width>1700){
  document.querySelector('article').style.cssText=`width:1599px;`;
  console.log(width);
}else if(width>1600){
  document.querySelector('article').style.cssText=`width:1499px;`;
  console.log(width);
}else if(width>1500){
  document.querySelector('article').style.cssText=`width:1399px;`;
  console.log(width);
}else if(width>1400){
  document.querySelector('article').style.cssText=`width:1299px;`;
  console.log(width);
}else if(width>1300){
  document.querySelector('article').style.cssText=`width:1199px;`;
  console.log(width);
}else if(width>1200){
  document.querySelector('article').style.cssText=`width:1099px;`;
  console.log(width);
}else if(width>1100){
  document.querySelector('article').style.cssText=`width:999px;`;
  console.log(width);
}else if(width>1000){
  document.querySelector('article').style.cssText=`width:899px;`;
  console.log(width);
}else{
  document.querySelector('article').style.cssText=`width:100%;`;
}
