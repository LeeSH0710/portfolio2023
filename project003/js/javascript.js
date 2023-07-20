$(document).ready(function(){

// nav의 li를 눌렀을때 h1과 boxx와 nav의 위치가 변화한다. 

// h1로고를 눌렀을때 메인페이지로 돌아간다.
    $('h1').click(function(){
        $('h1').css({'left':'12%','top':'45%','transform':'rotate(55deg)'})
        $('nav').css({'transform':'rotate(-35deg)','right':'15%','top':'5%','width':'200px'})
        $('nav ul').css({'display':'block'})
        $('nav ul li').css({'transform':'rotate(35deg)'})
        $('.boxx').css({'width':'40%','left':'35%','top':'-40%','transform':'rotate(-35deg)','height':'185%'})
        $('section').removeClass('on')
        $('section').removeClass('off')
        $('.boxx').addClass('on')
        $('.main').addClass('on')
    })

    // 영화소개를 눌렀을때 h1,nav,boxx의 위치가 변경되고 info에 on 클래스를 붙인다.
    $('header nav ul li:nth-child(1)').click(function(){
        // h1의 위치를 변경
        $('h1').css({'left':'-5%','top':'55%','transform':'rotate(55deg)'})
        // nav를 transform:rotate로 기울이고 위치를 변경
        $('nav').css({'transform':'rotate(-35deg)','right':'7%','top':'5%','width':'200px'})
        // 갤러리를 눌렀을때 display:flex로 변경되있던걸 다시 block으로 변경
        $('nav ul').css({'display':'block'})
        // nav를 기울임에따라 li를 반대로 rotate하여 글자를 안기울게하기 
        $('nav ul li').css({'transform':'rotate(35deg)'})
     
        $('section').removeClass('on')
        $('section').removeClass('off')
      
        $('.info').addClass('on')
    })

    $('header nav ul li:nth-child(2)').click(function(){

        $('nav').css({'transform':'rotate(0deg)'})
        $('nav').css({'right':'5%','top':'10%','width':'200px'})
        $('nav ul').css({'display':'block'})
        $('nav ul li').css({'transform':'rotate(0deg)'})
        $('h1').css({'transform':'rotate(90deg)','left':'-12%','top':'40%'})
        // $('.boxx').css({'transform':'rotate(0)','width':'60%','left':'20%','top':'-40%','height':'185%'})
        $('section').removeClass('on')
        $('section').removeClass('off')
        $('.series').addClass('on')
        $('.boxx').addClass('none')
        $('.boxx').addClass('on')
        // 이전화면에있던 info에 off를 줘서 왼쪽으로 이동  
        $('.info').addClass('off')
        
    })

    $('nav ul li:nth-child(3)').click(function(){
        $('h1').css({'left':'-5%','top':'20%','transform':'rotate(-55deg)'})
        $('nav').css({'transform':'rotate(35deg)','width':'200px','right':'10%','top':'55%'})
        $('nav ul').css({'display':'block'})
        $('nav ul li').css({'transform':'rotate(-35deg)'})
        // $('.boxx').css({'width':'60%','left':'18%','top':'-50%','transform':'rotate(35deg)','height':'190%'})
        $('section').removeClass('on')
        $('section').removeClass('off')
        $('.char').addClass('on')
        $('.series').addClass('off')
        
    })

    $('header nav ul li:nth-child(4)').click(function(){
        $('h1').css({'left':'33%'}).css({'top':'5%'}).css({'transform':'rotate(0deg)'})
        $('nav').css({'transform':'rotate(0)','width':'1000px','right':'22%','top':'90%'})
        $('nav ul').css({'display':'flex'})
        $('nav ul li').css({'transform':'rotate(0)'})
        // $('.boxx').css({'width':'99%','height':'100%','left':0,'top':'10%'})
        // $('.boxx').css({'transform':'rotate(0deg)'})
        $('section').removeClass('on')
        $('section').removeClass('off')
        $('.gall').addClass('on')
        $('.char').addClass('off')
    });

    // 2초가 지났을 때, photo ul li의 사진이 순차적으로 위로 올라가도록 

    let i = 0

    setInterval(function(){

        i++;
        if(i==3) i=0;
        console.log(i)

        $('.photo ul li').eq(i-1).css({top:'0'}).stop().animate({top:'-100%'},800)
        $('.photo ul li').eq(i).css({top:'100%'}).stop().animate({top:'0'},800)
    },2000)
    
    // series의 1번 목록을 클릭했을때 display:none이었던 팝업창의 display를 block으로 만들어 보이게한다.

    $('.m1').click(function(){

        $('.pop1').css({'display':'block'})
    })

    // 1번 팝업의 span을 눌렀을때 display를 none으로 만들어 안보이게 만든다.

    $('.pop1 span').click(function(){

        $('.pop1').css({'display':'none'})
    })

    // series의 2번 목록을 클릭했을때 display:none이었던 팝업창의 display를 block으로 만들어 보이게한다.

    $('.m2').click(function(){

        $('.pop2').css({'display':'block'})
    })

    // 2번 팝업의 span을 눌렀을때 display를 none으로 만들어 안보이게 만든다.

    $('.pop2 span').click(function(){

        $('.pop2').css({'display':'none'})
    })
    // series의 3번 목록을 클릭했을때 display:none이었던 팝업창의 display를 block으로 만들어 보이게한다.

    $('.m3').click(function(){

        $('.pop3').css({'display':'block'})
    })

    // 3번 팝업의 span을 눌렀을때 display를 none으로 만들어 안보이게 만든다.

    $('.pop3 span').click(function(){

        $('.pop3').css({'display':'none'})
    })
    // series의 4번 목록을 클릭했을때 display:none이었던 팝업창의 display를 block으로 만들어 보이게한다.

    $('.m4').click(function(){

        $('.pop4').css({'display':'block'})
    })

    // 4번 팝업의 span을 눌렀을때 display를 none으로 만들어 안보이게 만든다.

    $('.pop4 span').click(function(){

        $('.pop4').css({'display':'none'})
    })
    // series의 5번 목록을 클릭했을때 display:none이었던 팝업창의 display를 block으로 만들어 보이게한다.

    $('.m5').click(function(){

        $('.pop5').css({'display':'block'})
    })

    // 5번 팝업의 span을 눌렀을때 display를 none으로 만들어 안보이게 만든다.

    $('.pop5 span').click(function(){

        $('.pop5').css({'display':'none'})
    })
    // series의 6번 목록을 클릭했을때 display:none이었던 팝업창의 display를 block으로 만들어 보이게한다.

    $('.m6').click(function(){

        $('.pop6').css({'display':'block'})
    })

    // 6번 팝업의 span을 눌렀을때 display를 none으로 만들어 안보이게 만든다.

    $('.pop6 span').click(function(){

        $('.pop6').css({'display':'none'})
    })
    // series의 7번 목록을 클릭했을때 display:none이었던 팝업창의 display를 block으로 만들어 보이게한다.

    $('.m7').click(function(){

        $('.pop7').css({'display':'block'})
    })

    // 7번 팝업의 span을 눌렀을때 display를 none으로 만들어 안보이게 만든다.

    $('.pop7 span').click(function(){

        $('.pop7').css({'display':'none'})
    })

    // // 마우스가 움직이는 값 확인
    // $(window).mousemove(function(e){

    //     let x = e.pageX 
    //     let y = e.pageY
    //     console.log(y)
    // });

    // let imgs = '';

    // for(var b = 1; b<181; b++){
    //     imgs+= '<img src="img/gip/re ('+b+').bmp" alt="">'
    // }
    
    // // $('.char').html(imgs);

    // // 마우스를 움직일때마다 한장씩 사진이 보여라.

    // $('.char').mousemove(function(e){

    //     let x = e.pageX
    //     let wd = $(window).width()

    //     let percent = Math.floor((x/wd)*180)

    //     $('.char>img').hide();
    //     $('.char>img').eq(percent).show()
    // })
    
})