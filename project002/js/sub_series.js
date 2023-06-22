$(document).ready(function(){

    $('nav li').click(function(){

        let i = $(this).index();
        $('article').removeClass('on')
        $('article').eq(i).addClass('on');
        

        


    })
    $('nav li').eq(0).click(function(){

        $('header').removeClass('on')

        
        })
        
        $('nav li').eq(1).click(function(){

            $('header').addClass('on')
        
        
                })
        
        $('nav li').eq(2).click(function(){
        
            $('header').addClass('on')
        
            
    })
        $('nav li').eq(3).click(function(){

            $('header').addClass('on')
        
        })


        

        // arrow p의 1번째를 클릭했을때 action의 li의 on이 다음 순번으로 넘어간다

        let a1 = 0

        // setInterval(function () {

        //     console.log(a1)
        //     a1++;
        //     if (a1 == 9) a1 = 0;

        //     $('article:nth-child(3) .action li').eq(a1).removeClass('on')
        //     $('article:nth-child(3) .action li').eq(a1 - 1).addClass('on')
        // }, 3000)

        let al = 0
            
        $('article:nth-child(3) .arrow p:nth-child(1)').click(function(){

            
            console.log(al)
            al++;
            if (al==10)al=0;

            $('article:nth-child(3) .action li').eq(al-1).removeClass('on')
            $('article:nth-child(3) .action li').eq(al).addClass('on')

        })

            
        $('article:nth-child(3) .arrow p:nth-child(2)').click(function(){

            
            al--;
            if (al==-1)al=9;

            $('article:nth-child(3) .action li').eq(al+1).removeClass('on')
            $('article:nth-child(3) .action li').eq(al).addClass('on')

        })
})