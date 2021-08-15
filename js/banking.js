document.getElementById('deposit-button').addEventListener('click',function(){
    // get the amount to deposited
        const depositInput = document.getElementById('deposite-input');

         const newDepositeAmountText = depositInput.value;
         const newDepositeAmount = parseFloat(newDepositeAmountText);
         
        //  const dipostitAmount = parseFloat(dipostitAmountText);

        // Catche the input data
        const dipositTotal = document.getElementById('deposit-total');
        // const dipositTotal = parseFloat(dipositTotalText);

        // const newDipositAmount = dipostitAmount + dipositTotal;
        // console.log(newDipositAmount)

        const previousDepositeAmountText = dipositTotal.innerText;
        const previousDepositeAmount = parseFloat(previousDepositeAmountText);

        const newDepositAmount = previousDepositeAmount + newDepositeAmount;

        // Update Acount Balance
        const balanceTotal = document.getElementById('balance-total');

        const balanceTotalText = balanceTotal.innerText;
        const previouseBalanceTotal = parseFloat(balanceTotalText);

        const newBalanceTotal = previouseBalanceTotal + newDepositAmount;

        balanceTotal.innerText = newBalanceTotal;

        dipositTotal.innerText = newDepositAmount;
        depositInput.value = '';

    })
document.getElementById('widtdraw-button').addEventListener('click',function(){
    // catch the input data 
        const widrawInput = document.getElementById('witdraw-input');
        const widrawAmounttext = widrawInput.value;
        // console.log(widrawAmount)
        const widrawTotal = document.getElementById('widrow-total');
        // console.log(widrawTotal)
        
        // assign the new value

         const totalWidraw = widrawTotal.innerText = widrawAmount;

        //totalWidraw = '';
        console.log(totalWidraw)

    })