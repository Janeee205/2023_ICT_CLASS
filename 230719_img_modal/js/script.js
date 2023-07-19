
// fadein
// fadeout
// js로 imgsrc속성 가져오기

/*
const imgList = document.querySelector('.img-item img');
const popup = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const bgImg = document.querySelector('.bg-img');
*/

// let text = imgList[3].src;

/*
imgList.foreach((item) => {
  item.addEventListener("click", (e) => {
    console.log(imgAdrr);
    e.preventDefault();
    let imgAdrr = imgList.src;
    overlay.style.display = "block";
    popup.style.display = "block";


    bgImg.style.backgroundImage = "url()"
  })
})
*/

$(function () {
  $('li img').click(function () {
    let img = new Image(500, 500);
    img.src = $(this).attr('src');
    $('.bg-img').html(img);
    $('.popup').show();
  });

  $('.popup').click(function (e) {
    $('.popup').toggle();
  });
});