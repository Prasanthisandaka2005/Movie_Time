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

search.addEventListener("click", () => inputBox.classList.add("open"));


const searchFun = () =>{
    let filter = document.getElementById('myInput').value.toUpperCase(); 
    
    let mydata = document.getElementById('data');

    let cards = mydata.getElementsByClassName('box');


    for(var i=0; i<cards.length; i++){
        let p = cards[i].getElementsByTagName('p')[0];

        if(p){

            let textvalue = p.textContent || p.innerHTML;

            if (textvalue.toUpperCase().indexOf(filter) > -1 ){
                 cards[i].style.display = "";

            }else{
                cards[i].style.display = "none" ;
            }

        }
    }
}
