var key;
function onInput(input){
    if(input.name == 'c_number'){
        input.addEventListener("input", () => input.value = formatNumber(input.value.replaceAll(" ", "")));
        const formatNumber = (number) => number.split("").reduce((seed, next, index) => {
            if (index !== 0 && !(index % 4)) seed += " ";
            return seed + next;
        }, "");
    }
    
    if(input.name == 'c_month' || input.name == 'c_year'){
        if(input.value.length < 2 && input.value[0] != '0'){input.value = "0" + input.value; input.maxLength = "3"}
        if(input.value.length == 3 && input.value[0] == "0"){input.value = input.value.substring(1); input.value; input.maxLength = "2"}
    }

    document.querySelector(`.${input.name}`).innerHTML = input.value;
}

function send(event){
    let x = 0;
    event.preventDefault();
    
    let name = document.getElementById('name');
    name.nextElementSibling.innerHTML = "";
    if(name.value == ""){name.nextElementSibling.innerHTML = "Can't be blank"; name.style.borderColor = "hsl(0, 100%, 66%)";}
    else if(/^[a-zA-Z ]+$/.test(name.value) == false){name.nextElementSibling.innerHTML = "Wrong format, letters only"; name.style.borderColor = "hsl(0, 100%, 66%)";}
    else{x++; name.style.borderColor = "";}

    let number = document.getElementById('number');
    number.nextElementSibling.innerHTML = "";
    if(number.value == ""){number.nextElementSibling.innerHTML = "Can't be blank"; number.style.borderColor = "hsl(0, 100%, 66%)";}
    else if(/^[0-9 ]+$/.test(number.value) == false){number.nextElementSibling.innerHTML = "Wrong format, numbers only"; number.style.borderColor = "hsl(0, 100%, 66%)";}
    else if(number.value.length < 19){number.nextElementSibling.innerHTML = "Wrong format, too short"; number.style.borderColor = "hsl(0, 100%, 66%)";}
    else{x++; number.style.borderColor = "";}

    let month = document.getElementById('month');
    month.parentElement.nextElementSibling.innerHTML = "";
    if(month.value == ""){month.parentElement.nextElementSibling.innerHTML = "Can't be blank"; month.style.borderColor = "hsl(0, 100%, 66%)";}
    else if(/^[0-9 ]+$/.test(month.value) == false){month.parentElement.nextElementSibling.innerHTML = "Wrong format, numbers only"; month.style.borderColor = "hsl(0, 100%, 66%)";}
    else if(month.value.length < 2){month.parentElement.nextElementSibling.innerHTML = "Wrong format, too short"; month.style.borderColor = "hsl(0, 100%, 66%)";}
    else if(month.value > 12){month.parentElement.nextElementSibling.innerHTML = "Wrong format, value is too high"; month.style.borderColor = "hsl(0, 100%, 66%)";}
    else{x++; month.style.borderColor = "";}

    let year = document.getElementById('year');
    //year.parentElement.nextElementSibling.innerHTML = "";
    if(year.value == ""){year.parentElement.nextElementSibling.innerHTML = "Can't be blank"; year.style.borderColor = "hsl(0, 100%, 66%)";}
    else if(/^[0-9 ]+$/.test(year.value) == false){year.parentElement.nextElementSibling.innerHTML = "Wrong format, numbers only"; year.style.borderColor = "hsl(0, 100%, 66%)";}
    else if(year.value.length < 2){year.parentElement.nextElementSibling.innerHTML = "Wrong format, too short"; year.style.borderColor = "hsl(0, 100%, 66%)";}
    else{x++; year.style.borderColor = "";}

    let cvc = document.getElementById('cvc');
    cvc.nextElementSibling.innerHTML = "";
    if(cvc.value == ""){cvc.nextElementSibling.innerHTML = "Can't be blank"; cvc.style.borderColor = "hsl(0, 100%, 66%)";}
    else if(/^[0-9 ]+$/.test(cvc.value) == false){cvc.nextElementSibling.innerHTML = "Wrong format, numbers only"; cvc.style.borderColor = "hsl(0, 100%, 66%)";}
    else if(cvc.value.length < 3){cvc.nextElementSibling.innerHTML = "Wrong format, too short"; cvc.style.borderColor = "hsl(0, 100%, 66%)";}
    else{x++; cvc.style.borderColor = "";}

    if(x==5){
        document.getElementById('form').style.display = 'none';
        document.getElementById('comp').style.display = 'flex';
    }
}

function cont(){
    document.getElementById('form').submit();
}