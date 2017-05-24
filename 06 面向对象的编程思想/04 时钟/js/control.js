/**
 * 将所有对象的共同特征添加到control当中
 */ 
function Control(){
    // console.log("control 构造函数 开始执行show方法");
    this.show();
    this.layout();
}
Control.prototype.show = function(){
    // console.log("control---show");
    var div = document.createElement("div");
    document.body.appendChild(div);
    div.style.backgroundColor = this.color;
    div.style.position = "absolute";
    this.ele = div;
}
Control.prototype.layout = function(){

}
// 记录关于窗口的一些常量
Control.windowResized = function(){
    console.log("windowResized");
    Control.cWidth = document.documentElement.clientWidth;
    Control.cHeight = document.documentElement.clientHeight;
    Control.cX = Control.cWidth/2;
    Control.cY = Control.cHeight/2;
    Control.r = (Math.min(Control.cWidth,Control.cHeight)/2)*0.9;
}
Control.windowResized();