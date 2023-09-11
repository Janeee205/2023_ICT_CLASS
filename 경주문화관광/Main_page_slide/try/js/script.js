$(document).ready(function () {

    /**
     * imgsrc : 이미지주소
     * title : 장소명 (첨성대, 대릉원...)
     * sub : 장소설명
     */

    let travelCourse1 = [
        /***** 경주시내권 *****/
        {
            imgsrc: ['./images/item1-1.jpg'],
            subTxt: ['경주시내권'],
            txt: ['핵심바이블'],
            title: ['경주국립박물관'],
            sentence: ['신라문화를 한 눈에 볼 수 있는 국립경주박물관. 영롱한 자태의 금관을 생눈으로 마주할 수 있다.'],
        },

        {
            imgsrc: ['./images/item1-2.jpg'],
            subTxt: ['경주시내권'],
            txt: ['핵심바이블'],
            title: ['월정교'],
            sentence: ['남천 위를 수놓고 선 그림 같은 목조교량 월정교. 원효대사와 요석공주의 사랑이야기가 얽힌 길.'],
        },

        {
            imgsrc: ['./images/item1-3.jpg'],
            subTxt: ['경주시내권'],
            txt: ['핵심바이블'],
            title: ['첨성대'],
            sentence: ['신라의 역사가 이루어진 그 곳. 처음 지어진 모습 그대로 한 자리에 서 있다.'],
        },

        {
            imgsrc: ['./images/item1-4.jpg',],
            subTxt: ['경주시내권'],
            txt: ['핵심바이블'],
            title: ['대릉원'],
            sentence: ['12만 6,500㎡의 넓은 땅에 고분이 모여 있는 곳. 대릉원을 중심으로 일대에 유적이 산재해 있다.'],
        },

        {
            imgsrc: ['./images/item1-5.jpg'],
            subTxt: ['경주시내권'],
            txt: ['핵심바이블'],
            title: ['동궁과 월지'],
            sentence: ['경주야경 명소라는 타이틀이 아깝지 않은 곳. 동궁과 월지는 신라 조경예술의 극치를 보여준다.'],
        }
    ]
    console.log(travelCourse1.length);


    travelCourse1.forEach(function (item) {

        let slideItem = `
        <div class="slider">
            <div class="slider-img">
                <img src="${item.imgsrc}" alt=""${item.title}">
            
            </div>
            <div class="slide-txt">
                <span class="sub-txt">${item.subTxt}</span>
                <strong>
                    <h2>${item.txt}</h2><i></i>${item.title}
                </strong>
                <p>${item.sentence}</p>
            </div> 
        </div>
    `

        document.querySelector('.slider-wrapper').insertAdjacentHTML('beforeend', slideItem)

    })





    /************************************************************************ */

    // 좌우 움직이는 슬라이드
    // 두번째 방법으로
    let currentIndex = 0;
    $('.slider-wrapper').append($('.slider')).first().clone(true)

    setInterval(() => {
        currentIndex++;
        $('.slider-wrapper').animate({ marginLeft: '-400' * currentIndex + "px" }, 600)

        if (currentIndex == $('.slider').length - 1) {
            // $('.slider').append('.slider-wrapper');
            currentIndex = -1;
        }
    }, 1000);


    /*
    1번 방법
        setInterval(() => {
            $('.slider-wrapper').animate({ 'margin-left': '-100%' }, function () {
                $('.slider').first().appendTo('.slider-wrapper')
                $('.slider-wrapper').css({ 'margin-left': '0' })
            })
        }, 3000);
    
    

        2번 방법
        setInterval(() => {
            currentIndex++;
            $('.wrapper').animate({ marginTop: -400 * currentIndex + "px" }, 600)
    
            if (currentIndex == 3) {
                setTimeout(() => {
                    $('.wrapper').animate({ marginLeft: 0 }, 0)
                    currentIndex == 0
                }, 600);
            }
        }, 3000);

3번 방법

    $('.slide-wrapper > a:gt(0)').hide();
    setInterval(() => {
        $('.slide-wrapper a:first-child').fadeOut()
            .next('a').fadeIn()
            .end().appendTo('.slide-wrapper')
    }, 3000);
 */


})