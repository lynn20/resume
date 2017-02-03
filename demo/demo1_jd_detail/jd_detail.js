/***鼠标滑过父菜单,弹出子菜单***/
function hoverSub(li,display){
	//step1:找到li下的div
	var div=li.querySelector("div");
	div.style.display=display;
}
/***如何保持label的hover状态？
	css中:定义一个和:hover效果完全相同的样式类***/
function keepHover(div,isHover){
	var label=div.parentNode.querySelector("label");
	label.className=isHover?label.className+" hover":"rt";
	var a=label.querySelector("a");
	a.className=isHover?"hover":"";
}
/***弹出 我的京东 & 去购物车结算***/
function hoverMyJd(display){
	var div=document.querySelector("#my_jd_items");
	div.style.display=display;
}
function keepJdHover(subDiv,isHover){
	var jd=subDiv.parentNode.querySelector("#my_jd_mt");
	jd.className=isHover?"hover":"";
}

function hoverShopCar(display){
	var div=document.querySelector("#settle_up_items");
	div.style.display=display;
}
function keepShopCarHover(subDiv,isHover){
	var shopCar=subDiv.parentNode.querySelector("#settle_up_mt");
	shopCar.className=isHover?"hover":"";
}
/***弹出商品类品菜单***/
function hoverCate(display){
	var allCate=document.querySelector("#all_cate");
	allCate.style.display=display;
}
function hoverSubCate(div,display){
	var subDiv=div.querySelector(".sub_cate_box");
	subDiv.style.display=display;
}
function keepH3Hover(subDiv,isHover){
	var h3=subDiv.parentNode.querySelector("h3");
	h3.className=isHover?"hover":"";
}
/***放大图***/
/**需求3.1:左右移动小图标**/
const LIWIDTH=62;//保存每个li的宽度，即每次移动的位移
var times=0;//移动的次数
var iconlist=document.querySelector("#icon_list");
var count=iconlist.querySelectorAll("li").length;
function move(a){
	//先点击向右按钮;
	//让iconlist每次移动62;
	if(a.id=="btnLeft"){
		if(times!=0){
			times-=1;
		}
	}else{
		if(count-times>5){
			times+=1;
		}
	}
	iconlist.style.left=(-1)*LIWIDTH*times+"px";
	btnEnabled();//调用检查左右两个按钮的可用状态函数
}
/*检查左右两个按钮的可用状态*/
var btnL=document.querySelector("#btnLeft");
var btnR=document.querySelector("#btnRight");
function btnEnabled(){
	if(times==0){
		btnL.className="left_disabled";
	}else if(count-times==5){
		btnR.className="right_disabled";
	}else{
		btnL.className="left";
		btnR.className="right";
	}
}
/**鼠标滑过小图片,显示中图片**/
var imgs=iconlist.querySelectorAll("img");
var mImg=document.querySelector("#mImg")
for(var i=0;i<imgs.length;i++){
	imgs[i].onmouseover=function(){
		//小图片:product-s1.jpg;
		//中图片:product-s1-m.jpg;
		//大图片:product-s1-l.jpg;
		var src=this.src;
		var dot=src.indexOf(".");
		mImg.src=src.substring(0,dot)+"-m"+src.substring(dot);
	}
}
/**放大图**/
var mask=document.querySelector("#mask");
var largeDiv=document.querySelector("#largeDiv");
function showMask(display){
	mask.style.display=display;
	largeDiv.style.display=display;
}
function zoom(evt){
	var top=evt.offsetY-175/2;
	top=top<0?0:top>(350-175)?(350-175):top;
	var left=evt.offsetX-175/2;
	left=left<0?0:left>(350-175)?(350-175):left;
	mask.style.top=top+"px";
	mask.style.left=left+"px";
	var src=mImg.src;
	var dot=src.indexOf(".");
	src=src.substring(0,dot-1)+"l"+src.substring(dot);
	largeDiv.style.backgroundImage="url("+src+")";
	largeDiv.style.backgroundPositionX=left*(-2)+"px";
	largeDiv.style.backgroundPositionY=top*(-2)+"px";
}
/**分享到**/
function shareMore(a){
	var isBack=a.className.indexOf("back")!=-1;
	var div=a.parentNode;
	div.style.width=isBack?"155px":"200px";
	var as=div.querySelectorAll("a");
	for(var i=3;i<as.length-1;i++){
		as[i].style.display=isBack?"none":"block";
	}
	a.className=isBack?"share_more":a.className+" back";
}
/**送货地址选择**/
function storeHover(display){
	var content=document.querySelector("#store_content");
	content.style.display=display;
}
function shoreTabChange(index){
	//获取ul下三个li
	//移除所有li上的class，仅为当前li设置class
	var lis=document.querySelectorAll("#store_tabs li");
	for(var i=0;i<lis.length;i++){
		lis[i].className=i==index?"hover":"";
	}
}
/**加入购物车**/
function showMiniCart(divCart,display){
	divCart.parentNode.parentNode.querySelector("div").style.display=display;
}
/**商品详情页签切换**/
var tabs=["#product_info","#product_data","#product_package","#product_saleAfter"];
function showTab(li,index){
	//变换li上current样式类的位置
	var lis=li.parentNode.querySelectorAll("li");
	for(var i=0;i<lis.length;i++){
		lis[i].className="";
	}
	li.className="current";
	//显示指定li对应的div
	for(var i=0;i<tabs.length;i++){
		var div=document.querySelector(tabs[i]);
		div.style.display=i==index?"block":"none";
	}

}
/**弹出回复表单**/
function showReply(aReply){
	//根据当前单击的a，找到对应的reply div;
	var divComment=aReply.parentNode;
	var divRe=null;
	if(divComment.nextSibling.nodeType==3){
		divRe=divComment.nextSibling.nextSibling;//由于空格、回车不论有多少,都会折叠成一个;
	}else{
		divRe=divComment.nextSibling;
	}
	//获得reply div的display属性，反转
	var cssStyle=null;
	if(aReply.currentStyle){
		cssStyle=divRe.currentStyle;
	}else{
		cssStyle=getComputedStyle(divRe,null);
	}
	divRe.style.display=cssStyle.display=="none"?"block":"none";
}