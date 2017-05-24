function Hour(color){
    this.color = color || "yellow";
    Second.call(this,this.color);
}
Hour.prototype = Object.create(Second.prototype);
Hour.prototype.constructor = Hour;


Hour.prototype.calcShow = function(){
    var para = {};
    para.duration = 3600*12;
    // 当前分钟数的秒数
    var date = new Date();
    para.time = date.getHours()*3600 + date.getMinutes()*60+date.getSeconds();
    console.log("小时数:",(new Date()).getHours());
    return para;
}


Hour.prototype.calcLayout = function (){
    var para = {};
    para.offset = Control.r * 0.05;
    para.w = Control.r * 0.7 + para.offset
    para.h = para.w*0.04
    return para ;
}
