	
//第三个盒子
function DragBox3(boxId) {
	DragBox2.call(this,boxId)
}
DragBox3.prototype=new DragBox2()	
	
	DragBox3.prototype.move=function(x,y) {
		if(x<0){
			x=0
		}
		if(y<0){
			y=0
		}
		this.ele.css({left:x,top:y})
		this.ele.html('left:'+x+'<br>'+'top:'+y)
	}	
	
	




































//
//
//function DragBoxText(boxId) {
//	DragBoxLimit.call(this, boxId)   // 继承 DragBoxLimit 所有属性
//}
//
//DragBoxText.prototype = new DragBoxLimit(); // 继承 DragBoxLimit 所有方法
//
//
//DragBoxText.prototype.move = function(x, y) { // 【重写】 DragBoxLimit move 方法
//	if (x < 0) {
//		x = 0
//	}
//	if (y < 0) {
//		y = 0
//	}
//	// 自己对象中的方法，可以自由使用 自己的所有属性 和 方法
//	this.ele.css({
//		left: x,
//		top: y
//	})
//
//	this.ele.html("left: "+x+"px <br> top: "+y+"px")
//}
