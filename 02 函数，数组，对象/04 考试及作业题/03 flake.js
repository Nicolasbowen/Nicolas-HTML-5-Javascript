function showSnow () {
    count ++;
  // 第一：通过js来创建一个雪花
  // 创建img标签
  var flake = document.createElement('img')
  // 将img标签添加到body当中
  document.body.appendChild(flake)
  // flake对象实际上就是一个img标签
  console.log(flake)
  // 对img进行设置形成雪花
  // 设置标签的src属性 （图片的来源）
  flake.src = 'flake.png'
  // 给设置标签行内样式 
  // flake的style属性（对象）->style对象->width属性和height属性
//   flake.style.width = '30px'
//   flake.style.height = '30px'

  // 第二步：给雪花一个随机的位置，随机的大小
  // 1.给雪花一个随机的大小[6,50]
  var size = Math.ceil(Math.random() * 44 + 6)
  flake.style.width = size + 'px'
  flake.style.height = size + 'px'
  // 2.给一个随机的位置 left：[0 文档的宽度-雪花的宽度] top:负的雪花宽度
  flake.style.position = 'absolute'
  // left top
  // 获取文档的总宽度
  var htmlWidth = document.documentElement.clientWidth
  var htmlHeight = document.documentElement.clientHeight
  var leftMax = htmlWidth - size
  var left = Math.random() * leftMax -500;
  var atop = 0 - (Math.random()*size + 100)
  // console.log(atop)
  // 设置雪花的随机位置
  flake.style.left = left + 'px'
  flake.style.top = atop + 'px'

  // 第三步：让雪花运动
  function goDown () {
    // 让雪花当前的位置值改变，并赋值给雪花的left，top值
    var x = Math.random()*3+2;
    var y = Math.random()*5 + 2;
    left += x;
    atop += y;

    flake.style.left = left + 'px'
    flake.style.top = atop + 'px'

    // 重复的利用雪花，当雪花超出屏幕底部时，
    // 就让这个雪花，放置在最顶层，执行下一次降落
    if (atop > htmlHeight) {
      atop = -50
      left = Math.random() * leftMax
    }
  }
  setInterval(goDown,50)
}

// 声明变量count，来记录创建的雪花的数量
var count = 0;
var intervalId = setInterval(showSnow,100);

if (count > 50){
    // 当雪花的数量到达50个，那么就取消定时器的定时任务
    // 销毁定时器
    // 根据intervalId 指定要销毁的定时器是哪个
    clearInterval(intervalId);
}
// for (var i = 0;i < 50;i ++){
//     showSnow();
// }