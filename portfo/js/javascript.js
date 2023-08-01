$(document).ready(function(){

   // menu li를 클릭했을때 slide의 li가 같은순번을 찾아 움직여라

   $('.menu li').click(function(){
    let i = $(this).index()
    console.log(i)
    $('.mid li').removeClass('on')
    $('.mid li').eq(i).addClass('on')
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

        $('.slide2 ul li').removeClass('on')
        $('.slide2 li').eq(a).addClass('on')

    })

    // 프로필의 각 button li 를 클릭했을때 화면을 이동시켜라

    $('.button li').eq(0).click(function(){

        $('.main').removeClass('top')
        $('.prof').removeClass('on')
        $('.main').addClass('on')
    })

    $('.button li').eq(1).click(function(){

        $('.main').removeClass('top')
        $('.prof').removeClass('on')
        $('.main').addClass('right')
        $('.design').addClass('on')
    })

    $('.button li').eq(2).click(function(){

        $('.main').removeClass('top')
        $('.prof').removeClass('on')
        $('.main').addClass('left')
        $('.pub').addClass('on')
    })


    // 각 btn을 클릭했을때 mock1의 class에 on을 붙여라

    $('.btn1').click(function(){

        $('.mock1,.mock001').addClass('on')
    })

    $('.btn2').click(function(){

        $('.mock2,.mock002').addClass('on')
    })

    $('.btn3').click(function(){

        $('.mock3,.mock003').addClass('on')
    })

    // clear의 p를 눌렀을때 class의 on을 없애라

    $('.clear p').click(function(){

        $('.mock1,.mock001').removeClass('on')
        $('.mock2,.mock002').removeClass('on')
        $('.mock3,.mock003').removeClass('on')
    })


    // 디자인에서 다른화면으로 전환하기


    // next의 li의 첫번째를 클릭했을때 화면이 메인으로 돌아가라
    
    $('.next li').eq(0).click(function(){

        $('.main').removeClass('right')
        $('.design').removeClass('on')
        $('.main').addClass('on')
    })

    // next의 li의 두번째를 클릭했을때 화면이 프로필으로 이동해라

    $('.next li').eq(1).click(function(){

        $('.main').removeClass('right')
        $('.design').removeClass('on')
        $('.main').addClass('top')
        $('.prof').addClass('on')
    })

    // next의 li의 세번째를 클릭했을때 화면이 퍼블리싱으로 이동해라

    $('.next li').eq(2).click(function(){

        $('.main').removeClass('right')
        $('.design').removeClass('on')
        $('.main').addClass('left')
        $('.pub').addClass('on')
    })


    // 퍼블리싱에서 다른 화면으로 전환하기

    // prev의 li의 첫번째를 클릭했을때 화면이 메인으로 돌아가라
    $('.prev li').eq(0).click(function(){

        $('.main').removeClass('left')
        $('.pub').removeClass('on')
        $('.main').addClass('on')
    })

    // prev의 li의 두번째를 클릭했을때 화면이 프로필로 이동해라 
    $('.prev li').eq(1).click(function(){

        $('.main').removeClass('left')
        $('.pub').removeClass('on')
        $('.main').addClass('top')
        $('.prof').addClass('on')
    })

    // prev의 li의 세번째를 클릭했을때, 화면이 디자인으로 이동해라
    $('.prev li').eq(2).click(function(){

        $('.main').removeClass('left')
        $('.pub').removeClass('on')
        $('.main').addClass('right')
        $('.design').addClass('on')
    })

    // 퍼블리싱 슬라이드 전환

     // menu li를 클릭했을때 slide의 li가 같은순번을 찾아 움직여라

   $('.cont li').click(function(){
    let s = $(this).index()
    console.log(s)
    $('.slide2 li').removeClass('on')
    $('.slide2 li').eq(s).addClass('on')
    $('.cont li').removeClass('on')
    $(this).addClass('on')
});
})