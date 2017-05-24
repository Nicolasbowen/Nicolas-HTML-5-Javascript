// 插入css样式
var style1 = document.createElement("style");
document.head.appendChild(style1);
style1.innerHTML = "*{box-sizing: border-box;}#content td:hover{border: 2px solid grey;}"


// 提供构造函数，用来创建日历对象
function Calendar(){
    // 获取当前时间对象，给对象添加一个date属性来保存
    this.date = new Date();
    // 把当前时间对象设置为1号的时间对象
    this.date.setDate(1);
    console.log(this.date);

}

// 将日历对象所共用的属性和方法放置在原型对象当中
// 提供一个show方法用来展示日历内容
Calendar.prototype.show = function(){
    this.showBg();
    this.showHeader();
    this.showbody();
}
Calendar.prototype.showBg = function(){
    var div = document.createElement("div");
    document.body.appendChild(div);
    div.style.color = "white";
    div.style.width = "400px";
    div.style.height = "400px";
    div.style.backgroundColor = "black";
    div.style.opacity = 0.5;

    // 给对象添加一个属性bg来保存背景div
    this.bg = div;

}
Calendar.prototype.showHeader = function(){
    var header = document.createElement("header");
    // div.appendChild
    this.bg.appendChild(header);
    header.style.backgroundColor= "grey";
    header.style.height = "40px";
    header.style.position = "relative";

    var p = document.createElement("p");
    header.appendChild(p);
    p.style.margin = "0";
    p.style.lineHeight = "40px"
    p.style.height = "40px";
    p.style.paddingLeft = "20px";
    p.innerHTML = this.date.getFullYear() + "年" + (this.date.getMonth()+1) + "月"
    
    var spanUp = document.createElement("span");
    header.appendChild(spanUp);
    spanUp.style.position = "absolute";
    spanUp.style.right = "60px"
    spanUp.style.top = "10px";
    spanUp.innerHTML = "<";
    var that = this;
    spanUp.onclick = function (){
        // 使用that变量日历对象
        // 使用that 跟此方法内的this关键字作为区分
        // that 表示日历对象 
        // this表示这个方法的拥有者（span标签）
        // 日历对象.date
        // this
        var month = that.date.getMonth();
        month --;
        // 设置日历的当前日期对象为新的月份
        that.date.setMonth(month);
        // console.log("date----",that.date);
        document.body.innerHTML = "";
        that.show();

    }


    var spanDown = document.createElement("span");
    header.appendChild(spanDown);
    spanDown.style.position = "absolute";
    spanDown.style.right = "20px"
    spanDown.style.top = "10px";
    spanDown.innerHTML = ">";
    var that = this;
    spanDown.onclick = function(){
        var month = that.date.getMonth();
        month ++;
        that.date.setMonth(month);
        document.body.innerHTML = "";
        that.show();

    }

}



var arrayWeek = ["一","二","三","四","五","六","日"]
Calendar.prototype.showbody = function(){
    var tblTitle = document.createElement("table");
    this.bg.appendChild(tblTitle);
    tblTitle.style.width = "100%";
    

    // 在tTitle这个表格中插入一行
    var tr = tblTitle.insertRow();
    for(var i = 0;i < 7;i ++){
        // 在tr这行中插入一个单元格得到td
        var td = tr.insertCell();
        td.innerHTML = arrayWeek[i];
        td.style.textAlign = "center";
        td.style.height = "30px";
        
    }

    var tblContent = document.createElement("table");
    this.bg.appendChild(tblContent);
    tblContent.style.width = "100%";
    tblContent.id = "content";

    // 获取星期一的时间对象
    var firstDate = this.getFirstDate();
    for(var i = 0;i < 6;i ++){
        var tr = tblContent.insertRow();
        for(var j = 0;j < 7;j ++){
            var td = tr.insertCell();
            td.style.textAlign = "center";
            // 第一个单元格内的日期 firstDate.getDate()
            // 下一个单元格就在第一个的基础上加n个24小时
            // td.innerHTML = j+i*7;
            var showDate = firstDate.getTime() + (j+i*7)*24*60*60*1000
            var cellDate = new Date(showDate);
            td.innerHTML = cellDate.getDate();
            td.style.height = "30px";
            td.style.width = "calc(400px / 7)";

            // 将不是当月的日期颜色设置为灰色
            if (cellDate.getMonth() != this.date.getMonth()){
                // 不是本月
                td.style.color = "gray";
            }

            
            if (isNowDate(cellDate)){
                // console.log("111");
                td.style.backgroundColor = "blue";
            }


        }
    }


}

/**
 * 封装一个方法，判断是否为当前日期时间
 * @param  date 需要进行判断的时间对象
 * 返回值：如果在合格时间对象是当前时间，那么返回true，否则返回false
 */ 
function isNowDate(date){
    var now = new Date();
    if (now.getFullYear() == date.getFullYear() && now.getMonth() == date.getMonth() && now.getDate() == date.getDate()){
        return true;
    }
    else {
        return false;
    }
}

Calendar.prototype.getFirstDate = function (){
    //0-6
    var week = this.date.getDay();
    if (week == 0) week = 7;

    // this.date - (week-1)
    // 返回星期一所对应的时间对象
    // 想要得到的是时间对象，这个时间对象距离this.date相差 （week-1）天
    // this.date.getTime() - (week-1)*24*60*60*1000;
    var resultSeconds = this.date.getTime() - (week-1)*24*60*60*1000;
    return new Date(resultSeconds);
}

