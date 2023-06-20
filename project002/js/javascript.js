$(document).ready(function () {
  $(window).scroll(function () {
    let sc = $(window).scrollTop();
    console.log(sc)
    let ht = $(window).height();
  });

  // em버튼을 클릭시 nav 메뉴가 나타난다.

  $("header em:nth-child(1)").click(function () {
    $("header em:nth-child(1)").fadeOut(500).css({'z-index':'0'});
    $("header em:nth-child(2)").fadeIn(2000).css({'z-index':'2'});
    $("header nav").fadeIn().addClass("on");
  });

  $("header em:nth-child(2)").click(function () {
    $("header em:nth-child(1)").fadeIn(500).css({'z-index':'1'});
    $("header em:nth-child(2)").fadeOut(1000).css({'z-index':'0'});
    $("header nav").fadeOut().removeClass("on");
  });

//   nav li 메뉴 클릭시 각 위치로 이동 

$("header nav ul li:nth-child(1)").click(function (){
    window.scrollTo({ left: 0, top: 969, behavior: "smooth"
  }) })

  $("header nav ul li:nth-child(2)").click(function (){
    window.scrollTo({ left: 0, top: 2907, behavior: "smooth"
  }) })

  $("header nav ul li:nth-child(3)").click(function (){
    window.scrollTo({ left: 0, top: 3876, behavior: "smooth"
  }) })

  $("header nav ul li:nth-child(4)").click(function (){
    window.scrollTo({ left: 0, top: 4845, behavior: "smooth"
  }) })

  

  // 1초 지나면 hero의 사진이 나타나라
  setTimeout(function () {
    $("#wrap section:nth-child(1) article div:nth-child(2)").addClass("on");
  }, 1000);

  setTimeout(function () {
    $("#wrap section:nth-child(1) article div:nth-child(3)").addClass("on");
  }, 1000);

  // 마우스가 스크롤했을때 섹션이 자동으로 아래로 내려간다.

  $("#wrap section").mousewheel(function (event, delta) {
    if (delta > 0) {
      let prev = $(this).prev().offset().top;

      $("html,body").stop().animate({ scrollTop: prev }, 800, "easeOutBounce");
    } else if (delta < 0) {
      let next = $(this).next().offset().top;
      $("html,body").stop().animate({ scrollTop: next }, 800, "easeOutBounce");
    }
  });

  // 닌텐도 소개부분이 자동으로 왼쪽에서 오른쪽으로 넘어간다.

  let i = 0;

  setInterval(function () {
    i++;
    if (i == 3) i = 0;

    $("#wrap section:nth-child(2) article ul:nth-child(2) li")
      .eq(i - 1)
      .css({ right: 0 })
      .stop()
      .animate({ right: "-70%" }, 1000);
    $("#wrap section:nth-child(2) article ul:nth-child(2) li")
      .eq(i)
      .css({ right: "70%" })
      .stop()
      .animate({ right: 0 }, 1000);
  }, 4000);

  // 마리오 사진에 호버했을때 이미지가 자동으로 나타난다.

  $("#wrap section:nth-child(3) article .mario li:nth-child(1)").mouseover(
    function () {
      $("#wrap section:nth-child(3) article .mario li:nth-child(2)")
        .addClass("on")
        .css({ left: "20%" })
        .animate({ left: "25%" });
    }
  );

  $("#wrap section:nth-child(3) article .mario li:nth-child(1)").mouseout(
    function () {
      $(
        "#wrap section:nth-child(3) article .mario li:nth-child(2)"
      ).removeClass("on");
    }
  );

  // 루이지 사진에 호버했을때 이미지가 자동으로 나타난다.

  $("#wrap section:nth-child(3) article .luige li:nth-child(3)").mouseover(
    function () {
      $("#wrap section:nth-child(3) article .luige li:nth-child(2)")
        .addClass("on")
        .css({ right: "20%" })
        .animate({ right: "25%" });
    }
  );

  $("#wrap section:nth-child(3) article .luige li:nth-child(3)").mouseout(
    function () {
      $(
        "#wrap section:nth-child(3) article .luige li:nth-child(2)"
      ).removeClass("on");
    }
  );

  // 마리오 히스토리 박스에 마우스가 들어갔을때, 사진이 나타난다.

  
  $("#wrap section:nth-child(4) article").mouseover(
    function () {
      $("#wrap section:nth-child(4) article img")
        .addClass("on").fadeIn(800)
    }
  );


  $("#wrap section:nth-child(4) article").mouseout(
    function () {
      $("#wrap section:nth-child(4) article img")
      .removeClass("on")
    }
  );




  $(window).scrollTop(function(){

    let sec4 = $('#wrap section').eq(3).offset().top;
  console.log(sec4)
  let sc = $(window).scrollTop();
      let ht = $(window).height();


    if(sc>=sec4){
    $('#wrap section:nth-child(4) article').fadeIn().addClass('on')
  }
  })    
  

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

//   footer의 마리오가 왼쪽에서 오른쪽으로 이동한다.




});