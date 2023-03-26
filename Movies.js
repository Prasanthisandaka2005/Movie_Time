function Button(y) {
    y = window.matchMedia('(max-width: 992px)');
    s = window.matchMedia('min-width: 993px');
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
let inputBox = document.querySelector("input");
let search = document.querySelector(".search-input");

search.addEventListener("click" ,() => inputBox.classList.add("open"));


