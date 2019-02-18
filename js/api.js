
var $_GET = (function(){
    var url = window.document.location.href.toString();
    var u = url.split("?");
    if(typeof(u[1]) == "string"){
        u = u[1].split("&");
        var get = {};
        for(var i in u){
            var j = u[i].split("=");
            get[j[0]] = j[1];
        }
        return get;
    } else {
        return {};
    }
})();

  var apiurl = 'http://qkj.vcw.life/api.php/';
/*  var token =$_GET['token'];
  var friends_token =$_GET['friends_token'];*/
function Is_null(data) {
    if (data == null || data == undefined || data == "" || data.length == 0) {
        return false;
    }
    return true;
}

function GetApi(url,data,success,fail)
{
    data.token = $api.getStorage('user_token');

    data.friends_token = $api.getStorage('friends_token');
    var loading = $('.loading-cover')
    if (!loading.hasClass('loading')) {
      loading.addClass('loading')
    }

    console.log(JSON.stringify(data));
    console.log(apiurl + url);

    $.ajax({
      type: 'post',
      url: apiurl + url,
      dataType:"json",
      data:data ,
      success:function(data){
          console.log(JSON.stringify(data));
          loading.removeClass('loading');
          if(data.errcode ===10000){
            success(data.result)
          }else{
            Error(data.msg)
            fail&&fail()
          }
      },
      error:function(){
          fail&&fail()
          loading.removeClass('loading')
      }
  });

}
  function GetQueryString(name)
  {
      var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if(r!=null)return  unescape(r[2]); return null;
  }
function  Error(msg)
{ 
    alert(msg);
}

function GetUser(){
    GetApi('User/getResources',{},function(data){
        if(data[0].feed>0){
            $('.food').html('<img src="images/feed_1.png" alt="">')    
        }else{
            $('.food').html('<img src="images/feed_0.png" alt="">')    
        }
    })
}
// 购买狗 id  1及  2及 3及
function buydg(num)
{
    if(!num){
        Error('ncrease raise success, return chicken farm to view');
        return;
    }
    GetApi('/Farms/buydg',{num:num},function(data){
        GetUserAnimal();
    })
}
// 购买鸡 id  1及  2及 3及
function buyFeed(num)
{
    if(!num){
        Error('ncrease raise success, return chicken farm to view');
        return;
    }
    GetApi('/Farms/buyFeed',{num:num},function(data){
        GetUser();
    })
}
// 购买鸡 id  1及  2及 3及
function buyAnimal(id)
{
    if(!id){
        Error('ncrease raise success, return chicken farm to view');
        return;
    }
    GetApi('/Farms/buyAnimal',{type:id},function(data){
        GetUserAnimal();    
    })
}


function GetApp(title, url, data) {
    url = String(url);
    console.log(url);
    api.openWin({
        name: 'friend',
        url: 'widget://html/'+url,
        allowEdit: false,
        animation: {
            type: "push",                //动画类型（详见动画类型常量）
            subType: "from_right",       //动画子类型（详见动画子类型常量）
            duration: 300                //动画过渡时间，默认300毫秒
        },
        pageParam: {
            title: title,
            data: data,
            url: url,
            h: api.winHeight,
            win_name: api.winName,
            frame_name: api.frameName,
        }
    });
}

function GetToast(content) {
    api.toast({
        msg: content,
        duration: 2000,
        location: 'bottom'
    });
}
function closeWin(name) {
    api.closeWin({
        name: name
    });
}
function cloudShow(callback){
  $('.cloud-cover').addClass('active')
  setTimeout(function(){
    callback&&callback()
  },1500)
}
// function _init()
// {
//     GetUser();
//     app.GetUserAnimal();
    
// }

// _init();