

   
    var a = document.getElementById("textdisplay");
    function myclick(e)
    {
    a.value = a.value + e.innerHTML;
}
function myequal(){
    
    a.value = eval(a.value);
}
function myclear() {
    a.value = '';
}
