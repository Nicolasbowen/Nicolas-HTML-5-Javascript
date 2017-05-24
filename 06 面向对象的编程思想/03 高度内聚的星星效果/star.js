/**
 * Created by BaiShuang on 2016/12/15.
 */
/**
 * 星星的构造函数
 * @param name 必须 容器的名字 容器data-star属性的值
 * @param count 表示星星的个数 可选
 * @param size  表示星星尺寸 可选
 * @constructor
 */
function Star(name,count,size) {
    this.name = name;
    this.count = count || 5;
    this.size = size || 30;
    // data-star = this.name
    this.box = document.querySelector("[data-star="+this.name + "]")
    this.show();
}
Star.prototype.show = function () {
    for (var i = 0;i < this.count;i ++){
        var img = document.createElement('img');
        this.box.appendChild(img);
        img.src = 'img/star-yellow.png';
        img.style.width = this.size + 'px';
        img.style.verticalAlign = 'middle'
        img.onclick = this.starClick.bind(this);
        img.dataset.index = i + 1;
    }
    var span = document.createElement('span');
    this.box.appendChild(span);
    span.style.display = 'inline-block';
    span.style.verticalAlign = "middle";

    this.starLevel = span;

    var input = document.createElement("input");
    this.box.appendChild(input)
    //type为hidden 在页面中是隐藏的，但是他可以保存页面数据，
    // 这些数据会随着表单一起提交到服务器
    input.type = 'hidden';
    input.value = '0';
    input.name = this.name + '-level';

// <input type="hidden" value= "0" name="fuwu-leeal">
}
Star.prototype.starClick = function (event) {
    var index = event.target.dataset.index - 1;
    // var aa = document.querySelectorAll("img")
    var list = this.box.querySelectorAll('img');
    for (var i = 0;i < this.count;i ++){
        if (i <= index){
            if (!list[i].src.endsWith('red.png')){
                list[i].src = 'img/star-red.png'
            }
        }
        else {
            if (!list[i].src.endsWith('yellow.png')){
                list[i].src = 'img/star-yellow.png';
            }
        }
    }

    this.starLevel.innerHTML = "&nbsp;&nbsp;" + (index + 1) + '分'
    this.box.querySelector('input').value = index+1;
}

console.log("2222222222222222222222");

// new Star("fuwu");
// new Star("wuliu");
// new Star("canpin")

//获取所有的含有data-star属性的元素
var stars = document.querySelectorAll('[data-star]')
console.log(stars);
console.log(Array.prototype.slice.call(stars));

var array = Array.prototype.slice.call(stars);
array.forEach(function (star) {
    console.log(star);
    //data-star
    var name = star.dataset.star;
    new Star(name);
})

// Array.prototype.slice.call(stars).forEach(function (star) {
//     new Star(star.dataset.star);
// })




/*********************/
// http://www.cnblogs.com/xjser/p/4962821.html
// 类数组对象
var obj = {length:2,0:"1",1:"2"};
console.log(obj);
// 等价于 数组 ["1","2"]

// 类数组--> 数组类型Array
// Array.prototype.slice 获取数组的原型对象当中的slice函数 （函数对象）
// 使用这个函数对象调用了方法call
// 使用obj执行数组的slice
// 数组的slice方法的返回值是数组
// 把obj当中数据进行复制，放入数组，作为返回值
// 通过这种方式，将一个类数组容器对象转换为数组
var result = Array.prototype.slice.call(obj);
console.log(result);

/**
 * Array.prototype.slice.call(obj)
 * 将含有长度的对象转换为数组(提取对象中的值，放入数组)
 */