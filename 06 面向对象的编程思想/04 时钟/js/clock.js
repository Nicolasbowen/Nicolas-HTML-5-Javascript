function Clock(){
    //添加css代码，使用关键帧实现动画
    var style = document.createElement("style");
    document.head.appendChild(style);
    style.innerHTML = `
    @keyframes zhuandong{
            0%{
                transform: rotate(0deg);
            }
            100%{
                transform: rotate(360deg);
            }
    }`;
    // var stylesheet = style.sheet;
    // console.log(stylesheet);
    // stylesheet.insertRule("@keyframes zhuandong{0%{transform:rotate(0deg);100%{transformrotate(360deg)}}}",0)

    // 表盘
    // 中心的点
    // 分针，秒针，时针

    // (new Dial()).show();
    // var dial = new Dial();
    // 创建表盘
    var array = [];
    for (var i = 0;i < 60;i ++){
       var dial =  new Dial(i);
       array.push(dial);
    }

    // 创建表盘中心点
    var dot = new Dot();
    // 创建秒针
    var second = new Second();

    // 创建分针
    var minute = new Minute();

    var hour = new Hour();

    // 当窗口发生改变时触发
    window.onresize = function(){
        // 改变control这个对象所保存的关于窗口的值
        Control.windowResized();
        // 重新布局
        // dial.layout();
        // 重新布局表盘
        array.forEach(function(item){
            item.layout();
        })

        // 重新布局中心点
        dot.layout();

        second.layout();

        minute.layout();

        hour.layout();
        
    }

}