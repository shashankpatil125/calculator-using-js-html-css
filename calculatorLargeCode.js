"use strict";


var op1 = "";
var optemp = "";
var op2 = ""
var operation = "";
var no = "";
function display(a) {

    var show = document.getElementById('dis')
    if (a == '+') {
        optemp = op1;
        show.innerText = ""
        show.innerText += a
        op2 = show.innerText;
        operation = 'add'
        return;
    }

    else if (a == '-') {
        optemp = op1;
        show.innerText = ""
        show.innerText += a
        op2 = show.innerText;
        operation = 'sub'
        return;
    }

    else if (a == '*') {
        optemp = op1;
        show.innerText = ""
        show.innerText += a
        op2 = show.innerText;
        operation = 'multiply'
        return;
    }

    else if (a == '/') {
        optemp = op1;
        show.innerText = ""
        show.innerText += a
        op2 = show.innerText;
        operation = 'divide'
        return;
    }

    else if (a == 'res') {
        optemp = '';
        op1 = ''
        show.innerText = ""
        op2 = '';
        return;
    }

    else if (a == '=') {
        if (operation == 'add') {
            op2 = show.innerText.slice(1);
            show.innerText = parseInt(op2) + parseInt(optemp);
            return;
        }
        else if (operation == 'sub') {
            op2 = show.innerText.slice(1);
            show.innerText = parseInt(optemp) - parseInt(op2);
            return;
        }
        else if (operation == 'multiply') {
            op2 = show.innerText.slice(1);
            show.innerText = parseInt(optemp) * parseInt(op2);
            return;
        }
        else if (operation == 'divide') {
            op2 = show.innerText.slice(1);
            show.innerText = parseInt(optemp) / parseInt(op2);
            return;
        }
    }

    show.innerText += a;
    op1 = show.innerText;



}


