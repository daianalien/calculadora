let display = document.getElementById('result_display');


function calculate(number) {
    display.innerHTML = display.innerHTML+number;
}

function result() {
    try{
        display.innerHTML=eval(display.innerHTML)
    }
    catch(err){
        alert("Enter the valid display")
    }
}

function clr(){
    display.innerHTML = "0";
}

function del(){
    display.innerHTML = display.innerHTML.slice(0, -1);
}