
/**
 * 构造表盘上的点
 * @param {*} index  这个点在表盘上的索引位置
 * @param {*} color 
 */
function Dial(index,color){
    this.color = color || "blue";
    this.index = index;
    Control.call(this);
}

Dial.prototype = Object.create(Control.prototype);
Dial.prototype.constructor = Dial;

// 展示
Dial.prototype.show = function(){
    // console.log("dial ---show");
    // 执行父对象原型对象中的show()方法
    // 并改变当中的this为这里的this(Dial的对象)
    Control.prototype.show.call(this);
    // console.log(this);
    this.ele.style.borderRadius = "50%";
    

}
// 展示只需一次，而当窗口大小发生改变时，我们需要重新布局
// 布局
Dial.prototype.layout = function (){
    // console.log("layout");
    var size = this.index%5 == 0 ? Control.cWidth*0.01 : Control.cWidth*0.005;
    var centerx = Control.cX + Control.r*Math.cos(this.index*6*Math.PI/180);
    var centery = Control.cY + Control.r*Math.sin(this.index*6*Math.PI/180);

    this.ele.style.width =size  + "px";
    this.ele.style.height = size + "px";
    // console.log(centerx - size/2);
    this.ele.style.left = ( centerx - size/2 ) + "px";
    this.ele.style.top =  `${centery - size/2}px`

}

