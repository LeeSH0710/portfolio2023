$(document).ready(function(){

    $('.hero').mouseenter(function(){
        let vid =$(this).find('video').get(0);

        vid.currentTime = 2;
        vid.play();
    })
})