//构造函数：定义每个对象，每次移动的属性和方法
function Task(obj,topStep,leftStep){
	this.obj=obj;
	this.topStep=topStep;
	this.leftStep=leftStep;
	/*让当前对象，移动一步*/
	this.moveStep=function(){
		var objCSS=null;
		if(this.obj.currentStyle){
			objCSS=this.obj.currentStyle;
		}else{
			objCSS=getComputedStyle(this.obj,null);
		}
		var top=parseInt(objCSS.top);
		var left=parseInt(objCSS.left);
		this.obj.style.top=top+this.topStep+"px";
		this.obj.style.left=left+this.leftStep+"px";
	};
	this.clear=function(){
		this.obj.style.zIndex="";
		this.obj.style.top="";
		this.obj.style.left="";
	};
}
var timer=null;
var animation={
	times:10,//移动次数或步数;
	interval:10,//每200ms中移动一次(一步);
	//timer:null,//保存定时器线程号;
	tasks:[],//存放要移动的所有格子
	addTask:function(source,target){//source和target应仅传入行列下标
		var sourceCell=document.querySelector("#fc"+source);
		var targetCell=document.querySelector("#fc"+target);
		var sourceCss=null;
		if(sourceCell.currentStyle){
			sourceCss=sourceCell.currentStyle;
		}else{
			sourceCss=getComputedStyle(sourceCell,null);
		}
		var targetCss=null;
		if(targetCell.currentStyle){
			targetCss=targetCell.currentStyle;
		}else{
			targetCss=getComputedStyle(targetCell,null);
		}
		var topStep=(parseInt(targetCss.top)-parseInt(sourceCss.top))/this.times;
		var leftStep=(parseInt(targetCss.left)-parseInt(sourceCss.left))/this.times;
		sourceCell.style.zIndex="100";
		var task=new Task(sourceCell,topStep,leftStep);
		this.tasks.push(task);
	},
	start:function(){
		timer=setInterval(
			function(){
				for(var i=0;i<animation.tasks.length;i++){
					var task=animation.tasks[i];
					task.moveStep();
				}
				animation.times--;
				if(animation.times==0){
					for(var i=0;i<animation.tasks.length;i++){
					var task=animation.tasks[i];
					task.clear();
				}
					clearInterval(timer);
					timer=null;
					animation.tasks=[];
					animation.times=10;
				}
		   },animation.interval)
	},
}