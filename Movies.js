
function Button(y) {
    y = window.matchMedia('(max-width: 992px)');
    var x = document.getElementById('navitem');
    if (y.matches){
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
    var z = document.querySelector("items");
    if (z.style.display=='none'){
        z.style.display = "block";
    }else{
        z.style.display = "none";
    }

}
