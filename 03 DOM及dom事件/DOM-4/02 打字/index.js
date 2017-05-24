var codeNum = 0;
var char = document.getElementById('char')
showChar();

// 封装一个方法，用来生成一个随机的字母
// var charArr = ["A","B","C","D"]
// var stringChar = "ABCDEFGHIGKLMNOPQRSTUVWXYZ"
function showChar2 () {
  // 生成一个【0,25】之间的随机数
  var ran = Math.ceil(Math.random() * 25)
  codeNum = ran+65;
  char.innerHTML = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ'.charAt(ran)
}

// a-z 97-122  A-Z 65-90
// window.onkeypress = function(event){
//     console.log(event.charCode)
// }

function showChar () {
  // 获取65-90之间的随机数
  var ran = Math.ceil(Math.random() * 25 + 65)
  codeNum = ran;
  // 根据字符代码获取相应的字符
  char.innerHTML = String.fromCharCode(ran)
}

window.onkeypress = function (event) {
  var inputCode = event.charCode
  console.log('input:', event)
 
    if (inputCode == codeNum || inputCode == codeNum + 32) {
      // 输入正确
      showChar();
      char.className = "animated zoomIn";
      clearAnimate();
    }else {
      // 输入错误
      char.className = "animated shake";
      char.style.color = "yellow";
      clearAnimate();
    }
  
}

function clearAnimate(){
    setTimeout(function() {
        char.className = ""
        char.style.color = "";
    }, 500);
}
