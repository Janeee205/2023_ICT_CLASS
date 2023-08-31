//   toTop button (추후 세로, 스크롤 속도 수정 필요) 
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 250) { //250 넘으면 버튼 보여짐
            $('#toTop').fadeIn();
            $('#toTop').css('right', $('.section').offset().right);
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function(){
        $('html, body').animate({ scrollTop : 0}, 1000);
    });
});