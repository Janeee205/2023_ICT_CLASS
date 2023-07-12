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
const spanButton = document.querySelectorAll('.span-wrapper span')

spanButton.forEach((item, index) => {
    item.addEventListener('click', function () {

        // console.log(item, index)
        let xValue = -index * 100 + 'vw';

        slideList.style.transform = `translateX(${xValue})`;
        item.classList.add('active');

        spanButton.forEach(function (otherSpan) {
            if (otherSpan !== item && otherSpan.classList.contains('active')) {
                otherSpan.classList.remove('active');
            }
        })
    })
})


// sidebar
const sidebarButton = document.querySelector('.square-btn');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

sidebarButton.addEventListener('click', function(){
    sidebar.classList.add('is-active');
    overlay.classList.add('is-active');
})

overlay.addEventListener('click', () =>{
    sidebar.classList.remove('is-active');
    overlay.classList.remove('is-active');
})
