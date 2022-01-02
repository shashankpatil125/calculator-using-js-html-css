"use strict";



function display(a) {

    var show = document.getElementById('dis')


    if (a == '=') {
        show.innerText = eval(show.innerText);
        return;
    }

    show.innerText += a;




}


