$(document).ready(function(){

   // pbtn li를 클릭했을때 slide의 li가 같은순번을 찾아 움직여라

   $('.menu li').click(function(){
    let i = $(this).index()
    console.log(i)
    $('.mid li').eq(i-1).css({'left':'0'}).stop().animate({'left':'-100%'},800)
    $('.mid li').eq(i).css({'left':'100%'}).stop().animate({'left':'0'},800)
    $('.pbtn li').removeClass('on')
    $(this).addClass('on')
});

// main의 div메뉴를 클릭했을때 main에 top,right,left중 하나가 붙어라

    $('.main div').click(function(){
        let j = $(this).index()
        console.log(j)
        $('section').removeClass('on')
        $('section').eq(j).addClass('on')
    })
    $('.main div').eq(1).click(function(){

        $('.main').removeClass('left,right,top')
        $('.main').addClass('top')
    })
    $('.main div').eq(2).click(function(){

        $('.main').removeClass('left,right,top')
        $('.main').addClass('right')
    })
    $('.main div').eq(3).click(function(){

        $('.main').removeClass('left,right,top')
        $('.main').addClass('left')
    })

    // cont의 li를 눌렀을때 대응하는 클래스에 on을 붙인다.

    $('.cont li').click(function(){

        let a = $(this).index()
        console.log(a)

        $('.slide li').removeClass('on')

    })
    
})