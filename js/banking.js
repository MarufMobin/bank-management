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
        const witdrawAmountText = widrawInput.value;
        const witdrawAmount = parseFloat(witdrawAmountText);

        //console.log(witdrawAmount, "This is input")

        // console.log(widrawAmount)
        const witdrawTotalText = document.getElementById('withrow-total');
        const witdrawTotal = witdrawTotalText.innerText;
        const witdrawPreDefineAmount = parseFloat(witdrawTotal);

         //console.log(witdrawPreDefineAmount, "This is html amount")

        // assign the new value
        const newWitdrawAmount = witdrawPreDefineAmount + witdrawAmount;

        //console.log(newWitdrawAmount,"this is total Amount")

        witdrawTotalText.innerText = newWitdrawAmount;

        // clear withdraw input
        widrawInput.value = '';

        // update Balance

        const balanceTotal = document.getElementById('balance-total');

        const previousBalanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(previousBalanceTotalText);

        const newBalanceTotalForWithdraw = previousBalanceTotal - witdrawAmount;
        balanceTotal.innerText = newBalanceTotalForWithdraw ;
        

        

    })