
let contents = [
  {
    title: ['크로스핏'],
    imgsrc: ['images/img1.png'],
    sentence: ['Strength does not come from the physical capacity. It comes from an indomitable will.'],
    button: ['Know more'],
    bgColor: ['#283491']
  },

  {
    title: ['웨이트 훈련'],
    imgsrc: ['images/img2.png'],
    sentence: ['Strength does not come from the physical capacity. It comes from an indomitable will.'],
    button: ['Know more'],
    bgColor: ['#f18684']
  },

  {
    title: ['요가'],
    imgsrc: ['images/img3.png'],
    sentence: ['Strength does not come from the physical capacity. It comes from an indomitable will.'],
    button: ['Know more'],
    bgColor: ['#6ee2f1']
  }
]


contents.forEach(function (item, index) {
  let itemList = `
  <div class="item" style='background-color: ${item.bgColor}'>
    <h1 class="title">${item.title}</h1>
    <p class="sentence">${item.sentence}</p>
    <button type="button">${item.button}</button></button>
    <img src="${item.imgsrc}" alt="${item.title}">
  </div>
  `

  document.querySelector('.list').insertAdjacentHTML('beforeend', itemList)
})