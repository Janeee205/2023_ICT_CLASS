const gnbMenu = document.querySelectorAll('.gnb-list > li');

gnbMenu.forEach(function (item) {
    const subMenu = item.querySelector('.sub');

    item.addEventListener('mouseover', function () {
        subMenu.classList.add('active');
        this.querySelector('a').classList.add('on')
    })

    item.addEventListener('mouseleave', function () {
        subMenu.classList.remove('active');
        this.querySelector('a').classList.remove('on')
    })
})


// 이미지 슬라이드

const slideList = document.querySelector('.slide-list');
const Buttons = document.querySelectorAll('.button-wrapper button')

Buttons.forEach((item, index) => {
    item.addEventListener('click', function () {

        // console.log(item, index)
        let xValue = -index * 100 + 'vw';

        slideList.style.transform = `translateX(${xValue})`;
        item.classList.add('active');

        Buttons.forEach(function (otherButton) {
            if (otherButton !== item && otherButton.classList.contains('active')) {
                otherButton.classList.remove('active');
            }
        })
    })
})


// sidebar
const sidebarButton = document.querySelector('.square-btn');
const sidebar = document.querySelector('.sidebar');
const xButton = document.querySelector('.xbutton');

sidebarButton.addEventListener('click', function(){
    sidebar.classList.add('is-active');
})

xButton.addEventListener('click', () =>{
    sidebar.classList.remove('is-active');
})
