window.onload = function() {
    var info = document.getElementById('info');
    var indx = document.getElementById('indx');
    var atcl = indx.getElementsByClassName('article');

    slowMotion(info,{"left":0,"opacity":0.9},7);
    slowMotion(indx,{"left":0,"opacity":0.7},7);

    setTimeout('ElementMouse(info, 0.9)', 800);

    for (var i=0; i<atcl.length; i=i+1) {
        ElementMouse(atcl[i], 0.6)

        atcl[i].onclick = function() {
            endElementMouse(info);
            
            slowMotion(info,{"left":-100,"opacity":0},4);
            slowMotion(indx,{"left":-100,"opacity":0},4);

            var num = this.getAttribute('id')[7];
            setTimeout('turn("./source/article/article'+num+'.html")', 100);
        }
    }

    var AbMe = document.getElementById('acountAboutMeDiv');
    AbMe.onclick = function(){
        endElementMouse(info);
        slowMotion(info,{"left":-100,"opacity":0},4);
        slowMotion(indx,{"left":-100,"opacity":0},4);

        setTimeout('turn("aboutMe.html")', 100);
    }
}