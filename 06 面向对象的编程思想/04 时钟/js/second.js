function Second(color){
    this.color = color || "green";
    Control.call(this);
}
Second.prototype = Object.create(Control.prototype);
Second.prototype.constructor = Second;

Second.prototype.calcShow = function(){
    var para = {};
    para.duration = 60;
    para.time = (new Date()).getSeconds();
    console.log("秒数:",para.time);
    return para;
}

Second.prototype.show = function(){
     Control.prototype.show.call(this);
     var para = this.calcShow();
     this.ele.style.animation = `zhuandong ${para.duration}s infinite linear`
    
    // delay为负值，表示提前n秒进入动画
    this.ele.style.animationDelay = `-${para.duration*3/4 + para.time}s`;
}

Second.prototype.calcLayout = function (){
    var para = {};
    para.offset = Control.r * 0.15;
    para.w = Control.r * 0.9 + para.offset
    para.h = para.w*0.01
    return para ;
}

Second.prototype.layout = function(){
    var para = this.calcLayout();
    var offset = para.offset;
    var w = para.w;
    var h = para.h;

    this.ele.style.width = `${w}px`
    this.ele.style.height = `${h}px`;
    this.ele.style.borderRadius = `${h/2}px`;
    this.ele.style.left = `${Control.cX - offset}px`;
    this.ele.style.top= `${Control.cY - h/2}px`
    this.ele.style.transformOrigin = `${offset}px center`;
}