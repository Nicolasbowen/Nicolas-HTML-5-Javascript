function Minute(color){
    this.color = color || "red";
    Second.call(this,this.color);
}
Minute.prototype = Object.create(Second.prototype);
Minute.prototype.constructor = Minute;


Minute.prototype.calcShow = function(){
    var para = {};
    para.duration = 3600;
    var date = new Date();
    // 当前分钟数的秒数
    para.time = date.getMinutes()*60+date.getSeconds();
    console.log("分钟数:",(new Date()).getMinutes());
    return para;
}
// Minute.prototype.show = function(){
//     Second.prototype.show.call(this);
//     this.ele.style.animation = `zhuandong 3600s infinite linear`

//     var date = new Date();
//     console.log(date.getMinutes());
//     // delay为负值，表示提前n秒进入动画
//     this.ele.style.animationDelay = `-${60*45 + date.getMinutes()*60}s`;

// }

Minute.prototype.calcLayout = function (){
    var para = {};
    para.offset = Control.r * 0.1;
    para.w = Control.r * 0.8 + para.offset
    para.h = para.w*0.02
    return para ;
}
// Minute.prototype.layout = function(){
//     var offset = Control.r * 0.1;
//     var w = Control.r * 0.8 + offset;
//     var h = w*0.02;

//     this.ele.style.width = `${w}px`
//     this.ele.style.height = `${h}px`;
//     this.ele.style.borderRadius = `${h/2}px`;
//     this.ele.style.left = `${Control.cX - offset}px`;
//     this.ele.style.top= `${Control.cY - h/2}px`
//     this.ele.style.transformOrigin = `${offset}px center`;
// }