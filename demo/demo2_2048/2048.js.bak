var game={
	data:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
	//判断当前数组是否都不为0;
	//只要有任意一个位置==0,返回false;否则返回true;
	GAME_PLAY:1,
	GAME_OVER:0,
	state:1,
	score:0,
	isFull:function(){
		for(var row=0;row<game.data.length;row++){
			for(var col=0;col<game.data[row].length;col++){
				if(game.data[row][col]==0){
					return false;
				}
			}
		}
		return true;
	},
	//向data中的随机位置生成2或4
	randomNum:function(){
			while(!game.isFull()){
				var row=parseInt(Math.random()*4);
				var col=parseInt(Math.random()*4);
				var n=Math.random()<0.5?2:4;
				if(game.data[row][col]==0){
					game.data[row][col]=n;
					break;
				}
			}
	},
	/*将数组完整显示到div中*/
	showView:function(){
		for(var row=0;row<game.data.length;row++){
			for(var col=0;col<game.data[row].length;col++){
				var div=document.querySelector("#fc"+row+col);
				var n=game.data[row][col];
				div.innerHTML=n==0?"":n;
				div.className=n==0?"fcell":"fcell n"+n;
			}
		}
		var score=document.querySelector("#score");
		score.innerHTML=game.score;
	},
	start:function(){
		game.randomNum();
		game.randomNum();
		//将数据完整显示到div中
		game.showView();
	},

//左移
	moveLeft:function(){
	    if(game.canLeft()){
			for(var i=0;i<4;i++){
				game.moveLeftInRow(i);
			}
			animation.start();
			setTimeout(function(){
				game.randomNum();
				game.showView();
			},animation.times*animation.interval);
		}
	},
	moveLeftInRow:function(row){
		var cells=game.data[row];
		for(var i=0;i<cells.length-1;i++){
			var nextI=game.getLeftNext(row,i);
			if(nextI!=-1){
				if(cells[i]==0){
					//将同一行中不为0的数换到当前位置
					cells[i]=cells[nextI];
					animation.addTask(""+row+nextI,""+row+i);
					cells[nextI]=0;
					i--;//交换后，防止遗漏检查;
				}else{
					if(cells[i]==cells[nextI]){
						cells[i]+=cells[nextI];
						animation.addTask(""+row+nextI,""+row+i);
						game.score+=cells[i];
						cells[nextI]=0;
					}
				}
			}else{break;}
		}
	},
	//从当前位置向右找第一个不等于0的数
	getLeftNext:function(row,start){
		var cells=game.data[row];
		for(var i=start+1;i<4;i++){
			if(cells[i]!=0){
				return i;
			}
		}
		return -1;
	},

//右移
	moveRight:function(){
		if(game.canRight()){
			for(var i=0;i<4;i++){
				game.moveRightInRow(i);
			}
			animation.start();
			setTimeout(function(){
				game.randomNum();
				game.showView();
			},animation.times*animation.interval);
		}
	},
	moveRightInRow:function(row){
		var cells=game.data[row];
		for(var i=cells.length-1;i>0;i--){
			var nextI=game.getRightNext(row,i);
			if(nextI!=-1){
				if(cells[i]==0){
					//将同一行中不为0的数换到当前位置
					cells[i]=cells[nextI];
					animation.addTask(""+row+nextI,""+row+i);
					cells[nextI]=0;
					i++;//交换后，防止遗漏检查;
				}else{
					if(cells[i]==cells[nextI]){
						cells[i]+=cells[nextI];
						animation.addTask(""+row+nextI,""+row+i);
						game.score+=cells[i];
						cells[nextI]=0;
					}
				}
			}else{break;}
		}
	},
	//从当前位置向左找第一个不等于0的数
	getRightNext:function(row,start){
		var cells=game.data[row];
		for(var i=start-1;i>=0;i--){
			if(cells[i]!=0){
				return i;
			}
		}
		return -1;
	},
//上移
	moveUp:function(){
		if(game.canUp()){
			for(var col=0;col<4;col++){
				game.moveUpInCol(col);
			}
			animation.start();
			setTimeout(function(){
				game.randomNum();
				game.showView();
			},animation.times*animation.interval);
		}
	},
	moveUpInCol:function(col){
		for(var row=0;row<3;row++){
			var nextRow=game.getUpNext(col,row);
			if(nextRow!=-1){
				if(game.data[row][col]==0){
					game.data[row][col]=game.data[nextRow][col];
					animation.addTask(""+nextRow+col,""+row+col);
					game.data[nextRow][col]=0;
					row--;
				}else if(game.data[row][col]==game.data[nextRow][col]){
					game.data[row][col]+=game.data[nextRow][col];
					animation.addTask(""+nextRow+col,""+row+col);
					game.score+=game.data[row][col];
					game.data[nextRow][col]=0;
				}
			}else{break;}
		}
	},
	getUpNext:function(col,startRow){
		//从startRow下一行开始，向下遍历每一行
		for(row=startRow+1;row<4;row++){
			if(game.data[row][col]!=0){
				return row;
			}
		}
		return -1;
	},
//下移
	moveDown:function(){
		if(game.canDown()){
			for(var col=0;col<4;col++){
				game.moveDownInCol(col);
			}
			animation.start();
			setTimeout(function(){
				game.randomNum();
				game.showView();
			},animation.times*animation.interval);
		}
	},
	moveDownInCol:function(col){
		for(var row=3;row>0;row--){
			var nextRow=game.getDownNext(col,row);
			if(nextRow!=-1){
				if(game.data[row][col]==0){
					game.data[row][col]=game.data[nextRow][col];
					animation.addTask(""+nextRow+col,""+row+col);
					game.data[nextRow][col]=0;
					row++;
				}else if(game.data[row][col]==game.data[nextRow][col]){
					game.data[row][col]+=game.data[nextRow][col];
					animation.addTask(""+nextRow+col,""+row+col);
					game.score+=game.data[row][col]
					game.data[nextRow][col]=0;
				}
			}else{break;}
		}
	},
	getDownNext:function(col,startRow){
		//从startRow上一行开始，向上遍历每一行
		for(row=startRow-1;row>=0;row--){
			if(game.data[row][col]!=0){
				return row;
			}
		}
		return -1;
	},
//判断是否可以向某个方向继续移动
	canLeft:function(){
		//遍历二维数组
		//判断当前元素左侧元素是否==0或是==自己
		//不需要判断最左边一列
		for(var row=0;row<game.data.length;row++){
			for(var col=1;col<game.data[row].length;col++){
				var current=game.data[row][col];
				var left=game.data[row][col-1];
				if(current!=0){
					if(left==0||left==current){
						return true;
					}
				}
			}
		}
		return false;
	},
	canRight:function(){
		for(var row=0;row<game.data.length;row++){
			for(var col=game.data[row].length-2;col>=0;col--){
				var current=game.data[row][col];
				var right=game.data[row][col+1];
				if(current!=0){
					if(right==0||right==current){
						return true;
					}
				}
			}
		}
		return false;
	},
	canUp:function(){
		for(var row=1;row<game.data.length;row++){
			for(var col=0;col<game.data[row].length;col++){
				var current=game.data[row][col];
				var up=game.data[row-1][col];
				if(current!=0){
					if(up==0||up==current){
						return true;
					}
				}
			}
		}
		return false;
	},
	canDown:function(){
		for(var row=0;row<game.data.length-1;row++){
			for(var col=0;col<game.data[row].length;col++){
				var current=game.data[row][col];
				var down=game.data[row+1][col];
				if(current!=0){
					if(down==0||down==current){
						return true;
					}
				}
			}
		}
		return false;
	},
	gameOver:function(){
		if(curr==8192){return true;}
		if(!game.isFull()){
			return false;
		}
		for(var row=0;row<game.data.length;row++){
			for(var col=0;col<game.data[row].length;col++){
				var curr=game.data[row][col];
				if(row!=0){
					if(game.data[row-1][col]==curr){
						return false;
					}
				}
				if(row!=3){
					if(game.data[row+1][col]==curr){
						return false;
					}
				}
				if(col!=0){
					if(game.data[row][col-1]==curr){
						return false;
					}
				}
				if(col!=3){
					if(game.data[row][col+1]==curr){
						return false;
					}
				}
			}
		}
		return true;
	},
	restart:function(){
		game.data=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
		game.state=1;
		game.score=0;
		var gameOver=document.querySelector("#game_over");
		gameOver.style.display="none";
		game.start();
	}
}