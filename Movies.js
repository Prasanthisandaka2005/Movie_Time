// function button(){
//     var x =  document.querySelector('nav-items');
//     if (x.style.display == 'none'){
//         x.style.display = 'block';
//     } else{
//         x.style.display = 'none';
//     }
// }


// var y =document.querySelector('nav-items');
// var x = document.querySelector('icon').onclick = function button(){
//     if (y.style.display == 'none')
//         y.style.display = 'block';
//     else {
//         y.style.display = 'none'
//     }
//     }

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
