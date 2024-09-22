
inputEl('donate-btn').addEventListener('click',function(){

    const balance = inputText('balance');
    const donateInput = inputValue('donate-input');
    const donateAmount = inputText('donate-amount');

    if(donateInput > 0 ){
        if(balance > donateInput){

            // balance update section....
            const newBalance = balance - donateInput ;
            inputEl('balance').innerText = newBalance ;
            inputEl('donate-amount').innerText = donateAmount + donateInput ;
            
            // History add section....
            const div =  document.createElement('div');
            div.classList.add('rounded-3xl', 'border' ,'p-10', 'shadow-2xl', 'my-5');
            div.innerHTML = `
                <h1 class="mb-5 text-2xl font-bold">${donateInput} Taka is Donate for Flood at Noakhali</h1>
                <p class="text-lg text-gray-500">Date : ${new Date()}</p>
            `;
            inputEl('history-section').appendChild(div);
        }
        else{
            alert('Your Balance Low')
        }
    }
    else{
        alert('Please valid Input')
    }
  
})

// feature button section......
inputEl('donate-button').addEventListener('click', function(){
    featureBtn('donate-page')
    inputEl('donate-button').classList.add('bg-lime-400')
    inputEl('history-button').classList.remove('bg-lime-400')
})
inputEl('history-button').addEventListener('click', function(){
    featureBtn('history-page')
    inputEl('history-button').classList.add('bg-lime-400')
    inputEl('donate-button').classList.remove('bg-lime-400')
})

