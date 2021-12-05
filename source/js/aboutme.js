window.onload = function() {
    var info = document.getElementById('info');
    var indx = document.getElementById('indx');

    slowMotion(info,{"left":0,"opacity":0.9},7);
    slowMotion(indx,{"left":0,"opacity":0.7},7);

    setTimeout('ElementMouse(info, 0.9)', 800);
    setTimeout('ElementMouse(indx, 0.7)', 800);

    var back = document.getElementById('back');
    back.onclick = function() {
        endElementMouse(info);
        endElementMouse(indx);

        slowMotion(info,{"left":-100,"opacity":0},4);
        slowMotion(indx,{"left":-100,"opacity":0},4);
        
        setTimeout('turn("index.html")', 100);
    }
}