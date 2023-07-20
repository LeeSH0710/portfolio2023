$(document).ready(function(){

// nav의 li를 눌렀을때 h1과 boxx와 nav의 위치가 변화한다. 

// h1로고를 눌렀을때 메인페이지로 돌아간다.
    $('h1').click(function(){
        $('h1').css({'left':'12%','top':'35%','transform':'rotate(55deg)'})
        $('nav').css({'transform':'rotate(-35deg)','right':'15%','top':'5%','width':'200px'})
        $('nav ul').css({'display':'block'})
        $('nav ul li').css({'transform':'rotate(35deg)'})
        $('.boxx').css({'width':'40%','left':'35%','top':'-40%','transform':'rotate(-35deg)','height':'185%'})
        $('section').removeClass('on')
        $('section').removeClass('off')
        $('.main').addClass('on')
    })

    // 영화소개를 눌렀을때 h1,nav,boxx의 위치가 변경되고 info에 on 클래스를 붙인다.
    $('header nav ul li:nth-child(1)').click(function(){
        // h1의 위치를 변경
        $('h1').css({'left':'-5%','top':'50%','transform':'rotate(55deg)'})
        // nav를 transform:rotate로 기울이고 위치를 변경
        $('nav').css({'transform':'rotate(-35deg)','right':'10%','top':'5%','width':'200px'})
        // 갤러리를 눌렀을때 display:flex로 변경되있던걸 다시 block으로 변경
        $('nav ul').css({'display':'block'})
        // nav를 기울임에따라 li를 반대로 rotate하여 글자를 안기울게하기 
        $('nav ul li').css({'transform':'rotate(35deg)'})
        // boxx의 크기를 구상에 맞게 기울이고 크기를 변경
        $('.boxx').css({'width':'60%','left':'20%','top':'-50%','transform':'rotate(-35deg)','height':'200%'})
        $('section').removeClass('on')
        $('section').removeClass('off')
        $('.info').addClass('on')
    })

    $('header nav ul li:nth-child(2)').click(function(){

        $('nav').css({'transform':'rotate(0deg)'})
        $('nav').css({'right':'5%','top':'10%','width':'200px'})
        $('nav ul').css({'display':'block'})
        $('nav ul li').css({'transform':'rotate(0deg)'})
        $('h1').css({'transform':'rotate(90deg)','left':'-12%','top':'35%'})
        $('.boxx').css({'transform':'rotate(0)','width':'60%','left':'20%','top':'-40%','height':'185%'})
        $('section').removeClass('on')
        $('section').removeClass('off')
        $('.series').addClass('on')
        // 이전화면에있던 info에 off를 줘서 왼쪽으로 이동  
        $('.info').addClass('off')
        
    })

    $('nav ul li:nth-child(3)').click(function(){
        $('h1').css({'left':'-5%','top':'20%','transform':'rotate(-55deg)'})
        $('nav').css({'transform':'rotate(35deg)','width':'200px','right':'10%','top':'55%'})
        $('nav ul').css({'display':'block'})
        $('nav ul li').css({'transform':'rotate(-35deg)'})
        $('.boxx').css({'width':'60%','left':'18%','top':'-50%','transform':'rotate(35deg)','height':'190%'})
        $('section').removeClass('on')
        $('section').removeClass('off')
        $('.char').addClass('on')
        $('.series').addClass('off')
        
    })

    $('header nav ul li:nth-child(4)').click(function(){
        $('h1').css({'left':'33%'}).css({'top':'-8%'}).css({'transform':'rotate(0deg)'})
        $('nav').css({'transform':'rotate(0)','width':'1000px','right':'22%','top':'90%'})
        $('nav ul').css({'display':'flex'})
        $('nav ul li').css({'transform':'rotate(0)'})
        $('.box').css({'width':'100%','height':'88vh','left':'4px'})
        $('.boxx').css({'width':'99%','height':'100%','left':0,'top':'20%'})
        $('.boxx').css({'transform':'rotate(0deg)'})
        $('section').removeClass('on')
        $('section').removeClass('off')
        $('.gall').addClass('on')
        $('.char').addClass('off')
    })
    
    // 마우스가 움직이는 값 확인
    $(window).mousemove(function(e){

        let x = e.pageX 
        let y = e.pageY
        console.log(y)
    });
    
})