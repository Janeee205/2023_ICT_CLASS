let products = [
  {
    // key : value
    img: ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c35214f6104c4a288bfed0c7c88dd94c_9366/XLG_White_IF9995_01_standard.jpg'],
    title: ['슈퍼스타 XLG'],
    price: ['139,000 원'],
    size: ['220', '225', '230', '235', '240']
  },
  {
    img: ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/28177190d9bb40c9aa08ad4701270ebe_9366/W_White_GY5921_01_standard.jpg'],
    title: ['포럼볼드W'],
    price: ['129,000 원'],
    size: ['220', '225', '230', '235', '240']
  },
  {
    img: ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e068c1bdcdee44aea1acadd7b724e489_9366/00s_White_IF2989_01_standard.jpg'],
    title: ['캠퍼스 00S'],
    price: ['129,000 원'],
    size: ['220', '225', '230', '235', '240']
  }
]

// for (i = 1; i < products.length + 1; i++) {
//   document.querySelector('.box-item:nth-child(' + i + ') img').src = products[i - 1].img;
//   document.querySelector('.box-item:nth-child(' + i + ') h2').innerHTML = products[i - 1].title;
//   document.querySelector('.box-item:nth-child(' + i + ') .price').innerHTML = products[i - 1].price;
//   document.querySelector('.box-item:nth-child(' + i + ') .size').innerHTML = products[i - 1].size;
// }

let boxItems = document.querySelectorAll('.box-item')
boxItems.forEach(function (item, index) {
  item.querySelector('img').src = products[index].img;
  item.querySelector('h2').innerHTML = products[index].title;
  item.querySelectorAll('.sho-info p')[0].innerHTML = products[index].price;
  item.querySelectorAll('.sho-info p')[1].innerHTML = products[index].size;
})