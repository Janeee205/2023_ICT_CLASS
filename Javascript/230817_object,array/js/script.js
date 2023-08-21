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


let boxItems = document.querySelectorAll('.box-item');

boxItems.forEach(function (item, index) {
  // console.log(item, index)
  item.querySelector('img').src = products[index].img;
  item.querySelector('h2').innerHTML = products[index].title;
  item.querySelectorAll('.sho-info p')[0].innerHTML = products[index].price;
  item.querySelectorAll('.sho-info p')[1].innerHTML = products[index].size;
  item.querySelectorAll('.sho-info p')[2].innerHTML = products[index].color;
})


// 프론트엔드 개발자가 하는 역할
// 서버가 보낸 데이터를 html 바인딩
// 전문 용어로 '데이터 바인딩'이라고 한다.
// 데이터 바인딩을 쉽고 편하게 할 수 있도록 도와주는 도구(React, Vue, Angular)
// 시작 기호가 대괄호[], 중괄호{}인지에 따라 Array, object 구분





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