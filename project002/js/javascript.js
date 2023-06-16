$(document).ready(function(){

    $(window).scroll(function(){

        let sc = $(window).scrollTop()
        let ht = $(window).height();

        let ul1 = $('#wrap section:nth-child(6) article').eq(0).offset().top

        console.log(ul1)

        
    });

    $('header em').click(function(){


        $('header nav').fadeIn().addClass('on');

    });

    $('nav li').click(function(e){
        e.preventDefault()

        let i = $(this).index()
        console.log(i);
        let ht = $(window).height();
        
        $('html,body').stop().animate({scrollTop:ht*i},1400)


        $('nav li').removeClass('on')
        $(this).addClass('on')
    });


    $('section').mousewheel(function(event,delta){
        if(delta>0){

            let prev = $(this).prev().offset().top;

            $('html,body').stop().animate({scrollTop:prev},800,'easeOutBounce')
        }else if(delta<0){
            let next = $(this).next().offset().top;
            $('html,body').stop().animate({scrollTop:next},800,'easeOutBounce')
        };

    });

    $('#wrap section:nth-child(6) article').mousewheel(function(event,delta){
        if(delta>0){

            let prev = $(this).prev().offset().top;

            $('html,body').stop().animate({scrollTop:prev},800,'easeOutBounce')
        }else if(delta<0){
            let next = $(this).next().offset().top;
            $('html,body').stop().animate({scrollTop:next},800,'easeOutBounce')
        };

    });




    let i =0

    setInterval(function(){
        i++;
        if (i==3)i=0

        $('#wrap section:nth-child(2) article ul:nth-child(2) li').eq(i-1).css({'right':0}).stop().animate({'right':'-70%'},1000)
        $('#wrap section:nth-child(2) article ul:nth-child(2) li').eq(i).css({'right':'70%'}).stop().animate({'right':0},1000)
    },4000)



})