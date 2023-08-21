let products = [
  {
    // key : value
    img: ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c35214f6104c4a288bfed0c7c88dd94c_9366/XLG_White_IF9995_01_standard.jpg'],
    title: ['슈퍼스타 XLG'],
    price: ['139,000 원'],
    size: ['220', '225', '230', '235', '240'],
    color: ['White', 'Blue', 'Black']
  },
  {
    img: ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/28177190d9bb40c9aa08ad4701270ebe_9366/W_White_GY5921_01_standard.jpg'],
    title: ['포럼볼드W'],
    price: ['129,000 원'],
    size: ['220', '225', '230', '235', '240'],
    color: ['White', 'Black']
  },
  {
    img: ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e068c1bdcdee44aea1acadd7b724e489_9366/00s_White_IF2989_01_standard.jpg'],
    title: ['캠퍼스 00S'],
    price: ['129,000 원'],
    size: ['220', '225', '230', '235', '240'],
    color: ['Scarlet', 'Green', 'Blue']
  },
  {
    img: ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a2584c7607df45529f10af56010757a7_9366/Blue_HQ8717_01_standard.jpg'],
    title: ['가젤 인도어'],
    price: ['169,000 원'],
    size: ['220', '225', '230', '235', '240'],
    color: ['Blue', 'Orange']
  },
  {
    img: ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/76c75d04bdb641f5927cc147fe14e812_9366/E5_Beige_IE7062_01_standard.jpg'],
    title: ['레트로피 E5'],
    price: ['149,000 원'],
    size: ['220', '225', '230', '235', '240'],
    color: ['White', 'Beige']
  },
  {
    img: ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e0cc2ba57ff41329f27af610152e834_9366/Grey_HQ6893_01_standard.jpg'],
    title: ['가젤 볼드'],
    price: ['139,000 원'],
    size: ['220', '225', '230', '235', '240'],
    color: ['Shadow Red', 'White', 'Black', 'Red']
  }
]

// document.querySelector('.box-item img').src = products[0].img;
// document.querySelector('.sho-info h2').innerHTML = products[0].title;
// document.querySelectorAll('.sho-info p')[0].innerHTML = products[0].price;
// document.querySelectorAll('.sho-info p')[1].innerHTML = products[0].size;

// for (i = 1; i < products.length + 1; i++) {
//   document.querySelector('.box-item:nth-child(' + i + ') img').src = products[i - 1].img;
//   document.querySelector('.box-item:nth-child(' + i + ') h2').innerHTML = products[i - 1].title;
//   document.querySelector('.box-item:nth-child(' + i + ') .price').innerHTML = products[i - 1].price;
//   document.querySelector('.box-item:nth-child(' + i + ') .size').innerHTML = products[i - 1].size;
// }

/*
let boxItems = document.querySelectorAll('.box-item');

boxItems.forEach(function (item, index) {
  // console.log(item, index)
  item.querySelector('img').src = products[index].img;
  item.querySelector('h2').innerHTML = products[index].title;
  item.querySelectorAll('.sho-info p')[0].innerHTML = products[index].price;
  item.querySelectorAll('.sho-info p')[1].innerHTML = products[index].size;
  item.querySelectorAll('.sho-info p')[2].innerHTML = products[index].color;
})
*/


// 프론트엔드 개발자가 하는 역할
// 서버가 보낸 데이터를 html 바인딩
// 전문 용어로 '데이터 바인딩'이라고 한다.
// 데이터 바인딩을 쉽고 편하게 할 수 있도록 도와주는 도구(React, Vue, Angular)
// 시작 기호가 대괄호[], 중괄호{}인지에 따라 Array, object 구분





/*

// javascript로  html 요소 생성
// createElement('태그이름')
let h1Tag = document.createElement('h1');
h1Tag.innerHTML = '졸립다';
h1Tag.classList.add('sleepy')
document.querySelector('.box-list').appendChild(h1Tag);


// box-list안에 p태그로 아무말
let pTag = document.createElement('p');
pTag.innerHTML = '졸려어';
document.querySelector('.box-list').appendChild(pTag);


       <div class="box-item">
        <img src="" alt="">
        <div class="sho-info">
          <h2 class="title"></h2>
          <p class="price"></p>
          <p class="size"></p>
          <p class="color"></p>
        </div>
      </div>
*/


/*
let boxItem = document.createElement('div');
boxItem.classList.add('box-item');
boxList.appendChild(boxItem);

let img = document.createElement('img');
boxItem.appendChild(img);
img.src = products[0].img;

let shoInfo = document.createElement('div');
shoInfo.classList.add('sho-info');
boxItem.appendChild(shoInfo);

let title = document.createElement('h2');
title.classList.add('title');
shoInfo.appendChild(title);

let price = document.createElement('p');
price.classList.add('price');
shoInfo.appendChild(price);

let size = document.createElement('p');
size.classList.add('size');
shoInfo.appendChild(size);

let color = document.createElement('p');
color.classList.add('color');
shoInfo.appendChild(color);

*/




// createElement로 products length만큼 html 생성
/*
for (let i = 0; i < products.length; i++) {
  let boxItem = document.createElement('div');
  boxItem.classList.add('box-item');
  boxList.appendChild(boxItem);
  
  let images = document.createElement('img');
  boxItem.appendChild(images);
  images.src = products[i].img;
  
  let shoInfo = document.createElement('div');
  shoInfo.classList.add('sho-info');
  boxItem.appendChild(shoInfo);
  
  let title = document.createElement('h2');
  title.classList.add('title');
  shoInfo.appendChild(title);
  title.innerHTML = products[i].title;
  
  let price = document.createElement('p');
  price.classList.add('price');
  shoInfo.appendChild(price);
  price.innerHTML = products[i].price;
  
  let size = document.createElement('p');
  size.classList.add('size');
  shoInfo.appendChild(size);
  size.innerHTML = products[i].size;
  
  let color = document.createElement('p');
  color.classList.add('color');
  shoInfo.appendChild(color);
  color.innerHTML = products[i].color;
}
*/


let boxList = document.querySelector('.box-list');

// boxItems.forEach(function (item, index) {
products.forEach(function (item) {
  let boxItem = document.createElement('div');
  boxItem.classList.add('box-item');
  boxList.appendChild(boxItem);

  let images = document.createElement('img');
  images.src = item.img;
  images.alt = item.title;
  boxItem.appendChild(images);

  let shoInfo = document.createElement('div');
  shoInfo.classList.add('sho-info');
  boxItem.appendChild(shoInfo);

  let title = document.createElement('h2');
  title.classList.add('title');
  title.innerHTML = item.title;
  shoInfo.appendChild(title);

  let price = document.createElement('p');
  price.classList.add('price');
  price.innerHTML = item.price;
  shoInfo.appendChild(price);

  let size = document.createElement('p');
  size.classList.add('size');
  size.innerHTML = item.size;
  shoInfo.appendChild(size);

  let color = document.createElement('p');
  color.classList.add('color');
  color.innerHTML = item.color;
  shoInfo.appendChild(color);

})