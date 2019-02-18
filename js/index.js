

let self = this;
// document.addEventListener('touchstart', (e) => {
//   self.moveY = e.targetTouches[0].pageY;
// })
// document.addEventListener('touchmove', (e) => {
//   e.preventDefault();
//   let moveWidth = self.moveY - e.targetTouches[0].pageY;
//   if (moveWidth !== 0) {
//     document.body.scrollTop += moveWidth;
//   }
// })


// if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
//     var msViewportStyle = document.createElement('style')
//     msViewportStyle.appendChild(
//       document.createTextNode(
//         '@-ms-viewport{width:auto!important}'
//       )
//     )
//     document.querySelector('head').appendChild(msViewportStyle)
//   }

  // 触屏事件
// var myScroll = new IScroll('.slide-v',{
//   // 开启滚轮控制功能
//   mouseWheel: true,
//   scrollbars: true,
//   preventDefault: true,
// });
// console.log(myScroll);
// 点击事件
// 一级弹窗
$("#foot-2").click(function(){
  $(".menu-5").addClass('active');
  $(".mc").css('visibility','visible');
});
$(".wrapper-a .yjt,.mc").click(function(){
  $(".menu-5").removeClass('active');
  $(".mc").css('visibility','hidden');
});
$("#foot-1").click(function(){
  // 请求我的好友列表
  app.GetUserFriends()
  $(".menu-2").addClass('active');
  $(".mc").css('visibility','visible');
});
$("#foot-3").click(function(){
  $(".menu-6").addClass('active');
  $(".mc").css('visibility','visible');
});
$("#foot-4").click(function(){
  $(".menu-7").addClass('active');
  $(".mc").css('visibility','visible');
});
$(".wrapper-b img,.mc").click(function(){
  $(".menu-2").removeClass('active');
  $(".menu-6").removeClass('active');
  $(".menu-7").removeClass('active');
  $(".mc").css('visibility','hidden');
});

// 二级弹窗
$(".sss").click(function(){
  // 请求饲料商城列表
  app.GetShopFeedList()
  $(".menu-5").removeClass('active');
  setTimeout(function(){$(".menu-4").addClass('active');},400)
  $(".mc-1").css('visibility','visible');
});
$(".wrapper-a .yjt,.mc-1").click(function(){
  $(".mc-1").css('visibility','hidden');
  $(".mc").css('visibility','visible');
  $(".menu-4").removeClass('active');
  setTimeout(function(){$(".menu-5").addClass('active');},400)
});
// 点击购买小鸡事件
$(".xj-a").click(function(){
  // 请求小鸡商品列表
  app.GetShopChickList()
  $(".menu-5").removeClass('active');
  setTimeout(function(){$(".menu-1").addClass('active');},400)
  $(".mc-1").css('visibility','visible');
});
$(".wrapper-a .yjt,.mc-1").click(function(){
  $(".menu-1").removeClass('active');
  setTimeout(function(){$(".menu-5").addClass('active');},400)
  $(".mc-1").css('visibility','hidden');
  $(".mc").css('visibility','visible');
});
// 购买小狗事件
$(".xg-b").click(function(){
  // 请求小狗商品列表
  app.GetShopDogList()
  $(".menu-5").removeClass('active');
  $(".mc-1").css('visibility','visible');
  setTimeout(function(){$(".menu-3").addClass('active');},400)
});
$(".wrapper-a .yjt,.mc-1").click(function(){
  $(".menu-3").removeClass('active');
  $(".mc-1").css('visibility','hidden');
  $(".mc").css('visibility','visible');
  setTimeout(function(){$(".menu-5").addClass('active');},400)
});
$(".cha img,.mc").click(function(){
  $(".menu-5").removeClass('active');
  $(".mc").css('visibility','hidden');
});

$("#content-3").click(function(){
  // 请求公告
  app.GetAnnouncement()
  $(".offiche").show();
  $(".mc").css('visibility','visible');
})
$(".off img").click(function(){
  $(".offiche").hide();
  $(".mc").css('visibility','hidden');
})



// 商品弹窗事件Chick
$(".astq").click(function(){
  $(".popup-a").show();
});
$(".popup-a").click(function(){
  $(".popup-a").hide();
});

$(".astq1").click(function(){
  $(".popup-b").show();
});
$(".popup-b").click(function(){
  $(".popup-b").hide();
});

$(".astq2").click(function(){
  $(".popup-c").show();
});
$(".popup-c").click(function(){
  $(".popup-c").hide();
});
  
// 商品弹窗事件Dog
$(".dgbuy").click(function(){
  $(".popup-d").show();
});
$(".popup-d").click(function(){
  $(".popup-d").hide();
});

$(".dgbuy1").click(function(){
  $(".popup-e").show();
});
$(".popup-e").click(function(){
  $(".popup-e").hide();
});

$(".dgbuy2").click(function(){
  $(".popup-f").show();
});
$(".popup-f").click(function(){
  $(".popup-f").hide();
});
// 宠粮
$(".lsbuy").click(function(){
  $(".popup-g").show();
});
$(".popup-g").click(function(){
  $(".popup-g").hide();
});
// 偷蛋
$(".popup-h").click(function(){
  $(".popup-h").hide();
});


//  兼容处理
$(function(){
  var _width = $('.wrap').height(); 
  console.log(_width);
  if(_width!=='812'){
    console.log(5);
    $(".wind img").css('position','static');
    $(".mill").css('position','static');
    $(".chook-1").css('bottom','-9.2rem');
    $(".chook-2").css('bottom','-8.3rem');
    $(".chook-3").css('bottom','-8.2rem');
  }
});
$(function(){
  var _width = $('.wrap').height(); 
  console.log(_width);
  if(_width=='812'){
    $(".wind img").css({'position':'absolute','top':'1.3rem'});
    $(".mill").css({'position':'absolute','top':'1.3rem','right':'0rem'});
    $(".chook-1").css('bottom','-11rem'); 
    $(".chook-2").css('bottom','-10rem'); 
    $(".chook-3").css('bottom','-9.9rem'); 
  }
});

// 商城ipad pro兼容
// $(function(){
//   var _width = $('.wrap').height(); 
//   console.log(_width);
//   if(_width!=='1366'){
//   $(".pur").css('right','-5.2rem');
//   $(".poult-a2").css('left','2.5rem');
//   $(".poult-a3").css('left','5.1rem');
//   $(".txj-b").css('left','1.2rem');
//   $(".txj-c").css('left','1.8rem');
//   $(".txj-d").css('left','2.7rem');
//   $(".txj-a,.txj-1,.txj-2").css('left','2.2rem');
//   $(".txj-5,.txj-6").css('left','2.35rem');
//   $(".txj-3").css('left','2.33rem');
//   $(".txj-4").css('left','2rem');
//   }
//   });
//   $(function(){
//   var _width = $('.wrap').height(); 
//   console.log(_width);
//   if(_width=='1366'){
//   $(".pur").css('right','-7.2rem');
//   $(".poult-a2").css('left','3.5rem');
//   $(".poult-a3").css('left','6.8rem');
//   $(".txj-b").css('left','2.5rem');
//   $(".txj-c").css('left','3.1rem');
//   $(".txj-d").css('left','4rem');
//   $(".txj-a,.txj-1,.txj-2").css('left','3.5rem');
//   $(".txj-5,.txj-6").css('left','3.85rem');
//   $(".txj-3").css('left','3.53rem');
//   $(".txj-4").css('left','3.3rem');
//   }
//   });
$(function(){
  var _width = $('.wrap').height(); 
  console.log(_width);
  if(_width!=='1024'){
    $(".txj-c").css('top','70%'); 
    $(".txj-d").css('top','69.5%'); 
  }
});
$(function(){
  var _width = $('.wrap').height(); 
  console.log(_width);
  if(_width=='1024'){
    $(".txj-c").css('top','77%'); 
    $(".txj-d").css('top','76.5%'); 
  }
});


function Error(msg){
  $('body').append('<div class="cwtc"><img class="cwtc-1" src="img/cwtc.png" alt=""><img class="cwtc-2 Error_hiad" src="img/cwtc-a.png" alt=""><div class="error-msg">'+msg+'</div></div>');


  $('.Error_hiad').click(function(){
    $('.cwtc').remove();
  })
}
// Error('121212');