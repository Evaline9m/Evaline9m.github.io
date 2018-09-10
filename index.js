var box=document.getElementsByClassName("box")
var num4 = Math.ceil(Math.random()*4)

var set = {
	
	init:function(){
		for(let i = 0;i<16;i++){
			document.getElementsByClassName(className[i])[0].innerHTML = "" 
		}
		set.creat()
		set.creat()
	},
	
	//计算应该出现数字的位置
	position:function(){
		let num1 = Math.floor(Math.random()*4);
		let num2 = Math.floor(Math.random()*4);
		let className=arr1[num1]+arr2[num2]
		if( document.getElementsByClassName(className)[0].innerHTML == "" ){
			return(className)
		}else{
			return(set.position())
		}
	},
	
	//计算应该出现的数值
	num:function(odds){
		//odds代表出现高数的几率,odds越大越容易出现高数字.范围为0-4整数
		//如果范围不是0-4强制改为2
		if(odds>4||odds<0){
			odds == 4
		}
		odds = Math.floor(odds)*2
		let num = Math.ceil(Math.random()*40+odds*18);
		
		
		if( num<=40+odds*10){
			return("2")
		}else if(num<40+odds*15){
			return("4")
		}else if(num<40+odds*17 ){
			return("8")
		}else{
			return("16")
		}
		
	},
	
	//在相应的位置出现数字
	creat:function(){
		setTimeout(function(){
			let b = set.position()
			let a = document.getElementsByClassName(b)
			a[0].innerHTML = set.num(num)
			set.inspect()
		},300)
	},
	
	//检测所有格子都有数字
	inspect:function(){
		let inspect = true;  // 为true时输了
		for(let i = 0;i<16;i++){
			if( document.getElementsByClassName(className[i])[0].innerHTML == "" ){
				inspect = false;
			}
		}
		if( inspect == true ){
			let top = set.same("top")
			let right = set.same("right")
			let bottom = set.same("bottom")
			let left = set.same("left")
			if( top.length == 0 && right.length == 0 && bottom.length == 0 && left.length == 0 ){
				alert("你输了")
			}
		}
	},
	
	// 检测是否和周围数字相同,返回相等的字符串 参数只能为"left""top""right""bottom"
	same:function(direction){
		let sameArr = [];
		for(let i=0;i<4;i++){
			for(let j=0;j<4;j++){
				if( direction == "top" && i != 0 ){
					if( document.getElementsByClassName(arr1[i]+arr2[j])[0].innerHTML != '' && document.getElementsByClassName(arr1[i-1]+arr2[j])[0].innerHTML == document.getElementsByClassName(arr1[i]+arr2[j])[0].innerHTML ){
						sameArr.push(arr1[i]+arr2[j])
					}
				}else if( direction == "right" && j != 3 ){
					if( document.getElementsByClassName(arr1[i]+arr2[j])[0].innerHTML != '' && document.getElementsByClassName(arr1[i]+arr2[j+1])[0].innerHTML == document.getElementsByClassName(arr1[i]+arr2[j])[0].innerHTML ){
						sameArr.push(arr1[i]+arr2[j])
					}
				}else if( direction == "bottom" && i != 3 ){
					if( document.getElementsByClassName(arr1[i]+arr2[j])[0].innerHTML != '' && document.getElementsByClassName(arr1[i+1]+arr2[j])[0].innerHTML == document.getElementsByClassName(arr1[i]+arr2[j])[0].innerHTML ){
						sameArr.push(arr1[i]+arr2[j])
					}
				}else if( direction == "left" && j != 0 ){
					if( document.getElementsByClassName(arr1[i]+arr2[j])[0].innerHTML != '' && document.getElementsByClassName(arr1[i]+arr2[j-1])[0].innerHTML == document.getElementsByClassName(arr1[i]+arr2[j])[0].innerHTML ){
						sameArr.push(arr1[i]+arr2[j])
					}
				}
			}
		}
		return (sameArr)
	},
	
	
	// 移动   参数只能为"left""top""right""bottom"
	move:function(direction){
		let line1 = []
		let line2 = []
		for( let i=0;i<16;i++ ){
			line1.push( document.getElementsByClassName( className[i] )[0].innerHTML )
		}
		
		
		if( direction == "top" ){
			for(let j=0;j<4;j++){
				let lineArr = []
				for(let i=0;i<4;i++){
					if( document.getElementsByClassName(arr1[i]+arr2[j])[0].innerHTML != '' ){
						lineArr.push(document.getElementsByClassName(arr1[i]+arr2[j])[0].innerHTML)
					}
					document.getElementsByClassName(arr1[i]+arr2[j])[0].innerHTML = ''
				}
				set.arrSame(lineArr)
				for( let k=0;k<lineArr.length;k++ ){
					document.getElementsByClassName(arr1[k]+arr2[j])[0].innerHTML = lineArr[k]
				}
			}
		}
		
		
		if( direction == "right" ){
			for(let i=0;i<4;i++){
				let lineArr = []
				for(let j=3;j>=0;j--){
					if( document.getElementsByClassName(arr1[i]+arr2[j])[0].innerHTML != '' ){
						lineArr.push(document.getElementsByClassName(arr1[i]+arr2[j])[0].innerHTML)
					}
					document.getElementsByClassName(arr1[i]+arr2[j])[0].innerHTML = ''
				}
				set.arrSame(lineArr)
				for( let k=0;k<lineArr.length;k++ ){
					document.getElementsByClassName(arr1[i]+arr2[3-k])[0].innerHTML = lineArr[k]
				}
			}
		}
		
		
		if( direction == "bottom" ){
			for(let j=0;j<4;j++){
				let lineArr = []
				for(let i=0;i<4;i++){
					if( document.getElementsByClassName(arr1[3-i]+arr2[j])[0].innerHTML != '' ){
						lineArr.push(document.getElementsByClassName(arr1[3-i]+arr2[j])[0].innerHTML)
					}
					document.getElementsByClassName(arr1[3-i]+arr2[j])[0].innerHTML = ''
				}
				set.arrSame(lineArr)
				for( let k=0;k<lineArr.length;k++ ){
					document.getElementsByClassName(arr1[3-k]+arr2[j])[0].innerHTML = lineArr[k]
				}
			}
		}

		
		
		if( direction == "left" ){
			// 如果是true表示还能移动
			for(let i=0;i<4;i++){
				let lineArr = []
				for(let j=0;j<4;j++){
					if( document.getElementsByClassName(arr1[i]+arr2[j])[0].innerHTML != '' ){
						lineArr.push(document.getElementsByClassName(arr1[i]+arr2[j])[0].innerHTML)
					}
					document.getElementsByClassName(arr1[i]+arr2[j])[0].innerHTML = ''
				}
				set.arrSame(lineArr)
				for( let k=0;k<lineArr.length;k++ ){
					document.getElementsByClassName(arr1[i]+arr2[k])[0].innerHTML = lineArr[k]
				}
			}
		}
		
		// 检测最高分
		for( let i=0;i<16;i++ ){
			let a = document.getElementsByClassName( className[i] )[0].innerHTML
			line2.push( a )
			if ( Number(a) > Number(topNum) ){
				topNum = a
			}
		}
		
		
		if( JSON.stringify(line1) != JSON.stringify(line2) ){
			set.creat()
			set.inspect()
			// 更新最高分
			document.getElementsByClassName( "top" )[0].innerHTML = topNum;
		}
		
		
	},
	
	// 检测数组相邻的两个数是否相等
	arrSame:function(arr){
		for( let i=0;i<arr.length-1;i++ ){
			if( arr[i] == arr[i+1] ){
				arr.splice(i,1);
				arr[i] = arr[i]*2;
			}
		}
	},
	
	//获得角度
	getAngle:function(angx, angy){
		return Math.atan2(angy, angx) * 180 / Math.PI;
	},
	
	//根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
	getDirection:function(startx, starty, endx, endy){
			var angx = endx - startx;
			var angy = endy - starty;
			var result = 0;
		
			//如果滑动距离太短
			if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
				return result;
			}
		
			var angle = set.getAngle(angx, angy);
			if (angle >= -135 && angle <= -45) {
				result = 1;
			} else if (angle > 45 && angle < 135) {
				result = 2;
			} else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
				result = 3;
			} else if (angle >= -45 && angle <= 45) {
				result = 4;
			}
		
			return result;
	}
	
	
}



    


var className = ["a1","a2","a3","a4","b1","b2","b3","b4","c1","c2","c3","c4","d1","d2","d3","d4"];
var arr1=["a","b","c","d"];
var arr2=["1","2","3","4"];
var num = 1;
var topNum = 2;
var start = document.getElementsByClassName("start")[0];
var startx, starty;

(function (){
	set.init()
	window.onkeydown = function(e){
		switch(e.keyCode){
			case 37:
				set.move("left")
			break;
			
			case 38:
				set.move("top")
			break;
			
			case 39:
				set.move("right")
			break;
			
			case 40:
				set.move("bottom")
			break;
		}
	}
	
	
	//手指接触屏幕
	document.addEventListener("touchstart", function(e) {
		startx = e.touches[0].pageX;
		starty = e.touches[0].pageY;
	}, false);
	//手指离开屏幕
	document.addEventListener("touchend", function(e) {
		var endx, endy;
		endx = e.changedTouches[0].pageX;
		endy = e.changedTouches[0].pageY;
		var direction = set.getDirection(startx, starty, endx, endy);
		switch (direction) {
			case 1:
				set.move("top")
				break;
			case 2:
				set.move("bottom")
				break;
			case 3:
				set.move("left")
				break;
			case 4:
				set.move("right")
				break;
			default:
		}
	}, false);
	
	start.onclick = function(){
		set.init()
	}
	
})()

