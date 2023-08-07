$(document).ready(function(){
    $(".menu>li").click(function () {
        if ($(this).addClass("active")) {
          $(this).children().css("display", "none");
          $(this).removeClass();
        } else {
          $(this).addClass("active");
          $(this).children().css("display", "block");
        }
      });

      $(function(){
        $('.menu').click(function(){        
          $(this).children().toggle();        
        })
        $('.menu').hover(function(){
          $(this).click();
        })
        $('.list').mouseover(function(){
          $(this).css('background','lightyellow');
        })
        $('.list').mouseout(function(){
          $(this).css('background','white');
        })
      })

      let i = 0

      setInterval(function(){
  
          i++;
          if(i==3) i=0;
          console.log(i)
  
          $('.photo ul li').eq(i-1).css({top:'0'}).stop().animate({top:'-100%'},800)
          $('.photo ul li').eq(i).css({top:'100%'}).stop().animate({top:'0'},800)
      },2000)
   
      //갤러리 버튼 클릭
$('.gallery_off').click(function(){
    $('.notice_l').hide(); //공지사항 내용 숨기기
    $('.gallery_i').css({'display' : 'flex',}); //갤러리 내용 나타내기
    $(this).attr('class','gallery_on'); //갤러리 버튼 CSS 변경
    $('.notice_on').attr('class','notice_off'); //공지사항 버튼 CSS 변경
});

//공지사항 버튼 클릭
$('.notice_on').click(function(){
    $('.notice_l').show(); //공지사항 내용 나타내기
    $('.gallery_i').hide(); //갤러리 내용 숨기기
    $(this).attr('class','notice_on'); //공지사항 버튼 CSS변경
    $('.gallery_on').attr('class','gallery_off'); //갤러리 버튼 CSS 변경
});

$('.pop span').click(function(){

    $('.pop').css({'display':'none'})
})

})