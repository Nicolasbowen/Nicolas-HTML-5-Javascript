function Dot(color){
    this.color = color || "black";
    Control.call(this);

   
}
Dot.prototype = Object.create(Control.prototype);
Dot.prototype.constructor = Dot;
Dot.prototype.show = function(){
    Control.prototype.show.call(this);
    this.ele.style.borderRadius = "50%";
    this.ele.style.zIndex = 10;
}
Dot.prototype.layout = function(){
    var size = Control.cWidth*0.03;

    this.ele.style.width = `${size}px`;
    this.ele.style.height = `${size}px`;
    this.ele.style.left =`${Control.cX - size/2 }px`;
    this.ele.style.top = `${Control.cY - size/2}px`;

}
