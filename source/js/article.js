window.onload = function() {
    var info = document.getElementById('info');
    var indx = document.getElementById('indx');
    var cont = document.getElementById('cont');
    var atcl = indx.getElementsByClassName('article');

    slowMotion(info,{"left":0,"opacity":0.9},7);
    slowMotion(indx,{"left":0,"opacity":0.7},7);
    slowMotion(cont,{"left":0,"opacity":0.9},6);

    setTimeout('ElementMouse(info, 0.9)', 800);
    setTimeout('ElementMouse(cont, 0.9)', 800);

    for (var i=0; i<atcl.length; i=i+1) {
        ElementMouse(atcl[i], 0.6);

        atcl[i].onclick = function() {
            endElementMouse(info);
            endElementMouse(cont);

            slowMotion(info,{"left":-100,"opacity":0},4);
            slowMotion(indx,{"left":-100,"opacity":0},4);
            slowMotion(cont,{"left":-100,"opacity":0},4);

            var num = this.getAttribute('id')[7];
            setTimeout('turn("article'+num+'.html")', 100);
        }
    }

    var back = document.getElementById('back');
    back.onclick = function() {
        endElementMouse(info);
        endElementMouse(indx);
        endElementMouse(cont);

        slowMotion(info,{"left":-100,"opacity":0},4);
        slowMotion(indx,{"left":-100,"opacity":0},4);
        slowMotion(cont,{"left":-100,"opacity":0},4);
        
        setTimeout('turn("../../index.html")', 100);
    }
}