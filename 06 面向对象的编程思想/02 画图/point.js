/**
 * 提供一个构造函数来创建一个圆
 * @param {*} x 圆的中心点x坐标 
 * @param {*} y 圆的中心点的y坐标
 * @param {*} color 圆的颜色
 * @param {*} size 圆的尺寸 
 */
// function Point(x,y,color,size){
//     this.size = size || 30;
//     this.x = x || this.size/2;
//     this.y = y || this.size/2;
//     this.color = color || "red";
    

// }

function Point(x,y){
    this.x = x ;
    this.y = y ;

}
Point.prototype.size = 30;
Point.prototype.color = "blue";
Point.prototype.show = function(){
    var div = document.createElement("div");
    document.body.appendChild(div);
    div.style.backgroundColor = this.color;
    div.style.width = this.size +"px"
    div.style.height = this.size + "px";
    div.style.borderRadius = "50%";
    div.style.position = "absolute";
    div.style.left = (this.x - this.size/2) + "px";
    div.style.top = (this.y - this.size/2) + "px";
}
/**
 * 给点对象添加一个方法，求两点之间的距离
 */
Point.prototype.distant = function(pOther){
    // this  pOther 两个点
    var x = this.x -pOther.x;
    var y = this.y - pOther.y;
    return Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
}
/**
 * 求两个连线与水平之间的夹角度数
 */
Point.prototype.angle = function(other){
    var y = other.y - this.y;
    var x = other.x - this.x;

    // Math.atan(y/x); 
    return Math.atan(y/x)*180/Math.PI;
}
