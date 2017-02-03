/**
 * Created by Administrator on 2016/12/10.
 */
$(function () {
  $('[data-toggle="popover"]').popover();

  /*skill页圆环*/
  $(".con1").radialIndicator({
    radius:75,
    displayNumber:false,
    percentage:true,
    barBgColor: '#eee',
    barColor:"#1AFA29",
    barWidth:15,
    roundCorner:true
  });
  $(".con2").radialIndicator({
    radius:75,
    displayNumber:false,
    percentage:true,
    barBgColor: '#eee',
    barColor:"#EF6527",
    barWidth:15,
    roundCorner:true
  });
  $(".con3").radialIndicator({
    radius:75,
    displayNumber:false,
    percentage:true,
    barBgColor: '#eee',
    barColor:"#00A0E9",
    barWidth:15,
    roundCorner:true
  });
  $(".con4").radialIndicator({
    radius:75,
    displayNumber:false,
    percentage:true,
    barBgColor: '#eee',
    barColor:"#F12774",
    barWidth:15,
    roundCorner:true
  });

  /*读取json文件*/
  $.ajax({
    type: "GET",
    url: "ajax/info.json",
    dataType: "json",
    success: function (data) {
      data.contact_info.forEach(function (item) {
        $(".info1").append("<li>" + item + "</li>");
        $(".info1 li").css("display", "none");
      });
      data.html5.forEach(function(item){
        $("#h-des ul").append("<li>"+item+"</li>");
      });
      data.css.forEach(function(item){
        $("#c-des ul").append("<li>"+item+"</li>");
      });
      data.javaScript.forEach(function(item){
        $("#j-des ul").append("<li>"+item+"</li>");
      });
      data.more.forEach(function(item){
        $("#m-des ul").append("<li>"+item+"</li>");
      });
      data.about_info.forEach(function(item){
        $("#a-info").append("<p>"+item+"</p>");
      });
    }
  });

  $('#fullpage').fullpage({
    verticalCentered: true,
    anchors: ["page1", "page2", "page3", "page4", "page5"],
    navigation: true,
    navigationTooltips: ["主页", "关于我", "专业技能", "我的作品", "联系我"],
    css3: true,
    scrollingSpeed: 400,
    resize: true,
    afterRender: function () {
      $("#home").css("display", "block");
      $("#home_header img").animate({top: 0}, 1000, function () {
        $("#content_info1").css("display", "block").addClass("title-scale").animate({top: "0"}, 900, function () {
          $("#content_box").animate({width: "80%"}, 700, function () {
            $("#content_box_info1").fadeIn(800, function () {
              $("#content_box_info2").fadeIn(800, function () {
                $("#content_box_info3").fadeIn(800, function () {
                  $("#content_box_info4").fadeIn(800, function () {
                    $("#home_footer").css("display", "block").animate({bottom: "40px"}, 300).addClass("up_down");
                  });
                });
              });
            });
          });
        });
      });
    },
    afterLoad: function (anchorLink, index) {
      if (index == 1) {
        $("#content_info1").addClass("title-scale");
      };
      if (index == 2) {
        $("#a-title").addClass("title-scale");
        setTimeout(function () {
          $("#a-title h3").after("<div class='title-line'><h6>· ABOUT ME ·</h6></div>");
          $(".title-line").animate({width: "130px"}, 800, function () {
            $(".title-line h6").slideDown(400,function(){
              $(".base-info").css({"visibility":"visible","-webkit-transform":"scale(1) rotate(360deg)","transform":"scale(1) rotate(360deg)","transition":"transform .5s"},300)
            });
          });
          setTimeout(function(){
            $("#a-info").animate({width:"90%",marginTop:"40",marginBottom:"0"},700,'easeOutElastic',function(){
              $("#a-info p").eq(0).animate({bottom:"0"},700,function(){
                $("#a-info p").eq(1).animate({bottom:"0"},700,function(){
                  $("#a-info p").eq(2).animate({bottom:"0"},700,function(){
                    $("#a-info p").eq(3).animate({bottom:"0"},700,function(){
                      $("#about_footer").css("display", "block").animate({bottom: "40px"}, 300).addClass("up_down");
                    });
                  });
                });
              });
            });
          },2000);
        }, 2000);
      };
      if (index == 3) {
        $("#s-title").addClass("title-scale");
        setTimeout(function () {
          $("#s-title h3").after("<div class='title-line'><h6>· SKILL ·</h6></div>");
          $(".title-line").animate({width: "130px"}, 800, function () {
            $(".title-line h6").slideDown(400,function(){
              $(".skill li").css({"visibility":"visible","-webkit-transform":"scale(1)","transform":"scale(1)","transition":"transform .5s"});
              setTimeout(function(){
               var h = $('.con1').data('radialIndicator');
                 h.animate(91);
                var c = $('.con2').data('radialIndicator');
                c.animate(90);
                var j = $('.con3').data('radialIndicator');
                j.animate(80);
                var m = $('.con4').data('radialIndicator');
                m.animate(50);
              },600);
              $(".con1").parent().hover(
                function(){
                  $(".con1").css({"transform":"scale(1.1)"});
                  $("#h-des").css({"display":"block"});
                },
                function(){
                  $(".con1").css({"transform":"scale(1)"});
                  $("#h-des").css({"display":"none"});
                }
              );
              $(".con2").parent().hover(
                function(){
                  $(".con2").css({"transform":"scale(1.1)"});
                  $("#c-des").css({"display":"block"});
                },
                function(){
                  $(".con2").css({"transform":"scale(1)"});
                  $("#c-des").css({"display":"none"});
                }
              );
              $(".con3").parent().hover(
                function(){
                  $(".con3").css({"transform":"scale(1.1)"});
                  $("#j-des").css({"display":"block"});
                },
                function(){
                  $(".con3").css({"transform":"scale(1)"});
                  $("#j-des").css({"display":"none"});
                }
              );
              $(".con4").parent().hover(
                function(){
                  $(".con4").css({"transform":"scale(1.1)"});
                  $("#m-des").css({"display":"block"});
                },
                function(){
                  $(".con4").css({"transform":"scale(1)"});
                  $("#m-des").css({"display":"none"});
                }
              );
            });
          });
          setTimeout(function(){
            $("#skill_footer").css("display", "block").animate({bottom: "40px"}, 300).addClass("up_down");
          },3000);
        }, 2000);
      };
      if (index == 4) {
        $("#d-title").addClass("title-scale");
        setTimeout(function () {
          $("#d-title h3").after("<div class='title-line'><h6>· DEMO ·</h6></div>");
          $(".title-line").animate({width: "130px"}, 800, function () {
            $(".title-line h6").slideDown(400,function(){
              var i=-1;
              $(".link").each(function(){
                var $this=$(this);
                /*$this.css({"display","inline-block"});*/
                if(!$this.hasClass("b-to-t")){
                  i++;
                  setTimeout(function(){
                    $this.addClass("b-to-t");
                  },300*i);
                  $(".tip").css({"visibility":"visible"});
                  setTimeout(function(){
                    $("#more").fadeIn(800).delay(500).fadeTo(300,0.4);
                    $("#demo_footer").css("display", "block").animate({bottom: "40px"}, 300).addClass("up_down");
                  },2000);
                };
              });
            });
          });
        }, 2000);
      };
      if (index == 5) {
        $("#c-title").addClass("title-scale");
        setTimeout(function () {
          $("#c-title h3").after("<div class='title-line'><h6>· CONTACT ME ·</h6></div>");
          $(".title-line").animate({width: "130px"},800,function () {
            $(".title-line h6").slideDown(400, function () {
              $(".info1 li:eq(0)").fadeIn(1000, function () {
                $(".info1 li:eq(1)").fadeIn(1000, function () {
                  $(".info1 li:eq(2)").fadeIn(1000, function () {
                    $(".info1 li:eq(3)").fadeIn(1000, function () {
                      $(".info1 li:eq(4)").fadeIn(1000, function () {
                        $(".info2 a:eq(0)").animate({left: "10%"}, 800, function () {
                          $("#qq").animate({right: "10%"}, 800);
                        })
                      });
                    });
                  });
                });
              });
            });
          });
        }, 2000);
      };
    },
    onLeave: function (index) {
      if (index == 1 || index == 2 || index == 3 || index == 4 || index == 5) {
        $(".title-line").remove();
        $("#content_info1").removeClass("title-scale");
        $(".title").removeClass("title-scale");
        /*var h = $('.con1').data('radialIndicator');
        var c = $('.con2').data('radialIndicator');
        var j = $('.con3').data('radialIndicator');
        var m = $('.con4').data('radialIndicator');
        h.animate(0);
        c.animate(0);
        j.animate(0);
        m.animate(0);*/
      };
      /*if(index==5){
       $(".info2 a").popover('hide');
       }*/
    }
  });
  $(".foot img").click(function () {
    $.fn.fullpage.moveSectionDown();
  });

  /*导航条文字变化*/
  $('#header-text').mousemove(function () {
    $('#p1').html("Resume");
    $('#p2').html("前端开发");
  }).mouseout(function () {
    $('#p1').html("梁 玲");
    $('#p2').html("个人简历");
  });

  /*导航条链接取消*/
  $("#navbar-collapse a:not(':first'),#more a").click(function () {
    alert("正在努力建设中...敬请期待");
    return false;
  });

  /*demo链接按钮说明文字显示*/
  $(".link .d-button").hover(function () {
      var title = $(this).attr("data-title");
      $(".tip em").text(title);
      var pos = $(this).offset().left;
      var dis = ($(".tip").outerWidth() - $(this).outerWidth()) / 2;
      var f = pos - dis - 100;
      $(".tip:animated").stop();
      $(".tip").css({"left": f + "px"}).animate({"top": 285, "opacity": 1}, 300);
    },
    function () {
      $(".tip:animated").stop();
      $(".tip").animate({"top": 250, "opacity": 0}, 300);
    });
});