var arrayPingjia = [
  {
    title: '不满意',
    content: '实物与图片描述不符'
  },
  {
    title: '基本满意',
    content: '实物与图片基本相符，但是色差太大'
  },
  {
    title: '满意',
    content: '还行还行还行还行还行还行还行还行还行还行还行还行还行还行'
  },
  {
    title: '非常满意',
    content: '物美价廉，很值当'
  },
  {
    title: '满意极了',
    content: '超值超值超值超值超值超值超值超值超值'
  }
]

// 提供一个构造函数创建星星对象
function Star (count, size) {
  // 如果第一个值为真，那么结果就是第一个值，否则结果就是第二个值
  this.count = count || 5
  this.size = size || 30
}
Star.prototype.show = function () {
  this.showBg()
  this.showStar()
}
Star.prototype.showBg = function () {
  var div = document.createElement('div')
  document.body.appendChild(div)
  this.box = div
}
// img src=""
Star.prototype.showStar = function () {
  for (var i = 0;i < this.count;i++) {
    var star = document.createElement('img')
    this.box.appendChild(star)
    // 使星星和份数垂直对齐
    star.style.verticalAlign = "middle";
    star.src = 'img/star-yellow.png'
    star.style.width = this.size + 'px'
    star.dataset.tag = i
    star.onmouseover = this.mouseOver.bind(this)
    star.onmouseout = this.mouseOut.bind(this)
    star.onclick = this.starClick.bind(this);
  }

  var span = document.createElement("span");
  this.box.appendChild(span);
  // 使星星和份数垂直对齐
  span.style.verticalAlign = "middle";
  this.level = span;

}

Star.prototype.starClick = function(event){
  console.log(this);

 var tag =  event.target.dataset.tag;
 this.level.innerHTML = (Number(tag) + 1) + "分";
//  var imgs = this.box.querySelectorAll('img')
//  for (var i = 0; i<=tag;i ++){
//    imgs[i].src = "img/star-red.png";
//  }
 // 记录用户点击的星星序号
 this.clickedIndex = tag;
  
}

Star.prototype.mouseOver = function (event) {
  // console.log("mouse --over")
  // for()
  // 获取所有的星星
  console.log('this---', this)
  // var imgs = document.querySelectorAll("img");
  var imgs = this.box.querySelectorAll('img')
  // 获取当前鼠标触发的星星的序号
  var clickedTag = Number(event.target.dataset.tag);
  // 将被触发的星星以及前面的所有的星星的图片设置red图片
  for (var i = 0;i <= clickedTag;i++) {
    imgs[i].src = 'img/star-red.png'
  }
  for (var i = clickedTag+1;i < imgs.length;i ++){
    imgs[i].src = "img/star-yellow.png";
  }
  // console.log(clickedTag,'clickedTag------');
  this.showDetail(clickedTag)
}
Star.prototype.mouseOut = function (event) {
  var imgs = this.box.querySelectorAll('img')
  var clikedTag = Number(event.target.dataset.tag)
  // for (var i = 0;i <= clikedTag;i++) {
  //   imgs[i].src = 'img/star-yellow.png'
  // }
  // 当鼠标移开时，需要知道用户点击了哪个星星
  // this.clickedIndex
  for (var i = 0;i < imgs.length;i ++){
    if (i <= this.clickedIndex){
      imgs[i].src = "img/star-red.png";
    }
    else {
      imgs[i].src = 'img/star-yellow.png'
    }
  }

  this.detail.style.display = "none";
}

Star.prototype.showDetail = function (tag) {
  console.log(this.detail);
  //判断detail是否已经存在，如果不存在则创建
  if (this.detail == undefined) {
    //   不存在，创建！
    var div = document.createElement('div')
    this.box.appendChild(div)
    this.detail = div

    var title = document.createElement('strong')
    this.detail.appendChild(title)
    title.style.color = 'red'


    var content = document.createElement('p')
    this.detail.appendChild(content)
    content.style.margin = '3px 0'
    content.style.width = (this.size * 5 + 20) + 'px'
  }
  // 以上判断是为了保证属性detail记录的这个div只会被创建一次
  
  console.log("this.detail----",this.detail);
  this.detail.style.display = "block";
  var title = this.detail.querySelector('strong')
  title.innerHTML = (Number(tag) + 1) + '分  | ' + arrayPingjia[tag].title
  var content = this.detail.querySelector('p')
  content.innerHTML = arrayPingjia[tag].title + ' ' + arrayPingjia[tag].content
 
  // 设置div的内边距 保证星星的评价内容处于被触发的星星的下发
  this.detail.style.paddingLeft = this.size*tag + "px";
}
