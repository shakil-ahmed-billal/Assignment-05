// regular use function make this side....

function inputValue(id){
    const inputValue = document.getElementById(id).value;
    const newValue = parseFloat(inputValue);
    return newValue ;
}

function inputText(id){
    const inputNumber = document.getElementById(id).innerText;
    const newNumber = parseFloat(inputNumber);
    return newNumber
}

function inputEl(id){
    const element = document.getElementById(id);
    return element;
}

// feature button section.........
function featureBtn(id){
    document.getElementById('donate-page').classList.add('hidden');
    document.getElementById('history-page').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}