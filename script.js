
var a = document.getElementById("textdisplay");
function myclick(e) {
    a.value = a.value + e.innerHTML;
}
function myequal() {

    a.value = eval(a.value);
}
function myclear() {
    a.value = '';
}
function myTheme(no) {
    
    var body = document.getElementById("mybody"); //Add (id = mybody ) in Body Tag.
    if (no == '1')
        body.style.backgroundImage = 'url(img123.jpg)';
    else if (no == '2')
        body.style.backgroundImage = 'url(img456.jpg)';
    else if (no == '3')
        body.style.backgroundImage = 'url(img00.jpg)';
}