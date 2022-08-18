document.getElementById('descount-field').addEventListener('keyup', function(event){
    const text = event.target.value;
    const descountButton = document.getElementById('btn-descount');
    if(text === 'submit'){
        descountButton.removeAttribute('disabled');
    }
    else{
        descountButton.setAttribute('disabled', true)
    }
})



document.getElementById('btn-descount').addEventListener('click', function(){
    const discountField = document.getElementById('descount-field');
    discountField.value = '';

    const balanceTotalElement = document.getElementById('descount-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const discountAmount = previousBalanceTotal * (30/100);
    const newBalanceTotal = previousBalanceTotal - discountAmount;
    balanceTotalElement.innerText = newBalanceTotal;

})
