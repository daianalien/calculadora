let display = document.getElementById('result_display');


function calculate(number) {

    let text = display.textContent;
    if(text == '0'){
        display.innerHTML = number;
    }
    else{
        display.innerHTML = display.innerHTML+number;
    }

    
    
}

function result() {

    let text = display.textContent;
    console.log(text);

    //fazer uma função para dividir as contas slice ou splice

    /* try{
        display.innerHTML=eval(display.innerHTML)
    }
    catch(err){
        alert("Enter the valid display")
    } */
}

function clr(){
    display.innerHTML = "0";
}

function del(){
    /* display.innerHTML = display.innerHTML.slice(0, -1); */
    display.innerHTML = "0";
}