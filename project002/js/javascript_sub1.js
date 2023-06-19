$(document).ready(function(){

    // article의 가로값을 구하고
    // article의 갯수를 구하고
    // 가로값과 갯수를 곱해서 section의 가로값에 대입해라.

    // 갯수구하기
    let numAc = $('article').size()
    console.log(numAc)

    // 가로값구하기
    let widAc = $('article').width()
    console.log(widAc)

    // 세로값구하기
    let htAc = $('article').height()
    console.log(htAc)

    let winht = $(window).height()
    console.log(winht)

    let secTop = (winht/2)-(htAc/3)
    console.log(secTop)
    // 섹션가로값 설정하기

    $('section').width(1300+(widAc+20)*numAc)
    $('body').height((widAc+20)*numAc)
    $('section').css({'top':secTop-100})
    $('nav').css({'top':secTop-150})
    $('aside').css({'top':secTop+600})

    $(window).scroll(function(){
        let sc = $(this).scrollTop()
        $('h1').text(sc)
            $('section').css({'left':-sc})  
    });

    $('article h2').click(function(){

        $('article').stop().animate({width:180},500)
        $(this).parent('article').stop().animate({width:1300},1000)
    })

})