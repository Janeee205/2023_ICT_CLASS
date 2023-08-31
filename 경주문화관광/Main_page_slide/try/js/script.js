let contents = [
  {
    title: ['연습'],
    imgsrc: ['images/back1.png'],
    sentence: ['슬라이드']
  },

  {
    imgsrc: ['연습'],
    imgsrc: ['images/back2.png'],
    sentence: ['슬라이드']
  },

  {
    imgsrc: ['연습'],
    imgsrc: ['images/back3.png'],
    sentence: ['슬라이드']
  }
]


contents.forEach(function (item, index) {

  let itemList = `
  <div class="slider" style="background-image: url('${item.imgsrc}');">

    <div class="slide-txt">
      <strong>
        <h2>${item.title}</h2>
      </strong>

      <p>${item.sentence}</p>
    </div>

  </div> 
  `

  document.querySelector('.slider-wrapper').insertAdjacentHTML('beforeend', itemList)
})