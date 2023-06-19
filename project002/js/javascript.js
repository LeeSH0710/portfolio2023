$(document).ready(function(){

    $(window).scroll(function(){

        let sc = $(window).scrollTop()
        let ht = $(window).height();

        
    });


// em버튼을 클릭시 nav 메뉴가 나타난다.

    $('header em').click(function(){


        $('header nav').fadeIn().addClass('on');

    });

    $('nav li').click(function(e){
        e.preventDefault()

        let i = $(this).index()
        let ht = $(window).height();
        
        $('html,body').stop().animate({scrollTop:ht*i},1400)


        $('nav li').removeClass('on')
        $(this).addClass('on')
    });



// 마우스가 스크롤했을때 섹션이 자동으로 아래로 내려간다.

    $('section').mousewheel(function(event,delta){
        if(delta>0){

            let prev = $(this).prev().offset().top;

            $('html,body').stop().animate({scrollTop:prev},800,'easeOutBounce')
        }else if(delta<0){
            let next = $(this).next().offset().top;
            $('html,body').stop().animate({scrollTop:next},800,'easeOutBounce')
        };

    });


    // 시리즈 부분에서 스크롤했을때 article이 자동으로 내려간다.

    $('#wrap section:nth-child(6) article').mousewheel(function(event,delta){
        if(delta>0){

            let prev = $(this).prev().offset().top;

            $('html,body').stop().animate({scrollTop:prev},800,'easeOutBounce')
        }else if(delta<0){
            let next = $(this).next().offset().top;
            $('html,body').stop().animate({scrollTop:next},800,'easeOutBounce')
        };

    });


    // 일정 스크롤에 도달시 투명했던 이미지가 나타나게됨


    let sec1 = $('#wrap section').eq(0).offset().top
    let sec2 = $('#wrap section').eq(1).offset().top
    let sec3 = $('#wrap section').eq(2).offset().top
    let sec4 = $('#wrap section').eq(3).offset().top

                let sc = $(this).scrollTop()
                console.log(sc)

                if(sc>=sec1){
                    $('#wrap section:nth-child(1) article div:nth-child(2)').css({'opacity':1})
                }

                if(sc>=sec1){
                    $('#wrap section:nth-child(1) article div:nth-child(3)').css({'opacity':1})
                }






    // 닌텐도 소개부분이 자동으로 왼쪽에서 오른쪽으로 넘어간다.

    let i =0

    setInterval(function(){
        i++;
        if (i==3)i=0

        $('#wrap section:nth-child(2) article ul:nth-child(2) li').eq(i-1).css({'right':0}).stop().animate({'right':'-70%'},1000)
        $('#wrap section:nth-child(2) article ul:nth-child(2) li').eq(i).css({'right':'70%'}).stop().animate({'right':0},1000)
    },4000)


    // 마리오 사진에 호버했을때 이미지가 자동으로 나타난다.

   
    $('#wrap section:nth-child(3) article .mario li:nth-child(1)').mouseover(function(){


        $('#wrap section:nth-child(3) article .mario li:nth-child(2)').addClass('on').css({'left':'20%'}).animate({'left':'25%'});

    });


    $('#wrap section:nth-child(3) article .mario li:nth-child(1)').mouseout(function(){


        $('#wrap section:nth-child(3) article .mario li:nth-child(2)').removeClass('on');

    });


    // 루이지 사진에 호버했을때 이미지가 자동으로 나타난다.

    $('#wrap section:nth-child(3) article .luige li:nth-child(3)').mouseover(function(){


        $('#wrap section:nth-child(3) article .luige li:nth-child(2)').addClass('on').css({'right':'20%'}).animate({'right':'25%'});
        

    });


    $('#wrap section:nth-child(3) article .luige li:nth-child(3)').mouseout(function(){


        $('#wrap section:nth-child(3) article .luige li:nth-child(2)').removeClass('on');

    });




})