$(document).ready(function(){

    let li = $(this).index()
    console.log(li)

// nav의 li를 눌렀을때 h1과 boxx와 nav의 위치가 변화한다. 

    $('h1').click(function(){
        $('h1') 
    })

    $('header nav ul li:nth-child(1)').click(function(){
        $('h1').css({'left':'-5%'}).css({'top':'50%'}).css({'transform':'rotate(55deg)'})
        $('nav').css({'transform':'rotate(-35deg)'}).css({'right':'10%'})
        $('nav ul li').css({'transform':'rotate(35deg)'})
        $('.box .boxx').css({'width':'60%'}).css({'left':'20%'}).css({'top':'-40%'}).css({'transform':'rotate(-35deg)'}).css({'height':'185%'})
    })

    $('header nav ul li:nth-child(2)').click(function(){

        $('nav').css({'transform':'rotate(0deg)'})
        $('nav').css({'right':'5%'})
        $('nav ul li').css({'transform':'rotate(0deg)'})
        $('h1').css({'transform':'rotate(90deg)'}).css({'left':'-12%'}).css({'top':'35%'})
        $('.box .boxx').css({'transform':'rotate(0)'}).css({'width':'60%'}).css({'left':'20%'}).css({'top':'-40%'}).css({'height':'185%'})
    })

    $('nav ul li:nth-child(3)').click(function(){
        $('h1').css({'left':'-5%'}).css({'top':'20%'}).css({'transform':'rotate(-55deg)'})
        $('nav').css({'transform':'rotate(35deg)'}).css({'right':'5%'}).css({'top':'50%'})
        $('nav ul li').css({'transform':'rotate(-35deg)'})
        $('.box .boxx').css({'width':'60%'}).css({'left':'20%'}).css({'top':'-40%'}).css({'transform':'rotate(35deg)'}).css({'height':'185%'})
    })

    $('header nav ul li:nth-child(4)').click(function(){
        $('h1').css({'left':'35%'}).css({'top':'-8%'}).css({'transform':'rotate(0deg)'})
        $('nav').css({'transform':'rotate(90deg)'}).css({'right':'20%'}).css({'top':'67%'})
        $('nav ul li').css({'transform':'rotate(-90deg)'})
        $('.box .boxx').css({'width':'100%'}).css({'height':'70vh'}).css({'top':'15%'})
        $('.box .boxx').css({'width':'60%'}).css({'left':'20%'}).css({'transform':'rotate(0deg)'})
    })
    
})