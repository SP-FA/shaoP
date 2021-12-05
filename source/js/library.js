/*
 * 获取元素样式
 *
 * 参数：
 *   1. 对象
 *   2. 属性
 */
function getStyle(obj,A) {
    if(obj.currentStyle) return obj.currentStyle[A];
    else return getComputedStyle(obj,null)[A];
}

/*
 * 缓速直线运动
 *
 * 公式：
 *   速度 = ( 终点 - 当前位置 ) / 运动系数
 *
 * 参数：
 *   1. 运动对象
 *   2. 运动属性+目标值 (json)
 *   3. 运动系数
 *   4. 回调函数
 *
 */ 
function slowMotion(obj, json, x, cbk) {
    clearInterval(obj.T);
    obj.T = setInterval(function() {
        var flag = true;
        for (var A in json){
            if (A == 'opacity') {
                var C = Math.round(parseFloat(getStyle(obj,A))*100);
                var E = json[A]*100;
            }
            else {
                var C = parseInt(getStyle(obj,A));
                var E = json[A];
            }
            var S = (E-C)/x;
            S = S>0 ? Math.ceil(S) : Math.floor(S);
            if (A == 'opacity')
                obj.style[A] = (C+S)/100;
            else
                obj.style[A] = C+S+'px';
            if (C != E)
                flag = false;
        }
        if (flag) {
            clearInterval(obj.T);
            cbk();
        }
    },30);
}

function ElementMouse(element, i) {
    element.onmouseover = function() {slowMotion(this,{"opacity":1},7);}
    element.onmouseout  = function() {slowMotion(this,{"opacity":i},7);}
}

function endElementMouse(element) {
    element.onmouseover = function() {}
    element.onmouseout  = function() {}
}

function turn(url) {
    location.href = url;
}